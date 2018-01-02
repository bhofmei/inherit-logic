import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil'

import { AuthenticationService } from '../authentication/authentication.service';
import { CourseService } from './course/course.service';
import { StudentService } from './student/student.service';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'admin-cmp',
  templateUrl: 'app/admin/admin.template.html'
})

export class AdminComponent{
  private adminUser: User;
  private errorMessage: string = '';
  //private isDestroyed$: Subject<boolean>

  constructor(
    private _authenticationService: AuthenticationService,
    private _courseService: CourseService,
     private _studentService: StudentService
  ){}

  ngOnInit(){
    /*this._authenticationService.getUser
      .takeUntil(this.isDestroyed$)
      .subscribe( (res) =>{
      this.adminUser = res;

      this._courseService.setAdmin(userId);
      this.errorMessage = '';
    }, (err)=>{
      this.errorMessage = JSON.stringify(err);
    }); */
    this.adminUser = this._authenticationService.getUser();
    let userId = this.adminUser.id;
    let userRole = this.adminUser.role;
    this._courseService.setAdmin(userId);
    this._studentService.setAdmin(userId, userRole);
    console.log('admin-comp', this.adminUser);
  }

  ngOnDestroy(){
    this._courseService.setAdmin(-1);
    this._studentService.setAdmin(-1, -1);
  }

}
