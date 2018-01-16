import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { StudentService } from '../student.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { readErrorMessage } from '../../../shared/read-error';

import { AdminStudent, sortStudents } from '../../../interfaces/student.interface';

@Component({
    selector: 'student-list',
    templateUrl: './app/admin/student/student-list/student-list.template.html'
})
export class StudentListComponent implements OnInit, OnDestroy {
    private students: AdminStudent[];
    private isDestroyed$: Subject<boolean>;
    private errorMessage: string = '';

    constructor(
        private _studentService: StudentService,
        private _authService: AuthenticationService
    ) {
        this.isDestroyed$ = new Subject<boolean>();
    }

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
