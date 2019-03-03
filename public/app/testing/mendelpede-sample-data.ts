import { AdminStudent, Course, User, MendelpedeScenario, MendelpedeFridge, StudentMendelFridge, MendelpedePede, MendelpedeQuiz } from '../interfaces';

function createArray(l: number, v: any): any[]{
  return new Array(l).fill(v);
}

export var quiz: MendelpedeQuiz = {
  score: 4,
  submittedAnswers: [ "AA", "Aa", "Aa", "Aa", "AA", "AA", "Aa", "Aa" ],
  isAnswerCorrect: [ true, false, false, true, true, true, false, false ]
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
    instructors: [sampleInstr],
    level: 'all'
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
    }],
    level: 'graduate'
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
    lastName: 'ZTester',
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

export var listOfMendelScenarios: MendelpedeScenario[] = [
  {
  label: 'Test Scenario 1',
  shortCode: 'test1',
  scenType: 'scenario',
  ordOfScen: 1
},
  {
  label: 'Test Scenario 2',
  shortCode: 'test2',
  scenType: 'scenario',
  ordOfScen: 2
},
{
  label: 'Test Scenario 2',
  shortCode: 'quiz1',
  scenType: 'quiz',
  ordOfScen: 3
}
]

export var sampleScenario: MendelpedeScenario = listOfMendelScenarios[0];

