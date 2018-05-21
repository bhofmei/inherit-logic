import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AdminStudent, StudentFridge } from '../../interfaces';


/**
 * Service which deals with all student-related backend calls
 * from an admin
 */
@Injectable()
export class StudentService {

  /**
   * Beginning of the server-side URL routes
   */
  private _baseURL = 'api/admin';

  constructor(private _http: HttpClient) {}

  /**
   * List of students, content is dependent of logged in user role
   *
   * If "admin", return all students/users
   * If "instr", returns students of courses instr teachs
   *
   * @param {number} adminId - userId of logged in user
   *
   * @returns {AdminStudent[]} - list of students
   */
  listStudents(adminId: number): Observable<AdminStudent[]>{
    return this._http
            .get<AdminStudent[]>(`${this._baseURL}/${adminId}/students`);
  }

  /**
   * Get details about a student
   *
   * @param {number} adminId - userId for logged in user
   * @param {number} studentId - userId for student to be looked up
   *
   * @returns {Observable<AdminStudent>} - details about specified student or error if does not exist
   */
  getStudent(adminId: number, studentId: number): Observable<AdminStudent>{
    return this._http
            .get<AdminStudent>(`${this._baseURL}/${adminId}/students/${studentId}`);
  }

  /**
   * Update the role (admin, instr, student) of another student/user
   *
   * @param {number} adminId - userId for logged in user
   * @param {number} studentId - userId for student to update
   * @param {string} role - new role to be assigned; one of: "admin", "instr", or "student"
   *
   * @returns {Observable<any>} - the updated student
   */
  setStudentRole(adminId: number, studentId: number, role: string): Observable<any>{
    let body = {role: role};
    return this._http
            .post(`${this._baseURL}/${adminId}/students/${studentId}`, body);
  }

  /**
   * Delete a student/user
   *
   * @param {number} adminId - userId of logged in user
   * @param {number} studentId - userId of student to delete
   *
   * @returns {Observable<any>} student who was just deleted or error
   */
  deleteStudent(adminId: number, studentId: number): Observable<any>{
    return this._http
            .delete(`${this._baseURL}/${adminId}/students/${studentId}`);
  }

  /**
   * Get scenario fridge for a student; includes fridge details such as
   * fridge strains and guesses
   * @param {number} adminId - userId of logged in user
   * @param {number} studentId - userId of student
   * @param {string} scenId - scenario Id for fridge to find
   *
   * @returns{Observable<StudentFridge>} the student's fridge or error
   */
  getFridge(adminId: number, studentId: number, scenId: string): Observable<StudentFridge>{
    return this._http
            .get<StudentFridge>(`${this._baseURL}/${adminId}/students/${studentId}/${scenId}`);
  }

  /**
   * Update scenario access for a student; this deletes the existing
   * fridge
   * @param {number} adminId - userId of logged in user
   * @param {number} studentId - userId of student
   * @param {boolean} updatedState - true to grant access, false to revoke access
   *
   * @returns {Observable<AdminStudent>} updated student
   */
  grantScenAccess(adminId: number, studentId: number, scenId: string, updatedState: boolean): Observable<AdminStudent>{
    return this._http
            .post<AdminStudent>(`${this._baseURL}/${adminId}/students/${studentId}/${scenId}`, {access: updatedState});
  }
}
