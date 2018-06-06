import { Component } from '@angular/core';
import { Subject } from 'rxjs';


import { ScenarioGlobals } from '../../scenario.globals';
import { ExperimentService } from '../experiment.service';
import { ScenarioService } from '../../scenario.service';

import { ExperimentPhage, GenotypePhage, PlateInput, PlateResults, _genotype, Phage } from '../../../interfaces';

import { readErrorMessage } from '../../../shared/read-error';

/**
 * Component where phage are plated and mutated/crossed
 * Students will spend the majority of their time in this component
 *
 * Includes: 2 E. coli test tubes, 4 serial dilution tubes, 1 plate
 * Uses drag and drop mechanism to move phage/tubes around
 */
@Component({
    selector: 'lab-room',
    templateUrl: './lab-room.template.html',
  styleUrls: ['./lab-room.style.css']
})
export class LabRoomComponent {

  private isDestroyed$: Subject<boolean>;
  // bacteria tubes
  /**
   * At init, both tubs visible
   * Once a bacteria type has been selected, need to hide the other
   */
  private isHidden: Object = {'K': false, 'B': false};
  /**
   * phage strains which are in the tube
   */
  private phage: ExperimentPhage[] = [];

  // dilution tubes
  /**
   * value to dilute the number of phage at each dilution
   */
  private dilutionValue: number = ScenarioGlobals.defaultLabDilution;
  /**
   * Contents of the dilution tube
   * includes: lawnType and phage
   */
  private contents: any[];
  /**
   * Only show dilution labels as we do the serial dilution
   */
  private visibleLabel: boolean[];
  /**
   * boolean to stop users from changing the diluation factor once
   * they start diluting
   * allowing changes while diluting could lead to unexpected numbers
   * of phage and would make tube labeling difficult
   */
  private canEditDilution: boolean = true;

  // plate
  private isEmpty: boolean = true;
  /**
   * E. coli type on the plate currently
   */
  private lawnType: string = '';
  /**
   * scenario details (from the fridge) which is needed when doing cross
   */
  private scenarioDetails: string;
  /**
   * is the plate over capacity?
   */
  private isFull: boolean = false;
  /**
   * list of genotype index for phage with small plaques
   */
  private smallPlaqueList: any[];
  /**
   * list of genotype index for phage with large plaques
   */
  private largePlaqueList: any[];
  /**
   * genotypes which correspond to contents of smallPlaqueList and largePlaqueList
   */
  private genotypes: _genotype[];
  /**
   * Id and strain number of phage used to create this plate
   */
  private plateParents: Phage[];

  private errorMessage: string = '';

  /**
   * Initialize variables - dilution tube contents and visible labels
   */
  constructor(private _experimentService: ExperimentService,
    private _scenarioService: ScenarioService){
    this.isDestroyed$ = new Subject<boolean>();
    this.contents = [null, null, null, null];
    this.visibleLabel = [true, false, false, false];
  }

  /**
   * Initalize the component
   * Get the scenario details (scenario details are already set
   * by LocationComponent)
   */
  ngOnInit(){
     this._scenarioService.getScenarioDetails
    .takeUntil(this.isDestroyed$)
      .subscribe((details) => {this.scenarioDetails = details});
  }

  ngOnDestroy(){
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }

  /**
   * Reset the tube-related variables
   * bacteria tube - phage contents and which is hidden
   * dilution tube - contents, labels, and can edit dilution value
   * clear any error message
   */
  clearTubes(){
    this.phage = [];
    this.isHidden = {'K': false, 'B': false};
    this.errorMessage = '';
    this.contents = [null, null, null, null];
    this.visibleLabel = [true, false, false, false];
    this.canEditDilution = true;
  }

  /**
   * Reset the plate variables
   * plate is empty, not full
   * no small plqaues, large plaques, or genotypes
   * clear any error message
   */
  clearPlate() {
    // reset all variables
    this.isFull = false;
    this.isEmpty = true;
    this.genotypes = [];
    this.smallPlaqueList = [];
    this.largePlaqueList = [];
    this.errorMessage = '';
    this.lawnType = '';
  }

  /**
   * Reset all variables
   */
  clearAll(){
    this.clearTubes();
    this.clearPlate();
  }

  /**
   * Determine if bacteria tube can be dragged
   *
   * Called for [dragEnabled] of bact tube
   *
   * @returns {boolean} - true if tube has phage
   */
  canDragBact(): boolean{
    return this.phage.length > 0;
  }

  /**
   * Data to be dragged from the bacteria tube
   *
   * Called for [dragData] of bact tube
   *
   * @param {string} src - E. coli source, "B" or "K"
   * @returns {Object} - data with lawn type, src, and phage list
   */
  getDataBact(src: string): Object{
    return {
      lawnType: src,
      src: src,
      phage: this.phage
    }
  }

