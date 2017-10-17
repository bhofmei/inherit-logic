import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { ScenarioService } from './cricket-scenario.service';

@Component({
  selector: 'cricket-scenarios',
  templateUrl: './app/cricket-scenario/cricket-scenario.template.html'
})
export class CricketComponent{
  user: any;
  scenarios: any;
  errorMessage: string;

  constructor(private _authenticationService: AuthenticationService, private _scenarioService: ScenarioService){
    this.user = _authenticationService.user;
  }

  ngOnInit() {
		this._scenarioService.list().subscribe(scenarios  => this.scenarios = scenarios);
	}
}
