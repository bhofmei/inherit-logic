import { Course } from './course.interface';
import { _User } from './user.interface';
//  firstName: string;
//  lastName: string;
//  userId: number;

/**
 * Information needed as a user using the app in scenarios
 */
export interface Student extends _User {
  email?: string;
  accessGranted?: any;
  status?: boolean;
  quiz?: string;
}

/**
 * Additional information needed for admin pages about a user/student
 */
export interface AdminStudent extends Student {
  course: Course;
  role: string;
}

/**
 * Function to sort students alphabetically by last name;
 * Uses first name for ties
 *
 * Makes the name lowercase before sorting to ensure sort is
 * case insensitive
 */
export const sortStudents = function(a,b){
    var comparison = a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase());
    if (comparison === 0) {
      return a.firstName.toLowerCase().localeCompare(b.firstName.toLowerCase());
    }
    return comparison;
}
