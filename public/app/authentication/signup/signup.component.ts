import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { AuthenticationService } from '../authentication.service';
import { CourseService } from '../../admin/course/course.service';
import { readErrorMessage } from '../../shared/read-error'
import { passwordMatchValidator } from '../../shared/confirm-password.validator';

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
   * - `confirmPassword`
   */
  user: FormGroup;
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
   * On component creation, get the list of available courses and order them
   */
  ngOnInit(){
    this.user = new FormGroup({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'username': new FormControl('',[Validators.required, Validators.email]),
      'course': new FormControl('', Validators.required),
      'password': new FormControl('',[Validators.required, Validators.minLength(6)]),
      'confirmPassword': new FormControl('', [Validators.required, passwordMatchValidator]),
    });

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

  // accessors for form validation
  get firstName() { return this.user.get('firstName'); }
  get lastName() { return this.user.get('lastName'); }
  get username() { return this.user.get('username'); }
  get course() { return this.user.get('course'); }
  get password() { return this.user.get('password'); }
  get confirmPassword() { return this.user.get('confirmPassword'); }


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
   * - Attempts to sign the user up when they submit the form
   * - Includes error checks for selecting a course and passwords match
   * - When sign-up is successful, sets the [logged in user]{@link authentication.service} and navigates to the home page
   */
  signup() {
          this._authenticationService
          .signup(this.user.value)
      .takeUntil(this.isDestroyed$)
          .subscribe((result) => {
          this._authenticationService.setUser(result);
          this._router.navigate(['/'])
        },
            (error) => {
          this.errorMessage = readErrorMessage(error)
        });
    }

  /**
  * Get the form input CSS classes styling to provide feedback to user
  * whether input is valid on not
  *
  * Always has `.form-control` then `.is-invalid` or `.is-valid` are set once input has been touched
  *
  * @param {string} formLabel - form group name look-up input state
  *
  * @returns {Object} CSS classes which apply to this input
  */
  getInputClass(formLabel: string) {
    let out = {'form-control': true};
    if(this.user && this.user.get(formLabel)){
      let ac = this.user.get(formLabel);
      if(ac.dirty || ac.touched){
        out['is-invalid'] = ac.invalid;
        out['is-valid'] = ac.valid;
      }
    }
    return out;
  }

  /**
   * On component desctruction, unsubscribe from services to prevent a memory leak
   */
  ngOnDestroy(){
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }
}
