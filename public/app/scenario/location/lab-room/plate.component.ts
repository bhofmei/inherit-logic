import { Component } from '@angular/core';
import { ExperimentService } from '../experiment.service';
import { ScenarioService } from '../../scenario.service'

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
  private scenarioDetails: string;
  private errorMessage: string = '';

  // results after cross
  private isFull: boolean = false;
  private littlePlaqueList: any[];
  private bigPlaqueList: any[];

  constructor(private _experimentService: ExperimentService, private _scenarioService: ScenarioService){ }

  clearPlate() {
    // reset all variables
    this.phage1 = null;
    this.phage2 = null;
    this.isFull = false;
    this.isEmpty = true;
    this.lawnType = null;
    this.errorMessage = '';
  }

  ngOnInit() {
    this._scenarioService.getScenarioDetails
      .subscribe(details => this.scenarioDetails = details);
  }

  fillPlate($event: any) {
    // dragData has lawnType and list of phage
    var dragData = $event.dragData;
    this.lawnType = dragData.lawnType;
    this.phage1 = dragData.phage[0];
    if(dragData.phage.length === 2){
      this.phage2 = dragData.phage[1];
    }
    // now perform the cross
    this.performCross();
  }

  performCross(){
    // call experiment service, set variables
    var newPlate = {
      lawnType: this.lawnType,
      phage1: this.phage1,
      phage2: this.phage2,
      specials: {},
      location: 'lab-room',
      scenarioData: this.scenarioDetails,
      capacity: this.capcity
    }
    this._experimentService.createPlate(newPlate)
    .subscribe((res)=>{
      console.log(res);
      this.isFull = res.full;
      this.littlePlaqueList = res.littlePlaque;
      this.bigPlaqueList = res.bigPlaque;
      this.isEmpty = false;
      // success
    }, (err)=>{
      // error
      this.errorMessage = err.error.message || err.message || 'Error';
    });
  }

}
