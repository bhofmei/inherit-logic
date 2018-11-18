//import 'rxjs/Rx';
import { Observable ,  BehaviorSubject ,  Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MendelpedeScenario, MendelpedeFridge, MendelpedePede } from '../../interfaces';

/**
 * Scenario/fridge related functions that get/send data to the backend server
 */
@Injectable()
export class MendelpedeScenarioService {

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
    listScenarios(): Observable<MendelpedeScenario[]> {
      return this._http
          .get<MendelpedeScenario[]>(this._baseURL)
    }

  /**
   * The current scenario details which is needed when
   * performing crosses
   */
   // private _scenarioDetails = new BehaviorSubject<string>('');
   // getScenarioDetails = this._scenarioDetails.asObservable();
  /**
   * The current scenario guesses
   */
   private _scenarioGenoFacts = new BehaviorSubject<any>({});
   getGenoFacts = this._scenarioGenoFacts.asObservable();

   /**
    * Quiz Pedes
    */
   private _quizPedes = new BehaviorSubject<any>([]);
   getQuizPedes = this._quizPedes.asObservable();
  
  /**
   * Quiz traits
   */
   private _firstTraitForQuiz = new BehaviorSubject<string>("");
   getFirstTraitForQuiz = this._firstTraitForQuiz.asObservable();

   private _fridgeId = new BehaviorSubject<string>("");
   getFridgeId = this._fridgeId.asObservable();

   private _isQuizDone = new BehaviorSubject<boolean>(false);
   isQuizDone = this._isQuizDone.asObservable();
  /**
   * The current scenario code
   *
   * Used by fridge and location components
   * to get the code without the route
   */
    // private _scenarioCode = new BehaviorSubject<string>('');
    // getScenarioCode = this._scenarioCode.asObservable();



  /**
   * Reset the save scenario stuff:
   * scenarioDetails, scenarioGuesses, and scenarioCode
   *
   * Used when navigating away from scenario component
   */
  /*resetScenario() {
        this._scenarioDetails.next('');
        this._scenarioGuesses.next({});
        this._scenarioCode.next('');
    }*/

  /**
  * Set the scenario details and scenario guesses
  *
  * @param {string} scenarioDetails - scenario details
  * - necessary for performing experiments
  * @param {string} scenarioGuesses current scenario guesses
  */
  setScenario(scenarioGenoFacts: string) {
        if (scenarioGenoFacts !== null)
            this._scenarioGenoFacts
              .next(scenarioGenoFacts);
    }
  /**
   * set first trait fro quiz
   */
  setFirstTraitForQuiz(firstTraitForQuiz: string){
    if (this._firstTraitForQuiz != null){
      this._firstTraitForQuiz
      .next(firstTraitForQuiz);
    }
  }
  
  /**
   * set the pedes for quiz
   */
  setQuizPedes(quizPedes: MendelpedePede[]) {
    if (this._quizPedes !== null){
      this._quizPedes.next(quizPedes);
    }
  }

  /**
   * set the fridge id
   */
  setFridgeId(id: string) {
    if (this._fridgeId !== null){
      this._fridgeId.next(id);
    }
  }

