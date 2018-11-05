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
    private _scenarioService: MendelpedeScenarioService/*,
    private _modalService: NgbModal*/) {/*
    this.maxShelf = CricketGlobals.nFridgeShelf;
    this.spots = CricketGlobals.nFridgeSpots;
    this.isDestroyed$ = new Subject<boolean>();
    */
    }
  /**
   * Gets CSS classes 
   *
   * @returns {Object} classes wh
   */

  getMendelpede(): Object{
    return {
      'mpede-basic-top-right': true,
    }
  }
  getMendelpedetopleft(): Object{
    return {
      'mpede-basic-top-left': true,
    }
  }
  getMendelpedebottomleft(): Object{
    return {
      'mpede-basic-bottom-left': true,
    }
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
   * maximum number of shelves in fridge
   */
  maxShelf: number;
  /**
   * number of slots per shelf
   */
  spots: number;
  
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
          (fridge) => {/*this._initFridge(fridge)*/console.log('we got the fridge: ' + fridge)},
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
        console.log('we got the fridge: ' + fridge);
      /*this._initFridge(fridge);*/
    }, (err)=>{
      this.errorMessage = readErrorMessage(err);
    });
  }

  /**
   * Intializes the fridge and component variables related to which strains are
   * visible based on the current shelf
   *
   * @param {Fridge} newFridge - fridge object to be initalized
   
  _initFridge(newFridge: MendelpedeFridge){
    this.fridge = newFridge;
    this.pedeList = this._fillPedes(newFridge.pedes);
    this._currStrains();
    this._scenarioService.setScenario(newFridge.scenarioDetails, newFridge.guesses);
  }

  /**
   * Fills in the empty slots with "empty" phage objects
   *
   * @param {FridgePhage[]} fridgeStrains - array of strains actually in the fridge
   *
   * @returns {FridgePhage[]} array of all slots in fridge, including empty
   
  _fillPedes(fridgePedes: MendelpedePede[]): MendelpedePede[]{
    var out: MendelpedePede[] = [];
    for(let i = 0; i < this.maxShelf*this.spots; i++){
      bugID isFemale genotype phenotype id
      out.push({bugId: i, genotype: null, phenotype: null, id: ''});
    }
    this.nextSpot = fridgeStrains[0].strainNum + 1;
    // add original strains
    for(let i=0; i < fridgeStrains.length; i++){
      let n = fridgeStrains[i].strainNum;
      out[n] = fridgeStrains[i];
      this.nextSpot = (n === this.nextSpot ? n+1 : this.nextSpot);
    }
    return out;
  }
  */  
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
