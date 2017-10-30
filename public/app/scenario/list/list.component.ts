import { Component } from '@angular/core';
import { AuthenticationService } from '../../authentication/authentication.service';
import { ScenarioService } from '../scenario.service';

@Component({
    selector: 'scenario-list',
    templateUrl: './app/scenario/list/list.template.html'
})
export class ListComponent {
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
