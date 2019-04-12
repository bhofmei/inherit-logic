//import 'rxjs/Rx';
import { Observable ,  BehaviorSubject ,  Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MendelpedeScenario, MendelpedeFridge, MendelpedePede, MendelpedeQuiz } from '../../interfaces';

/**
 * Scenario/fridge related functions that get/send data to the backend server
 */
@Injectable()
export class MendelpedeScenarioService {
  /**
   * make calls to backend with this prefix
   */
  private _baseURL = 'api/mendelpede';
  /**
   * Construct the service
   *
   * @param {HttpClient} _http Anguar mechanism to make calls to backend server
   */
  constructor(private _http: HttpClient) {}

  /**
  * List available scenarios
  *
  * @returns {Observable<Scenario[]>} list of scenarios
  */
  listScenarios(courseLevel: string): Observable<MendelpedeScenario[]> {
    var body = {level: courseLevel};
    return this._http
        .post<MendelpedeScenario[]>(this._baseURL, body);
  }

  /**
   * genofacts of the scenario
   */
  private _scenarioGenoFacts = new BehaviorSubject<any>({});
  getGenoFacts = this._scenarioGenoFacts.asObservable();
  
  /**
   * Set Fridge: to be used by Quiz component
   */
  private _fridge = new BehaviorSubject<any>({});
  getFridge = this._fridge.asObservable();

  /**
  * Set the scenario details and scenario guesses
  *
  * @param {string} scenarioGenoFacts - scenario genofacts
  */
  setScenario(scenarioGenoFacts: string) {
        if (scenarioGenoFacts !== null)
            this._scenarioGenoFacts
              .next(scenarioGenoFacts);
  }

  /**
   * @param {MendelpedeFridge} fridge Fridge to be set
   */
  setFridge(fridge: MendelpedeFridge) {
    this._fridge.next(fridge);
  }

  /**
   * The current scenario code
   *
   * Used by components
   * to get the code without the route
   */
  private _scenarioCode = new BehaviorSubject<string>('');
  getScenarioCode = this._scenarioCode.asObservable();

  /**
  * Get information about a specific scenario
  *
  * @param {string} scenShortCode scenario identifier
  *
  * @returns {Observable<MendelpedeScenario>}
  * - scenario information
  * - or error "Failed to load scenario <scenShortCode>" if scenario doesn't exist
  * - or other server/database error
  */
  getScenario(scenShortCode: string): Observable<MendelpedeScenario> {
      this._scenarioCode.next(scenShortCode);
      return this._http
          .get<MendelpedeScenario>(`${this._baseURL}/${scenShortCode}`);
  }

  /**
   * Create a new Mendel fridge for the user/scenario
   *
   * @param {number} userId userId of logged in user
   * @param {string} scenId scenario code of current scenario
   *
   * @returns {Observable<MendelpedeFridge>}
   * - newly created mendel fridge
   * - or error "Unable to create new phage for scenario" if issue create phage
   * - or error "Unable to save new fridge" if couldn't create
   * - or other server/database error
   */
  createMendelFridge(userId: number, scenShortCode: string): Observable<MendelpedeFridge> {
    //console.log('userid...'+userId+' scenario short code:..'+scenShortCode);
    return this._http.get<MendelpedeFridge>(`${this._baseURL}/${userId}/${scenShortCode}/new-fridge`);
  }

  /**
   * Create 20 childrens for female and male mendelpedes
   *
   * @param {MendelpedePede} malePede male mendelpede
   * @param {MendelpedePede} femalePede female mendelpede
   * @param {string} genoFacts genofacts of the current fridge
   *
   * @returns {Observable<MendelpedePede[]>}
   * - children mendelpedes returned by genetics controller
   */
  makeChildren(malePede: MendelpedePede, femalePede: MendelpedePede, genoFacts: string): Observable<MendelpedePede[]> {
    var genoFactsObj = {
      'genoFacts': genoFacts,
      'malePede': malePede,
      'femalePede': femalePede
    }
    return this._http.post<MendelpedePede[]>(`${this._baseURL}/make-children`, genoFactsObj);
  }

  /**
   * 
   * @param {MendelpedePede} pede - mendelpede to be inserted 
   * @param {MendelpedeFridge} fridge - mendel fridge 
   * @param scenShortCode - scenario identifier
   * @returns {MendelpedeFridge}
   * - returns mendel fridge after inserting the mendelpede 
   */
  insertPede(pede: MendelpedePede, fridge: MendelpedeFridge, scenShortCode: String): Observable<MendelpedeFridge> {
    let isF: boolean = pede.isFemale==='F'?true:false
    var insertObj = {
      'fridgeId' : fridge.id,
      'pedeToBeInserted' : {
        bugID : pede.bugID,
        genotype : pede.genotype,
        isFemale : isF,
        phenotype: pede.phenotype,
      }
    }
    return this._http.post<MendelpedeFridge>(`${this._baseURL}/${scenShortCode}/add-pede`, insertObj);
  }

  /**
   * Calculate quiz score from submitted answers
   * @param quizPedes - mendelpedes on which the quiz was created
   * @param studentAnswers - answers of the student
   * @param quizFridgeId - fridge id of the quiz
   * @returns {MendelpedeQuiz} - mendelpedequiz object which has aspects like score, graded 
   * student answers
   */
  calculateQuizScore(quizPedes: MendelpedePede[], studentAnswers: string[], quizFridgeId: string): Observable<MendelpedeQuiz> {
    var scoreHelperObj = {
      quizPedes: quizPedes,
      studentAnswers: studentAnswers,
      fridgeId : quizFridgeId
    }
    return this._http.post<MendelpedeQuiz>(`${this._baseURL}/calculate-score`, scoreHelperObj);
  }

    /**
   * Get an existing mendel fridge for user/scenario
   *
   * @param {number} userId userId of logged in user
   * @param {string} scenShortCode scenario code of current scenario
   *
   * @returns {Observable<MendelpedeFridge>}
   * - existing fridge
   * - or error "No fridge for scenario/user" if fridge does not exist
   * - or other server/database error
   */
  getMendelFridge(userId: number, scenShortCode: string): Observable<MendelpedeFridge> {
    //console.log('userId--'+userId+' Scen short code: '+scenShortCode);
    return this._http.get<MendelpedeFridge>(`${this._baseURL}/${userId}/${scenShortCode}`);

  }

  /**
   * Delete the mendelpede
   * @param userId - user id
   * @param scenShortCode - scenario identifier
   * @param pede - mendelpede to be deleted
   */
  deletePede(userId: number, scenShortCode: string, pede: MendelpedePede): Observable<any> {
    let mendelPedeId = pede.id;
    return this._http
        .delete(`${this._baseURL}/${userId}/${scenShortCode}/${mendelPedeId}`)
  }
}
