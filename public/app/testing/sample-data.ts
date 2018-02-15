import { AdminStudent, Course, User, Scenario } from '../interfaces';

export const userAdmin: User = {
  id: 1,
  firstName: 'Admin',
  lastName: 'Tester',
  email: 'admin@test.com',
  role: 2 // admin
}

export const userInstr: User = {
  id: 2,
  firstName: 'In',
  lastName: 'Tester',
  email: 'in@test.com',
  role: 1
}

export const userStudent: User = {
  id: 3,
  firstName: 'Student',
  lastName: 'Tester',
  email: 'student@test.com',
  role: 0
}

export const sampleInstr: AdminStudent = {
  userId: 4,
  firstName: 'Instr',
  lastName: 'Tester',
  email: 'instr@test.com',
  role: 'instr',
  course: null
}

export const instructorToAdd: AdminStudent = {
  userId: 5,
  firstName: 'Add',
  lastName: 'Tester',
  email: 'add@test.com',
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
    instructors: [{
      userId: userInstr.id,
      firstName: userInstr.firstName,
      lastName: userInstr.lastName,
      email: userInstr.email,
      role: 'instr',
      course: null
    }]
  }
];

export const sampleCourse: Course = listOfCourses[0];

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
