import { AdminStudent, Course, User, Scenario, Fridge, StudentFridge, StudentPhage } from '../interfaces';

export var userAdmin: User = {
  id: 1,
  firstName: 'Admin',
  lastName: 'Tester',
  email: 'admin@test.com',
  role: 2 // admin
}

export var userInstr: User = {
  id: 2,
  firstName: 'In',
  lastName: 'Tester',
  email: 'in@test.com',
  role: 1
}

export var sampleInstr: AdminStudent = {
  userId: 4,
  firstName: 'Instr',
  lastName: 'Tester',
  email: 'instr@test.com',
  role: 'instr',
  course: null
};

export var instructorToAdd: AdminStudent = {
  userId: 5,
  firstName: 'Add',
  lastName: 'Tester',
  email: 'add@test.com',
  role: 'instr',
  course: null
}

export var listOfCourses: Course[] = [
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

export var sampleCourse: Course = listOfCourses[0];

export var listOfUsers: AdminStudent[] = [
  {
  userId: 1,
  firstName: 'Admin',
  lastName: 'Tester',
  email: 'admin@test.com',
  role: 'admin',
  course: null,
  accessGranted: {
    test1: false,
    test2: true
  }
 },
  {
  userId: 4,
  firstName: 'Instr',
  lastName: 'Tester',
  email: 'instr@test.com',
  role: 'instr',
  course: null
},
  {
    firstName: 'Student1',
    lastName: 'Tester',
    userId: 15,
    email: 'student1@test.com',
    course: listOfCourses[0],
    role: 'student',
    accessGranted: {
      test1: true,
      test2: false
    }
  },
  {
    firstName: 'Student2',
    lastName: 'Tester',
    userId: 16,
    email: 'student2@test.com',
    course: undefined,
    role: 'student',
    accessGranted: {
      test1: true,
      test2: false
    }
  },
  {
    firstName: 'Student3',
    lastName: 'Tester',
    userId: 17,
    email: 'student3@test.com',
    course: listOfCourses[1],
    role: 'student',
    accessGranted: {
      test1: true,
      test2: true
    }
  }
]

export var listOfStudents: AdminStudent[] = listOfUsers.slice(2,5)

export var userStudent: User = {
  id: listOfStudents[0].userId,
  firstName: listOfStudents[0].firstName,
  lastName: listOfStudents[0].lastName,
  email: listOfStudents[0].email,
  role: 0
}

export var listOfScenarios: Scenario[] = [
  {
  label: 'Test Scenario 1',
  scenCode: 'test1',
  purpose: 'This is the purpose',
  startingPoint: 'This is the starting point',
  relevance: 'This is the relevance'
},
  {
  label: 'Test Scenario 2',
  scenCode: 'test2',
  purpose: 'This is the purpose',
  startingPoint: 'This is the starting point',
  relevance: 'This is the relevance'
}
]

export var sampleScenario: Scenario = listOfScenarios[0];

export var listOfPhage: StudentPhage[] = [
  {id: 'a0',
   strainNum: 0,
   phageType: 'ref',
   comment: 'wild type',
   mutationList: [],
   deletion: []
  },
  {id: 'a1',
   strainNum: 1,
   phageType: 'ref',
   comment: 'mut',
   mutationList: [-77],
   deletion: []
  },
  {id: 'a2',
   strainNum: 2,
   phageType: 'unknown',
   comment: 'del',
   mutationList: [],
   deletion: [10, 40],
   guesses: [true, false, true]
  },
  {
    id: 'b1',
    strainNum: 101,
    phageType: 'user',
    mutationList: [89],
    comment: 'user not submitted',
    deletion: [],
    submitted: false
  },
  {
    id: 'b2',
    strainNum: 102,
    phageType: 'user',
    mutationList: [299],
    comment: 'user submitted',
    deletion: [],
    submitted: true
  }
]

const _fridges: any[] = [
  {
    user: listOfStudents[0],
    scenario: listOfScenarios[0],
    scenarioDetails: 'student1 test1',
    guesses: '',
    accessGranted: listOfStudents[0].accessGranted[listOfScenarios[0].scenCode],
    strains: listOfPhage.slice(1,5)
  },
  {
    user: listOfStudents[1],
    scenario: listOfScenarios[0],
    scenarioDetails: 'student2 test1',
    guesses: '',
    accessGranted: listOfStudents[1].accessGranted[listOfScenarios[0].scenCode],
    strains: [listOfPhage[1]]
  }
]

export var listOfFridges: Fridge[] = _fridges.map((f)=>{
  return {
    userId: f.user.userId,
    guesses: f.guesses,
    accessGranted: f.accessGranted,
    scenCode: f.scenario.scenCode,
    strains: f.strains,
    scenarioDetails: f.scenarioDetails
  }
});

export var listOfStudentFridges: StudentFridge[] = _fridges.map((f)=>{
  return {
    owner: f.user,
    guesses: f.guesses,
    accessGranted: f.accessGranted,
    scenario: f.scenario,
    strains: f.strains
  }
})

export const fridgeToCreate: Fridge = {
  userId: listOfStudents[0].userId,
  scenCode: listOfScenarios[1].scenCode,
  scenarioDetails: 'student1 test2',
  guesses: '',
  accessGranted: listOfStudents[0].accessGranted[listOfScenarios[1].scenCode],
  strains: listOfPhage.slice(0,2)
}


