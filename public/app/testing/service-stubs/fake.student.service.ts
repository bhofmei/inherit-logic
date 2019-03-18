
import { Observable } from 'rxjs';
import { AdminStudent, StudentFridge, StudentMendelFridge } from '../../interfaces';
import { listOfUsers, listOfStudentFridges, listOfScenarios } from '../sample-data';
import { listOfMendelScenarios, listOfStudentMendelFridges, listOfFridges, quiz} from '../mendelpede-sample-data';
import * as _ from 'lodash';
import { listenToElementOutputs } from '@angular/core/src/view/element';
// AdminStudent: firstName, lastName, userId, email?, accessGranted?, status?, course, role
// StudentFridge: owner, scenario, strains?, accessGranted?, guesses?

export class StudentServiceStub {
  private students: AdminStudent[] = listOfUsers;
  _findStudent(id: number): AdminStudent {
    let student = this.students.find(h => h.userId === id);
    return student;
  }

  listStudents(adminId: number): Observable<AdminStudent[]>{
    return Observable.of(this.students);
  }

  getStudent(adminId: number, studentId: number): Observable<AdminStudent>{
    let student = this._findStudent(studentId);

    if(student){
      return Observable.of(student);
    } else {
      return Observable.throw({message: 'User not found'})
    }
  }

  setStudentRole(adminId: number, studentId: number, role: string): Observable<any>{
    if(role !== 'admin' && role !== 'instr' && role !== 'student'){
      return Observable.throw({message: 'Value "'+role+'" is not a valid role'})
    }
    let student = this._findStudent(studentId);
    if(student){
      let newStudent = _.cloneDeep(student);
      newStudent.role = role;
      return Observable.of(newStudent);
    } else {
      return Observable.throw({message: 'User not found'})
    }
  }

  deleteStudent(adminId: number, studentId: number): Observable<any>{
    return this.getStudent(adminId, studentId);
  }

  getFridge(adminId: number, studentId: number, scenId: string): Observable<StudentFridge>{
    let student = this._findStudent(studentId);
    let scenario = listOfScenarios.find(h => h.scenCode === scenId);
    if(student===null || student === undefined){
      return Observable.throw({message: 'User not found'})
    }
    let fakeFridge: StudentFridge = {
      owner: student,
      scenario: scenario
    }
    let studentFridges = listOfStudentFridges.filter((f)=>{return f.owner.userId === studentId});
    if(studentFridges.length === 0){
      return Observable.of(fakeFridge);
    }
    let fridge = studentFridges.find((f)=>{
      return f.scenario.scenCode === scenId
    });
    if(fridge){
      return Observable.of(fridge)
    } else {
      return Observable.of(fakeFridge);
    }
  }

  getMendelFridge(adminId: number, studentId: number, scenId: string): Observable<StudentMendelFridge>{
    
    let student = this._findStudent(studentId);
    let scenario = listOfMendelScenarios.find(h => h.shortCode === scenId);
    if(student===null || student === undefined){
      return Observable.throw({message: 'User not found'})
    }
    let fakeFridge: StudentMendelFridge = {
      owner: student,
      scenario: {
        scenCode: scenario.shortCode,
        label: scenario.label
      },
      genoFacts: [ { inherit: 'mendel', trait: 'SegColor', dom: 'Orange', interm: null, rec: 'LightGray' },
      { inherit: 'mendel', trait: 'EyeColor', dom: 'Red', interm: null, rec: 'Cyan' },
      { inherit: 'mendel', trait: 'NumSegments', dom: 2, interm: null, rec: 3 },
      { inherit: 'mendel', trait: 'DotColor', dom: 'Black', interm: null, rec: 'Black' },
      { inherit: 'mendel', trait: 'NumLegs', dom: 1, interm: null, rec: 1 } ].toString(),
      quiz: quiz
    }
    let studentFridges = listOfStudentMendelFridges.filter((f)=>{return f.owner.userId === studentId});
    if(studentFridges.length === 0){
      return Observable.of(fakeFridge);
    }
    let fridge = studentFridges.find((f)=>{
      return f.scenario.scenCode === scenId
    });
    if(fridge){
      fridge.quiz = quiz
      return Observable.of(fridge)
    } else {
      return Observable.of(fakeFridge);
    }
  }

  deleteStudentMendelFridge(adminId: number, studentId: number, scenShortCode: string):Observable<any>{
    var out = {
        owner: {
        firstName: 'test',
        lastName: 'test',
        userId: studentId
      },
      scenario: {
        scenCode: scenShortCode,
        label: 'sample label'
      }
    }
    return Observable.of(out);
  }

  deleteQuizScore(adminId: number, studentId: number, scenShortCode: string):Observable<any>{
    let student = this._findStudent(studentId);
    let scenario = listOfMendelScenarios.find(h => h.shortCode === scenShortCode);
    if(student===null || student === undefined){
      return Observable.throw({message: 'User not found'})
    }
    let fakeFridge: StudentMendelFridge = {
      owner: student,
      scenario: {
        scenCode: scenario.shortCode,
        label: scenario.label
      },
      genoFacts: [ { inherit: 'mendel', trait: 'SegColor', dom: 'Orange', interm: null, rec: 'LightGray' },
      { inherit: 'mendel', trait: 'EyeColor', dom: 'Red', interm: null, rec: 'Cyan' },
      { inherit: 'mendel', trait: 'NumSegments', dom: 2, interm: null, rec: 3 },
      { inherit: 'mendel', trait: 'DotColor', dom: 'Black', interm: null, rec: 'Black' },
      { inherit: 'mendel', trait: 'NumLegs', dom: 1, interm: null, rec: 1 } ].toString()
    }
    let studentFridges = listOfStudentMendelFridges.filter((f)=>{return f.owner.userId === studentId});
    if(studentFridges.length === 0){
      return Observable.of(fakeFridge);
    }
    let fridge = studentFridges.find((f)=>{
      return f.scenario.scenCode === scenShortCode
    });
    if(fridge){
      return Observable.of(fridge)
    } else {
      return Observable.of(fakeFridge);
    }
  }

  grantScenAccess(adminId: number, studentId: number, scenId: string, updatedState: boolean): Observable<AdminStudent>{
    let student = this._findStudent(studentId);
    if(student){
      let newStudent = _.cloneDeep(student);
      newStudent.accessGranted[scenId] = updatedState;
      return Observable.of(newStudent);
    } else {
      return Observable.throw({message: 'User not found'})
    }
  }
}
