import { Component } from '@angular/core';

@Component({
    selector: 'plexer-room',
    templateUrl: './app/scenario/location/plexer-room/plexer-room.template.html',
  styleUrls: ['./app/scenario/location/plexer-room/plexer-room.style.css']
})
export class PlexerRoomComponent {

  private chosenPhage: string = 'none';
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

  /* bacteria tubes */
  clearTubes(){
    this.chosenPhage = 'none';
  }

  choosePhage(src: string){
    this.chosenPhage = src;
  }

  getTubeClasses(src: string): Object {
    return {
      'bact-tube col-6 m-1': true,
      'not-chosen': (!(this.chosenPhage === 'none') && (this.chosenPhage !== src)),
      'chosen': (this.chosenPhage === src)
    }
  }

  /* multi/super plexer buttons */
  getButtonClasses(src: string): Object {
    return {
      'btn btn-outline-secondary btn-sm': true,
      'active': (this.plexerType === src)
    }
  }

  /* submit button */
  submitDisabled(): boolean {

    // determine if disabled
    var disabled = this.chosenPhage !== 'none';
    // get row strains
    var rowStrains = 0, colStrains = 0;
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
    return disabled;
  }
}
