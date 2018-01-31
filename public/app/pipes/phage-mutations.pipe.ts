import { Pipe, PipeTransform } from '@angular/core';

import { Mutation } from '../interfaces/phage.interface';

@Pipe({name: 'phageMutations'})
export class PhageMutationsPipe implements PipeTransform {

  transform(mutations: Mutation[]): string {
    let out = '';
    //for(let y=0; y < guesses.length; y++){
    for(let x of mutations){
      out += (out === '' ? '' : ', ');
      let y = (x.kind === 'minusOne' ? '-1' : '+1');
      let z = x.location;
      out += y + ' at ' + z;
    }
    return out;
  }
}
