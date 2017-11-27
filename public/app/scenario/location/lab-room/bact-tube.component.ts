import { Component } from '@angular/core';
//import { ExperimentService } from '../experiment.service'

@Component({
    selector: 'lab-room-bact-tube',
    templateUrl: './app/scenario/location/lab-room/bact-tube.template.html',
  styleUrls: ['./app/scenario/location/lab-room/bact-tube.style.css']
})
export class BactTubeComponent {

  private isHiddenB: boolean = false;
  private isHiddenK: boolean = true;
  private phage1: any = null;
  private phage2: any = null;

  constructor(){ }

  clearTubes() {
    // reset all variables
    this.phage1 = null;
    this.phage2 = null;
    this.isHiddenB = false;
    this.isHiddenK = false;
  }

  canDrop(src: string){
    if(this.phage1 !== null && this.phage2 !== null){
      return false;
    } else if(src === 'B'){
      return !this.isHiddenB;
    } else if(src === 'K'){
      return !this.isHiddenK;
    } else {
      return false;
    }
  }

  dropPhage($event: any){
    console.log($event);
  }
}
