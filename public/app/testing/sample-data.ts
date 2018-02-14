import { AdminStudent, Course, User, Scenario } from '../interfaces';

export const sampleInstr: AdminStudent = {
  userId: 2,
  firstName: 'Instr',
  lastName: 'Tester',
  email: 'instr@test.com',
  role: 'instr',
  course: null
}

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

export const sampleAdmin: User = {
  id: 1,
  firstName: 'Admin',
  lastName: 'Tester',
  email: 'admin@test.com',
  role: 2 // admin
}

export const listOfStudents: AdminStudent[] = [
  {
    firstName: 'Student1',
    lastName: 'Last',
    userId: 15,
    email: 'student1@test.com',
    course: listOfCourses[0],
    role: 'student'
  },
  {
    firstName: 'Student2',
    lastName: 'Last',
    userId: 16,
    email: 'student2@test.com',
    course: listOfCourses[0],
    role: 'student'
  },
  {
    firstName: 'Student3',
    lastName: 'Last',
    userId: 17,
    email: 'student3@test.com',
    course: listOfCourses[1],
    role: 'student'
  }
]

export const sampleScenario: Scenario = {
  label: 'Test Scenario',
  scenCode: 'test',
  purpose: 'This is the purpose',
  startingPoint: 'This is the starting point',
  relevance: 'This is the relevance'
}
