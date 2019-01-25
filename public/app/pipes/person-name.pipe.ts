import { Pipe, PipeTransform } from '@angular/core';

/**
 * Format a user's or students frist and last name as "firstName lastName"
 * - When reverse is true, format as "lastName, firstName"
 * - Able to handle when only first or last name is set
 *
 * **Usage:** `{{ person | personName:isReverse }}`
 *
 * @example <caption>Normal output :  </caption>
 * <code>{firstName: "Mickey", lastName: "Mouse"}</code> becomes "Mickey Mouse"
 * @example <caption>Reverse output :  </caption>
 * <code>{firstName: "Mickey", lastName: "Mouse"}</code> becomes "Mouse, Mickey"
 * @example <caption>First name only :  </caption>
 * <code>{firstName: "Mickey", lastName: undefined}</code> becomes "Mickey"
*/
@Pipe({name: 'personName'})
export class PersonNamePipe implements PipeTransform {

  transform(person: any, reverse: boolean): string {
    let fName: string = person.firstName || '';
    let lName: string = person.lastName || '';
  if(reverse){
    return lName + (fName!=='' && lName !== '' ? ', ' : '')+fName;
  } else {
    return fName + (fName!=='' && lName !== '' ? ' ' : '')+lName;
  }
  }
}
