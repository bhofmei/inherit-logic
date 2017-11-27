import { Component } from '@angular/core';
import { ExperimentService } from '../experiment.service'

@Component({
    selector: 'lab-room-plate',
    templateUrl: './app/scenario/location/lab-room/plate.template.html',
  styleUrls: ['./app/scenario/location/lab-room/plate.style.css']
})
export class PlateComponent {
  // need to pass scenarioDetails from fridge

  private isEmpty: boolean = true;

  // 1-2 phage IDs with numPhage, lawnType, capacity
  private lawnType: string;
  private capcity: number = 1000000;
  private phage1: any = null;
  private phage2: any = null;

  // results after cross
  private isFull: boolean = false;
  private littlePlaqueList: any[];
  private bigPlaqueList: any[];

  constructor(private _experimentService: ExperimentService){ }

  clearPlate() {
    // reset all variables
    this.phage1 = null;
    this.phage2 = null;
    this.isFull = false;
    this.isEmpty = true;
    this.lawnType = null;
  }
}
