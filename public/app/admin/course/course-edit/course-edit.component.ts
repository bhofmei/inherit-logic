import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil'

import { CourseService } from '../course.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { ConfirmDeleteDialogComponent } from '../../../shared/confirm-delete-dialog.component';

import { Course } from '../../../interfaces/course.interface';
import { User } from '../../../interfaces/user.interface';
import { Student, AdminStudent, sortStudents } from '../../../interfaces/student.interface';
import { readErrorMessage } from '../../../shared/read-error';

@Component({
  selector: 'course-edit',
  templateUrl: 'app/admin/course/course-edit/course-edit.template.html',
  styleUrls: ['app/admin/course/course-edit/course-edit.style.css']
})

export class CourseEditComponent{

  private courseInfo: Course;
  private possibleInstr: AdminStudent[];
  private paramObserver: any;
  private isDestroyed$: Subject<boolean>;
  private selectedAdd: number;
  private _admin: User;

  private errorMessage: string = '';

  constructor(private _router: Router,
        private _route: ActivatedRoute,
               private _courseService: CourseService,
              private _authService: AuthenticationService,
              private _modalService: NgbModal){
    this.isDestroyed$ = new Subject<boolean>();
  }

  ngOnInit(){
    this._admin = this._authService.getUser();
    this.paramObserver = this._route.params.subscribe(params => {
            let course = params['courseNum'];

            this._courseService.getCourse(this._admin.id, course)
              .takeUntil(this.isDestroyed$)
              .subscribe((info) => {
                this.courseInfo = info;
                this._courseService.getPossibleInstructors(this._admin.id, course)
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

  onCancel(){
    this._router.navigate(['../'], {relativeTo: this._route});
  }

  update(){
    this._courseService
      .editCourse(this._admin.id, this.courseInfo.courseNum, this.courseInfo)
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
      .addInstructor(this._admin.id, this.courseInfo.courseNum, this.selectedAdd)
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
  // TODO: remove instructor

  deleteCourse(){
    const modelRef = this._modalService.open(ConfirmDeleteDialogComponent, {size: 'sm'});
    modelRef.componentInstance.message = 'Are you sure you want to delete course ' + this.courseInfo.courseNum + '?';

    modelRef.result.then((result)=>{
      if(result === 'delete'){
        this._callDeleteCourse()
      }
    }, (dismiss)=>{
      // do nothing
    })
  }

  _callDeleteCourse(){
    this._courseService.deleteCourse(this._admin.id, this.courseInfo.courseNum)
    .takeUntil(this.isDestroyed$)
    .subscribe((res)=>{
      // successful
      this._router.navigate(['/admin/courses']);
    }, (err)=>{
      this.errorMessage = readErrorMessage(err);
    })
  }

  deleteCourseStudents(){
    const modelRef = this._modalService.open(ConfirmDeleteDialogComponent, {size: 'sm'});
    modelRef.componentInstance.message = 'Are you sure you want to delete all students in course ' + this.courseInfo.courseNum + '?';

    modelRef.result.then((result)=>{
      if(result === 'delete'){
        this._callDeleteCourseStudents()
      }
    }, (dismiss)=>{
      // do nothing
    })
  }

  _callDeleteCourseStudents(){
    this._courseService.deleteStudents(this._admin.id, this.courseInfo.courseNum)
    .takeUntil(this.isDestroyed$)
    .subscribe((res)=>{
      // successful
      this._router.navigate(['/admin/courses/', this.courseInfo.courseNum]);
    }, (err)=>{
      this.errorMessage = readErrorMessage(err);
    })
  }

  ngOnDestroy(){
    this.paramObserver.unsubscribe();
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }

}
