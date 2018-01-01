import { Student } from './student.interface';

export interface Course {
  courseNum: string;
  description: string;
  students?: [Student];
}
