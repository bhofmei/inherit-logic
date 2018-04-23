import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FormControl, Validators } from '@angular/forms';

import { ScenarioGlobals } from '../../scenario.globals';
import { ExperimentService } from '../experiment.service';
import { ScenarioService } from '../../scenario.service'
import { FridgePhage, ExperimentPhage, plexerInput } from '../../../interfaces';

@Component({
    selector: 'plexer-room',
    templateUrl: 'app/scenario/location/plexer-room/plexer-room.template.html',
  styleUrls: ['app/scenario/location/plexer-room/plexer-room.style.css']
})
export class PlexerRoomComponent{

  /**
   * E. coli strain chosen to plate on
   */
  private chosenBact: string = 'none';
  /**
   * Value to dilute number of phage by
   */
  private dilutionValue: number = ScenarioGlobals.defaultPlexerDilution;
  private plexerType: string = 'plexer';
  /**
   * Scenario details (from fridge) needed to perform the plexer
   */
  private scenarioDetails: string;
  /**
   * Info for phage along the rows
   */
  private rows: ExperimentPhage[];
  /**
   * Info for phage along the columns
   */
  private cols: ExperimentPhage[];
  /**
   * Current number of strains in the rows and columns, respectively
   */
  private nStrains: number[] = [0,0];
  /**
   * The plexer results
   * Is Object form of a 2-D array where each cell has {smallPlaque: #, largePlaque: #}
   */
  private results: Object;
  private errorMessage: string = '';
  private subscription: Subscription;
  private expSubscription: Subscription;
  /**
   * Control the dilution factor to a min/max value
   */
  private dilutionControl: FormControl;
  /**
   * CSS classes for the submit spinner
   * Visible after submit button hit and before results received
   */
  private _spinnerClass: Object = {
    'hiding': true,
    'spinning': false,
    'oi oi-loop-circular': true
  };

  /**
   * Initialize data and set dilution control
   */
  constructor( private _experimentService: ExperimentService,
               private _scenarioService: ScenarioService){
    this.dilutionControl = new FormControl("", [Validators.min(0.1), Validators.max(100)]);
    this._clearData();
  }

  /**
   * Initialize the component and get the scenario details
   */
  ngOnInit() {
    this.subscription = this._scenarioService.getScenarioDetails
      .subscribe((details) => this.scenarioDetails = details);
  }

  /**
   * Destory the component and unsubscribe as needed
   */
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
    this._setSpinnerClass('reset');
  }

  /**
   * Get the CSS classes for each phage button based on which
   * phage type is set
   *
   * @param {string} src - button to get classes for
   * @returns {Object} - classes which apply to this button
   */
  getTubeClasses(src: string): Object {
    return {
      'btn border border-secondary': true,
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
   * Able to submit only when: (a) bacteria chosen, (b) at least
   * one phage in each row and column, (c) dilution value is valid,
   * and (d) not still waiting for previous submit response
   *
   * @returns {boolean} - true if user cannot submit
   */
  submitDisabled(): boolean {

    // if spinner is spinning, disable
    if(this._spinnerClass['spinning']){
      return true;
    }
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
   * Used before submitting row/col phage to service
   *
   * @param {ExperimentPhage[]} inData - input array to be cleaned; can contain null values
   *
   * @returns {ExperimentPhage[]} - cleaned array; does not contain null values
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
   * @param {Object} results - results of computing the plexer; does not contain null values
   *
   * @returns {Object} - updated results; can contain null values
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
   * Updates the spinner CSS classes based on the input state
   *
   * @param {string} newClass - updated state for the spinner
   */
  private _setSpinnerClass(newClass: string){
    this._spinnerClass['hiding'] = (newClass === "spinning" ? false : true);
     this._spinnerClass['spinning'] = (newClass === "spinning" ? true : false);
  }

  /**
   * Return the current CSS classes for the spinner
   *
   * @returns {Object} - CSS classes for the spinner in the form
   * {'class': boolean, ...}
   */
  getSpinnerClass(){
    return this._spinnerClass;
  }

  /**
   * Gets experiment data and submits to service to get results
   * of the multiplexer
   *
   * Called on (click) of submit button
   */
  performPlexer(){
    // set the spinner
    this._setSpinnerClass('spinning');
    // clean the row and column arrays
    let tmpRows = this.rows;
    let cleanRows = this._cleanArrays(tmpRows);
    let cleanCols = this._cleanArrays(this.cols);
    // gather data
    var data: plexerInput = {
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
      this.results = this._unCleanResults(res);
      this._setSpinnerClass('hiding');
    }, (err)=>{
      this.errorMessage = err.error.message || err.message || 'Unknown error';
      this._setSpinnerClass('hiding');
    });
  }

  /**
   * Add phage to row or column of plexer
   * when successful, updates the row/col phage counts
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
