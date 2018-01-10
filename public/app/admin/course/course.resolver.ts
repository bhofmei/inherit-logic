import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CourseService } from './course.service';
import { Course } from '../../interfaces/course.interface';

@Injectable()
export class CourseResolver implements Resolve<Course> {

  constructor(private _courseService: CourseService) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {

    const courseNum = route.params['courseNum'];

    if (courseNum) {
      return this._courseService.getCourse(courseNum);
    } else {
      return new Observable();
    }
  }
}
