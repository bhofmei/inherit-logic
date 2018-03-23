import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil'
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/concat'

import { AuthenticationService } from '../authentication.service';
import { CourseService } from '../../admin/course/course.service';

@Component({
    selector: 'signup',
    templateUrl: 'app/authentication/signup/signup.template.html'
})
export class SignupComponent implements OnDestroy {
    errorMessage: string = '';
  private courses: string[] = [];
    user: any = {};
  private isDestroyed$: Subject<boolean>;
  private cPassword: string;

    constructor(private _authenticationService: AuthenticationService,
                 private _courseService: CourseService,
        private _router: Router) {
      this.isDestroyed$ = new Subject<boolean>();
    }

  _reorderCourses(courses: any): any{
    let na = courses.filter((c)=>{return c.courseNum === 'NA'});
    let other = courses.filter((c)=>{
      return c.courseNum !== 'NA'
    });
    return na.concat(other);
  }

  ngOnInit(){
    this._courseService.getCourseList()
      .takeUntil(this.isDestroyed$)
      .subscribe((res)=>{
        let tmp = this._reorderCourses(res);
        this.courses = tmp;
    }, (err)=>{
      this.courses = [];
    });
  }

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
          this.errorMessage = error.error.message
        });
      }
    }

  ngOnDestroy(){
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }
}
