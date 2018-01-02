import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Course } from '../../interfaces/course.interface';
import { Student } from '../../interfaces/student.interface';

@Injectable()
export class CourseService {

  private _baseURL = 'api/admin';
  private _adminId = new BehaviorSubject<number>(-1);

  constructor(private _http: HttpClient) {
  }

  setAdmin(id: number){
    this._adminId.next(id);
  }

  getAdmin(): number{
    return this._adminId.getValue();
  }

  /*listCourses(userId: number): Observable<any>{
    return this._http
      .get(`${this._baseURL}/${userId}/courses`);
  }*/

  listCourses(): Observable<any>{
    return this._http
      .get(`${this._baseURL}/${this.getAdmin()}/courses`);
  }

  /*createCourse(userId: number, body: any): Observable<any>{
    return this._http
      .post(`${this._baseURL}/${userId}/courses`, body);
  }*/
  createCourse(body: any): Observable<Course>{
    return this._http
      .post<Course>(`${this._baseURL}/${this.getAdmin()}/courses`, body);
  }


  /*getCourse(userId: number, courseNum: string): Observable<any>{
    return this._http
      .get(`${this._baseURL}/${userId}/courses/${courseNum}`);
  }*/
  getCourse(courseNum: string): Observable<Course>{
    return this._http
      .get<Course>(`${this._baseURL}/${this.getAdmin()}/courses/${courseNum}`);
  }

  getStudents(courseNum: string): Observable<any>{
    return this._http
      .get(`${this._baseURL}/${this.getAdmin()}/courses/${courseNum}/students`);
  }

  /*editCourse(userId: number, courseNum: string, body: any): Observable<any>{
    return this._http
      .post(`${this._baseURL}/${userId}/courses/${courseNum}`, body);
  }*/

  editCourse(courseNum: string, body: any): Observable<Course>{
    return this._http
      .post<Course>(`${this._baseURL}/${this.getAdmin()}/courses/${courseNum}`, body);
  }

  deleteCourse(userId: number, courseNum: string): Observable<any>{
    return this._http
      .delete(`${this._baseURL}/${userId}/courses/${courseNum}`);
  }

  deleteStudents(userId: number, courseNum: string): Observable<any>{
    return this._http
      .delete(`${this._baseURL}/${userId}/courses/${courseNum}/users`);
  }

  /*getScenarioStatus(userId: number, courseNum: string, scenId: string): Observable<any>{
    return this._http
      .get(`${this._baseURL}/${userId}/courses/${courseNum}/${scenId}`);
  }*/

  getScenarioStatus(courseNum: string, scenId: string): Observable<Student[]>{
    return this._http
      .get<Student[]>(`${this._baseURL}/${this.getAdmin()}/courses/${courseNum}/${scenId}`);
  }

  getCourseList(): Observable<any>{
    return this._http
      .get(`/api/courses`);
  }

}
