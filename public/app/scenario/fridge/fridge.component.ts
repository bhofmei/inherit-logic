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
  strains: [any];
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
          let userId = this.user.id;
            this._scenarioService
                .getFridge(userId, scenId)
                .subscribe(
                fridge => {
                  this.fridge = fridge;
                    this.strains = fridge.strains;
                },
                error => this._router.navigate(['/'])
                );
        });
  }

  ngOnDestory(){
    this.routingObserver.unsubscribe()
  }

  save(){
    this.fridge.strains = this.strains;
    this._scenarioService
      .saveFridge(this.fridge)
      .subscribe(savedFridge => {
    }, error => this.errorMessage = error);
  }
}