  /**
   * Is quiz done?
   */
  setQuizDone(quizDone: boolean) {
    this._isQuizDone.next(quizDone);
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
 * @param {string} scenId scenario identifier
 *
 * @returns {Scenario}
 * - scenario information
 * - or error "Failed to load scenario <scenId>" if scenario doesn't exist
 * - or other server/database error
 */
  getScenario(scenShortCode: string): Observable<MendelpedeScenario> {
      this._scenarioCode.next(scenShortCode);
      return this._http
          .get<MendelpedeScenario>(`${this._baseURL}/${scenShortCode}`);
  }
  
  /**
   * Create a new fridge for the user/scenario
   *
   * @param {number} userId userId of logged in user
   * @param {string} scenId scenario code of current scenario
   *
   * @returns {Observable<Fridge>}
   * - newly created fridge
   * - or error "Unable to create new phage for scenario" if issue create phage
   * - or error "Unable to save new fridge" if couldn't create
   * - or other server/database error
   */
  createMendelFridge(userId: number, scenShortCode: string): Observable<MendelpedeFridge> {
    //console.log('userid...'+userId+' scenario short code:..'+scenShortCode);
    return this._http.get<MendelpedeFridge>(`${this._baseURL}/${userId}/${scenShortCode}/new-fridge`);
  }

  /**
   * Create a new fridge for the user/scenario
   *
   * @param {number} userId userId of logged in user
   * @param {string} scenId scenario code of current scenario
   *
   * @returns {Observable<Fridge>}
   * - newly created fridge
   * - or error "Unable to create new phage for scenario" if issue create phage
   * - or error "Unable to save new fridge" if couldn't create
   * - or other server/database error  /api/mendelpede/:userId/:scenShortCode/:malePedeId/:femalePedeId
   */
  makeChildren(malePede: MendelpedePede, femalePede: MendelpedePede, genoFacts: string): Observable<MendelpedePede[]> {
    
    //console.log(genoFacts);
    //console.log(typeof genoFacts);
    var genoFactsObj = {
      'genoFacts': genoFacts,
      'malePede': malePede,
      'femalePede': femalePede 
    }
    return this._http.post<MendelpedePede[]>(`${this._baseURL}/make-children`, genoFactsObj);
  }

  insertPede(pede: MendelpedePede, fridge: MendelpedeFridge): Observable<MendelpedeFridge> {
    //console.log(pede);
    //console.log(fridge);
    let isF: boolean = pede.isFemale==='F'?true:false
    var insertObj = {
      'fridgeId' : fridge.id,
      'pedeToBeInserted' : {
        bugID : pede.bugId,
        genotype : pede.genotype,
        isFemale : isF,
        phenotype: pede.phenotype,
      }
    }
    //console.log(insertObj);
    return this._http.post<MendelpedeFridge>(`${this._baseURL}/add-pede`, insertObj);
  }

  calculateQuizScore(quizPedes: MendelpedePede[], studentAnswers: string[], quizFridgeId: string): Observable<boolean[]> {
    var scoreHelperObj = {
      quizPedes: quizPedes,
      studentAnswers: studentAnswers,
      fridgeId : quizFridgeId
    }
    return this._http.post<boolean[]>(`${this._baseURL}/calculate-score`, scoreHelperObj);
  }

    /**
   * Get an existing fridge for user/scenario
   *
   * @param {number} userId userId of logged in user
   * @param {string} scenId scenario code of current scenario
   *
   * @returns {Observable<Fridge>}
   * - existing fridge
   * - or error "No fridge for scenario/user" if fridge does not exist
   * - or other server/database error
   */
  getMendelFridge(userId: number, scenShortCode: string): Observable<MendelpedeFridge> {
    //console.log('userId--'+userId+' Scen short code: '+scenShortCode);
    return this._http.get<MendelpedeFridge>(`${this._baseURL}/${userId}/${scenShortCode}`);
    
  }

  /**
   * Send updated guesses for the scenario to be saved in database
   *
   * @param {any} guesses string of updated guesses
   * @param {number} userId userId of logged in user
   * @param {string} scenId scenario code of current scenario
   *
   * @returns {Observable<any>}
   * - updated guesses
   * - or error "Failed to find fridge" if fridge doesn't exist
   * - or error "Could not save new guesses" if couldn't update
   * - or other server/database error
   */
   /* saveDeletions(guesses: any, userId: number, scenId: string): Observable<any> {
        return this._http
            .post(`${this._baseURL}/${userId}/${scenId}/deletions`, guesses);
    }*/

  /**
   * Create a new fridge for the user/scenario
   *
   * @param {number} userId userId of logged in user
   * @param {string} scenId scenario code of current scenario
   *
   * @returns {Observable<Fridge>}
   * - newly created fridge
   * - or error "Unable to create new phage for scenario" if issue create phage
   * - or error "Unable to save new fridge" if couldn't create
   * - or other server/database error
   */
   /* createFridge(userId: number, scenId: string): Observable<Fridge> {
        return this._http.get<Fridge>(`${this._baseURL}/${userId}/${scenId}/new-fridge`);
    }*/

  /**
   * Get an existing fridge for user/scenario
   *
   * @param {number} userId userId of logged in user
   * @param {string} scenId scenario code of current scenario
   *
   * @returns {Observable<Fridge>}
   * - existing fridge
   * - or error "No fridge for scenario/user" if fridge does not exist
   * - or other server/database error
   */
  /*  getFridge(userId: number, scenId: string): Observable<Fridge> {
        var res = this._http
            .get<Fridge>(`${this._baseURL}/${userId}/${scenId}`);
        return res;
    }*/

  /**
   * Add a new phage strain to the fridge;
   * Server uses userId and scenCode to find the fridge
   *
   * @param {number} userId userId of logged in user
   * @param {string} scenId scenario code of current scenario
   * @param {any} strain - new phage to add to fridge
   * - has strainNum, mutationList, and deletion
   *
   * @returns {Observable<FridgePhage>}
   * - newly saved phage
   * - or error "User not found" if user not found
   * - or error "Failed to load scenario <scenId>" if scenario not found
   * - or error "Failed to find fridge" if fridge doesn't exist
   * - or other server/database error
   */
   /* addStrain(userId: number, scenId: string, strain: any): Observable<FridgePhage> {
        return this._http
            .post<FridgePhage>(`${this._baseURL}/${userId}/${scenId}/fridge-phage`, strain)
    } */

  /**
   * Update details/information about an existing phage in the fridge
   *
   * @param {number} userId userId of logged in user
   * @param {string} scenId scenario code of current scenario
   * @param {FridgePhage} strain - strain to update
   * - use strain `id` to specify strain and send updated info
   *
   * @returns {Observable<FridgePhage>}
   * - updated strain
   * - or error "Phage not found" if strain doesn't exist
   * - or other server/database error
   */
   /* updateStrain(userId: number, scenId: string, strain: FridgePhage): Observable<FridgePhage> {
        let strainId = strain.id;
        return this._http
            .post<FridgePhage>(`${this._baseURL}/${userId}/${scenId}/${strainId}`, strain)
    } */

  /**
   * Delete a strain from the fridge (and database)
   *
   * @param {number} userId userId of logged in user
   * @param {string} scenId scenario code of current scenario
   * @param {FridgePhage} strain - the strain to delete
   * - use strain `id` to specify which strain to delete
   *
   * @returns {any}
   * - the strain just deleted
   * - or error "Phage not found" if strain doesn't exist
   * - or error "Failed to find fridge" if fridge doesn't exist
   * - or error "Unable to remove strain from fridge" if couldn't delete
   * - or other server/database error
   */
  /*  deleteStrain(userId: number, scenId: string, strain: FridgePhage): Observable<any> {
        let strainId = strain.id;
        return this._http
            .delete(`${this._baseURL}/${userId}/${scenId}/${strainId}`)
    }*/
}
