import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { StudentService } from '../student.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { readErrorMessage } from '../../../shared/read-error';

import { AdminStudent, sortStudents } from '../../../interfaces/student.interface';

/**
 * Component which lists students dependent on the role of logged in user;
  * if "admin", all users in the system
  * if "instr", all users in courses instr teaches
 */
@Component({
    selector: 'student-list',
    templateUrl: 'app/admin/student/student-list/student-list.template.html'
})
export class StudentListComponent implements OnInit, OnDestroy {
  /**
   * List of students
   */
    private students: AdminStudent[];
    private isDestroyed$: Subject<boolean>;
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

    ngOnDestroy() {
        this.isDestroyed$.next(true);
        this.isDestroyed$.unsubscribe();
    }
}
