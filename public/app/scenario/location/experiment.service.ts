//import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { plateInput, plateResults } from '../../interfaces';

@Injectable()
export class ExperimentService {
  private _baseURL = 'api/cricket';

  constructor(private _http: HttpClient) { }

  createPlate(plate: plateInput): Observable<plateResults>{
    // plate must have 1-2 phage IDs with numPhage [phage1,phage2], lawn type, location, specials, capacity, scenarioData (from fridge)
    // returns error OR {full, smallPlaque, largePlaque, genotypes}
    var res = this._http
    .post<plateResults>(`${this._baseURL}/plate`, plate)
    return res;
  }

  performPlexer(data: any): Observable<any>{
    // data will have rowPhage, colPhage, lawn type, location, specials, capacity, scenarioData
    var res = this._http
    .post(`${this._baseURL}/plexer`, data);
    return res;
  }

}
