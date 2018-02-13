import { Course, _User } from '../../interfaces';
import { sampleInstr } from './USERS';

export const listOfCourses: Course[] = [
  {
    courseNum: 'TEST001',
    description: 'This is a test course',
    instructors: [sampleInstr]
  },
  {
    courseNum: 'TEST002',
    description: 'Second test course',
    instructors: [sampleInstr]
  }
];

export const sampleCourse: Course = listOfCourses[0];
