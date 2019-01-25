import { Pipe, PipeTransform } from '@angular/core';

/**
 * Format the textual presentation of a phage strain's deletions (if any)
 *
 * **Usage:** `{{ deletionlist | phageDeletions }}`
 *
 * @example <caption>One deletion:  </caption>
 * <code>[50,145]</code> becomes "50 - 145"
 * @example <caption>Multiple deletions:  </caption>
 * <code>[50, 140, 190, 260]</code> becomes "50 - 140, 190 - 260"
 */
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
