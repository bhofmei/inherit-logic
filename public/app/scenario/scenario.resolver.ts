import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ScenarioService } from './scenario.service';
import { Scenario } from '../interfaces/scenario.interface';

@Injectable()
export class ScenarioResolver implements Resolve<Scenario> {

  constructor(private _scenarioService: ScenarioService) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Scenario> {

    const scenCode = route.params['scenId'];

    if (scenCode) {
      return this._scenarioService.getScenario(scenCode);
    } else {
      return new Observable<Scenario>();
    }
  }
}
