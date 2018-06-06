import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ScenarioService } from './scenario.service';
import { Scenario } from '../interfaces/scenario.interface';

/**
 * Resolves a route URL to get the scenario id (from the url)
 * then uses that to get the scenario label using scenario service
 *
 * This is used to generate human-readable breadcrumb labels
 */
@Injectable()
export class ScenarioResolver implements Resolve<Scenario> {

  constructor(private _scenarioService: ScenarioService) { }

  /**
   * Method required by implementation
   * Based on the identified scenCode from the URL, use the service go get the scenario details and send back to client
   *
   * @param {ActivatedRouteSnapshot} route current root URL
   * @param {RouterStateSanpshot} current route snapshot
   *
   * @returns {Scenario} - The scenario object corresponding to do the url param ID if it exists
   - or empty scenario if it does not exist
   */
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Scenario> {

    const scenCode = route.params['scenId'];

    if (scenCode) {
      return this._scenarioService.getScenario(scenCode);
    } else {
      return new Observable<Scenario>();
    }
  }
}
