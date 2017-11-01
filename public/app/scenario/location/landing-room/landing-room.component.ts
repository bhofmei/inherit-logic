import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ScenarioService } from '../../scenario.service';

@Component({
  selector: 'landing-room',
  templateUrl: 'app/scenario/location/landing-room/landing-room.template.html'
})

export class LandingRoomComponent {

  scenario: string;
  routingObserver: any;

  constructor(private _router: Router,
               private _route: ActivatedRoute,
               private _scenarioService: ScenarioService){

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
    this.routingObserver.unsubscribe()
  }

}