  /**
   * Determines classes for a bacteria tube
   *
   * @param {string} src - E. coli source, "B" or "K"
   *
   * @returns {Object} - applicable classes in the form
   * {'class': boolean, ...}
   */
    getClassesBact(src: string): Object {
    return {'bact-tube test-tube-outer': true,
            'invisible': (src === 'B' ? this.isHidden["B"] : this.isHidden["K"]),
            'tube-b': (src==='B'),
            'tube-k': (src==='K'),
            'n-phage-1': this.phage.length === 1,
            'n-phage-2': this.phage.length === 2
           }
    }

  /**
   * Drop phage from fridge into bacteria tube
   *
   * Called on (onDropSuccess) of bacteria tubes
   *
   * @param {any} $event - drag event with phage data
   * @param {string} src - bacteria source phage dragged to
   */
  dropPhageBact($event: any, src: string){
    var incomingPhage = $event.dragData;
    if(incomingPhage.hasOwnProperty('id') == false){
      this.errorMessage = 'Only add phage from the fridge';
    } else if(this.phage.length >= 2) {
      this.errorMessage = 'Cannot have more than 2 phage in a tube';
    } else {
      // add phage - type ExperimentPhage
      this.phage.push({
        id: incomingPhage.id,
        strainNum: incomingPhage.strainNum,
      numPhage: ScenarioGlobals.numPhage
      });
      switch(src){
        case 'B':
          this.isHidden['K'] = true;
          break;
        case 'K':
          this.isHidden['B'] = true;
          break;
      }}
  }

  /**
   * Determine if dilution tube can be dragged
   *
   * Called for [dragEnabled] of dilution tube (0-3)
   *
   * @param {number} src - dilution tube number
   *
   * @returns {boolean} - true if tube has contents
   */
  canDragDil(src: number): boolean{
    return (this.contents[src] !== null);
  }

  /**
   * Determines classes for a dilution tube
   *
   * @param {number} src - dilution tube number (0-3)
   *
   * @returns {Object} - applicable classes in the form
   * {'class': boolean, ...}
   */
  getClassesDil(src: number): Object {
    let tube = this.contents[src];
    return {'dil-tube test-tube-outer': true,
            'tube-b': (tube !== null && tube.lawnType==='B'),
            'tube-k': (tube !== null && tube.lawnType==='K')
           }
  }

  /**
   * Determines classes for a dilution tube label
   *
   * @param {number} src - dilution tube number (0-3)
   *
   * @returns {Object} - applicable classes
   */
  getClassesDilLabel(src: number): Object {
    return {
      'dil-value': true,
      'invisible': !this.visibleLabel[src]
    }
  }

  /**
   * Determines if object can be dropped in dilution tube
   *
   * Called for [allowDrop] of dilution tube
   *
   * @param {number} dest - dilution tube number (0-3)
   * @returns {function} - function which returns true/false if object can be dropped
   */
  canDropDil(dest: number): any {
  return (dragData: any) => {
    if(dragData === null || dragData === undefined)
      return false;
    if(dragData.hasOwnProperty('src') === false){
      return false
    }
    let src = dragData.src;
    if(dest === 0 && (src === 'B' || src === 'K')){
      return true;
    } else if (dest > 0 && src === dest-1){
      return true;
    }
    return false;
  };
}
  /**
   * Data to be dragged from the dilution tube
   *
   * Called for [dragData] of dilution tube
   *
   * @param {number} src - dilution tube number (0-3)
   *
   * @returns {Object} - data with dilution tube contents and src
   */
  getDataDil(src: number): Object {
    if(this.contents[src] !== null)
      this.contents[src]['src'] = src;
    return this.contents[src];
  }

  /**
   * Drop contents from bact tube/dilution tube into dilution tube
   *
   * Called on (oDropSuccess) of dilution tubes
   *
   * @param {any} $event - drag event with content/phage data
   * @param {string} dest - dest tube number (0-3)
   */
  dropContentsDil($event: any, dest: number){
    let incomingDat = JSON.parse(JSON.stringify($event.dragData));
    if(incomingDat.hasOwnProperty('lawnType') && incomingDat.hasOwnProperty('phage')){
      // dilute
      for(let i = 0; i < incomingDat.phage.length; i++){
        incomingDat.phage[i].numPhage /= this.dilutionValue;
      }
      this.contents[dest] = incomingDat;
      if(dest < 3){
        this.visibleLabel[dest+1] = true;
      }
      // disable dilution value changes
      this.canEditDilution = false
    }
  }

  /**
   * Determines classes for plate depending if empty, full, has phage
   *
   * @returns {Object} - applicable classes in the form
   * {'class': boolean, ...}
   */
  getClassesPlate(){
    return {
      'col-12 col-md-5 rounded-circle border border-dark': true,
      'bg-secondary text-light': this.isFull,
      'bg-light text-primary': (!this.isFull && !this.isEmpty),
      'text-danger': (this.lawnType === 'K'),
      'text-info': (this.lawnType === 'B')
    }
  }

