import { User } from '../../../interfaces/user.interface';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

import { MendelpedeScenarioService } from '../mendelpede-scenarios.service';

import { MendelpedeFridge } from '../../../interfaces/mendelpede-fridge.interface';
import { MendelpedePede } from '../../../interfaces/mendelpede-pede.interface';
import { readErrorMessage } from '../../../shared/read-error';

@Component({
  selector: 'mendelpede-fridge',
  templateUrl: './mpede-fridge.template.html',
  styleUrls: ['./mpede-fridge.style.css']
})
export class MendelpedeFridgeComponent implements OnInit, OnDestroy{

  user: User;

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
   * The fridge object
   */
  fridge: MendelpedeFridge;

   /**
   * list of strains in the fridge, including empty ones
   */
  pedeList: MendelpedePede[];

  /**
   * currently pedes strains based on shelf number
   */
  currPedes: MendelpedePede[][];

  /**
   * currently visible pedes based on shelf number 1D
   */
  currPedes_1d: MendelpedePede[];

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
   * State to monitior if component active to make unsubscribing to
   * multiple streams easier
   */
  private isDestroyed$: Subject<boolean>;
  /**
   * Observes the scenCode of the URL
   */
  private paramObserver: any;

  private nextSpot: number;
  
   /**
   * Initailize the fridge when creating component
   * 1. Get logged in user and current scenario
   * 2. Fetch the corresponding fridge
   * 3a. If the fridge doesn't exist yet, create a new one
   * 3b. If the fridge does exist, initialize it
   */
  ngOnInit(){
    console.log('ng init......');
    this.user = this._authenticationService.getUser();

    let userId = this.user.id;
    this.paramObserver = this._route.params.subscribe((params) => {
      let scenShortCode = params['scenShortCode'];
      this._scenarioService.getMendelFridge(userId, scenShortCode)
        .takeUntil(this.isDestroyed$)
        .subscribe(
          (fridge) => {this._initFridge(fridge);},
          (err) => {
            if(err.status === 307){
            console.log('creating a new fridge');
            this._createMendelFridge(userId, scenShortCode);
          } else {
            console.log('error message'+ err);
            this.errorMessage = readErrorMessage(err);
          } }
        );
    });
  }

  /**
   * Gets CSS classes 
   *
   * @returns {Object} classes wh
   */

  getMendelpede(phenotype: string[]): Object{
    console.log(phenotype)
    var mpedeCssClass: {} = {};
    
    // create css classes using traits
    var segcol: string = 'mpede-bodycol-'+phenotype[2];
    var eyecol: string = 'mpede-eyecol-'+phenotype[1]
    var imurl: string = 'mpede-pede-'+phenotype[0].toLowerCase()+'-seg'+phenotype[4]+'-leg'+phenotype[3]+'-min'
    mpedeCssClass[segcol] = true
    mpedeCssClass[eyecol] = true
    mpedeCssClass[imurl] = true
    mpedeCssClass['sizeI'] = true
    console.log(mpedeCssClass)
    return mpedeCssClass
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
        console.log('we got the new fridge: ');
        console.log(fridge);
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
   * Intializes the fridge and component variables related to which strains are
   * visible based on the current shelf
   *
   * @param {Fridge} newFridge - fridge object to be initalized
   */
  _initFridge(newFridge: MendelpedeFridge){
    this.fridge = newFridge;
    this.pedeList = this._fillPedes(newFridge.pedes);
    this._currPedes();
    this._scenarioService.setScenario(newFridge.genoFacts);
  }

  /**
   * Fills in the empty slots with "empty" phage objects
   *
   * @param {FridgePhage[]} fridgeStrains - array of strains actually in the fridge
   *
   * @returns {FridgePhage[]} array of all slots in fridge, including empty
   */
  _fillPedes(fridgePedes: MendelpedePede[]): MendelpedePede[]{
    var out: MendelpedePede[] = [];
    for(let i = 0; i < this.maxShelf*this.spots; i++){
      out.push({bugId: i, genotype: null, phenotype: null, userId: null, isFemale: null});
    }
    this.nextSpot = fridgePedes[0].bugId + 1;
    // add original pedes
    for(let i=0; i < fridgePedes.length; i++){
      let n = fridgePedes[i].bugId;
      out[n] = fridgePedes[i];
      this.nextSpot = (n === this.nextSpot ? n+1 : this.nextSpot);
    }
    return out;
  } 

  /**
   * Increase or decrease visible shelf then update the visible strains
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
