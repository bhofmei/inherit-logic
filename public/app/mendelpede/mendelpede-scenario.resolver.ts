import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { MendelpedeScenarioService } from './scenarios/mendelpede-scenarios.service';
import { MendelpedeScenario } from '../interfaces/mendelpede-scenarios.interface';

/**
 * Resolves a route URL to get the scenario id (from the url)
 * then uses that to get the scenario label using scenario service
 *
 * This is used to generate human-readable breadcrumb labels
 */
@Injectable()
export class MendelpedeScenarioResolver implements Resolve<MendelpedeScenario> {

  constructor(private _scenarioService: MendelpedeScenarioService) { }

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
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MendelpedeScenario> {

    const scenShortCode = route.params['scenShortCode'];

    if (scenShortCode) {
      return this._scenarioService.getScenario(scenShortCode);
    } else {
      return new Observable<MendelpedeScenario>();
    }
  }
}
