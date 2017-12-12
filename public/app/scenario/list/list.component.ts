import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AuthenticationService } from '../../authentication/authentication.service';
import { ScenarioService } from '../scenario.service';

import { User } from '../../interfaces/user.interface';

@Component({
    selector: 'scenario-list',
    templateUrl: './app/scenario/list/list.template.html'
})
export class ListComponent implements OnInit, OnDestroy{
    user: User;
    scenarios: any;
    errorMessage: string;
  private uSubscription: Subscription;
  private sSubscription: Subscription;



    constructor(private _authenticationService: AuthenticationService, private _scenarioService: ScenarioService) {

    }

    ngOnInit() {
      this.uSubscription = this._authenticationService.getUser
      .subscribe((user) =>{
        this.user = user;
      });
      this.sSubscription = this._scenarioService.listScenarios()
        .subscribe((scenarios) => {
        this.scenarios = scenarios
      });
    }

  ngOnDestroy(){
    this.uSubscription.unsubscribe();
    this.sSubscription.unsubscribe();
  }
}
