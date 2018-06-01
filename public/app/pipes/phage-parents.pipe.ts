import { Pipe, PipeTransform } from '@angular/core';
import { Phage } from '../interfaces/phage.interface';

/**
 * Format the textual presentation of a phage strain's parents
 * (if any) when viewing the dialog box for a phage
 *
 * The `numParents` variable is used to determine if one of the
 * parents had been deleted from the database when `parents.length != numParents`
 *
 * Note: the phage `strainNum` are 0-based but UI is 1-based so
 * the strain number is adjusted
 *
 * **Usage:** `{{parentsList | phageParents:numParents}}`
 *
 * @example <caption>One parent :  </caption>
 * <code>{parents: [{id: 'id1', strainNum: '4'}], numParents: 1}</code> becomes "Strain 5"
 * @example <caption>Two parents:  </caption>
 * <code>{parents: [{id: 'id1', strainNum: 4}, {id: 'id2', strainNum: 10}], numParents: 2}</code> becomes "Strains 5 and 11"
 * @example <caption>Two parents but missing one:  </caption>
 * <code>{parents: [{id: 'id3', strainNum: 8}], numParents: 2}</code> becomes "Strains 9 and ?"
 */
@Pipe({name: 'phageParents'})
export class PhageParentsPipe implements PipeTransform {

  transform(parents: Phage[], numParents: number): string {
    let out = '';
    if(numParents === undefined){
      numParents = parents.length
    }
    if(parents.length === 0){
      return out;
    }
    let sorted: Phage[] = parents.sort((n1, n2)=>{return n1.strainNum - n2.strainNum});
    let nums = sorted.map((phage)=>{return (phage.strainNum+1).toString()});

    if(sorted.length === 1 && numParents === 1){
      out = 'Strain ' + nums[0];
    } else if(sorted.length === 1 && numParents === 2){
      out = 'Strains ' + nums[0] + ' and ?';
    } else if(sorted.length === 2 && numParents === 2){
      out = 'Strains ' + nums[0] + ' and ' + nums[1];
    }
    return out;
  }
}
