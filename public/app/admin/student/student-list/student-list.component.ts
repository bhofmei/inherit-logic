import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { StudentService } from '../student.service';

import { AdminStudent, sortStudents } from '../../../interfaces/student.interface';

@Component({
    selector: 'student-list',
    templateUrl: './app/admin/student/student-list/student-list.template.html'
})
export class StudentListComponent implements OnInit, OnDestroy{
    private students: AdminStudent[];
    private subscription: Subscription;
    private errorMessage: string = '';

    constructor(private _studentService: StudentService) {

    }

    ngOnInit() {
      this.subscription = this._studentService.listStudents()
        .subscribe((students) => {
        this.students = students.sort(sortStudents);
      }, (err)=>{
        this.errorMessage = err.error.message
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

  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe();
  }
}
