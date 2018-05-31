import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { CourseService } from '../course.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { User } from '../../../interfaces';
import { readErrorMessage } from '../../../shared/read-error'

/**
 * Component to create a new course
 */
@Component({
  selector: 'course-create',
  templateUrl: './course-create.template.html',
  styleUrls: ['./course-create.style.css']
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
  private courseDetails: any = {};
  /**
   * Logged in admin user
   */
  private admin: User;

  constructor(
    private _courseService: CourseService,
    private _router: Router,
    private _route: ActivatedRoute,
     private _authService: AuthenticationService
  ){}

  /**
   * When initializing the component, get the currently logged
   * in user
   */
  ngOnInit(){
    this.admin = this._authService.getUser();
  }

  /**
   * Check that a course number has been entered then
   * submit course details to backend
   *
   * If course successfully created, go back to list of courses
   * If error, display error message
   */
  createCourse(){
    if(this.courseDetails.courseNum===''){
      this.errorMessage = 'Course number is required'
    } else {
      this.subscription = this._courseService
      .createCourse(this.admin.id, this.courseDetails)
    .subscribe( (result)=>{
      this._router.navigate(['../', result.courseNum], {relativeTo: this._route})
    }, (err)=>{
      this.errorMessage = readErrorMessage(err);
    });
    }
  }

  /**
   * On component destory, unsubscribe from services if necessary
   */
  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe();
  }

}
