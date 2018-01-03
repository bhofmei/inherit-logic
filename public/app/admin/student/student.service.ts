import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AdminStudent } from '../../interfaces/student.interface';
import { StudentFridge } from '../../interfaces/fridge.interface';


@Injectable()
export class StudentService {

  private _baseURL = 'api/admin';
  private _adminId = new BehaviorSubject<number>(-1);
  private _adminRole = new BehaviorSubject<number>(-1);

  constructor(private _http: HttpClient) {
  }

  setAdmin(id: number, role: number){
    this._adminId.next(id);
    this._adminRole.next(role);
  }

  getAdmin(): number{
    return this._adminId.getValue();
  }

  getAdminRole(): number{
    return this._adminRole.getValue();
  }

  /*listStudents(userId: number): Observable<any>{
    return this._http
            .get(`${this._baseURL}/${userId}/users`);
  }*/

  listStudents(): Observable<AdminStudent[]>{
    return this._http
            .get<AdminStudent[]>(`${this._baseURL}/${this.getAdmin()}/students`);
  }

  /*getUser(userId: number, studentId: number): Observable<any>{
    return this._http
            .get(`${this._baseURL}/${userId}/users/${studentId}`);
  }*/

  getStudent(studentId: number): Observable<AdminStudent>{
    return this._http
            .get<AdminStudent>(`${this._baseURL}/${this.getAdmin()}/students/${studentId}`);
  }

  setUserRole(userId: number, studentId: number, role: string): Observable<any>{
    let body = {role: role};
    return this._http
            .post(`${this._baseURL}/${userId}/users/${studentId}`, body);
  }

  deleteUser(userId: number, studentId: number): Observable<any>{
    return this._http
            .delete(`${this._baseURL}/${userId}/users/${studentId}`);
  }

  /*getFridge(userId: number, studentId: number, scenId: string): Observable<any>{
    return this._http
            .get(`${this._baseURL}/${userId}/users/${studentId}/${scenId}`);
  }*/

  getFridge(studentId: number, scenId: string): Observable<StudentFridge>{
    return this._http
            .get<StudentFridge>(`${this._baseURL}/${this.getAdmin()}/students/${studentId}/${scenId}`);
  }

  /*grantScenAccess(userId: number, studentId: number, scenId: string): Observable<any>{
    return this._http
            .post(`${this._baseURL}/${userId}/users/${studentId}/${scenId}`, {});
  }*/
  grantScenAccess(studentId: number, scenId: string): Observable<AdminStudent>{
    return this._http
            .post<AdminStudent>(`${this._baseURL}/${this.getAdmin()}/students/${studentId}/${scenId}`, {});
  }


}
