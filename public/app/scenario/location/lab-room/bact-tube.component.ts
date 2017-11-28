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

  constructor(){ }

  clearTubes() {
    // reset all variables
    this.phage = [];
    this.isHiddenB = false;
    this.isHiddenK = false;
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

  canDrop(): boolean {
    if(this.phage.length === 2){
      return false;
    }
  }

  dropPhage($event: any, src: string){
    console.log($event, src);
    this.phage.push($event.dragData.id);
    switch(src){
      case 'B':
        this.isHiddenK = true;
        break;
      case 'K':
        this.isHiddenB = true;
        break;
    }
  }
}
