import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CourseService } from './course.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { Course } from '../../interfaces/course.interface';

@Injectable()
export class CourseResolver implements Resolve<Course> {

  constructor(private _courseService: CourseService,
              private _authService: AuthenticationService
              ) { }

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
