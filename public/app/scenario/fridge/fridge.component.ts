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

@Component({
    selector: 'fridge',
    templateUrl: './app/scenario/fridge/fridge.template.html',
  styleUrls: ['./app/scenario/fridge/fridge.style.css']
})
export class FridgeComponent implements OnInit, OnDestroy{

  private modalDialog: string = 'Hi';
  user: User;
  fridge: Fridge;
  strains: FridgePhage[];
  currStrains: FridgePhage[];
  shelf: number = 0;
  maxShelf: number;
  spots: number;
  errorMessage: string = '';
  private isDestroyed$: Subject<boolean>

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
   */
  ngOnInit(){
    this.user = this._authenticationService.getUser();

    let userId = this.user.id;
    let scenId = this._route.snapshot.paramMap.get('scenId');
    this._scenarioService.getFridge(userId, scenId)
    .takeUntil(this.isDestroyed$)
    .subscribe(
      (fridge) => {this._initFridge(fridge)},
      (err) => {
        if(err.status === 307){
        this._createFridge(userId, scenId);
      } else {
        this.errorMessage = err.message;
      } }
    );
  }

  ngOnDestroy(){
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }

  _createFridge(userId: number, scenId: string){
    this._scenarioService.createFridge(userId, scenId)
    .takeUntil(this.isDestroyed$)
      .subscribe((fridge)=>{
      this._initFridge(fridge);
    }, (err)=>{
      this.errorMessage = err.message;
    });
  }

  _initFridge(newFridge: Fridge){
    this.fridge = newFridge;
    this.strains = this._fillStrains(newFridge.strains);
    this._currStrains();
    this._scenarioService.setScenario(newFridge.scenarioDetails, newFridge.guesses);
  }

  /**
   * @param {Phage[]} fridgeStrains - array for created strains in the fridge
   * @returns {Phage[]} - array of all slots in fridge, including empty
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
   * Increase or decrease visible shelf
   * @param {number} inc - amout to change shelf by
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
   * Set visible shelf to a specific number;
   * used to jump to the beginning and end
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
   * Called by allowDrop
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
   * Called by onDropSucess of slot
   *
   * @param {any} $event - drag event, incuding data for strain to add;
   * has: shifts, deletion
   * @param {number} spot - slot to drop new strain
   */
  dropStrain($event: any, spot: number){
    // onDropSuccess
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

  _editPhage(src: number, newPhage: FridgePhage){
    this._scenarioService.updateStrain(this.user.id, this.fridge.scenCode, newPhage)
    .takeUntil(this.isDestroyed$)
    .subscribe((res)=>{
      this.strains[src] = res;
      this._currStrains();
    }, (err)=>{
      this.errorMessage = err.error.message;
    });
  }

  _deletePhage(src: number){
    let newPhage = this.strains[src];
    this._scenarioService.deleteStrain(this.user.id, this.fridge.scenCode, newPhage, )
    .takeUntil(this.isDestroyed$)
    .subscribe((res)=>{
      // successful
      this.strains[src] = {strainNum: src, phageType: 'empty', comment:'', id: ''};
      this._currStrains();
    }, (err)=>{
      this.errorMessage = err.error.message;
    });
  }
}