export var listOfMendelpedes: MendelpedePede[] = [
  {id: 0,
   userId: userStudent.id,
   bugID: 0,
   scenCode: sampleScenario.shortCode,
   isFemale: 'F',
   genotype: [ 1, 1, 0 ],
   phenotype: [ "Yellow", "Red", "LightGreen", "2", "1" ]
  },
  {id: 1,
    userId: userStudent.id,
    bugID: 1,
    scenCode: sampleScenario.shortCode,
    isFemale: 'M',
    genotype: [ 1, 1, 0 ],
    phenotype: [ "Yellow", "Red", "LightGreen", "2", "1" ]
  },
  {id: 2,
    userId: userStudent.id,
    bugID: 2,
    scenCode: sampleScenario.shortCode,
    isFemale: 'F',
    genotype: [ 1, 1, 0 ],
    phenotype: [ "Yellow", "Red", "LightGreen", "2", "1" ]
  },
  {
    id: 3,
   userId: userStudent.id,
   bugID: 3,
   scenCode: sampleScenario.shortCode,
   isFemale: 'F',
   genotype: [ 1, 1, 0 ],
   phenotype: [ "Yellow", "Red", "LightGreen", "2", "1" ]
  },
  {
    id: 4,
   userId: userStudent.id,
   bugID: 4,
   scenCode: sampleScenario.shortCode,
   isFemale: 'F',
   genotype: [ 1, 1, 0 ],
   phenotype: [ "Yellow", "Red", "LightGreen", "2", "1" ]
  },
  {
    id: 5,
   userId: userStudent.id,
   bugID: 5,
   scenCode: sampleScenario.shortCode,
   isFemale: 'F',
   genotype: [ 1, 1, 0 ],
   phenotype: [ "Yellow", "Red", "LightGreen", "2", "1" ]
  },
  {
    id: 6,
    userId: userStudent.id,
    bugID: 6,
    scenCode: sampleScenario.shortCode,
    isFemale: 'F',
    genotype: [ 1, 1, 0 ],
    phenotype: [ "Yellow", "Red", "LightGreen", "2", "1" ]
  },
  {
    id: 7,
    userId: userStudent.id,
    bugID: 7,
    scenCode: sampleScenario.shortCode,
    isFemale: 'F',
    genotype: [ 1, 1, 0 ],
    phenotype: [ "Yellow", "Red", "LightGreen", "2", "1" ]
  },
  {
    id: 8,
    userId: userStudent.id,
    bugID: 8,
    scenCode: sampleScenario.shortCode,
    isFemale: 'F',
    genotype: [ 1, 1, 0 ],
    phenotype: [ "Yellow", "Red", "LightGreen", "2", "1" ]
  },
  {
    id: 9,
    userId: userStudent.id,
    bugID: 9,
    scenCode: sampleScenario.shortCode,
    isFemale: 'F',
    genotype: [ 1, 1, 0 ],
    phenotype: [ "Yellow", "Red", "LightGreen", "2", "1" ]
  },
  {
    id: 10,
    userId: userStudent.id,
    bugID: 10,
    scenCode: sampleScenario.shortCode,
    isFemale: 'F',
    genotype: [ 1, 1, 0 ],
    phenotype: [ "Yellow", "Red", "LightGreen", "2", "1" ]
  },
  {
    id: 11,
    userId: userStudent.id,
    bugID: 11,
    scenCode: sampleScenario.shortCode,
    isFemale: 'F',
    genotype: [ 1, 1, 0 ],
    phenotype: [ "Yellow", "Red", "LightGreen", "2", "1" ]
  },
  {
    id: 12,
    userId: userStudent.id,
    bugID: 12,
    scenCode: sampleScenario.shortCode,
    isFemale: 'F',
    genotype: [ 1, 1, 0 ],
    phenotype: [ "Yellow", "Red", "LightGreen", "2", "1" ]
  },
  {
    id: 13,
    userId: userStudent.id,
    bugID: 13,
    scenCode: sampleScenario.shortCode,
    isFemale: 'F',
    genotype: [ 1, 1, 0 ],
    phenotype: [ "Yellow", "Red", "LightGreen", "2", "1" ]
  },
  {
    id: 14,
    userId: userStudent.id,
    bugID: 14,
    scenCode: sampleScenario.shortCode,
    isFemale: 'F',
    genotype: [ 1, 1, 0 ],
    phenotype: [ "Yellow", "Red", "LightGreen", "2", "1" ]
  },
  {
    id: 15,
    userId: userStudent.id,
    bugID: 15,
    scenCode: sampleScenario.shortCode,
    isFemale: 'F',
    genotype: [ 1, 1, 0 ],
    phenotype: [ "Yellow", "Red", "LightGreen", "2", "1" ]
  },
  {
    id: 16,
    userId: userStudent.id,
    bugID: 16,
    scenCode: sampleScenario.shortCode,
    isFemale: 'F',
    genotype: [ 1, 1, 0 ],
    phenotype: [ "Yellow", "Red", "LightGreen", "2", "1" ]
  },
  {
    id: 17,
    userId: userStudent.id,
    bugID: 17,
    scenCode: sampleScenario.shortCode,
    isFemale: 'F',
    genotype: [ 1, 1, 0 ],
    phenotype: [ "Yellow", "Red", "LightGreen", "2", "1" ]
  },
  {
    id: 18,
    userId: userStudent.id,
    bugID: 18,
    scenCode: sampleScenario.shortCode,
    isFemale: 'F',
    genotype: [ 1, 1, 0 ],
    phenotype: [ "Yellow", "Red", "LightGreen", "2", "1" ]
  },
  {
    id: 19,
    userId: userStudent.id,
    bugID: 19,
    scenCode: sampleScenario.shortCode,
    isFemale: 'F',
    genotype: [ 1, 1, 0 ],
    phenotype: [ "Yellow", "Red", "LightGreen", "2", "1" ]
  }

]

