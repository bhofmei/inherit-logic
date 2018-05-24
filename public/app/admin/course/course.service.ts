import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Course, Student, AdminStudent } from '../../interfaces';

/**
 * Functions related to getting course information from the back end server
 */
@Injectable()
export class CourseService {

  /**
   * Leading url path
   */
  private _baseURL = '/api/admin';

  /**
   * Construct the service
   *
   * @param {HttpClient} _http Anguar mechanism to make calls to backend server
   */
  constructor(private _http: HttpClient) {
  }

  /**
   * Get the list of available courses depending if user
   * is a full admin or instructor
   *
   * @param {number} adminId database user ID of the logged in user
   *
   * @returns {Observable<Course[]>} - When successful and admin, list of all courses
   * - When successful and instr, list of courses in which user is an instructor for
   * - or error "No courses found" if no courses to list
   * - or other server/database error message
   */
  listCourses(adminId: number): Observable<Course[]>{
    return this._http
      .get<Course[]>(`${this._baseURL}/${adminId}/courses`);
  }

  /**
   * Create a new course with logged in user as instructor and
   * details specified in `body`
   *
   * @param {number} adminId userId of the logged in user who is an admin or instr
   * @param {any} body course details including `courseNum` and `description`
   *
   * @returns {Observable<Course>} - the newly created course if successful
   * - or error message for server/database errors
   */
  createCourse(adminId: number, body: any): Observable<Course>{
    return this._http
      .post<Course>(`${this._baseURL}/${adminId}/courses`, body);
  }

  /**
   * Get information about a specific course
   *
   * @param {number} adminId userId of the logged in user (who is an admin or instr)
   * @param {String} courseNum course number of course to get information for
   *
   * @returns {Observable<Course>} - the course information including `courseNum`, `description`, and `instructors`
   * - or error "Failed to load course <courseNum>" if course doesn't exist
   * - or other server/database error
   */
  getCourse(adminId: number, courseNum: string): Observable<Course>{
    return this._http
      .get<Course>(`${this._baseURL}/${adminId}/courses/${courseNum}`);
  }

  /**
   * Get the list of students in a course
   *
   * @param {number} adminId userId of the logged in user who is an admin or instr
   * @param {string} courseNum course number of the course
   *
   * @returns {Observable<Student[]>} - list of students each with properties `firstName`, `lastName`, `userId`, `accessGranted`, and `email`
   * - or "Failed to load course <courseNum>" if course doesn't exist
   * - or error message for server/database errors
   */
  getStudents(adminId: number, courseNum: string): Observable<Student[]>{
    return this._http
      .get<Student[]>(`${this._baseURL}/${adminId}/courses/${courseNum}/students`);
  }

  /**
   * When editing a course, user is able to add new instructors. This method produces the list of possible instructors that could be added
   *
   * @param {number} adminId userId of logged in user who is an admin or instr
   * @param {string} courseNum course number of course we are editing
   *
   * @returns {Observable<AdminStudent[]>} - list of potential instuctors with properties `firstName`, `lastName`, `userId`, and `role`
   * - or "Failed to load course <courseNum>" if course doesn't exist
   * - or server/database error
   */
  getPossibleInstructors(adminId: number, courseNum: string): Observable<AdminStudent[]>{
    return this._http
      .get<AdminStudent[]>(`${this._baseURL}/${adminId}/courses/${courseNum}/instructors`);
  };

  /**
   * Add a user as an instructor of the course and change the new instructor's role to `instr` if necessary
   *
   * @param {number} adminId userId of logged in user who is an admin or instr
   * @param {string} courseNum course number to add instructor for
   * @param {number} newInstrId userId of user to add as instructor of this course
   *
   * @returns {Observable<Course>} - the updated course information
   * - or "Failed to load course <courseNum>" if course doesn't exist
   * - or error if problem updating the course
   * - or error if problem updating the new instructor role
   * - or other server/database error
   */
  addInstructor(adminId: number, courseNum: string, newInstrId: number): Observable<Course> {
    return this._http
      .post<Course>(`${this._baseURL}/${adminId}/courses/${courseNum}/instructors/${newInstrId}`, {instructor: true})
  }

  /**
   * Update the course description
   *
   * @param {number} adminId userId of the logged in user who is an admin or instr
   * @param {string} courseNum course number of course to update
   * @param {any} body updated course description
   *
   * @returns {Observable<Course>} - updated course information
   * - or "Failed to load course <courseNum>" if course doesn't exist
   * - or other server/database error
   */
  editCourse(adminId: number, courseNum: string, body: any): Observable<Course>{
    return this._http
      .post<Course>(`${this._baseURL}/${adminId}/courses/${courseNum}`, body);
  }

  /**
   * Delete the course
   *
   * @param {number} adminId userId of the logged in user who is an admin or instr
   * @param {string} courseNum course number of course to delete
   *
   * @returns {Observable<any>} - information about the course just deleted
   * - or "Failed to load course <courseNum>" if course doesn't exist
   * - or other server/database error message
   */
  deleteCourse(userId: number, courseNum: string): Observable<any>{
    return this._http
      .delete(`${this._baseURL}/${userId}/courses/${courseNum}`);
  }

  /**
   * Delete all of the students in the course; useful for bulk deletions
   * when a course is over
   *
   * @param {number} adminId userId of the logged in user who is an admin or instr
   * @param {string} courseNum course number of course
   *
   * @returns {Observable<any>} - list of students just deleted
   * - or "Failed to load course <courseNum>" if course doesn't exist
   * - or other server/database error message
   */
  deleteStudents(userId: number, courseNum: string): Observable<any>{
    return this._http
      .delete(`${this._baseURL}/${userId}/courses/${courseNum}/students`);
  }

  /**
   * Get scenario status (aka access granted) for a scenario for all students in a course
   *
   * @param {number} adminId userId of the logged in user who is an admin or instr
   * @param {string} courseNum course number of course
   * @param {string} scenId scenCode of scenario of interest
   *
   * @returns {Observable<Student[]>} - list of students in course each with properties `firstName`, `lastName`, `userId`, and `status`
   * - or "no students found" if no students in the course
   * - or "Failed to load course <courseNum> if course doesn't exist
   * - or other server/database error
   */
  getScenarioStatus(adminId: number, courseNum: string, scenId: string): Observable<Student[]>{
    return this._http
      .get<Student[]>(`${this._baseURL}/${adminId}/courses/${courseNum}/${scenId}`);
  }

  /**
   * Get list of course numbers for all available courses
   *
   * @returns {Observable<any>} - list of courses with properties `courseNum` and `id`
   * - or "No courses found" error if no courses found
   * - or other server/database error
   */
  getCourseList(): Observable<any>{
    return this._http
      .get(`/api/courses`);
  }

}
