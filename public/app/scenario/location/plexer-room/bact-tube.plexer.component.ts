import { Component, Output, EventEmitter } from '@angular/core';
import { ScenarioGlobals } from '../../scenario.globals';

@Component({
    selector: 'bact-tube-plexer',
    templateUrl: './app/scenario/location/plexer-room/bact-tube.plexer.template.html',
  styleUrls: ['./app/scenario/location/plexer-room/bact-tube.plexer.style.css']
})
export class BactTubePlexerComponent {

  private chosenPhage: string = 'none';

  @Output() pickPhageEvent = new EventEmitter<string>();

  constructor(){ }

  pickPhage(){
    this.pickPhageEvent.emit(this.chosenPhage);
  }

  clearTubes(){
    this.chosenPhage = 'none';
  }

  choosePhage(src: string){
    this.chosenPhage = src;
  }

  getClasses(src: string): Object {
    return {
      'bact-tube col-6 m-1': true,
      'not-chosen': (!(this.chosenPhage === 'none') && (this.chosenPhage !== src)),
      'chosen': (this.chosenPhage === src)
    }
  }
}
