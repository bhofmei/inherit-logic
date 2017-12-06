import { Component } from '@angular/core';
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
  private results: Object;
  private errorMessage: string = '';

  constructor(private _experimentService: ExperimentService, private _scenarioService: ScenarioService){
    this._clearData();
  }

  ngOnInit() {
    this._scenarioService.getScenarioDetails
      .subscribe(details => this.scenarioDetails = details);
  }

  _clearData(){
    this.rows = [];
    this.cols = [];
    for(let i = 0; i < 8; i++){
      this.rows.push(null);
      this.cols.push(null);
    }
  }

  reset(){
    this.chosenPhage = 'none';
    this.dilutionValue = ScenarioGlobals.defaultDilution;
    this.plexerType = 'multi';
    this._clearData();
    this.results = {};
    this.errorMessage = '';
  }

  getTubeClasses(src: string): Object {
    return {
      'btn': true,
      'btn-outline-secondary': (this.chosenPhage !== src),
      'btn-secondary': (this.chosenPhage === src)
    }
  }

  getPlexerClasses(src: string): Object{
    return{
      'btn': true,
      'btn-outline-secondary':(this.plexerType !== src) ,
      'btn-secondary': (this.plexerType === src)
    }
  }

  /* submit button */
  submitDisabled(): boolean {

    // determine if disabled
    var disabled = this.chosenPhage === 'none';
    // get row strains
    var rowStrains = 0, colStrains = 0;
    this.rows.forEach((cell)=>{
      if(cell !== null)
        rowStrains++;
    });
    this.cols.forEach((cell)=>{
      if(cell !== null)
        colStrains++;
    });
    if(colStrains !== 8)
      disabled = true;
    if((rowStrains < 2 && this.plexerType === 'multi') || (rowStrains !== 8 && this.plexerType === 'super'))
      disabled = true;
    return disabled;
  }

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

  performPlexer(){
    // need to deal with dilution values
    let tmpRows = (this.plexerType === 'multi' ? this.rows.slice(0, 2) : this.rows);
    console.log(this.rows);
    console.log(this.cols);
    let cleanRows = this._cleanArrays(tmpRows);
    let cleanCols = this._cleanArrays(this.cols);
    console.log(cleanRows);
    console.log(cleanCols);
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
      this.errorMessage = err.error.message || err.message || 'Error';
    });
  }

  addPhage($event: any, dir: string, spot: number){
    let phage = $event.dragData;
    phage.numPhage = ScenarioGlobals.numPhage;
    if(dir === 'row' && spot < 8){
      this.rows[spot] = phage;
    } else if (spot < 8) { // column
      this.cols[spot] = phage;
    }
  }

  getRowClass(rowInt: number): Object{
    return {
      'data-table-row': true,
      'invisible': this.isRowHidden(rowInt)
    }
  }

  isRowHidden(rowInt: number){
    return (this.plexerType === 'multi' && rowInt > 1)
  }
}
