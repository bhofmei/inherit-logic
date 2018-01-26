import { Pipe, PipeTransform } from '@angular/core';

import { ScenarioGlobals } from '../scenario/scenario.globals';

@Pipe({name: 'phageGuesses'})
export class PhageGuessesPipe implements PipeTransform {

  transform(guesses: boolean[]): string {
    let stepSize = ScenarioGlobals.deletionGuessLength;
    let out = '';
    let x=-1;
    //for(let y=0; y < guesses.length; y++){
    for(let i in guesses){
      let y: number = +i;
      // start new deletion
      if(x < 0 && guesses[y]){
        x = stepSize * y;
      } // end a deletion
      else if(x > 0 && guesses[y] === false){
        let z = (stepSize * y);
        out += (out === '' ? '' : ', ');
        out += x + ' - ' + z;
        x = -1;
      }
    }
    // check for the last possible deletion
    if(x != -1){
      out += (out === '' ? '' : ', ');
      out += x + ' - ' + ScenarioGlobals.geneLength;
    }
    if(out === ''){
      return 'None';
    } else {
    return out;
    }
  }
}
