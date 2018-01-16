import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { CourseService } from '../course.service';
import { AuthenticationService } from '../../../authentication/authentication.service';

import { Course } from '../../../interfaces/course.interface';
import { User } from '../../../interfaces/user.interface';

@Component({
    selector: 'course-list-cmp',
    templateUrl: './app/admin/course/course-list/course-list.template.html'
})
export class CourseListComponent implements OnInit, OnDestroy{
    private courses: Course[];
  private subscription: Subscription;

    constructor(
      private _courseService: CourseService,
      private _authService: AuthenticationService
    ) {

    }

    ngOnInit() {
      let admin: User = this._authService.getUser();
      this.subscription = this._courseService.listCourses(admin.id)
        .subscribe((courses) => {
        this.courses = courses
      });
    }

  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe();
  }
}
