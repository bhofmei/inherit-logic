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

/**
 * Component for editting course details such as
 * adding/removing instructors, updating course description
 */
export class CourseEditComponent{

  /**
   * Course being edited
   */
  courseInfo: Course;
  /**
   * List of possible instructors who could be added
   */
  private possibleInstr: AdminStudent[];
  /**
   * Variable used to remember instr selected when adding
   */
  selectedAdd: number;
  /**
   * the logged in user
   */
  private _admin: User;
  private paramObserver: any;
  private isDestroyed$: Subject<boolean>;
  private errorMessage: string = '';

  constructor(private _router: Router,
        private _route: ActivatedRoute,
               private _courseService: CourseService,
              private _authService: AuthenticationService,
              private _modalService: NgbModal){
    this.isDestroyed$ = new Subject<boolean>();
  }

  /**
   * On init
   * 1. get the logged in user
   * 2. Use the url param to get course number
   * 3. Get course details (using coureNum)
   * 3. Get possible instructors (using courseNum)
   */
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

  /**
   * When the cancel button is pressed, navigate back to course view page
   */
  onCancel(){
    this._router.navigate(['../'], {relativeTo: this._route});
  }

  /**
   * When submit button is clicked, submit the updates to be
   * saved in the backend
   */
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

  /**
   * When add instructor button is clicked, send the selected
   * instructor (by userId) to the backend to be added as an instructor
   * If successful, update list of possible instructors
   */
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

  /**
   * When clicking delete course button, open a dialog
   * to confirm deletion
   * If confirmed, call helper method
   * If cancel, do nothing
   */
  deleteCourse(){
    const modelRef = this._modalService.open(ConfirmDeleteDialogComponent, {size: 'sm', windowClass: 'delete-modal'});
    modelRef.componentInstance.message = 'Are you sure you want to delete course ' + this.courseInfo.courseNum + '?';

    modelRef.result.then((result)=>{
      if(result === 'delete'){
        this._callDeleteCourse()
      }
    }, (dismiss)=>{
      // do nothing
    })
  }

  /**
   * Helper method which uses service to tell server to delete the course
   */
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

  /**
   * When delete students button is click,
   * open a dialog to confirm deletion
   * If confirm, call helper method
   * If cancel, do nothing
   */
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

  /**
   * Helper method with tells service to delete all of the
   * students in this course
   */
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
