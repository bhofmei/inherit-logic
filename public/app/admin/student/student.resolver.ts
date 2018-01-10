import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { StudentService } from './student.service';
import { AdminStudent } from '../../interfaces/student.interface';

@Injectable()
export class StudentResolver implements Resolve<AdminStudent> {

  constructor(private _studentService: StudentService) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AdminStudent> {

    const studentNum = route.params['studentId'];

    if (studentNum) {
      return this._studentService.getStudent(studentNum);
    } else {
      return new Observable();
    }
  }
}
