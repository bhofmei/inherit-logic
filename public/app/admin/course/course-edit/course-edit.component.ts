import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil'

import { CourseService } from '../course.service';

import { Course } from '../../../interfaces/course.interface';
import { Student, AdminStudent, sortStudents } from '../../../interfaces/student.interface';

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

  private errorMessage: string = '';

  constructor(private _router: Router,
        private _route: ActivatedRoute,
               private _courseService: CourseService){
    this.isDestroyed$ = new Subject<boolean>();
  }

  ngOnInit(){
    this.paramObserver = this._route.params.subscribe(params => {
            let course = params['courseNum'];

            this._courseService.getCourse(course)
              .takeUntil(this.isDestroyed$)
              .subscribe((info) => {
                this.courseInfo = info;
                this._courseService.getPossibleInstructors(course)
                  .takeUntil(this.isDestroyed$)
                  .subscribe((instrs)=>{
                    this.possibleInstr = instrs.sort(sortStudents);
                }, (err2)=>{
                  this.errorMessage = err2.error.message;
                  this.possibleInstr = [];
                });
              },(error) => {
                this.errorMessage = error.message;
              });
        });
  }

  update(){
    this._courseService
      .editCourse(this.courseInfo.courseNum, this.courseInfo)
    .takeUntil(this.isDestroyed$)
    .subscribe( (result)=>{
      // success
      this._router.navigate(['../'], {relativeTo: this._route})
    }, (err)=>{
      this.errorMessage = err.error.message;
    });
  }

  formatName(firstName: string, lastName: string): string{
    let outStr = lastName;
    if(firstName !== '' && lastName !== ''){
      outStr += ', '
    }
    outStr += firstName;
    return outStr;
  }

  addInstructor(){
    if(this.selectedAdd){
    this._courseService
      .addInstructor(this.courseInfo.courseNum, this.selectedAdd)
      .takeUntil(this.isDestroyed$)
      .subscribe((updated)=>{
      this.courseInfo = updated;
      this.possibleInstr = this.possibleInstr.filter((elm)=>{
        return elm.userId != this.selectedAdd
      });
    }, (err)=>{
      this.errorMessage = err.error.message;
    });
    }
  }

  ngOnDestroy(){
    this.paramObserver.unsubscribe();
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }

}
