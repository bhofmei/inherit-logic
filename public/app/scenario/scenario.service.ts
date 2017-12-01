//import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Injectable } from '@angular/core';
//import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ScenarioService {
    private _baseURL = 'api/cricket';
    private scenarioDetails = new BehaviorSubject<string>("");
    getScenarioDetails = this.scenarioDetails.asObservable();


    constructor(private _http: HttpClient) {
    }

    listScenarios(): Observable<any> {
        return this._http
            .get(this._baseURL)
            //.map((res: Response) => res.json())
            //.catch(this.handleError);
    }

  getScenario(scenId: string): Observable<any>{
    return this._http
            .get(`${this._baseURL}/${scenId}`)
            //.map((res: Response) => res.json())
            //.catch(this.handleError);
  }

  resetScenario(){
    this.scenarioDetails.next('');
  }

  getFridge(userId: number, scenId: string): Observable<any> {
      var res = this._http
            .get(`${this._baseURL}/${userId}/${scenId}`);
      res.subscribe((dat: any)=>{
        this.scenarioDetails.next(dat.scenarioDetails);
      });
      return res;
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
    // strains has strainNum, mutationList, deletion
    // returns new phage
    return this._http
      .post(`${this._baseURL}/${userId}/${scenCode}/fridge-phage`, strain)
            //.map((res: Response) => res.json())
            //.catch(this.handleError);
  }

  updateStrain(strain: any, userId: number, scenCode: string): Observable<any>{
    let strainId = strain._id;
    return this._http
    .post(`${this._baseURL}/${userId}/${scenCode}/${strainId}`, strain)
  }

  deleteStrain(strain: any, userId: number, scenCode: string): Observable<any>{
    let strainId = strain._id;
    return this._http
    .delete(`${this._baseURL}/${userId}/${scenCode}/${strainId}`)
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
