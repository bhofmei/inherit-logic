import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { AuthenticationService } from '../authentication.service';
import { CourseService } from '../../admin/course/course.service';
import { readErrorMessage } from '../../shared/read-error'

/**
 * This component allows new users to sign up to use Cricket.
 * Uses email as username and includes several error
 * checks
 */
@Component({
    selector: 'signup',
    templateUrl: './signup.template.html'
})
export class SignupComponent implements OnInit, OnDestroy {
  /**
   * Potential backend error message
   */
  errorMessage: string = '';
  /**
   * List of courses available to sign up for;
   * All users must select a course, even if the course is "NA"
   */
  private courses: string[] = [];
  /**
   * User details used for signup
   * - `firstName`
   * - `lastName`
   * - `username` (email address)
   * - `course` (database course ID not course name)
   * - `passsword`
   */
  user: any = {};
  /**
   * Confirmation password; must match `user.password` to submit the signup form
   */
  private cPassword: string;
  /**
   * Boolean state object to make unsubscribing from multiple services easier
   */
  private isDestroyed$: Subject<boolean>;

  constructor(private _authenticationService: AuthenticationService,
        private _courseService: CourseService,
        private _router: Router) {
      this.isDestroyed$ = new Subject<boolean>();
    }

  /**
   * Order the courses so the "NA" course is at the top
   *
   * @param {any[]} courses list of currently available courses; each item in list has `courseNum` and `id`
   *
   * @returns {any[]} the list ordered so the "NA" course is at the top
   */
  private _reorderCourses(courses: any[]): any[]{
    let na = courses.filter((c)=>{return c.courseNum === 'NA'});
    let other = courses.filter((c)=>{
      return c.courseNum !== 'NA'
    });
    return na.concat(other);
  }

  /**
   * On component creation, get the list of available courses and order them
   */
  ngOnInit(){
    this._courseService.getCourseList()
      .takeUntil(this.isDestroyed$)
      .subscribe((res)=>{
        let tmp = this._reorderCourses(res);
        this.courses = tmp;
    }, (err)=>{
      this.errorMessage = readErrorMessage(err);
      this.courses = [];
    });
  }

  /**
   * - Attempts to sign the user up when they submit the form
   * - Includes error checks for selecting a course and passwords match
   * - When sign-up is successful, sets the [logged in user]
   * {@link authentication.service} and navigates to the home page
   */
  signup() {
      if(this.user.course === undefined){
        this.errorMessage = 'Select a course'
      } else if(this.user.password !== this.cPassword){
        this.errorMessage = 'Passwords must match'
      } else {
          this._authenticationService
          .signup(this.user)
      .takeUntil(this.isDestroyed$)
          .subscribe((result) => {
          this._authenticationService.setUser(result);
          this._router.navigate(['/'])
        },
            (error) => {
          this.errorMessage = readErrorMessage(error)
        });
      }
    }

  /**
   * On component desctruction, unsubscribe from services to prevent a memory leak
   */
  ngOnDestroy(){
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }
}
