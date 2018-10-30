import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Subscription ,  Subject } from 'rxjs';


import { AuthenticationService } from '../../../authentication/authentication.service';
import { StudentService } from '../student.service';
import { CricketService } from '../../../cricket/cricket.service';
import { StudentRolesArray } from '../student.roles';
import { ConfirmDeleteDialogComponent } from '../../../shared/confirm-delete-dialog.component';

import { User } from '../../../interfaces/user.interface';
import { Course } from '../../../interfaces/course.interface';
import { AdminStudent } from '../../../interfaces/student.interface';
import { Scenario } from '../../../interfaces/scenario.interface';
import { readErrorMessage } from '../../../shared/read-error';

/**
 * Component to view information for a single student
 * This includes email/name/role information and access status
 * for all scenarios
 */
@Component({
    selector: 'student-indiv',
    templateUrl: './student-indiv.template.html'
})

export class StudentIndivComponent implements OnInit, OnDestroy {

  /**
   * Student we are viewing
   */
    protected student: AdminStudent;
  /**
   * List of all scenarios
   */
    private scenarios: Scenario[];
  /**
   * Boolean state variable to make unsubscribing from multiple
   * observables easier
   */
    private isDestroyed$: Subject<boolean>;
  /**
   * Subscription for URL parameters
   */
    private paramObserver: any;
  /**
   * Logged in user who must be an admin or instructor
   */
    private _admin: User;
  /**
   * List of possible roles
   */
    private roles = StudentRolesArray;
  /**
   * New role to change to if allowed
   */
    private newRole: string;

  /**
   * Potential error message
   */
    private errorMessage: string = '';

    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _authService: AuthenticationService,
        private _studentService: StudentService,
        private _scenarioService: CricketService,
        private _modalService: NgbModal) {
        this.isDestroyed$ = new Subject<boolean>();
    }

  /**
   * Initialize component
   * 1. Get logged in user
   * 2. Get id of student of interest from URL
   * 3. Get the student's info
   * 4. Get list of all scenarios
   */
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

  /**
   * Return formatted string based on if access granted for scenario
   *
   * @param {string} scenCode - scenario to look up
   *
   * @returns {string} `"Access granted"`, `"Access not granted"`, or `"NA"`
   */
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

  /**
   * - Get a formatted HTML string based on the student
   * - If student has a course, returns link to the course page
   * - If student doesn't have a course, returns 'No course'
   *
   * @returns {string} formatted HTML
   */
    getStudentCourse(): string {
        let s: AdminStudent = this.student;
        if (s.course) {
            return '<a [routlerLink]="[\'/admin/courses/\', "' + s.course.courseNum + ']">s.course.courseNum</a>';
        } else {
            return 'No course';
        }
    }

  /**
   * Grant access for a specific scenario by calling student service
   *
   * Called on `(click)` of one of the scenario buttons
   *
   * @param {string} scenCode scenario to grant access for
   */
    grantAccess(scenCode: string) {
        this._studentService.grantScenAccess(this._admin.id, this.student.userId, scenCode, true)
            .takeUntil(this.isDestroyed$)
            .subscribe((res) => {
                if (res !== undefined && res !== null) {
                  this.student = res;
                }
            }, (err) => {
                this.errorMessage = readErrorMessage(err);
            });
    }

  /**
   * Determine if a role toggle button should be disabled
   *
   * @param {string} src - name of button/role
   *
   * @returns {boolean} disable for roles greater than current user
   * and if viewing page of current user
   */
    roleDisabled(src: string): boolean {
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

  /**
   * Determine CSS classes for each role button based on the
   * student's current role
   *
   * @param {string} src - name of button/role
   *
   * @returns {Object} possible classes with true/false as applicable
   *
   * @example
   * Current student has role "student"
   * roleButtonClass('student') -> {'btn btn-small': true, 'bth-secondary': true, 'btn-secondary-outline': false}
   * roleButtonClass('admin') -> {'btn btn-small': true, 'bth-secondary': false, 'btn-secondary-outline': true}
   */
    roleButtonClass(src: string): Object {
        return {
            'btn btn-sm': true,
            'btn-outline-secondary': src !== this.student.role,
            'btn-secondary': src === this.student.role
        }
    }

  /**
   * When clicking a role button, update the student role
   * by calling student service
   *
   * Called on `(click)` of one of the role buttons
   *
   * @param {string} src - role of button pushed
   */
    clickButton(src: string) {
        this._studentService.setStudentRole(this._admin.id, this.student.userId, src)
            .takeUntil(this.isDestroyed$)
            .subscribe((res) => {
                this.student = res;
            }, (err) => {
                this.errorMessage = readErrorMessage(err);
            });
    }

  /**
   * Determine if delete button should be disabled
   *
   * @returns {boolean} - `true` if viewing page of logged in user or if student is an admin
   * `false` otherwise
   */
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
   * - when clicking delete button, open a modal dialog to confirm delete
   * - if confirm, delete and redirect to students
   * - otherwise, do nothing
   *
   * Called on `(click)` of the "Delete" button
   */
  checkDelete(){
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

  /**
   * Helper function which implements delete student after user
   * confirmed deletion
   */
  protected _callDelete(){
    this._studentService.deleteStudent(this._admin.id, this.student.userId)
    .takeUntil(this.isDestroyed$)
    .subscribe((res)=>{
      // successful
      this._router.navigate(['/admin/students']);
    }, (err)=>{
      this.errorMessage = readErrorMessage(err);
    })
  }

  /**
   * Destroy the component by unsubscribing to the services
   * This prevents a memory leak
   */
    ngOnDestroy() {
        this.paramObserver.unsubscribe();
        this.isDestroyed$.next(true);
        this.isDestroyed$.unsubscribe();

    }

}
