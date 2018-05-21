import { Pipe, PipeTransform } from '@angular/core';

/*
 * Format a list of user's or students frist and last name as "firstName lastName"
 * When reverse is true, format as "lastName, firstName"
 * Handles when only first or last name is set
 * Usage:
 *   person | formatName:isReverse
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
