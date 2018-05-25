import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlateInput, PlateResults, PlexerInput } from '../../interfaces';

/**
 * This service performs the plate and plexer experiments used
 * when crossing or mutating phage strains, i.e. performing a
 * virtual experiment
 */
@Injectable()
export class ExperimentService {
  /**
   * Leading backend URL path
   */
  private _baseURL = 'api/cricket';

  /**
   * Construct the service
   *
   * @param {HttpClient} _http Anguar mechanism to make calls to backend server
   */
  constructor(private _http: HttpClient) { }

  /**
   * With valid input for the plate, calls the backend to generate
   * a new plate that is displayed in the lab room
   *
   * @param {PlateInput} plate - information needed to generate the new plate
   * - Includes 1-2 phage with numPhage each, lawn type, location, specials, plate capacity, and scenario data
   *
   * @returns {Observable<PlateResults>} - newly generate plate with info about parents and (is plate full or list of small and large plaques)
   * - if error
   */
  createPlate(plate: PlateInput): Observable<PlateResults>{
    var res = this._http
    .post<PlateResults>(`${this._baseURL}/plate`, plate)
    return res;
  }

  /**
   * With valid input, call the backend to generate valid results for the plexer
   *
   * @param {PlexerInput} data information needed to generate the
   * plexer results
   * - Inputs a list of phage Ids for the rows and columns, E. coli
   * lawn type, location, specials, individual plexer plate capacity
   * and scenario data
   *
   * @returns {Observable<any>} the results of the plexer as a 2D array
   * were each cell in the array represents a plate and has
   * is plate full or counts of small/large plaques
   */
  performPlexer(data: PlexerInput): Observable<any>{
    // data will have rowPhage, colPhage, lawn type, location, specials, capacity, scenarioData
    var res = this._http
    .post(`${this._baseURL}/plexer`, data);
    return res;
  }

}
