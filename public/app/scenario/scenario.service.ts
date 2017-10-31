import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';


@Injectable()
export class ScenarioService {
    private _baseURL = 'api/cricket';

    constructor(private _http: Http) { }

    list(): Observable<any> {
        return this._http
            .get(this._baseURL)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    getFridge(userId: int, scenId: string): Observable<any> {
      return this._http
            .get(`${this._baseURL}/${userId}/${scenId}`)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

  saveFridge(fridge: any): Observable<any> {
    let userId = fridge.owner.userId;
    let scenCode = fridge.scenario.scenCode;
    console.log(fridge);
    return this._http
      .post(`${this._baseURL}/${userId}/${scenCode}`, fridge)
            .map((res: Response) => res.json())
            .catch(this.handleError);
  }

    private handleError(error: Response) {
        return Observable.throw(error.json().message || 'Server error');
    }
}
