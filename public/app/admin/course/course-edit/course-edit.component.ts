import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil'

import { CourseService } from '../course.service';
import { AuthenticationService } from '../../../authentication/authentication.service';

import { Course } from '../../../interfaces/course.interface';
import { User } from '../../../interfaces/user.interface';
import { Student, AdminStudent, sortStudents } from '../../../interfaces/student.interface';
import { readErrorMessage } from '../../../shared/read-error';

@Component({
  selector: 'course-edit-cmp',
  templateUrl: 'app/admin/course/course-edit/course-edit.template.html',
  styleUrls: ['app/admin/course/course-edit/course-edit.style.css']
})

export class CourseEditComponent{

  private courseInfo: Course;
  private possibleInstr: AdminStudent[];
  private paramObserver: any;
  private isDestroyed$: Subject<boolean>;
  private selectedAdd: number;
  private admin: User;

  private errorMessage: string = '';

  constructor(private _router: Router,
        private _route: ActivatedRoute,
               private _courseService: CourseService,
              private _authService: AuthenticationService){
    this.isDestroyed$ = new Subject<boolean>();
  }

  ngOnInit(){
    this.admin = this._authService.getUser();
    this.paramObserver = this._route.params.subscribe(params => {
            let course = params['courseNum'];

            this._courseService.getCourse(this.admin.id, course)
              .takeUntil(this.isDestroyed$)
              .subscribe((info) => {
                this.courseInfo = info;
                this._courseService.getPossibleInstructors(this.admin.id, course)
                  .takeUntil(this.isDestroyed$)
                  .subscribe((instrs)=>{
                    this.possibleInstr = instrs.sort(sortStudents);
                }, (err2)=>{
                  this.errorMessage = readErrorMessage(err2);
                  this.possibleInstr = [];
                });
              },(error) => {
                this.errorMessage = readErrorMessage(error);
              });
        });
  }

  update(){
    this._courseService
      .editCourse(this.admin.id, this.courseInfo.courseNum, this.courseInfo)
    .takeUntil(this.isDestroyed$)
    .subscribe( (result)=>{
      // success
      this._router.navigate(['../'], {relativeTo: this._route})
    }, (err)=>{
      this.errorMessage = readErrorMessage(err);
    });
  }

  addInstructor(){
    if(this.selectedAdd){
    this._courseService
      .addInstructor(this.admin.id, this.courseInfo.courseNum, this.selectedAdd)
      .takeUntil(this.isDestroyed$)
      .subscribe((updated)=>{
      this.courseInfo = updated;
      this.possibleInstr = this.possibleInstr.filter((elm)=>{
        return elm.userId != this.selectedAdd
      });
    }, (err)=>{
      this.errorMessage = readErrorMessage(err);
    });
    }
  }

  ngOnDestroy(){
    this.paramObserver.unsubscribe();
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }

}
