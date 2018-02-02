import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { StudentService } from '../student.service';
import { ScenarioService } from '../../../scenario/scenario.service';
import { StudentRolesArray } from '../student.roles';
import { ConfirmDeleteDialogComponent } from '../../../shared/confirm-delete-dialog.component';

import { User } from '../../../interfaces/user.interface';
import { Course } from '../../../interfaces/course.interface';
import { AdminStudent } from '../../../interfaces/student.interface';
import { Scenario } from '../../../interfaces/scenario.interface';
import { readErrorMessage } from '../../../shared/read-error';

@Component({
    selector: 'student-indiv',
    templateUrl: 'app/admin/student/student-indiv/student-indiv.template.html',
    //styleUrls: ['app/admin/student/student-indiv/student-indiv.style.css']
})

export class StudentIndivComponent {

    private student: AdminStudent;
    private scenarios: Scenario[];
    private isDestroyed$: Subject<boolean>;
    private paramObserver: any;
    private _admin: User;
    private roles = StudentRolesArray;
    private newRole: string;

    private errorMessage: string = '';

    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _authService: AuthenticationService,
        private _studentService: StudentService,
        private _scenarioService: ScenarioService,
        private _modalService: NgbModal) {
        this.isDestroyed$ = new Subject<boolean>();
    }

    ngOnInit() {
        this._admin = this._authService.getUser();
        this.paramObserver = this._route.params.subscribe(params => {
            let studentId = params['studentId'];
            this._studentService.getStudent(this._admin.id, studentId)
                .takeUntil(this.isDestroyed$)
                .subscribe((info) => {
                    this.student = info;
                    this.newRole = this.student.role;
                    this._scenarioService.listScenarios()
                        .takeUntil(this.isDestroyed$)
                        .subscribe((scens) => {
                            this.scenarios = scens;
                        });
                },
                (error) => {
                    this.errorMessage = readErrorMessage(error);
                });

        });
    }

    getScenStatus(scenCode: string): string {
        let isGranted = this.student.accessGranted[scenCode];
        if (isGranted === true) {
            return 'Access granted'
        } else if (isGranted === false) {
            return 'Access not granted'
        } else {
            return 'NA'
        }
    }

    getStudentCourse() {
        let s: AdminStudent = this.student;
        if (s.course) {
            return '<a [routlerLink]="[\'/admin/courses/\', "' + s.course.courseNum + ']">s.course.courseNum</a>';
        } else {
            return 'No course';
        }
    }

    accessButtonClass(scenCode: string): Object {
        let isGranted = this.student.accessGranted[scenCode];
        return {
            'btn btn-sm': true,
            'btn-outline-secondary': isGranted,
            'btn-outline-dark': !isGranted
        }
    }

    accessButtonText(scenCode: string): string {
        let isGranted = this.student.accessGranted[scenCode];
        return (isGranted ? 'Revoke access' : 'Grant access');
    }

    grantAccess(scenCode: string) {
        this._studentService.grantScenAccess(this._admin.id, this.student.userId, scenCode, true)
            .takeUntil(this.isDestroyed$)
            .subscribe((res) => {
                if (res !== undefined && res !== null) {
                    this.student.accessGranted[scenCode] = res.accessGranted[scenCode];
                }
            }, (err) => {
                this.errorMessage = err.error.message;
            });
    }

    roleDisabled(src: string) {
        if (this._admin === undefined) {
            return false
        } else if (this.student.userId === this._admin.id) {
            return true;
        } else if (src === 'admin' && this._admin.role < 2) {
            return true;
        } else if (src === 'instr' && this._admin.role < 1) {
            return true;
        } else {
            return false;
        }
    }

    roleButtonClass(src: string): Object {
        return {
            'btn btn-sm': true,
            'btn-outline-secondary': src !== this.student.role,
            'btn-secondary': src === this.student.role
        }
    }

    clickButton(src: string) {
        this._studentService.setStudentRole(this._admin.id, this.student.userId, src)
            .takeUntil(this.isDestroyed$)
            .subscribe((res) => {
                this.student = res;
            }, (err) => {
                this.errorMessage = err.error.message;
            });
    }

  deleteDisabled(){
    if(this._admin === undefined){
      return true;
    } else if(this.student.userId === this._admin.id){
      return false;
    } else if(this.student.role === 'admin'){
      return true;
    } else {
      return false;
    }
  }

  /**
   * when clicking delete button, open a modal dialog to confirm delete
   * if confirm, delete and redirect to students
   * otherwise, do nothing
   *
   * @param{any} content - ng-template to open
   */
  checkDelete(){
    /*this._modalService.open(content, {size: 'sm'}).result
      .then((res)=>{
      // close result
      if(res === 'delete'){
        this._callDelete();
      }
    }, (dismiss)=>{
      // dismiss result
      return;
    });*/
    const modelRef = this._modalService.open(ConfirmDeleteDialogComponent, {size: 'sm'});
    modelRef.componentInstance.message = 'Are you sure you want to delete?';

    modelRef.result.then((result)=>{
      if(result === 'delete'){
        this._callDelete();
      }
    }, (dismiss)=>{
      // do nothing
      return;
    });
  }

  _callDelete(){
    this._studentService.deleteStudent(this._admin.id, this.student.userId)
    .takeUntil(this.isDestroyed$)
    .subscribe((res)=>{
      // successful
      this._router.navigate(['/admin/students']);
    }, (err)=>{
      this.errorMessage = readErrorMessage(err);
    })
  }

    ngOnDestroy() {
        this.paramObserver.unsubscribe();
        this.isDestroyed$.next(true);
        this.isDestroyed$.unsubscribe();

    }

}
