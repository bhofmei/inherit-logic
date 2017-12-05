import { Component } from '@angular/core';
import { ScenarioGlobals } from '../../scenario.globals';

@Component({
    selector: 'plexer-room',
    templateUrl: './app/scenario/location/plexer-room/plexer-room.template.html',
  styleUrls: ['./app/scenario/location/plexer-room/plexer-room.style.css']
})
export class PlexerRoomComponent{

  private chosenPhage: string = 'none';
  private dilutionValue: number = ScenarioGlobals.defaultDilution;
  private plexerType: string = 'multi';
  private rows: any[];
  private cols: any[];

  constructor(){
    this.rows = [];
    this.cols = [];
    for(let i = 0; i < 8; i++){
      this.rows.push({data: null});
      this.cols.push({data: null});
    }
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
    return disabled;
    // get row strains
    /*var rowStrains = 0, colStrains = 0;
    this.rows.forEach((cell)=>{
      if(cell.data !== null)
        rowStrains++;
    });
    this.cols.forEach((cell)=>{
      if(cell.data !== null)
        colStrains++;
    });
    if(colStrains !== 8)
      disabled = true;
    if((rowStrains!== 2 && this.plexerType === 'multi') || (rowStrains !== 8 && this.plexerType === 'super'))
      disabled = true;
    return disabled;*/
  }

  performPlexer(){
    console.log('plexer');
  }
}
