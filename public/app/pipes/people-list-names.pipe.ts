import { Pipe, PipeTransform } from '@angular/core';

/**
 * Format a list of user's or students frist and last name as "firstName lastName"
 * - When reverse is true, format as "lastName, firstName"
 * - Able to handle when only first or last name is set
 *
 * **Usage:** `{{ peopleList | peopleListNames:isReverse }}`
 *
 * @example <caption>Normal output :  </caption>
 * <code>[{firstName: "Mickey", lastName: "Mouse"}, {firstName: "Donald", lastName: "Duck"}]</code> becomes "Mickey Mouse, Donald Duck"
 * @example <caption>Reverse ouput :  </caption>
 * <code>[{firstName: "Mickey", lastName: "Mouse"}, {firstName: "Donald", lastName: "Duck"}]</code> becomes "Mouse, Mickey; Duck, Donald"
 * @example <caption>Missing names :  </caption>
 * <code>[{firstName: undefined, lastName: "Mouse"}, {firstName: "Donald", lastName: undefined}]</code> becomes "Mouse, Donald"
 */
@Pipe({name: 'peopleListNames'})
export class PeopleListNamesPipe implements PipeTransform {

  transform(personList: any[], reverse: boolean): string {
    let out = '';
    for(let person of personList){
      let fName: string = person.firstName || '';
      let lName: string = person.lastName || '';
      if(out !== '' && (fName !== '' || lName !== '')){
        out += (reverse ? '; ' : ', ');
      }
    if(reverse){
      out += lName + (fName!=='' && lName !== '' ? ', ' : '')+fName;
      } else {
    out += fName + (fName!=='' && lName !== '' ? ' ' : '')+lName;
      }
    }// end for
    return out
  }
}
