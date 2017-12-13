import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ScenarioService } from '../../scenario.service';
import { Scenario } from '../../../interfaces/scenario.interface';

@Component({
  selector: 'landing-room',
  templateUrl: 'app/scenario/location/landing-room/landing-room.template.html'
})

export class LandingRoomComponent {

  scenario: any;
  private subscription: any;

  constructor(private _router: Router,
               private _route: ActivatedRoute,
               private _scenarioService: ScenarioService){

  }

  ngOnInit(){
    let scenId = this._route.parent.snapshot.paramMap.get('scenId');
    this.subscription = this._scenarioService
      .getScenario(scenId)
      .subscribe(
      scenario => {
        this.scenario = scenario;
      },
      error => this._router.navigate(['/'])
    );
  }

  ngOnDestory(){
    this.subscription.unsubscribe();
  }
}
