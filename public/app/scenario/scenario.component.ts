import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ScenarioService } from './scenario.service';
import { AuthenticationService } from '../authentication/authentication.service'

@Component({
  selector: 'scenario',
  //template: '<router-outlet></router-outlet>',
  templateUrl: 'app/scenario/scenario.template.html',
})

export class ScenarioComponent {
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
    console.log(this.user);
    this.routingObserver = this._route.params.subscribe(params => {
            let scenId = params['scenId'];
      let userId = this.user.id;

            this._scenarioService
                .getFridge(userId, scenId)
                .subscribe(
                fridge => {
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