  /**
   * Determines if object can be dropped on plate
   *
   * Called for [allowDrop] of plate
   *
   * @returns {function} - function which returns true/false if object can be dropped
   */
  canDropPlate():any {
    return (dragData: any) => {
      //console.log(dragData);
      let invalidSrc = ['B', 'K', 'small', 'large']
    if(dragData === null || dragData === undefined)
      return false;
    if(dragData.hasOwnProperty('src') && invalidSrc.indexOf(dragData.src) === -1){
      return true
    }
      return false;
  };
  }

  /**
   * Drop tube contents on the plate
   *
   * Called on (onDropSuccess) of plate
   *
   * @param {any} $event - drag event with contents
   */
  dropOnPlate($event: any){
    let contents = $event.dragData;
    // check we have everything we need
    if (contents.hasOwnProperty('lawnType') === false){
      this.errorMessage = 'There is no bacteria in the tube for phage to grow on.'
      return;
    }
    if (contents.hasOwnProperty('phage') === false || contents.phage.length === 0){
      this.errorMessage = 'There is no phage in the tube.'
      return;
    }
    if(contents.src === 'B' || contents.src === 'K'){
      this.errorMessage = 'Do not plate directly from bacteria tube';
      return;
    }
    // gather data
    this.lawnType = contents.lawnType;
    let phage1 = contents.phage[0];
    let phage2 = null;
    if(contents.phage.length === 2){
      phage2 = contents.phage[1];
    }
    // perform the cross
    this._performCross(this.lawnType, phage1, phage2);
  }

  /**
   * Calls the experiment service to perform the cross and saves
   * variables
   *
   * @param {string} lawnType - bacteria used, "B" or "K"
   * @param {any} phage1 - first phage in cross
   * @param {any} phage2 - second phage in cross, or null
   */
  _performCross(lawnType: string, phage1: ExperimentPhage, phage2: ExperimentPhage){
    let newPlate: PlateInput = {
      lawnType: lawnType,
      phage1: phage1,
      phage2: phage2,
      specials: {},
      location: 'lab',
      scenarioData: this.scenarioDetails,
      capacity: ScenarioGlobals.plateCapacity
    }
    this._experimentService.createPlate(newPlate)
    .takeUntil(this.isDestroyed$)
    .subscribe((res)=>{
//      console.log('genotypes:', res.genotypes);
//      console.log('small plaque:', res.smallPlaque);
//      console.log('large plaque:', res.largePlaque);
      this.isFull = res.full;
      this.smallPlaqueList = res.smallPlaque;
      this.largePlaqueList = res.largePlaque;
      this.isEmpty = false;
      this.genotypes = res.genotypes;
      this.plateParents = res.parents;
      // success
    }, (err)=>{
      // error
      this.errorMessage = readErrorMessage(err);
    });
  }

  /**
   * Determine if plaque from plate can be dragged
   *
   * Called for [dragEnabled] of plaques on plate
   *
   * @param {string} src - "small" or "large" plaque
   *
   * @returns {boolean} - true if there are still plaques of that size
   */
  canDragPlate(src: string): boolean {
    if(src === 'small')
      return this.smallPlaqueList.length > 0;
    else // big
      return this.largePlaqueList.length > 0;
  }

  /**
   * Pick a plaque from the plate to save to the fridge
   *
   * Called for [dragData] of plaque on plate
   *
   * @param {string} src - "small" or "large" plaque
   *
   * @returns {Object} - phage genotype data
   */
  getPhagePlate(src: string): GenotypePhage{
    let tmpList = (src === 'small' ? this.smallPlaqueList : this.largePlaqueList);
    if(tmpList.length === 0){
      return null;
    }
    let plaque = tmpList[0];
    let genotypeIndex = plaque;
    let phage = JSON.parse(JSON.stringify(this.genotypes[genotypeIndex]));
    phage['src'] = src;
    phage['parents'] = this.plateParents;
    return phage;
  }

  /**
   * Removes successfully dragged phage from available phage list
   *
   * Called on (onDragSuccess) of plaque on plate
   *
   * @param {any} $event - drag event with phage saved
   */
  addedToFridge($event) {
    let strain = $event.dragData;
    let src = strain.src;
    if(src === 'small'){
      this.smallPlaqueList.shift();
    } else { // large
      this.largePlaqueList.shift();
    }
  }

  /**
   * Removes a phage from the plate without adding it to the fridge
   *
   * Called on (dblclick) of plaque on the plate
   *
   * @param {string} src - source of plaque clicked; "large" or "small"
   */
  delPhagePlate(src: string){
    if(src === 'small'){
      this.smallPlaqueList.shift();
    }
    else{
      this.largePlaqueList.shift();
    }
  }

}
