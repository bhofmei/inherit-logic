import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { ScenarioService } from '../scenario.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { ScenarioGlobals } from '../scenario.globals';

import { User } from '../../interfaces/user.interface';
import { Fridge } from '../../interfaces/fridge.interface';

@Component({
    selector: 'fridge',
    templateUrl: './app/scenario/fridge/fridge.template.html',
  styleUrls: ['./app/scenario/fridge/fridge.style.css']
})
export class FridgeComponent implements OnInit, OnDestroy{

  user: User;
  fridge: Fridge;
  strains: any[]; // have strainNum, phageType
  currStrains: any[];
  shelf: number = 0;
  maxShelf: number;
  spots: number;
  errorMessage: string;
  private isDestoryed$: Subject<boolean>

  constructor(private _router: Router,
               private _route: ActivatedRoute,
               private _authenticationService: AuthenticationService,
               private _scenarioService: ScenarioService) {
    this.maxShelf = ScenarioGlobals.nFridgeShelf;
    this.spots = ScenarioGlobals.nFridgeSpots;
    this.isDestoryed$ = new Subject<boolean>();
  }

  /**
   * Initailize the fridge when creating component
   */
  ngOnInit(){
    this.user = this._authenticationService.getUser2();

    if(this.user === null || this.user === undefined){
      this._router.navigate(['authentication/signin']);
    }

    let userId = this.user.id;
    let scenId = this._route.snapshot.paramMap.get('scenId');
    this._scenarioService.getFridge(userId, scenId)
    .takeUntil(this.isDestoryed$)
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
    this.isDestoryed$.next(true);
    this.isDestoryed$.unsubscribe();
  }

  _createFridge(userId: number, scenId: string){
    this._scenarioService.createFridge(userId, scenId)
    .takeUntil(this.isDestoryed$)
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
   * @param {any[]} fridgeStrains - array for created strains in the fridge
   * @returns {any[]} - array of all slots in fridge, including empty
   */
  _fillStrains(fridgeStrains: any[]): any[]{
    var out = [];
    for(let i = 0; i < this.maxShelf*this.spots; i++){
      out.push({strainNum: i, phageType: 'empty'});
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
  return (dragData: any) => {
    let out = false;
    if(dragData && dragData.hasOwnProperty('src')){
      if(dragData.src === 'small' || dragData.src=== 'large'){
        let trySpot = this.strains[spot];
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
   * has: strainNum, mutationList, deletion
   * @param {number} spot - slot to drop new strain
   */
  dropStrain($event: any, spot: number){
    // onDropSuccess
    let strain = $event.dragData;
    // need strainNum, mutationList, deletion
    let newStrain = {
      strainNum: spot,
      mutationList: strain.shifts,
      deletion: strain.deletion
    }
    // add to fridge
    let userId = this.user.id;
    let scenCode = this.fridge.scenCode;
    this._scenarioService.addStrain(newStrain, userId, scenCode)
    .subscribe((res)=>{
      this.strains[spot] = {
        // strainNum comment phageType id
        strainNum: res.strainNum,
        comment: res.comment,
        phageType: res.phageType,
        id: res.id
      }
      this._currStrains();
    },
              (err)=>{
      this.errorMessage = err;
    })
  }

  editPhage(src: number) {
    console.log(src, this.strains[src]);
  }
}
