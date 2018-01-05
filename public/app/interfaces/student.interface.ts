import { Course } from './course.interface';

export interface Student {
  firstName: string;
  lastName: string;
  email?: string;
  userId: number;
  accessGranted?: any;
  status?: boolean;
}

export interface AdminStudent extends Student {
  course: Course;
  role: string;
}

export const sortStudents = function(a,b){
    var comparison = a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase());
    if (comparison === 0) {
      return a.firstName.toLowerCase().localeCompare(b.firstName.toLowerCase());
    }
    return comparison;
}
