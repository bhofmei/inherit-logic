import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScenarioGlobals } from '../../scenario.globals';
//import { ExperimentService } from '../experiment.service'

@Component({
    selector: 'dilution-tube-lab',
    templateUrl: './app/scenario/location/lab-room/dilution-tube.lab.template.html',
  styleUrls: ['./app/scenario/location/lab-room/dilution-tube.lab.style.css']
})
export class DilutionTubeLabComponent {

  private dilutionValue: number = ScenarioGlobals.defaultDilution;
  private contents: Object[];
  private visibleLabel: boolean[];

  constructor(){
    this.contents = [null, null, null, null];
    this.visibleLabel = [true, false, false, false];
  }

  clearTubes() {
    // reset all variables
    this.dilutionValue = ScenarioGlobals.defaultDilution;
    this.contents = [null, null, null, null];
    this.visibleLabel = [true, false, false, false];
  }

  canDrag(src: number): boolean {
    return (this.contents[src] !== null);
  }

  getClassesTube(src: number): Object {
    return {'dil-tube col-2': true,
            'filled': (this.contents[src] !== null)
           }
  }

  getClassesVal(src: number): Object {
    return {
      'dil-value': true,
      'invisible': !this.visibleLabel[src]
    }
  }

  canDrop(dest: number): any {
  return (dragData: any) => {
    if(dragData === null || dragData === undefined)
      return false;
    if(dragData.hasOwnProperty('src') === false){
      return false
    }
    let src = dragData.src;
    if(dest === 0 && (src === 'B' || src === 'K')){
      return true;
    } else if (dest > 0 && src === dest-1){
      return true;
    }
    return false;
  };
}

  getData(src: number): Object {
    if(this.contents[src] !== null)
      this.contents[src]['src'] = src;
    return this.contents[src];
  }

  dropContents($event: any, dest: number){
    var incomingDat = JSON.parse(JSON.stringify($event.dragData));
    // if dest == 0, src must be B or K
    // if dest > 0, src must be dest - 1
    if(incomingDat.hasOwnProperty('lawnType') && incomingDat.hasOwnProperty('phage')){
      // dilute
      for(let i = 0; i < incomingDat.phage.length; i++){
        incomingDat.phage[i].numPhage /= this.dilutionValue;
      }
      this.contents[dest] = incomingDat;
      if(dest < 3){
        this.visibleLabel[dest+1] = true;
      }
    }
  }
}
