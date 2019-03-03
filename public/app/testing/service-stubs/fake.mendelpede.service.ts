
import { Observable } from 'rxjs';
//import { Scenario, Fridge, FridgePhage, GenotypePhage } from '../../interfaces';
import { AdminStudent, Course, User, MendelpedeScenario, MendelpedeFridge, StudentMendelFridge, MendelpedePede, MendelpedeQuiz } from '../../interfaces';
import { listOfMendelScenarios, listOfFridges, fridgeToCreateQuiz, fridgeToCreate, listOfMendelpedes, scenarioGenoFacts, quiz } from '../mendelpede-sample-data';
import * as _ from 'lodash';

export class MendelpedeServiceStub {

  private scenarios: MendelpedeScenario[] = listOfMendelScenarios;
  private fridges: MendelpedeFridge[] = listOfFridges;
  private scenarioGenoFacts: any = scenarioGenoFacts;
  private fridge: MendelpedeFridge = this.fridges[0];

  private _findScenario(scenId: string): MendelpedeScenario {
    let scenario = this.scenarios.find(h => h.shortCode === scenId);
    return scenario;
  }

  private _findFridge(userId: number, scenId: string): MendelpedeFridge {
    let fridge = this.fridges.find((f)=>{
      return (f.userId === userId && f.mendelpedeScenCode === scenId)
    });
    return fridge;
  }

  private _findMendelpede(pedeId: number): MendelpedePede{
    let p = listOfMendelpedes.find((f)=>{return f.id === pedeId});
    return p;
  }

  //getScenarioDetails = Observable.of('details');
  //getGuesses = Observable.of(this.guesses);
  getScenarioCode = Observable.of(listOfMendelScenarios[0].shortCode);
  getGenoFacts = Observable.of(this.scenarioGenoFacts);
  getFridge = Observable.of(fridgeToCreateQuiz);

   resetScenario() {
//        this._scenarioDetails.next('');
//        this._scenarioGuesses.next({});
//        this._scenarioCode.next('');
    }

  setScenario(scenarioGenoFacts: string) {
    this.scenarioGenoFacts = scenarioGenoFacts;
  }
  
  setFridge(fridge: MendelpedeFridge) {
    this.fridge = fridge;
  }

  listScenarios(): Observable<MendelpedeScenario[]> {
    return Observable.of(this.scenarios);
  }

  getScenario(scenShortCode: string): Observable<MendelpedeScenario>{
    let sc = this._findScenario(scenShortCode);
    if(sc){
      return Observable.of(sc);
    } else {
      return Observable.throw({message: 'Failed to load scenario ' + scenShortCode})
    }
  }

  saveDeletions(guesses: any, userId: number, scenId: string): Observable<any> {
    if(scenId === 'test3'){
      return Observable.throw({message: 'Error saving deletions'});
    } else {
    return Observable.of(_.cloneDeep(JSON.stringify(guesses)));
    }
  }

  createMendelFridge(userId: number, scenShortCode: string): Observable<MendelpedeFridge> {
    var f:any;
    if(!scenShortCode.includes('quiz')){
      f = _.cloneDeep(fridgeToCreate); 
    }else{
      f = _.cloneDeep(fridgeToCreateQuiz);
    }
    return Observable.of(f);
  }

  makeChildren(malePede: MendelpedePede, femalePede: MendelpedePede, genoFacts: string) : Observable<MendelpedePede[]>{
    return Observable.of(listOfMendelpedes);
  }

  insertPede(pede: MendelpedePede, fridge: MendelpedeFridge, scenShortCode: String): Observable<MendelpedeFridge>{
    let l = fridge.pedes.push(pede);
    return Observable.of(fridge);
  }

  calculateQuizScore(quizPedes: MendelpedePede[], studentAnswers: string[], quizFridgeId: string): Observable<MendelpedeQuiz> {
    return Observable.of(quiz);
  }

  getMendelFridge(userId: number, scenShortCode: string): Observable<MendelpedeFridge> {
    let fridge = this._findFridge(userId, scenShortCode);
    if(fridge){
      return Observable.of(fridge);
    } else {
      return Observable.throw({message: 'No fridge for scenario/user', status: 307});
    }
  }
  deletePede(userId: number, scenShortCode: string, pede: MendelpedePede): Observable<any> {
    /*let fridge = this._findFridge(userId, scenShortCode);
    if(!fridge){
      f = _.cloneDeep(fridgeToCreate); 
    }*/
    this.fridge.pedes.pop(); 
    return Observable.of(this.fridge);
  }

}
