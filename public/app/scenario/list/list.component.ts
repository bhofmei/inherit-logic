import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AuthenticationService } from '../../authentication/authentication.service';
import { ScenarioService } from '../scenario.service';

import { User } from '../../interfaces/user.interface';
import { Scenario } from '../../interfaces/scenario.interface';

/**
 * Component which lists all available scenarios
 */
@Component({
    selector: 'scenario-list',
    templateUrl: './list.template.html'
})
export class ListComponent implements OnInit, OnDestroy{
  /**
   * User object of logged in user, if available
   */
    user: User;
  /**
  * list of available scenarios
  */
    scenarios: Scenario[];
    errorMessage: string;
  private sSubscription: Subscription;

    constructor(private _authenticationService: AuthenticationService, private _scenarioService: ScenarioService) {

    }

  /**
   * Initialize the component by using the service to fetch the
   * list of scenarios
   */
    ngOnInit() {
      this.user = this._authenticationService.getUser();
      this.sSubscription = this._scenarioService.listScenarios()
        .subscribe((scenarios) => {
        this.scenarios = scenarios
      });
    }

  /**
   * When destroying component, unsubscribe from service if necessary
   * to prevent memory leaks
   */
  ngOnDestroy(){
    if(this.sSubscription)
    this.sSubscription.unsubscribe();
  }
}
