//import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
//import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import { Router } from '@angular/router';

@Injectable()
export class ExperimentService {
  private _baseURL = 'api/cricket';

  constructor(private _http: HttpClient) { }

  createPlate(plate: any): Observable<any>{
    // plate must have 1-2 phage IDs with numPhage [phage1,phage2], lawn type, location, specials, capacity, scenarioData (from fridge)
    // returns error OR {full, smallPlaque, largePlaque, genotypes}
    var res = this._http
    .post(`${this._baseURL}/plate`, plate)
    return res;
    //.map((res: Response)=>{ res.json()})
    //.catch(this.handleError)
  }

}
