import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

import { StudentService } from '../student.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { readErrorMessage } from '../../../shared/read-error';

import { AdminStudent, sortStudents } from '../../../interfaces/student.interface';

/**
 * - Component which lists students dependent on the role of logged in user;
  * - if `"admin"`, all users in the system
  * - if `"instr"`, all users in courses instr teaches
 */
@Component({
    selector: 'student-list',
    templateUrl: './student-list.template.html'
})
export class StudentListComponent implements OnInit, OnDestroy {
  /**
   * List of students
   */
    private students: AdminStudent[];
  /**
   * Boolean state variable to make unsubscribing from multiple observables easier
   */
    private isDestroyed$: Subject<boolean>;
  /**
   * Error message from server
   */
    private errorMessage: string = '';

    constructor(
        private _studentService: StudentService,
        private _authService: AuthenticationService
    ) {
        this.isDestroyed$ = new Subject<boolean>();
    }

  /**
   * Initialize the view
   * 1. get logged in user id
   * 2. get the list of students
   * 3. order the list of students
   */
    ngOnInit() {
        let admin = this._authService.getUser();
        this._studentService.listStudents(admin.id)
            .takeUntil(this.isDestroyed$)
            .subscribe((students) => {
                this.students = students.sort(sortStudents);
            }, (err) => {
                this.errorMessage = readErrorMessage(err);
            });
    }

  /**
   * Destory the component by unsubscribing from all observables
   */
    ngOnDestroy() {
        this.isDestroyed$.next(true);
        this.isDestroyed$.unsubscribe();
    }
}
