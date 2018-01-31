import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'phageDeletions'})
export class PhageDeletionsPipe implements PipeTransform {

  transform(deletion: number[]): string {
    let out = '';
    let mLength = (deletion.length % 2 === 0 ? deletion.length : deletion.length -1);

    for(let i = 0; i < mLength; i+= 2){
      out += (i > 1 ? ', ' : '');
      out += deletion[i] + ' - ' + deletion[i+1];
    }

    return out;
  }
}
