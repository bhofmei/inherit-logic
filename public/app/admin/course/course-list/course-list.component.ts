import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { CourseService } from '../course.service';
import { AuthenticationService } from '../../../authentication/authentication.service';

import { Course, User } from '../../../interfaces';

/**
 * Component which lists available courses based on logged-in user role
 * - If admin, lists all available courses
 * - If instr, list courses which instructor of
 */
@Component({
    selector: 'course-list',
    templateUrl: './course-list.template.html'
})
export class CourseListComponent implements OnInit, OnDestroy{
  /**
   * List of courses
   */
    private courses: Course[];
  /**
   * Subscription to course service
   */
  private subscription: Subscription;

    constructor(
      private _courseService: CourseService,
      private _authService: AuthenticationService
    ) {}

    /**
     * Initialize component by getting list of courses
     */
    ngOnInit() {
      let admin: User = this._authService.getUser();
      this.subscription = this._courseService.listCourses(admin.id)
        .subscribe((courses) => {
        this.courses = courses
      });
    }

  /**
   * On component destruction, unsubscribe from services if necessary
   */
  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe();
  }
}
