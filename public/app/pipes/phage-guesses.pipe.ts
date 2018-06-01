import { Pipe, PipeTransform } from '@angular/core';

import { ScenarioGlobals } from '../scenario/scenario.globals';

/**
 * Format the textual presentation of the deletion guessses for
 * a user's phage strain; uses a [scenario global]{@link
 * ScenarioGlobals} variable `deletionGuessLength` to determine
 * the ranges
 *
 * **Usage:** `{{ guessList | phageGuesses }}`
 *
 * @example <caption>One deletion guess:  </caption>
 * <code>[false, true, true, true, false, ...]</code> becomes "10-40"
 * @example <caption>No deletion guesses:  </caption>
 * <code>[false, ..., false]</code> becomes "None"
 */

@Pipe({name: 'phageGuesses'})
export class PhageGuessesPipe implements PipeTransform {

  transform(guesses: boolean[]): string {
    let stepSize = ScenarioGlobals.deletionGuessLength;
    let out = '';
    let x=-1;
    for(let i in guesses){
      let y: number = +i;
      // start new deletion
      if(x < 0 && guesses[y]){
        x = stepSize * y;
      } // end a deletion
      else if(x >= 0 && guesses[y] === false){
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
