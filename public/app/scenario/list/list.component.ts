import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AuthenticationService } from '../../authentication/authentication.service';
import { ScenarioService } from '../scenario.service';

import { User } from '../../interfaces/user.interface';
import { Scenario } from '../../interfaces/scenario.interface';

@Component({
    selector: 'scenario-list',
    templateUrl: './app/scenario/list/list.template.html'
})
export class ListComponent implements OnInit, OnDestroy{
    user: User;
    scenarios: Scenario[];
    errorMessage: string;
  private sSubscription: Subscription;

    constructor(private _authenticationService: AuthenticationService, private _scenarioService: ScenarioService) {

    }

    ngOnInit() {
      this.user = this._authenticationService.getUser();
      this.sSubscription = this._scenarioService.listScenarios()
        .subscribe((scenarios) => {
        this.scenarios = scenarios
      });
    }

  ngOnDestroy(){
    this.sSubscription.unsubscribe();
  }
}
