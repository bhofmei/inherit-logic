import {Observable } from 'rxjs/Observable';
import { AdminStudent, StudentFridge } from '../../interfaces';
import { listOfUsers } from '../sample-data';
import * as _ from 'lodash';
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
    return Observable.of(null);
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
