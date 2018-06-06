import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CourseService } from './course.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { Course } from '../../interfaces/course.interface';

/**
 * For the navigation breadcrumb, resolves a URL courseNum parameeter
 * to the course number
 */
@Injectable()
export class CourseResolver implements Resolve<Course> {

  constructor(private _courseService: CourseService,
              private _authService: AuthenticationService
              ) { }
  /**
   * Based on the URL `courseNum` parameter, find the course
   * it belongs to
   *
   * @param {ActivatedRouteSnapshot} route - route URL at the moment
   * @param {RouterStateSnapshot} state - router state; needed to implement interface
   *
   * @returns {Observable<Course>} The course info for the courseNum
   * or an empty observable if the id doesn't belong to any course
   */
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
    let admin = this._authService.getUser();
    const courseNum = route.params['courseNum'];

    if (courseNum) {
      return this._courseService.getCourse(admin.id, courseNum);
    } else {
      return new Observable();
    }
  }
}
