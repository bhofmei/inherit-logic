import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../../authentication/authentication.service';
import { StudentService } from './student.service';
import { AdminStudent } from '../../interfaces/student.interface';

@Injectable()
export class StudentResolver implements Resolve<AdminStudent> {

  constructor(private _studentService: StudentService,
              private _authService: AuthenticationService) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AdminStudent> {
    let admin = this._authService.getUser();

    const studentNum = route.params['studentId'];

    if (studentNum) {
      return this._studentService.getStudent(admin.id, studentNum);
    } else {
      return new Observable();
    }
  }
}
