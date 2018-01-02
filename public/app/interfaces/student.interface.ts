import { Course } from './course.interface';

export interface Student {
  name: string;
  email?: string;
  userId: number;
  accessGranted?: any;
  status?: boolean;

}


export interface AdminStudent extends Student {
  course: Course;
  role: string;
}
