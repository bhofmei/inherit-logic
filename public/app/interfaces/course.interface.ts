import { Student } from './student.interface';
import { _User } from './user.interface';

export const CourseLevels = ['all', 'graduate', 'undergraduate'];
/**
 * Information about a course
 */
export interface Course {
  /**
   * Course number
   */
  courseNum: string;
  /**
   * Description of the course
   */
  description: string;
  /**
   * List of students in the course, if any
   */
  students?: Student[];
  /**
   * Instructors of the course, if any
   */
  instructors?: _User[];

  /**
   * Course level: 'all', 'graduate', or 'undergraduate'
   */
  level: string;
}
