import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../../authentication/authentication.service';
import { StudentService } from './student.service';
import { AdminStudent } from '../../interfaces/student.interface';

/**
 * - Needed for breadcrumbs
 * - Resolves the studentId in the URL to the student it represents
 */
@Injectable()
export class StudentResolver implements Resolve<AdminStudent> {

  constructor(private _studentService: StudentService,
              private _authService: AuthenticationService) { }

  /**
   * Based on the URL `studentId` parameter, find the user
   * it belongs to
   *
   * @param {ActivatedRouteSnapshot} route - route URL at the moment
   * @param {RouterStateSnapshot} state - router state; needed to implement interface
   *
   * @returns {Observable<AdminStudent>} The student the id belongs to
   * or an empty observable if the id doesn't belong to anyone
   */
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AdminStudent> {
    let admin = this._authService.getUser();

    const studentNum = route.params['studentId'];

    if (studentNum) {
      return this._studentService.getStudent(admin.id, studentNum);
    } else {
      return new Observable();
    }
  }
}
