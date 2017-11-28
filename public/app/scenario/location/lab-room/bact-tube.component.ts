import { Component } from '@angular/core';
//import { ExperimentService } from '../experiment.service'

@Component({
    selector: 'lab-room-bact-tube',
    templateUrl: './app/scenario/location/lab-room/bact-tube.template.html',
  styleUrls: ['./app/scenario/location/lab-room/bact-tube.style.css']
})
export class BactTubeComponent {

  private isHiddenB: boolean = false;
  private isHiddenK: boolean = false;
  private phage: string[] = [];
  private errorMessage: string = '';

  constructor(){ }

  clearTubes() {
    // reset all variables
    this.phage = [];
    this.isHiddenB = false;
    this.isHiddenK = false;
    this.errorMessage = '';
  }

  canDrag(): boolean {
    return this.phage.length > 0;
  }

  getClasses(src: string): Object {
    return {'bact-tube col-2': true,
            'invisible': (src === 'B' ? this.isHiddenB : this.isHiddenK),
            'n-phage-1': this.phage.length === 1,
            'n-phage-2': this.phage.length === 2
           }
  }

  dropPhage($event: any, src: string){
    var incomingPhage = $event.dragData;
    if(incomingPhage.hasOwnProperty('id') == false){
      this.errorMessage = 'only add phage from the fridge';
    } else if(this.phage.length >= 2) {
      this.errorMessage = 'cannot have more than 2 phage in a tube';
    } else {
      this.phage.push(incomingPhage.id);
      switch(src){
        case 'B':
          this.isHiddenK = true;
          break;
        case 'K':
          this.isHiddenB = true;
          break;
      }}
  }
}
