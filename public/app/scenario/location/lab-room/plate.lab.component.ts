import { Component } from '@angular/core';
import { ExperimentService } from '../experiment.service';
import { ScenarioService } from '../../scenario.service'

@Component({
    selector: 'plate-lab',
    templateUrl: './app/scenario/location/lab-room/plate.lab.template.html',
  styleUrls: ['./app/scenario/location/lab-room/plate.lab.style.css']
})
export class PlateLabComponent {
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
  private smallPlaqueList: any[];
  private largePlaqueList: any[];
  private genotypes: any[];

  constructor(private _experimentService: ExperimentService, private _scenarioService: ScenarioService){ }

  clearPlate() {
    // reset all variables
    this.phage1 = null;
    this.phage2 = null;
    this.isFull = false;
    this.isEmpty = true;
    this.lawnType = null;
    this.genotypes = [];
    this.smallPlaqueList = [];
    this.largePlaqueList = [];
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
      location: 'lab',
      scenarioData: this.scenarioDetails,
      capacity: this.capcity
    }
    this._experimentService.createPlate(newPlate)
    .subscribe((res)=>{
      this.isFull = res.full;
      this.smallPlaqueList = res.smallPlaque;
      this.largePlaqueList = res.largePlaque;
      this.isEmpty = false;
      this.genotypes = res.genotypes;
      console.log('little', this.smallPlaqueList);
      console.log('big', this.largePlaqueList);
      console.log('genotypes', this.genotypes);
      // success
    }, (err)=>{
      // error
      this.errorMessage = err.error.message || err.message || 'Error';
    });
  }

  pickPhage(src: string): Object {
    // dragData
    // genotype is stored as:
    let tmpList = (src === 'small' ? this.smallPlaqueList : this.largePlaqueList);
    if(tmpList.length === 0){
      return null;
    }
    let plaque = tmpList[0];
    let genotypeIndex = plaque.i;
    let phage = JSON.parse(JSON.stringify(this.genotypes[genotypeIndex]));
    phage['src'] = plaque.pheno;
    return phage;
  }

  addedToFridge($event) {
    // onDragSuccess
    let strain = $event.dragData;
    let src = strain.src;
    if(src === 'small'){
      this.smallPlaqueList.shift();
    } else { // large
      this.largePlaqueList.shift();
    }
  }

  canDrag(src: string): boolean {
    // dragEnabled
    if(src === 'small')
      return this.smallPlaqueList.length > 0;
    else // big
      return this.largePlaqueList.length > 0;
  }

}
