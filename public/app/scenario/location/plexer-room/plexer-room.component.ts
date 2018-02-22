import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FormControl, Validators } from '@angular/forms';

import { ScenarioGlobals } from '../../scenario.globals';
import { ExperimentService } from '../experiment.service';
import { ScenarioService } from '../../scenario.service'
import { FridgePhage, ExperimentPhage } from '../../../interfaces/phage.interface';
import { PlexerPlate } from '../../../interfaces/experiments.interface';

@Component({
    selector: 'plexer-room',
    templateUrl: './app/scenario/location/plexer-room/plexer-room.template.html',
  styleUrls: ['./app/scenario/location/plexer-room/plexer-room.style.css']
})
export class PlexerRoomComponent{

  private chosenBact: string = 'none';
  private dilutionValue: number = ScenarioGlobals.defaultPlexerDilution;
  private plexerType: string = 'plexer';
  private scenarioDetails: string;
  private rows: ExperimentPhage[];
  private cols: ExperimentPhage[];
  private nStrains: number[] = [0,0];
  private results: Object;
  private errorMessage: string = '';
  private subscription: Subscription;
  private expSubscription: Subscription;
  private dilutionControl: FormControl;

  constructor( private _experimentService: ExperimentService,
               private _scenarioService: ScenarioService){
    this.dilutionControl = new FormControl("", [Validators.min(0.1), Validators.max(100)]);
    this._clearData();
  }

  ngOnInit() {
    this.subscription = this._scenarioService.getScenarioDetails
      .subscribe((details) => this.scenarioDetails = details);
  }

  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe();
    if(this.expSubscription)
    this.expSubscription.unsubscribe();
  }

  /**
   * Initalize/clear row and column phage
   */
  _clearData(){
    this.rows = [];
    this.cols = [];
    for(let i = 0; i < 8; i++){
      this.rows.push(null);
      this.cols.push(null);
    }
    this.nStrains = [0,0];
  }

  /**
   * Reset the plexer and parameters
   *
   * Called on (click) of reset button
   */
  reset(){
    this.chosenBact = 'none';
    this.dilutionValue = ScenarioGlobals.defaultPlexerDilution;
    this.plexerType = 'plexer';
    this._clearData();
    this.results = {};
    this.errorMessage = '';
  }

  /**
   * Get the CSS class for each phage button based on which
   * phage type is set
   *
   * @param {string} src - button to get classes for
   * @returns {Object} - classes which apply to this button
   */
  getTubeClasses(src: string): Object {
    return {
      'btn border border-secondary': true,
      //'': (this.chosenBact !== src),
      'chosen': (this.chosenBact === src),
      'btn-outline-info': (src==='B' && this.chosenBact !== src),
      'btn-info': (src==='B' && this.chosenBact === src),
      'btn-outline-danger': (src==='K' && this.chosenBact !== src),
      'btn-danger': (src==='K' && this.chosenBact === src)
    }
  }

  /**
   * Determine if user is able to submit plexer by disabling
   * the submit button when unable to submit
   *
   * @returns {boolean} - true if user cannot submit
   */
  submitDisabled(): boolean {

    // determine if disabled
    var disabled = this.chosenBact === 'none';
    // check that at least 1 phage added for row/col
    if(this.nStrains[0] === 0 || this.nStrains[1] === 0){
      return true;
    } else if (this.dilutionValue < 0.1 || this.dilutionValue > 20){
      return true;
    }
    return disabled;
  }

  /**
   * Removes null elements from input array and dilutes the
   * number of phage
   *
   * Used before submitting row/col phage
   *
   * @param {ExperimentPhage[]} inData - input array to be cleaned
   * @returns {ExperimentPhage[]} - cleaned array
   */
  _cleanArrays(inData: ExperimentPhage[]): ExperimentPhage[]{
    var clean = inData.filter((elt)=>{
      return elt !== null
    }).map((elt)=>{
        return {id: elt.id,
                strainNum: elt.strainNum,
               numPhage: elt.numPhage / (this.dilutionValue * 1000)
               }
    });
    return clean
  }

  /**
   * Reformats the results to take into account of null in the rows/cols
   *
   * @param {Object} results - results of computing the plexer
   * @returns {Object} - updated results
   */
  _unCleanResults(results: Object):Object{
    let out = {},
        newCols = {};
    let curRow = 0,
        curCol = 0;
    for(let j = 0; j < this.cols.length; j++){
      let col = this.cols[j];
      if(col !== null){
        newCols[curCol] = j;
        curCol ++;
      }
    } // end for this.cols
    for(let i in this.rows){
      if(this.rows[i] !== null){
        let row = results[curRow];
        let tmp = {};
        for(let j in row){
          let newCol = newCols[j];
          tmp[newCol] = row[j];
        }
        out[i] = tmp;
        curRow++;
      }
    }
    return out;
  }

  /**
   * Gets experiment data and submits to service to get results
   * of the multiplexer
   *
   * Called on (click) of submit button
   */
  performPlexer(){
    // need to deal with dilution values
    let tmpRows = this.rows;
    let cleanRows = this._cleanArrays(tmpRows);
    let cleanCols = this._cleanArrays(this.cols);
    // gather data
    var data = {
      lawnType: this.chosenBact,
      rowPhage: cleanRows,
      colPhage: cleanCols,
      specials: {},
      location: this.plexerType,
      scenarioData: this.scenarioDetails,
      capacity: ScenarioGlobals.plexerCapacity
    };
    // use the service
    this.expSubscription = this._experimentService.performPlexer(data)
    .subscribe((res)=>{
      //this.results = res;
      this.results = this._unCleanResults(res);
    }, (err)=>{
      this.errorMessage = err.error.message || err.message || 'Unknown error';
    });
  }

  /**
   *  Add phage to row or column of plexer
   *
   * Called on (onDropSuccess) of row/col header
   *
   * @param {any} $event - dragEvent; includes phage data
   * @param {string} dir - add to "row" or "col"
   * @param {number} spot - position to add phage
   */
  addPhage($event: any, dir: string, spot: number){
    let fphage: FridgePhage = $event.dragData;
    let phage: ExperimentPhage = {
      id: fphage.id,
      strainNum: fphage.strainNum,
      numPhage: ScenarioGlobals.numPhage
    }
    // add to row
    if(dir === 'row' && spot < 8){
      this.rows[spot] = phage;
      this.nStrains[0] = this.rows.filter(function(value) { return value !== null }).length;
    } else if (spot < 8) { // column
      this.cols[spot] = phage;
      this.nStrains[1] = this.cols.filter(function(value) { return value !== null }).length;
    }
  }
}
