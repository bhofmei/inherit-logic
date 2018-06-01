import { Pipe, PipeTransform } from '@angular/core';

/**
 * Format a list of user's or students frist and last name as "firstName lastName"
 * - When reverse is true, format as "lastName, firstName"
 * - Able to handle when only first or last name is set
 *
 * **Usage:** `{{ peopleList | peopleListNames:isReverse }}`
 *
 * @example <caption>Normal output :  </caption>
 * <code>[{firstName: "Mary", lastName: "One"}, {firstName: "Bob", lastName: "Two"}]</code> becomes "Mary One, Bob Two"
 * @example <caption>Reverse ouput :  </caption>
 * <code>[{firstName: "Mary", lastName: "One"}, {firstName: "Bob", lastName: "Two"}]</code> becomes "One, Mary; Two, Bob"
 * @example <caption>Missing names :  </caption>
 * <code>[{firstName: undefined, lastName: "One"}, {firstName: "Bob", lastName: undefined}]</code> becomes "One, Bob"
 */
@Pipe({name: 'peopleListNames'})
export class PeopleListNamesPipe implements PipeTransform {

  transform(personList: any[], reverse: boolean): string {
    let out = '';
    for(let person of personList){
      if(out !== ''){
        out += (reverse ? '; ' : ', ');
      }
      let fName: string = person.firstName || '';
      let lName: string = person.lastName || '';
    if(reverse){
      out += lName + (fName!=='' && lName !== '' ? ', ' : '')+fName;
      } else {
    out += fName + (fName!=='' && lName !== '' ? ' ' : '')+lName;
      }
    }// end for
    return out
  }
}
