import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'phageMutations'})
export class PhageMutationsPipe implements PipeTransform {

  transform(mutations: number[]): string {
    let out = '';
    //for(let y=0; y < guesses.length; y++){
    for(let x of mutations){
      out += (out === '' ? '' : ', ');
      let y = (x > 0 ? '-1' : '+1');
      let z = Math.abs(x);
      out += y + ' at ' + z;
    }
    return out;
  }
}
