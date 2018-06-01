import { Pipe, PipeTransform } from '@angular/core';

/**
 * Format the textual presentation of a phage strain's frameshift mutations (if any)
 *
 * **Usage:** `{{ mutationList | phageMutations }}`
 *
 * @example <caption>One negative frameshift mutation:  </caption>
 * <code>[-87]</code> becomes "-1 at 87"
 * @example <caption>One positive frameshift mutation:  </caption>
 * <code>[163]</code> becomes "+1 at 163"
 * @example <caption>Multiple frameshift mutations:  </caption>
 * <code>[32, -208]</code> becomes "+1 at 32, -1 at 208"
 */
@Pipe({name: 'phageMutations'})
export class PhageMutationsPipe implements PipeTransform {

  transform(mutations: number[]): string {
    let out = '';
    for(let x of mutations){
      out += (out === '' ? '' : ', ');
      let y = (x > 0 ? '+1' : '-1');
      let z = Math.abs(x);
      out += y + ' at ' + z;
    }
    return out;
  }
}
