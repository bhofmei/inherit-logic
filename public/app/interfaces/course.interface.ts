import { Student } from './student.interface';
import { _User } from './user.interface';

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
   * If the course is graduate or Undergraduate course
   */
  isGraduateCourse: boolean;
}
