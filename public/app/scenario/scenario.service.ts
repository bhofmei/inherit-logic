import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';


@Injectable()
export class ScenarioService {
    private _baseURL = 'api/cricket';
    private currScenario: any;

    constructor(private _http: Http) {
      this.currScenario = null;
    }

    listScenarios(): Observable<any> {
        return this._http
            .get(this._baseURL)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

  getScenario(scenId: string): Observable<any>{
    if(this.currScenario===null){
    this.currScenario =  this._http
            .get(`${this._baseURL}/${scenId}`)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    return this.currScenario;
  }

  resetScenario(){
    this.currScenario = null;
  }

    getFridge(userId: number, scenId: string): Observable<any> {
      return this._http
            .get(`${this._baseURL}/${userId}/${scenId}`)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

  saveFridge(fridge: any): Observable<any> {
    let userId = fridge.owner.userId;
    let scenCode = fridge.scenario.scenCode;
    return this._http
      .post(`${this._baseURL}/${userId}/${scenCode}`, fridge)
            .map((res: Response) => res.json())
            .catch(this.handleError);
  }

  addStrain(strain: any, userId: number, scenCode: string): Observable<any> {
    // returns fridge
    return this._http
      .post(`${this._baseURL}/${userId}/${scenCode}/fridge-phage`, strain)
            .map((res: Response) => res.json())
            .catch(this.handleError);
  }

    private handleError(error: Response) {
        return Observable.throw(error.json().message || 'Server error');
    }
}
