import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { ScenarioService } from '../scenario/scenario.service';

@Component({
    selector: 'cricket',
    templateUrl: './app/cricket/cricket.template.html'
})
export class CricketComponent {
    user: any;
    scenarios: any;
    errorMessage: string;

    constructor(private _authenticationService: AuthenticationService, private _scenarioService: ScenarioService) {
        this.user = _authenticationService.user;
    }

    ngOnInit() {
        this._scenarioService.list().subscribe(scenarios => this.scenarios = scenarios);
    }
}
