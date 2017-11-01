import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { ScenarioService } from '../scenario.service';
import { Scenario } from '../scenario.model';

@Component({
  selector: 'location',
  templateUrl: './app/scenario/location/location.template.html',
  styleUrls: ['./app/scenario/location/location.style.css']
})

export class LocationComponent {

  scenario: any;
  routingObserver: any;

   constructor(private _router: Router,
               private _route: ActivatedRoute,
               private _scenarioService: ScenarioService) {
  }

    ngOnInit(){
    this.routingObserver = this._route.params.subscribe(params => {
            let scenId = params['scenId'];
            this._scenarioService
                .getScenario(scenId)
                .subscribe(
                scenario => {
                    this.scenario = scenario;
                },
                error => this._router.navigate(['/'])
                );
        });
  }

  ngOnDestory(){
    this._scenarioService.resetScenario();
    this.routingObserver.unsubscribe()
  }

}
