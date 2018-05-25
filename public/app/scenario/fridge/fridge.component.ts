import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs/Subject';

import { ScenarioService } from '../scenario.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { ScenarioGlobals } from '../scenario.globals';
import { PhageDialogComponent } from './phage-dialog.component';

import { User } from '../../interfaces/user.interface';
import { Fridge } from '../../interfaces/fridge.interface';
import { FridgePhage, GenotypePhage } from '../../interfaces/phage.interface';
import { readErrorMessage } from '../../shared/read-error';

/**
 * One of the main components of the app - the fridge stores the phage for
 * the given user/scenario
 * Needs to get existing fridge/create new one; edit and remove existing strains;
 * add new strains; change shelf
 */
@Component({
    selector: 'fridge',
    templateUrl: './fridge.template.html',
  styleUrls: ['./fridge.style.css']
})
export class FridgeComponent implements OnInit, OnDestroy{

  /**
   * The logged in user
   */
  user: User;
  fridge: Fridge;
  /**
   * list of strains in the fridge, including empty ones
   */
  strains: FridgePhage[];
  /**
   * currently visible strains based on shelf number
   */
  currStrains: FridgePhage[];
  /**
   * current shelf
   */
  shelf: number = 0;
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

  constructor(private _router: Router,
               private _route: ActivatedRoute,
               private _authenticationService: AuthenticationService,
               private _scenarioService: ScenarioService,
              private _modalService: NgbModal) {
    this.maxShelf = ScenarioGlobals.nFridgeShelf;
    this.spots = ScenarioGlobals.nFridgeSpots;
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
    this.user = this._authenticationService.getUser();

    let userId = this.user.id;
    //let scenId = this._route.snapshot.paramMap.get('scenId');
    this.paramObserver = this._route.params.subscribe((params) => {
       let scenId = params['scenId'];
      this._scenarioService.getFridge(userId, scenId)
        .takeUntil(this.isDestroyed$)
        .subscribe(
          (fridge) => {this._initFridge(fridge)},
          (err) => {
            if(err.status === 307){
            this._createFridge(userId, scenId);
          } else {
            this.errorMessage = readErrorMessage(err);
          } }
        );
    });
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

  /**
   * Creates a new fridge because this user doesn't have one for this scenario
   * On success, inializes fridge
   *
   * @param {number} userId - logged in user's id
   * @param {string} scenId - current scenario id
   */
  _createFridge(userId: number, scenId: string){
    this._scenarioService.createFridge(userId, scenId)
    .takeUntil(this.isDestroyed$)
      .subscribe((fridge)=>{
      this._initFridge(fridge);
    }, (err)=>{
      this.errorMessage = readErrorMessage(err);
    });
  }

  /**
   * Intializes the fridge and component variables related to which strains are
   * visible based on the current shelf
   *
   * @param {Fridge} newFridge - fridge object to be initalized
   */
  _initFridge(newFridge: Fridge){
    this.fridge = newFridge;
    this.strains = this._fillStrains(newFridge.strains);
    this._currStrains();
    this._scenarioService.setScenario(newFridge.scenarioDetails, newFridge.guesses);
  }

  /**
   * Fills in the empty slots with "empty" phage objects
   *
   * @param {FridgePhage[]} fridgeStrains - array of strains actually in the fridge
   *
   * @returns {FridgePhage[]} - array of all slots in fridge, including empty
   */
  _fillStrains(fridgeStrains: FridgePhage[]): FridgePhage[]{
    var out: FridgePhage[] = [];
    for(let i = 0; i < this.maxShelf*this.spots; i++){
      out.push({strainNum: i, phageType: 'empty', comment: '', id: ''});
    }
    // add original strains
    for(let i=0; i < fridgeStrains.length; i++){
      let n = fridgeStrains[i].strainNum;
      out[n] = fridgeStrains[i];
    }
    return out;
  }

  /**
   * Sets strains for visible shelf
   */
  _currStrains(){
    let start = this.shelf*this.spots;
    let end = start+this.spots;
    this.currStrains = this.strains.slice(start,end);
  }

  /**
   * Gets CSS classes applicable to the phage based on the phage type
   *
   * @param {number} src - strain number of phage
   *
   * @returns {Object} - classes which appy to this button in the form {"class": boolean, ...}
   */
  getPhageClass(src: number): Object{
    let phage = this.strains[src];
    return {
      'col-7 col-xl-8 p-0 strain-image': true,
      'strain-image-reference': phage.phageType === 'reference',
      'strain-image-unknown': phage.phageType === 'unknown',
      'strain-image-submitted': phage.submitted
    }
  }

  /**
   * Increase or decrease visible shelf then update the visible strains
   *
   * Called by (click) of prev/next buttons
   *
   * @param {number} inc - amount to change shelf by
   */
  changeShelf(inc: number){
    this.errorMessage = '';
    if(this.shelf <= this.maxShelf-1 && inc === 1){
      this.shelf++;
      this._currStrains();
    } else if(this.shelf > 0 && inc === -1){
      this.shelf--;
      this._currStrains();
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
    this._currStrains();
  }

  /**
   * Determine if strain can be dropped in a slot
   * can be dropped if slot is empty and src is small or large
   *
   * Called by [allowDrop] of fridge slot
   *
   * @param {number} spot - spot to test to see if can drop
   *
   * @returns {any} - function which returns true or false if
   * strain can be dropped in slot
   */
  canDrop(spot: number): any {
  return (dragData: GenotypePhage) => {
    let out = false;
    if(dragData && dragData.hasOwnProperty('src')){
      if(dragData.src === 'small' || dragData.src=== 'large'){
        let trySpot: FridgePhage = this.strains[spot];
        if(trySpot.phageType === 'empty'){
          out = true;
        }
      }
    }
    return out;
  };
}

  /**
   * Adds a new strain to a fridge
   *
   * Called by (onDropSucess) of slot
   *
   * @param {any} $event - drag event, incuding data for strain to add;
   * has: shifts, deletion, parents
   * @param {number} spot - slot to drop new strain
   */
  dropStrain($event: any, spot: number){
    let strain: GenotypePhage = $event.dragData;
    // need strainNum, mutationList, deletion
    let newStrain = {
      strainNum: spot,
      mutationList: strain.shifts,
      deletion: strain.deletion,
      parents: strain.parents
    }
    // add to fridge
    let userId = this.user.id;
    let scenCode = this.fridge.scenCode;
    this._scenarioService.addStrain(userId, scenCode, newStrain)
    .subscribe((res)=>{
      this.strains[spot] = {
        // strainNum comment phageType id parents
        strainNum: res.strainNum,
        comment: res.comment,
        phageType: res.phageType,
        id: res.id,
        parents: res.parents,
        numParents: res.numParents
      }
      this._currStrains();
    },
      (err)=>{
      this.errorMessage = readErrorMessage(err);
    })
  }

  /**
   * opens a dialog box to edit/learn more about selected phage
   * This function opens the box calls helper methods based on box output
   *
   * @param {number} src - strain number to open box for
   */
  editPhage(src: number) {
    let phage = this.strains[src];
    const modelRef = this._modalService.open(PhageDialogComponent, { windowClass: 'phage-dialog'});
    modelRef.componentInstance.phage = phage;

    modelRef.result.then((result)=>{
      let resType = typeof result;
      if(resType === "string" && result === 'delete'){
        // delete the phage
        this._deletePhage(src);
      } else if (resType === "object"){
        // edit it
        this._editPhage(src, result);
      } else {
        // do nothing
        return
      }
    }, (reason)=>{
      // do nothing
      return;
    });
  }

  /**
   * Helper function which updates the phage after dialog box has closed
   * Updates the strain on success and sets error message on error
   *
   * @param {number} src - strain number to update
   * @param {FridgePhage} newPhage - updated details
   */
  _editPhage(src: number, newPhage: FridgePhage){
    this._scenarioService.updateStrain(this.user.id, this.fridge.scenCode, newPhage)
    .takeUntil(this.isDestroyed$)
    .subscribe((res)=>{
      this.strains[src] = res;
      this._currStrains();
    }, (err)=>{
      this.errorMessage = readErrorMessage(err);
    });
  }

  /**
   * Helper function which deletes the phage from the fridge after dialog box has closed
   * Sets spot to empty phage on success and sets error message on error
   *
   * @param {number} src - strain number to delete
   */
  _deletePhage(src: number){
    let newPhage = this.strains[src];
    this._scenarioService.deleteStrain(this.user.id, this.fridge.scenCode, newPhage, )
    .takeUntil(this.isDestroyed$)
    .subscribe((res)=>{
      // successful
      this.strains[src] = {strainNum: src, phageType: 'empty', comment:'', id: ''};
      this._currStrains();
    }, (err)=>{
      this.errorMessage = readErrorMessage(err);
    });
  }
}
