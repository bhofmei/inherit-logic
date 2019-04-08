import { User } from '../../../interfaces/user.interface';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { Component, OnInit, OnDestroy, HostListener, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

import { MendelpedeScenarioService } from '../mendelpede-scenarios.service';
import { MendelpedeLabroomComponent } from '../mpede-labroom/mpede-labroom.component';
import { MendelpedeFridge } from '../../../interfaces/mendelpede-fridge.interface';
import { MendelpedePede } from '../../../interfaces/mendelpede-pede.interface';
import { readErrorMessage } from '../../../shared/read-error';
import { PedeImagePipe } from '../../../pipes/pede-image.pipe';

@Component({
  selector: 'mendelpede-fridge',
  templateUrl: './mpede-fridge.template.html',
  styleUrls: ['./mpede-fridge.style.css', '../mpede-pedes.style.css']
})
export class MendelpedeFridgeComponent implements OnInit, OnDestroy{

  user: User;

  /**
   * The Mendelpede fridge object
   */
  fridge: MendelpedeFridge;

   /**
   * list of pedes in the fridge, including empty ones
   */
  pedeList: MendelpedePede[];

  /**
   * current pedes represented in 2-D array
   */
  currPedes: MendelpedePede[][];

  /**
   * current pedes represented in 1-D array
   */
  currPedes_1d: MendelpedePede[] = [];

  /**
   * maximum number of shelves in fridge
   */
  maxShelf: number;
  
  /**
   * number of slots per shelf
   */
  spots: number;

  /**
   * current shelf
   */
  shelf: number = 0;

  /**
   * potential backend error message
   */
  errorMessage: string = '';

  /**
   * is this fridge being used for a quiz?
   */
  isQuiz: boolean = false;

  /**
   * State to monitior if component active to make unsubscribing to
   * multiple streams easier
   */
  private isDestroyed$: Subject<boolean>;
  /**
   * Observes the scenCode of the URL
   */
  private paramObserver: any;

  /**
   * next spot used for storing 
   */
  private nextSpot: number;

  /**
   * scenario short code of associated scenario of the fridge
   */
  private scenShortCode: any;

  /**
   * user id
   */
  private userId: any;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _authenticationService: AuthenticationService,
    private _scenarioService: MendelpedeScenarioService,
    private _modalService: NgbModal) {
    this.maxShelf = 32;
    this.spots = 8;
    this.isDestroyed$ = new Subject<boolean>();
    }

   /**
   * Initailize the fridge when creating component
   * 1. Get logged in user and current scenario
   * 2. Fetch the corresponding fridge
   * 3a. If the fridge doesn't exist yet, create a new one
   * 3b. If the fridge does exist, initialize it
   */
  ngOnInit(){
    //console.log('ng init......');
    this.user = this._authenticationService.getUser();

    this.userId = this.user.id;
    this.paramObserver = this._route.params.subscribe((params) => {
      this.scenShortCode = params['scenShortCode'];
      this._scenarioService.getMendelFridge(this.userId, this.scenShortCode)
        .takeUntil(this.isDestroyed$)
        .subscribe(
          (fridge) => {
            this._initFridge(fridge);},
          (err) => {
            if(err.status === 307){
            this._createMendelFridge(this.userId, this.scenShortCode);
          } else {
            this.errorMessage = readErrorMessage(err);
          } }
        );
    });
  }

  /**
   * Creates a new fridge because this user doesn't have one for this scenario
   *
   * On success, inializes fridge
   *
   * @param {number} userId - logged in user's id
   * @param {string} scenId - current scenario id
   */
  _createMendelFridge(userId: number, scenShortCode: string){
    this._scenarioService.createMendelFridge(userId, scenShortCode)
    .takeUntil(this.isDestroyed$)
      .subscribe((fridge)=>{
      this._initFridge(fridge);
    }, (err)=>{
      this.errorMessage = readErrorMessage(err);
    });
  }

  /**
   * Sets pedes for visible shelf
   */
  _currPedes(){
    let start = this.shelf*this.spots;
    let end = start+this.spots;
    this.currPedes_1d = this.pedeList.slice(start,end);
    var ind: number = 0;

    this.currPedes = [];
    for (var j = 0; j < (this.spots/2) ; j++){
      this.currPedes[j] = [];
      for (var k = 0; k < 2; k++){
        this.currPedes[j][k] = this.currPedes_1d[ind];
        ind++;
      }
    }
  }

  /**
   * Intializes the fridge and component variables related to which pedes are
   * visible based on the current shelf
   *
   * @param {Fridge} newFridge - fridge object to be initalized
   */
  _initFridge(newFridge: MendelpedeFridge){
    this.fridge = newFridge;
    //console.log(this.fridge);
    this.pedeList = this._fillPedes(newFridge.pedes);
    this._currPedes();
    this._scenarioService.setFridge(newFridge);
    this._scenarioService.setScenario(newFridge.genoFacts);
    this.isQuiz = newFridge.firstTraitForQuiz !== undefined;
  }


  /**
   * 
   * @param fridgePedes - mendelpedes list as an ayyar
   * sets all pedes for the view on frontend
   */
  _fillPedes(fridgePedes: MendelpedePede[]): MendelpedePede[]{
    var out: MendelpedePede[] = [];
    for(let i = 0; i < this.maxShelf*this.spots; i++){
      out.push({bugID: i, genotype: null, phenotype: null, userId: null, isFemale: null, scenCode: null, id: null});
    }
    this.nextSpot = fridgePedes[0].bugID + 1;
    let noOriginalPedes = this.scenShortCode.toUpperCase().includes('QUIZ')?8:6
    // add original pedes
    for(let i=0; i < fridgePedes.length; i++){
      let n = fridgePedes[i].bugID;
      out[n] = fridgePedes[i];
      if( i < noOriginalPedes){
        out[n].canDelete = false
      } else {
        out[n].canDelete = true
      }
      this.nextSpot = (n >= this.nextSpot ? n+1 : this.nextSpot);
    }
    return out;
  }

  /**
   * Increase or decrease visible shelf then update the visible pedes
   *
   * Called by `(click)` of prev/next buttons
   *
   * @param {number} inc - amount to change shelf by
   */
  changeShelf(inc: number){
    this.errorMessage = '';
    if(this.shelf <= this.maxShelf-1 && inc === 1){
      this.shelf++;
      this._currPedes();
    } else if(this.shelf > 0 && inc === -1){
      this.shelf--;
      this._currPedes();
    }
  }

  /**
   * Labroom component which is connected to the fridge
   * used for two way communication with the labroom
   */
  @Input() labroom: MendelpedeLabroomComponent;

  /**
   * @param pede - pede to be sent
   * send mendelpede to the labroom component
   * called by `(click)` on the male or female pede 
   */
  @HostListener('sendPede')
  sendPede(pede: MendelpedePede){
    this.labroom.dropPede(pede)
  }

  /**
   * @param pede - pede to be deleted
   * delete mendelpede
   * called by `(click)` on the delete icon 
   */
  @HostListener('deletePede')
  deletePede(pede: MendelpedePede){
    let pedeToDelete: MendelpedePede = {
      bugID: pede.bugID,
      userId: pede.userId,
      id: pede.id,
      scenCode: pede.scenCode,
      isFemale: pede.isFemale,
      genotype: pede.genotype,
      phenotype: pede.phenotype
    }
    this._scenarioService.deletePede(this.userId, this.scenShortCode, pedeToDelete)
    .takeUntil(this.isDestroyed$)
      .subscribe((fridge)=>{
      this._initFridge(fridge);
    }, (err)=>{
      this.errorMessage = readErrorMessage(err);
    });
  }

  /**
   * Store the mendelpede in the fridge
   * @param pedeToStore - mendelpede to be stored
   * Called by `(click)` on the store button of the labroom
   */
  storePede(pedeToStore: MendelpedePede){
    let pedeToStoreL: MendelpedePede = {
      bugID: this.nextSpot,
      userId: pedeToStore.userId,
      id: pedeToStore.id,
      scenCode: pedeToStore.scenCode,
      isFemale: pedeToStore.isFemale,
      genotype: pedeToStore.genotype,
      phenotype: pedeToStore.phenotype
    }
    this._scenarioService.insertPede(pedeToStoreL, this.fridge, this.scenShortCode)
    .takeUntil(this.isDestroyed$)
      .subscribe((fridge)=>{
      this._initFridge(fridge);
    }, (err)=>{
      this.errorMessage = readErrorMessage(err);
    });
  }

  /**
   * Set visible shelf to a specific number;
   * used to jump to the beginning and end
   *
   * Called by (click) of first/last buttons
   *
   * @param {number} nShelf - shelf to go to
   */
  setShelf(nShelf: number){
    this.shelf = nShelf;
    this._currPedes();
  }
 /**
   * When destroying the component, unsubscribe from services
   * to prevent memory leak
   */
  ngOnDestroy(){
    this.paramObserver.unsubscribe();
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }

}
