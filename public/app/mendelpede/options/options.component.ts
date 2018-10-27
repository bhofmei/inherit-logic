import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../authentication/authentication.service';
import { MendelpedeScenarioService } from '../scenarios/scenarios.service';

import { User } from '../../interfaces/user.interface';
import { MendelpedeScenario } from '../../interfaces/mendelpede-scenarios.interface';
@Component({
  selector: 'options',
  templateUrl: './options.template.html'
})
export class OptionsComponent implements OnInit{

  user: User;

  /**
  * list of available scenarios
  */
  scenarios: MendelpedeScenario[];
  errorMessage: string;
  private sSubscription: Subscription;

  constructor(private _authenticationService: AuthenticationService, private _scenarioService: MendelpedeScenarioService) {

  }

  ngOnInit() {
    this.user = this._authenticationService.getUser();
    console.log('before listing scenarios');
    this.sSubscription = this._scenarioService.listScenarios()
        .subscribe((scenarios) => {
        this.scenarios = scenarios;
        console.log('scenarios: '+scenarios);
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
