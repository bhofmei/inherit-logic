import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Course } from '../../interfaces/course.interface';
import { Student, AdminStudent } from '../../interfaces/student.interface';

@Injectable()
export class CourseService {

  private _baseURL = 'api/admin';

  constructor(private _http: HttpClient) {
  }

  listCourses(adminId: number): Observable<Course[]>{
    return this._http
      .get<Course[]>(`${this._baseURL}/${adminId}/courses`);
  }

  /*listCourses(): Observable<any>{
    return this._http
      .get(`${this._baseURL}/${this.getAdmin()}/courses`);
  }*/

  createCourse(adminId: number, body: any): Observable<Course>{
    return this._http
      .post<Course>(`${this._baseURL}/${adminId}/courses`, body);
  }

  /*createCourse(body: any): Observable<Course>{
    return this._http
      .post<Course>(`${this._baseURL}/${this.getAdmin()}/courses`, body);
  }*/

  getCourse(adminId: number, courseNum: string): Observable<Course>{
    return this._http
      .get<Course>(`${this._baseURL}/${adminId}/courses/${courseNum}`);
  }

  /*getCourse(courseNum: string): Observable<Course>{
    return this._http
      .get<Course>(`${this._baseURL}/${this.getAdmin()}/courses/${courseNum}`);
  }*/

  getStudents(adminId: number, courseNum: string): Observable<any>{
    return this._http
      .get(`${this._baseURL}/${adminId}/courses/${courseNum}/students`);
  }

  /*getStudents(courseNum: string): Observable<any>{
    return this._http
      .get(`${this._baseURL}/${this.getAdmin()}/courses/${courseNum}/students`);
  }*/

  /*getPossibleInstructors(courseNum: string): Observable<AdminStudent[]>{
    return this._http
      .get<AdminStudent[]>(`${this._baseURL}/${this.getAdmin()}/courses/${courseNum}/instructors`);
  };*/
  getPossibleInstructors(adminId: number, courseNum: string): Observable<AdminStudent[]>{
    return this._http
      .get<AdminStudent[]>(`${this._baseURL}/${adminId}/courses/${courseNum}/instructors`);
  };

  /*addInstructor(courseNum: string, newInstrId: number): Observable<Course> {
    return this._http
      .post<Course>(`${this._baseURL}/${this.getAdmin()}/courses/${courseNum}/instructors/${newInstrId}`, {instructor: true})
  }*/

  addInstructor(adminId: number, courseNum: string, newInstrId: number): Observable<Course> {
    return this._http
      .post<Course>(`${this._baseURL}/${adminId}/courses/${courseNum}/instructors/${newInstrId}`, {instructor: true})
  }

  editCourse(adminId: number, courseNum: string, body: any): Observable<Course>{
    return this._http
      .post<Course>(`${this._baseURL}/${adminId}/courses/${courseNum}`, body);
  }

  /*editCourse(courseNum: string, body: any): Observable<Course>{
    return this._http
      .post<Course>(`${this._baseURL}/${this.getAdmin()}/courses/${courseNum}`, body);
  }*/

  deleteCourse(userId: number, courseNum: string): Observable<any>{
    return this._http
      .delete(`${this._baseURL}/${userId}/courses/${courseNum}`);
  }

  deleteStudents(userId: number, courseNum: string): Observable<any>{
    return this._http
      .delete(`${this._baseURL}/${userId}/courses/${courseNum}/users`);
  }

  getScenarioStatus(adminId: number, courseNum: string, scenId: string): Observable<Student[]>{
    return this._http
      .get<Student[]>(`${this._baseURL}/${adminId}/courses/${courseNum}/${scenId}`);
  }

  /*getScenarioStatus(courseNum: string, scenId: string): Observable<Student[]>{
    return this._http
      .get<Student[]>(`${this._baseURL}/${this.getAdmin()}/courses/${courseNum}/${scenId}`);
  }*/

  getCourseList(): Observable<any>{
    return this._http
      .get(`/api/courses`);
  }

}
