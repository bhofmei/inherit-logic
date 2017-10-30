import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ScenarioService } from '../scenario.service';
import { AuthenticationService } from '../../authentication/authentication.service'

@Component({
    selector: 'fridge',
    templateUrl: './app/scenario/fridge/fridge.template.html'
})
export class FridgeComponent {

 user: any;
  scenario: any;
  fridge: any;
  routingObserver: any;
  errorMessage: string;

  constructor(private _router: Router,
               private _route: ActivatedRoute,
               private _authenticationService: AuthenticationService,
               private _scenarioService: ScenarioService) {
  }

  ngOnInit(){
     this.user = this._authenticationService.user;

    this.routingObserver = this._route.params.subscribe(params => {
            let scenId = params['scenId'];
      let userId = this.user.id;
        console.log(this.user, scenId);
            this._scenarioService
                .getFridge(userId, scenId)
                .subscribe(
                fridge => {
                  console.log(fridge);
                    this.fridge = fridge;
                },
                error => this._router.navigate(['/'])
                );
        });
  }

  ngOnDestory(){
    this.routingObserver.unsubscribe()
  }
}
