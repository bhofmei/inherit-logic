import { AdminStudent, Course, User, Scenario, Fridge, StudentFridge, StudentPhage, PlateResults } from '../interfaces';

function createArray(l: number, v: any): any[]{
  return new Array(l).fill(v);
}

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

export var userStudent2: User = {
  id: listOfStudents[1].userId,
  firstName: listOfStudents[1].firstName,
  lastName: listOfStudents[1].lastName,
  email: listOfStudents[1].email,
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
   phageType: 'reference',
   comment: 'wild type',
   mutationList: [],
   deletion: []
  },
  {id: 'a1',
   strainNum: 1,
   phageType: 'reference',
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
   guesses: [false, true, false]
  },
  {
    id: 'b1',
    strainNum: 4,
    phageType: 'user',
    mutationList: [89, -123],
    comment: 'user not submitted',
    deletion: [],
    submitted: false,
    parents: [{id: 'a0', strainNum: 0}],
    numParents: 1
  },
  {
    id: 'b2',
    strainNum: 5,
    phageType: 'user',
    mutationList: [299],
    comment: 'user submitted',
    deletion: [],
    submitted: true,
    parents: [{id: 'a1', strainNum: 1}, {id: 'a2', strainNum: 2}],
    numParents: 2
  },
  {
    id: 'a3',
   strainNum: 3,
   phageType: 'unknown',
   comment: 'del - no guesses',
   mutationList: [],
   deletion: [50, 90],
   numParents: 2,
   parents: [{id: 'a1', strainNum: 1}]
  },
  {
    id: 'b3',
  strainNum: 6,
  phageType: 'user',
  mutationList:[],
  comment: 'user WT',
  deletion: [],
  submitted: false,
  parents: [{id: 'a0', strainNum: 0}],
  numParents: 1},
  {
    id: 'a4',
  strainNum: 7,
  phageType: 'unknown',
  mutationList:[-201],
  comment: 'unknown FS',
  deletion: [],
  submitted: false,
  parents: [],
  numParents: 0}
]

const _fridges: any[] = [
  {
    user: listOfStudents[0],
    scenario: listOfScenarios[0],
    scenarioDetails: 'student1 test1',
    guesses: '{}',
    accessGranted: listOfStudents[0].accessGranted[listOfScenarios[0].scenCode], // true
    strains: listOfPhage.slice(1,5)
  },
  {
    user: listOfStudents[1],
    scenario: listOfScenarios[0],
    scenarioDetails: 'student2 test1',
    guesses: '{}',
    accessGranted: listOfStudents[1].accessGranted[listOfScenarios[0].scenCode], // true
    strains: [listOfPhage[1]]
  },
  {
    user: listOfStudents[1],
    scenario: listOfScenarios[1],
    scenarioDetails: 'student2 test1',
    guesses: '{}',
    accessGranted: listOfStudents[1].accessGranted[listOfScenarios[1].scenCode], // false
    strains: [listOfPhage[0], listOfPhage[5]]
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
  accessGranted: listOfStudents[0].accessGranted[listOfScenarios[1].scenCode], // false
  strains: listOfPhage.slice(0,2)
}

const _singlePermPlates: PlateResults[] = [
  {
    full: false,
    smallPlaque: createArray(1300, 0),
    largePlaque: [],
    genotypes: [{shifts: [], deletion: []}],
    parents: [{id: 'a0', strainNum: 0}]
  },
  {
    full: false,
    smallPlaque: [],
    largePlaque: createArray(1300,0).concat([1,2]),
    genotypes: [{shifts: [-77], deletion: []}, {shifts: [-77, -101], deletion: []}, {shifts: [-12, -77], deletion: []}],
    parents: [{id: 'a1', strainNum: 1}]
  }
]

const _singleRestPlates: PlateResults[] = [
  {
    full: false,
    smallPlaque: [0],
    largePlaque: [],
    genotypes: [{shifts: [-77, 145], deletion: []}],
    parents: [{id: 'a1', strainNum: 1}]
  }
]

export const singleInputPlates: any = {
  B: _singlePermPlates,
  K: _singleRestPlates
}

const _doublePermPlates: PlateResults[] = [
  {
    full: true,
    smallPlaque: [],
    largePlaque: [],
    genotypes: [],
    parents: [{id: 'a0', strainNum: 0}, {id: 'b3', strainNum: 6}]
  },
  {
    full: false,
    smallPlaque: createArray(649,0).concat([2,3,4,5,6,7,8]),
    largePlaque: createArray(826,1).concat([9,10,11,12,13,14,15,16,17,18,19,20]),
    genotypes: [{shifts: [], deletion: []}, {shifts: [299], deletion: []}].concat(createArray(7, {shifts: [], deletion: []})).concat(createArray(12, {shifts: [299], deletion: []})),
    parents: [{id: 'a0', strainNum: 0}, {id: 'b2', strainNum: 5}]
  }
]

const _doubleRestPlates: PlateResults[] = [
  {
    full: false,
    smallPlaque: [0,1,2,3,4,5,6,7],
    largePlaque: [],
    genotypes: [{shifts: [10, -77], deletion: []}].concat(createArray(7, {shifts: [-77, 180], deletion: []})),
    parents: [{id: 'a1', strainNum: 1}, {id: 'a4', strainNum: 7}]
  },
    {
    full: false,
    smallPlaque: createArray(701, 0).concat([1,2,3,4,5,6,7]),
    largePlaque: [],
    genotypes: [{shifts: [], deletion: []}].concat(createArray(7, {shifts: [-77, 180], deletion: []})),
    parents: [{id: 'a0', strainNum: 0}, {id: 'a4', strainNum: 7}]
  }
]

export const doubleInputPlates: any = {
  B: _doublePermPlates,
  K: _doubleRestPlates
}

const _plexer1: any = {
  0: [{smallPlaque: 0, largePlaque: 107, full: false},
      {smallPlaque: 54, largePlaque: 89, full: false}],
  1: [{smallPlaque: 38, largePlaque: 76, full: false},
     {smallPlaque: 176, largePlaque: 0, full: false}],
  2: [{smallPlaque: 75, largePlaque: 87, full: false},
      {smallPlaque: 0, largePlaque: 0, full: true}]
}

const _plexer2: any = {
    0: [{smallPlaque: 99, largePlaque: 0, full: false},
      {smallPlaque: 54, largePlaque: 0, full: false},
       {smallPlaque: 0, largePlaque: 0, full: true}],
  1: [{smallPlaque: 0, largePlaque: 0, full: false},
     {smallPlaque: 4, largePlaque: 0, full: false},
     {smallPlaque: 68, largePlaque: 0, full: false}]
}
export const plexerResult: any = {
  B: _plexer1,
  K: _plexer2
}

const _guesses1_0: boolean[] = createArray(5, false).concat(createArray(4, true)).concat(createArray(26, false));

const _guesses1_1: boolean[] = createArray(25, false).concat(createArray(8, true)).concat(createArray(2, false));

const _guesses2_0: boolean[] = createArray(3, false).concat(createArray(15, true)).concat(createArray(17, false));

const _guesses2_1: boolean[] = createArray(4, true).concat(createArray(31, false));

export const guesses: any = {
  'test1': {
    '0': _guesses1_0,
    '1': _guesses1_1
  },
  'test2': {
    '2': _guesses2_0,
    '3': _guesses2_1
  }
}
