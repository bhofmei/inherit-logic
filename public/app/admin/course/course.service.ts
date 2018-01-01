import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Course } from '../../interfaces/course.interface';

@Injectable()
export class CourseService {

  private _baseURL = 'api/admin';
  private _adminId = new BehaviorSubject<number>(-1);

  constructor(private _http: HttpClient) {
  }

  setAdmin(id: number){
    this._adminId.next(id);
  }

  listCourses(userId: number): Observable<any>{
    return this._http
      .get(`${this._baseURL}/${userId}/courses`);
  }

  /*createCourse(userId: number, body: any): Observable<any>{
    return this._http
      .post(`${this._baseURL}/${userId}/courses`, body);
  }*/
  createCourse(body: any): Observable<Course>{
    return this._http
      .post<Course>(`${this._baseURL}/${this._adminId}/courses`, body);
  }


  getCourse(userId: number, courseNum: string): Observable<any>{
    return this._http
      .get(`${this._baseURL}/${userId}/courses/${courseNum}`);
  }

  editCourse(userId: number, courseNum: string, body: any): Observable<any>{
    return this._http
      .post(`${this._baseURL}/${userId}/courses/${courseNum}`, body);
  }

  deleteCourse(userId: number, courseNum: string): Observable<any>{
    return this._http
      .delete(`${this._baseURL}/${userId}/courses/${courseNum}`);
  }

  deleteStudents(userId: number, courseNum: string): Observable<any>{
    return this._http
      .delete(`${this._baseURL}/${userId}/courses/${courseNum}/users`);
  }

  getScenarioStatus(userId: number, courseNum: string, scenId: string): Observable<any>{
    return this._http
      .get(`${this._baseURL}/${userId}/courses/${courseNum}/${scenId}`);
  }

}