const _fridges: any[] = [
  {
    id: 1,
    owner: listOfStudents[0],
    scenario: listOfMendelScenarios[0],
    scenarioDetails: 'student1 test1',
    accessGranted: true,
    pedeList: listOfMendelpedes.slice(0,6),
    genoFacts: [ { inherit: 'mendel', trait: 'SegColor', dom: 'Orange', interm: null, rec: 'LightGray' },
    { inherit: 'mendel', trait: 'EyeColor', dom: 'Red', interm: null, rec: 'Cyan' },
    { inherit: 'mendel', trait: 'NumSegments', dom: 2, interm: null, rec: 3 },
    { inherit: 'mendel', trait: 'DotColor', dom: 'Black', interm: null, rec: 'Black' },
    { inherit: 'mendel', trait: 'NumLegs', dom: 1, interm: null, rec: 1 } ]
  },
  {
    id: 2,
    owner: listOfStudents[1],
    scenario: listOfMendelScenarios[0],
    scenarioDetails: 'student1 test1',
    accessGranted: true,
    pedeList: listOfMendelpedes.slice(0,6),
    genoFacts: [ { inherit: 'mendel', trait: 'SegColor', dom: 'Orange', interm: null, rec: 'LightGray' },
    { inherit: 'mendel', trait: 'EyeColor', dom: 'Red', interm: null, rec: 'Cyan' },
    { inherit: 'mendel', trait: 'NumSegments', dom: 2, interm: null, rec: 3 },
    { inherit: 'mendel', trait: 'DotColor', dom: 'Black', interm: null, rec: 'Black' },
    { inherit: 'mendel', trait: 'NumLegs', dom: 1, interm: null, rec: 1 } ]
  },
  {
    id: 3,
    owner: listOfStudents[1],
    scenario: listOfMendelScenarios[1],
    scenarioDetails: 'student1 test1',
    accessGranted: true,
    pedeList: listOfMendelpedes.slice(0,6),
    genoFacts: [ { inherit: 'mendel', trait: 'SegColor', dom: 'Orange', interm: null, rec: 'LightGray' },
    { inherit: 'mendel', trait: 'EyeColor', dom: 'Red', interm: null, rec: 'Cyan' },
    { inherit: 'mendel', trait: 'NumSegments', dom: 2, interm: null, rec: 3 },
    { inherit: 'mendel', trait: 'DotColor', dom: 'Black', interm: null, rec: 'Black' },
    { inherit: 'mendel', trait: 'NumLegs', dom: 1, interm: null, rec: 1 } ]
  }
]

export var listOfFridges: MendelpedeFridge[] = _fridges.map((f)=>{
  return {
    id: f.id,
    userId: f.owner.userId,
    accessGranted: f.accessGranted,
    mendelpedeScenCode: f.scenario.shortCode,
    pedes: f.pedeList,
    genoFacts: f.genoFacts
  }
});

export var listOfStudentMendelFridges: StudentMendelFridge[] = _fridges.map((f)=>{
  return {
    owner: f.user,
    genoFacts: f.genoFacts,
    accessGranted: f.accessGranted,
    scenario: f.scenario,
    pedes: f.pedeList
  }
})

export const fridgeToCreate: MendelpedeFridge = {
  id: '1',
  userId: listOfStudents[0].userId,
  mendelpedeScenCode: listOfMendelScenarios[1].shortCode,
  accessGranted: listOfStudents[0].accessGranted[listOfMendelScenarios[1].shortCode], // false
  pedes: listOfMendelpedes.slice(0,6),
  genoFacts: 'Encrypted Genofacts'
}

export const fridgeToCreateQuiz: MendelpedeFridge = {
  id: '1',
  userId: listOfStudents[0].userId,
  mendelpedeScenCode: listOfMendelScenarios[1].shortCode,
  accessGranted: listOfStudents[0].accessGranted[listOfMendelScenarios[1].shortCode], // false
  pedes: listOfMendelpedes.slice(0,8),
  genoFacts: 'Encrypted Genofacts',
  firstTraitForQuiz: 'test'
}

export const scenarioGenoFacts: any[] = [ { inherit: 'mendel', trait: 'SegColor', dom: 'Orange', interm: null, rec: 'LightGray' },
{ inherit: 'mendel', trait: 'EyeColor', dom: 'Red', interm: null, rec: 'Cyan' },
{ inherit: 'mendel', trait: 'NumSegments', dom: 2, interm: null, rec: 3 },
{ inherit: 'mendel', trait: 'DotColor', dom: 'Black', interm: null, rec: 'Black' },
{ inherit: 'mendel', trait: 'NumLegs', dom: 1, interm: null, rec: 1 } ]
/*
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
  },
  'test3': {'0': _guesses1_0}
}
*/
