import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ScenarioGlobals } from '../../scenario.globals';
import { ExperimentService } from '../experiment.service';
import { ScenarioService } from '../../scenario.service'

@Component({
    selector: 'plexer-room',
    templateUrl: './app/scenario/location/plexer-room/plexer-room.template.html',
  styleUrls: ['./app/scenario/location/plexer-room/plexer-room.style.css']
})
export class PlexerRoomComponent{

  private chosenPhage: string = 'none';
  private dilutionValue: number = ScenarioGlobals.defaultDilution;
  private plexerType: string = 'multi';
  private scenarioDetails: string;
  private rows: any[];
  private cols: any[];
  private nStrains: number[] = [0,0];
  private results: Object;
  private errorMessage: string = '';
  private subscription: Subscription;

  constructor(private _experimentService: ExperimentService, private _scenarioService: ScenarioService){
    this._clearData();
  }

  ngOnInit() {
    this.subscription = this._scenarioService.getScenarioDetails
      .subscribe((details) => this.scenarioDetails = details);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
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
    this.chosenPhage = 'none';
    this.dilutionValue = ScenarioGlobals.defaultDilution;
    this.plexerType = 'multi';
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
      //'': (this.chosenPhage !== src),
      'chosen': (this.chosenPhage === src),
      'btn-outline-info': (src==='B' && this.chosenPhage !== src),
      'btn-info': (src==='B' && this.chosenPhage === src),
      'btn-outline-danger': (src==='K' && this.chosenPhage !== src),
      'btn-danger': (src==='K' && this.chosenPhage === src)
    }
  }

  /**
   * Get the CSS class for each plexer button based on which
   * plexer type is set
   *
   * @param {string} src - button to get classes for
   * @returns {Object} - classes which apply to this button
   */
  getPlexerClasses(src: string): Object{
    return{
      'btn': true,
      'btn-outline-secondary':(this.plexerType !== src) ,
      'btn-secondary': (this.plexerType === src)
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
    var disabled = this.chosenPhage === 'none';
    // check that at least 1 phage added for row/col
    if(this.nStrains[0] === 0 || this.nStrains[1] === 0){
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
   * @param {any[]} inData - input array to be cleaned
   * @returns {any[]} - cleaned array
   */
  _cleanArrays(inData: any[]): any[]{
    var clean = inData.filter((elt)=>{
      return elt !== null
    }).map((elt)=>{
        return {id: elt._id,
               numPhage: elt.numPhage / this.dilutionValue
               }
    });
    return clean
  }

  /**
   * Gets experiment data and submits to service to get results
   * of the multiplexer
   *
   * Called on (click) of submit button
   */
  performPlexer(){
    // need to deal with dilution values
    let tmpRows = (this.plexerType === 'multi' ? this.rows.slice(0, 2) : this.rows);
    let cleanRows = this._cleanArrays(tmpRows);
    let cleanCols = this._cleanArrays(this.cols);
    // gather data
    var data = {
      lawnType: this.chosenPhage,
      rowPhage: cleanRows,
      colPhage: cleanCols,
      specials: {},
      location: this.plexerType,
      scenarioData: this.scenarioDetails,
      capacity: ScenarioGlobals.plateCapacity
    };
    // use the service
    this._experimentService.performPlexer(data)
    .subscribe((res)=>{
      this.results = res;
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
    let phage = $event.dragData;
    phage.numPhage = ScenarioGlobals.numPhage;
    // add to row
    if(dir === 'row' && spot < 8){
      this.rows[spot] = phage;
      this.nStrains[0] = this.rows.filter(function(value) { return value !== null }).length;
    } else if (spot < 8) { // column
      this.cols[spot] = phage;
      this.nStrains[1] = this.rows.filter(function(value) { return value !== null }).length;
    }
  }

  /**
   * Returns CSS classes for a row
   *
   * @param {number} rowInt - row we are considering
   * @returns {Object} classes for the row
   */
  getRowClass(rowInt: number): Object{
    return {
      'data-table-row': true,
      'invisible': this._isRowHidden(rowInt)
    }
  }

  /**
   * Determine if row is hidden based on plexer type;
   * rows 2-7 are hidden for multiplexer
   *
   * @param {number} rowInt - row we are considering
   * @returns {boolean} true if row is hidden
   */
  _isRowHidden(rowInt: number){
    return (this.plexerType === 'multi' && rowInt > 1)
  }
}
