import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AdminStudent } from '../../interfaces/student.interface';
import { StudentFridge } from '../../interfaces/fridge.interface';


@Injectable()
export class StudentService {

  private _baseURL = 'api/admin';

  constructor(private _http: HttpClient) {
  }

  listStudents(adminId: number): Observable<AdminStudent[]>{
    return this._http
            .get<AdminStudent[]>(`${this._baseURL}/${adminId}/students`);
  }

 /* listStudents(): Observable<AdminStudent[]>{
    return this._http
            .get<AdminStudent[]>(`${this._baseURL}/${this.getAdmin()}/students`);
  }*/

  getStudent(adminId: number, studentId: number): Observable<AdminStudent>{
    return this._http
            .get<AdminStudent>(`${this._baseURL}/${adminId}/students/${studentId}`);
  }

  /*getStudent(studentId: number): Observable<AdminStudent>{
    //console.log('get student', this.getAdmin());
    return this._http
            .get<AdminStudent>(`${this._baseURL}/${this.getAdmin()}/students/${studentId}`);
  }*/

  setStudentRole(adminId: number, studentId: number, role: string): Observable<any>{
    let body = {role: role};
    return this._http
            .post(`${this._baseURL}/${adminId}/students/${studentId}`, body);
  }

  /*setStudentRole(studentId: number, role: string): Observable<any>{
    let body = {role: role};
    return this._http
            .post(`${this._baseURL}/${this.getAdmin()}/students/${studentId}`, body);
  }*/

  deleteUser(userId: number, studentId: number): Observable<any>{
    return this._http
            .delete(`${this._baseURL}/${userId}/users/${studentId}`);
  }

  getFridge(adminId: number, studentId: number, scenId: string): Observable<StudentFridge>{
    return this._http
            .get<StudentFridge>(`${this._baseURL}/${adminId}/students/${studentId}/${scenId}`);
  }

  /*getFridge(studentId: number, scenId: string): Observable<StudentFridge>{
    return this._http
            .get<StudentFridge>(`${this._baseURL}/${this.getAdmin()}/students/${studentId}/${scenId}`);
  }*/

  grantScenAccess(adminId: number, studentId: number, scenId: string, updatedState: boolean): Observable<AdminStudent>{
    return this._http
            .post<AdminStudent>(`${this._baseURL}/${adminId}/students/${studentId}/${scenId}`, {access: updatedState});
  }
  /*grantScenAccess(studentId: number, scenId: string, updatedState: boolean): Observable<AdminStudent>{
    return this._http
            .post<AdminStudent>(`${this._baseURL}/${this.getAdmin()}/students/${studentId}/${scenId}`, {access: updatedState});
  }*/


}
