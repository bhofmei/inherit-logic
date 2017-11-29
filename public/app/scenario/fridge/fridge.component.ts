import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ScenarioService } from '../scenario.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { ScenarioGlobals } from '../scenario.globals';

@Component({
    selector: 'fridge',
    templateUrl: './app/scenario/fridge/fridge.template.html',
  styleUrls: ['./app/scenario/fridge/fridge.style.css']
})
export class FridgeComponent {

  user: any;
  fridge: any;
  strains: any[]; // have strainNum, phageType
  currStrains: any[];
  shelf: number = 0;
  maxShelf: number;
  spots: number;
  routingObserver: any;
  errorMessage: string;

  constructor(private _router: Router,
               private _route: ActivatedRoute,
               private _authenticationService: AuthenticationService,
               private _scenarioService: ScenarioService) {
    this.maxShelf = ScenarioGlobals.nFridgeShelf;
    this.spots = ScenarioGlobals.nFridgeSpots;
  }

  ngOnInit(){
     this.user = this._authenticationService.user;
    this.routingObserver = this._route.params.subscribe(params => {
            let scenId = params['scenId'];
          let userId = this.user.userId || this.user.id;
            this._scenarioService
                .getFridge(userId, scenId)
                .subscribe(
                fridge => {
                  this.fridge = fridge;
                  //console.log(fridge.strains);
                  this.strains = this._fillStrains(fridge.strains);
                  this._currStrains();
                  //this.strains = fridge.strains;
                },
                error => this._router.navigate(['/'])
                );
        });
  }

  ngOnDestory(){
    this.routingObserver.unsubscribe()
  }

  _fillStrains(fridgeStrains: any[]): any[]{
    for(let i = fridgeStrains.length; i < 2*this.spots; i++){
      let nStrain = {strainNum: i, phageType: 'empty'};
      fridgeStrains.push(nStrain);
    }
    return fridgeStrains
  }

  _currStrains(){
    let start = this.shelf*this.spots;
    let end = start+this.spots;
    this.currStrains = this.strains.slice(start,end);
  }

  save(){
    this.fridge.strains = this.strains;
    this._scenarioService
      .saveFridge(this.fridge)
      .subscribe(savedFridge => {
    }, error => this.errorMessage = error);
  }

  changeShelf(inc: number){
    if(this.shelf ==0 && inc === 1){
      this.shelf++;
      this._currStrains();
    } else if(this.shelf === 1 && inc === -1){
      this.shelf--;
      this._currStrains();
    }
  }

  addStrain(dat: any){
    // dat should have: strainNum, mutationList, deleteion
    // need userId and scenario
    let userId = this.user.userId || this.user.id;
    let scenCode = this.fridge.scenario.scenCode;
    this._scenarioService.addStrain(dat,userId, scenCode)
    .subscribe((newFridge) => {this.fridge = newFridge},(error)=>{this.errorMessage = error});
  }

}
