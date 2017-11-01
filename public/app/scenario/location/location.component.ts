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

  scenario: Scenario;
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
                    this.createScenario(scenario);
                  console.log(this.scenario);
                },
                error => this._router.navigate(['/'])
                );
        });
  }

  ngOnDestory(){
    this.routingObserver.unsubscribe()
  }

  createScenario(inputScen: any){
    // label, mutationFreq, recombinationFreq, purpose, relevance, startingPoint, defaultLocation, availableLocations
    this.scenario = new Scenario(inputScen.label,
                                inputScen.mutationFreq,
                                inputScen.recombinationFreq,
                                inputScen.purpose,
                                inputScen.relevance,
                                inputScen.startingPoint,
                                inputScen.defaultRoom,
                                inputScen.availableRooms)
  }

}
