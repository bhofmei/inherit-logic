import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { ExperimentService } from '../experiment.service'

@Component({
    selector: 'lab-room-dilution-tube',
    templateUrl: './app/scenario/location/lab-room/dilution-tube.template.html',
  styleUrls: ['./app/scenario/location/lab-room/dilution-tube.style.css']
})
export class DilutionTubeComponent {

  private dilutionValue: number = 10;
  private contents: Object;
  private errorMessage: string = '';

  constructor(){ }

  clearTubes() {
    // reset all variables
    this.dilutionValue = 10;
    this.errorMessage = '';
  }

  canDrag(): boolean {
    return (this.contents !== null && this.contents !== undefined);
  }

  getClasses(): Object {
    return {'dil-tube col-2': true,
            'filled': (this.contents !== null && this.contents !== undefined)
           }
  }

  dropContents($event: any, src: string){
    var incomingDat = $event.dragData;
    if(incomingDat.hasOwnProperty('lawnType') && incomingDat.hasOwnProperty('phage')){
      this.contents = incomingDat;
    }
  }
}
