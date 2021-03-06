import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { CourseService } from '../course.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { User } from '../../../interfaces';
import { readErrorMessage } from '../../../shared/read-error'

/**
 * Component to create a new course
 */
@Component({
  selector: 'course-create',
  templateUrl: './course-create.template.html'
})

export class CourseCreateComponent implements OnInit, OnDestroy {
  /**
   * Potential error message from the backend server when trying to
   * create the course
   */
  private errorMessage: string = '';
  private subscription: Subscription;
  /**
   * - Course details to be sent to the backend server
   * - Includes `courseNum` and `description`
   */
  private course: FormGroup;
  /**
   * Logged in admin user
   */
  private admin: User;

  constructor(
    private _courseService: CourseService,
    private _router: Router,
    private _route: ActivatedRoute,
     private _authService: AuthenticationService
  ){
  }

  /**
   * When initializing the component, get the currently logged
   * in user
   */
  ngOnInit(){
    this.admin = this._authService.getUser();
    // set up for group;
    this.course = new FormGroup({
      'courseNum': new FormControl('', Validators.required),
      'description': new FormControl(''),
      'level': new FormControl('all')
    });
  }

  get courseNum(){ return this.course.get('courseNum'); }
  get description(){ return this.course.get('description'); }
  get level(){ return this.course.get('level'); }

  /**
   * Check that a course number has been entered then
   * submit course details to backend
   *
   * If course successfully created, go back to list of courses
   * If error, display error message
   */
  createCourse(){
    this.subscription = this._courseService
      .createCourse(this.admin.id, this.course.value)
      .subscribe( (result)=>{
        this._router.navigate(['../', result.courseNum], {relativeTo: this._route})
      }, (err)=>{
        this.errorMessage = readErrorMessage(err);
      });
  }

  /** When cancel button is pressed, go back to the course listing page */
  onCancel(){
    this._router.navigate(['../'], {relativeTo: this._route});
  }

  /**
   * On component destory, unsubscribe from services if necessary
   */
  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe();
  }

}
