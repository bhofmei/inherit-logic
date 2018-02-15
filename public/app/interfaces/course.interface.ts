import { Student } from './student.interface';
import { _User } from './user.interface';

export interface Course {
  courseNum: string;
  description: string;
  students?: Student[];
  instructors?: _User[]
}
