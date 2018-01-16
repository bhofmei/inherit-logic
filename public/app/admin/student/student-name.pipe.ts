import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../../interfaces/student.interface';
/*
 * Format a user's or studets frist and last name as "firstName lastName"
 * When reverse is true, format as "lastName, firstName"
 * Handles when only first or last name is set
 * Usage:
 *   person | formatName:isReverse
*/
@Pipe({name: 'studentName'})
export class StudentNamePipe implements PipeTransform {

  transform(student: Student, reverse: boolean): string {
    let fName: string = student.firstName || '';
    let lName: string = student.lastName || '';
  if(reverse){
    return lName + (fName!=='' && lName !== '' ? ', ' : '')+fName;
  } else {
    return fName + (fName!=='' && lName !== '' ? ' ' : '')+lName;
  }
  }
}
