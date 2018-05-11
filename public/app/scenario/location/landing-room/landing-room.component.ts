import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ScenarioService } from '../../scenario.service';
import { Scenario } from '../../../interfaces/scenario.interface';

/**
 * This component shows the scenario details including
 * 1. purpose - the goal of the scenario, usually either identify mutations of given unknown phage or create phage with certain mutation
 * 2. relevance - why the scenario is relevant for learning and future scenarios
 * 3. starting point - description of the phage students start the scenario with
 */
@Component({
  selector: 'landing-room',
  templateUrl: './landing-room.template.html'
})

export class LandingRoomComponent {

  scenario: any;
  private subscription: any;

  constructor(private _router: Router,
               private _route: ActivatedRoute,
               private _scenarioService: ScenarioService){

  }

  /**
   * Initialize the component
   * 1. Get scenCode from the url (use parameter from parent route because this route ends "/landing-room")
   * 2. Get the details for scenarios
   * If error, go back to home page
   */
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
