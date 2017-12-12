//import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

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

  performPlexer(data: any): Observable<any>{
    // data will have rowPhage, colPhage, lawn type, location, specials, capacity, scenarioData
    var res = this._http
    .post(`${this._baseURL}/plexer`, data);
    return res;
  }

}
