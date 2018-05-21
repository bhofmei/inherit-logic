import { Observable } from 'rxjs/Observable';
import { PlateInput, PlateResults, PlexerInput } from '../../interfaces';
import { singleInputPlates, doubleInputPlates, plexerResult } from '../sample-data';
import * as _ from 'lodash';


export class ExperimentServiceStub {

  createPlate(plate: PlateInput): Observable<PlateResults>{
    var results: PlateResults;
    if (plate.phage2 === null) {
      // single plate inputs
      let tmpPlates = singleInputPlates[plate.lawnType];
      let rPlate = tmpPlates.find(p => {return p.parents[0].id === plate.phage1.id})
      if(rPlate)
        results = rPlate;
      else
        return Observable.throw({message: 'cannot find plate'});
    } else {
      // two phage inputs
      let tmpPlates = doubleInputPlates[plate.lawnType];
      let rPlate = tmpPlates.find(p => {return p.parents[0].id === plate.phage1.id && p.parents[1].id === plate.phage2.id})
      if(rPlate)
        results = rPlate;
      else
        return Observable.throw({message: 'cannot find plate'});
    }
    return Observable.of(_.cloneDeep(results));
  }

  performPlexer(data: PlexerInput): Observable<any>{
    let results = plexerResult[data.lawnType];
    if(results){
      return Observable.of(results);
    } else {
      return Observable.throw({message: 'cannot find plate'});
    }
  }

}
