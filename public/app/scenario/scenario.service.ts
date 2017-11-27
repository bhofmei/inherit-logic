//import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
//import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ScenarioService {
    private _baseURL = 'api/cricket';
    private currScenario: any;

    constructor(private _http: HttpClient) {
      this.currScenario = null;
    }

    listScenarios(): Observable<any> {
        return this._http
            .get(this._baseURL)
            //.map((res: Response) => res.json())
            //.catch(this.handleError);
    }

  getScenario(scenId: string): Observable<any>{
    if(this.currScenario===null){
    this.currScenario =  this._http
            .get(`${this._baseURL}/${scenId}`)
            //.map((res: Response) => res.json())
            //.catch(this.handleError);
    }
    return this.currScenario;
  }

  resetScenario(){
    this.currScenario = null;
  }

    getFridge(userId: number, scenId: string): Observable<any> {
      return this._http
            .get(`${this._baseURL}/${userId}/${scenId}`)
            //.map((res: Response) => res.json())
            //.catch(this.handleError);
    }

  saveFridge(fridge: any): Observable<any> {
    let userId = fridge.owner.userId;
    let scenCode = fridge.scenario.scenCode;
    return this._http
      .post(`${this._baseURL}/${userId}/${scenCode}`, fridge)
            //.map((res: Response) => res.json())
            //.catch(this.handleError);
  }

  addStrain(strain: any, userId: number, scenCode: string): Observable<any> {
    // returns fridge
    return this._http
      .post(`${this._baseURL}/${userId}/${scenCode}/fridge-phage`, strain)
            //.map((res: Response) => res.json())
            //.catch(this.handleError);
  }

    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
/*private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}*/
}
