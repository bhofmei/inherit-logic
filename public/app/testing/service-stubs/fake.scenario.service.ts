import { Observable } from 'rxjs/Observable';
import { Scenario, Fridge, FridgePhage, GenotypePhage } from '../../interfaces';
import { listOfScenarios, listOfFridges, fridgeToCreate, listOfPhage } from '../sample-data';

export class ScenarioServiceStub {

  private scenarios: Scenario[] = listOfScenarios;
  private fridges: Fridge[] = listOfFridges;

  private _findScenario(scenId: string): Scenario {
    let scenario = this.scenarios.find(h => h.scenCode === scenId);
    return scenario;
  }

  private _findFridge(userId: number, scenId: string): Fridge {
    let fridge = this.fridges.find((f)=>{
      return (f.userId === userId && f.scenCode === scenId)
    });
    return fridge;
  }

  private _findPhage(phageId: string): FridgePhage{
    let p = listOfPhage.find((f)=>{return f.id === phageId});
    return p;
  }


  getScenarioDetails = Observable.of(null);
  getGuesses = Observable.of(null);
  getScenarioCode = Observable.of(null);

   /*resetScenario() {
        this._scenarioDetails.next('');
        this._scenarioGuesses.next({});
        this._scenarioCode.next('');
    }

  setScenario(scenarioDetails: string, scenarioGuesses: string) {
        if (scenarioDetails !== null)
            this._scenarioDetails.next(scenarioDetails);
        if (scenarioDetails !== null)
            this._scenarioGuesses
              .next(JSON.parse(scenarioGuesses));
    }*/

  listScenarios(): Observable<Scenario[]> {
    return Observable.of(this.scenarios);
  }

  getScenario(scenId: string): Observable<Scenario>{
    let sc = this._findScenario(scenId);
    if(sc){
      return Observable.of(sc);
    } else {
      return Observable.throw({message: 'Failed to load scenario ' + scenId})
    }
  }
  saveDeletions(guesses: any, userId: number, scenId: string): Observable<any> {
    return Observable.of(null);
  }

  createFridge(userId: number, scenId: string): Observable<Fridge> {
    let f: Fridge = {
      userId: userId,
      scenCode: scenId,
      scenarioDetails: 'new fridge',
      guesses: '',
      accessGranted: false,
      strains: [listOfPhage[0]]
    }
    return Observable.of(f);
  }

  getFridge(userId: number, scenId: string): Observable<Fridge>{
    let fridge = this._findFridge(userId, scenId);
    if(fridge){
      return Observable.of(fridge);
    } else {
      return Observable.throw({message: 'No fridge for scenario/user', status: 307});
    }
  }

  addStrain(userId: number, scenId: string, strain: any): Observable<FridgePhage> {

    let newPhage: FridgePhage = {
      id: 'new-strain',
      strainNum: strain.strainNum,
      phageType: 'user',
      comment: ''
    }
    return Observable.of(newPhage)
  }

  updateStrain(userId: number, scenCode: string, strain: FridgePhage): Observable<FridgePhage> {
    let p = this._findPhage(strain.id);
    if(p){
      p.comment = strain.comment;
      return Observable.of(p)
    } else {
      return Observable.throw({message: 'Phage not found'});
    }
  }

   deleteStrain(userId: number, scenCode: string, strain: FridgePhage): Observable<any> {
     return Observable.of(null)
   }

}
