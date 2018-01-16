import { Pipe, PipeTransform } from '@angular/core';

//export const PersonName = function(person: any, reverse: boolean): string{
//   let fName: string = person.firstName || '';
//    let lName: string = person.lastName || '';
//  if(reverse){
//    return lName + (fName!=='' && lName !== '' ? ', ' : '')+fName;
//  } else {
//    return fName + (fName!=='' && lName !== '' ? ' ' : '')+lName;
//  }
//}
/*
 * Format a user's or studets frist and last name as "firstName lastName"
 * When reverse is true, format as "lastName, firstName"
 * Handles when only first or last name is set
 * Usage:
 *   person | formatName:isReverse
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
//    return PersonName(person, reverse);
  }
}
