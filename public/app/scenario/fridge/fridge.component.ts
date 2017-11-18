import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ScenarioService } from '../scenario.service';
import { AuthenticationService } from '../../authentication/authentication.service'

import { DragulaService } from 'ng2-dragula';

@Component({
    selector: 'fridge',
    templateUrl: './app/scenario/fridge/fridge.template.html',
  styleUrls: ['./app/scenario/fridge/fridge.style.css']
})
export class FridgeComponent {

  user: any;
  fridge: any;
  strains: any[];
  currStrains: any[];
  shelf: number = 0;
  spots: number = 16;
  routingObserver: any;
  errorMessage: string;

  constructor(private _router: Router,
               private _route: ActivatedRoute,
               private _authenticationService: AuthenticationService,
               private _scenarioService: ScenarioService,
              private _dragulaService: DragulaService) {
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
    console.log(this.shelf);
    if(this.shelf ==0 && inc === 1){
      this.shelf++;
      this._currStrains();
    } else if(this.shelf === 1 && inc === -1){
      this.shelf--;
      this._currStrains();
    }
  }

}
