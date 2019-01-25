import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CricketService } from '../../cricket.service';
import { Scenario } from '../../../interfaces';

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

export class LandingRoomComponent implements OnInit, OnDestroy {

  /**
   * The current scenario we are viewing
   */
  scenario: Scenario;
  /**
   * Subscription to the getScenario method of scenario service
   */
  private subscription: any;

  /**
   * Component contructor
   * @param {Router} _router Angular router
   * @param {ActivatedRoute} _route The current URL route to get scenario id
   * @param {CricketService} _scenarioService Service to get scenario information
   */
  constructor(private _router: Router,
               private _route: ActivatedRoute,
               private _scenarioService: CricketService){

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

  /**
   * When destroying the component, unsubscribe if necessary to
   * prevent memory leaks
   */
  ngOnDestroy(){
    if(this.subscription)
    this.subscription.unsubscribe();
  }
}
