import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil'

import { StudentService } from '../student.service';
import { ScenarioService } from '../../../scenario/scenario.service';
import { StudentRolesArray } from '../student.roles';

import { User } from '../../../interfaces/user.interface';
import { Course } from '../../../interfaces/course.interface';
import { AdminStudent } from '../../../interfaces/student.interface';
import { Scenario } from '../../../interfaces/scenario.interface';

@Component({
  selector: 'student-indiv',
  templateUrl: 'app/admin/student/student-indiv/student-indiv.template.html',
  //styleUrls: ['app/admin/student/student-indiv/student-indiv.style.css']
})

export class StudentIndivComponent{

  private student: AdminStudent;
  private scenarios: Scenario[];
  private isDestroyed$: Subject<boolean>;
  private paramObserver: any;
  private _admin: any;
  private roles = StudentRolesArray;
  private newRole: string;

  //private courseNum: string;
  private errorMessage: string = '';

  constructor(private _router: Router,
        private _route: ActivatedRoute,
               private _studentService: StudentService,
              private _scenarioService: ScenarioService){
    this.isDestroyed$ = new Subject<boolean>();
  }

  ngOnInit(){
    this.paramObserver = this._route.params.subscribe(params => {
            let studentId = params['studentId'];

            this._studentService.getStudent(studentId)
        .takeUntil(this.isDestroyed$)
              .subscribe((info) => {
              this.student = info;
              this.newRole = this.student.role;
              this._scenarioService.listScenarios()
                  .takeUntil(this.isDestroyed$)
                  .subscribe((scens)=>{
                    this.scenarios = scens;
                  this._admin = {
                    id: this._studentService.getAdmin(),
                    role: this._studentService.getAdminRole()
                  };
                });
            },
                (error) => {
              console.error(error);
              this.errorMessage = error.message;
            });
        });
  }

  getScenStatus(scenCode: string): string{
    let isGranted = this.student.accessGranted[scenCode];
    if(isGranted === true){
      return 'Access granted'
    } else if (isGranted === false) {
      return 'Access not granted'
    } else {
      return 'NA'
    }
  }

  getStudentCourse(){
    let s: AdminStudent = this.student;
      if(s.course){
        return '<a [routlerLink]="[\'/admin/courses/\', "' + s.course.courseNum + ']">s.course.courseNum</a>';
      } else {
        return 'No course';
      }
  }

  accessButtonClass( scenCode: string ): Object{
    let isGranted = this.student.accessGranted[scenCode];
    return {
      'btn btn-sm': true,
      'btn-outline-secondary': isGranted,
      'btn-outline-dark': !isGranted
    }
  }

  accessButtonText(scenCode: string): string{
    let isGranted = this.student.accessGranted[scenCode];
    return (isGranted ? 'Revoke access' : 'Grant access');
  }

  toggleAccess(scenCode: string){
    let curState = this.student.accessGranted[scenCode];
    this._studentService.grantScenAccess(this.student.userId, scenCode, !curState)
      .takeUntil(this.isDestroyed$)
      .subscribe((res)=>{
        if(res!==undefined && res !== null){
          this.student.accessGranted[scenCode] = res.accessGranted[scenCode];
        }
    }, (err)=>{
      this.errorMessage = err.error.message;
    });
  }

  roleDisabled(src: string){
    if(this._admin === undefined){
      return false
    } else if(this.student.userId === this._admin.id ){
      return true;
    } else if(src==='admin' && this._admin.role < 2){
      return true;
    } else if (src === 'instr' && this._admin.role < 1){
      return true;
    } else {
      return false;
    }
  }

  roleButtonClass(src: string): Object{
    return {
      'btn btn-sm': true,
      'btn-outline-secondary': src !== this.newRole,
      'btn-secondary': src === this.newRole
    }
  }

  ngOnDestroy(){
    // update role is necessary
    if(this.student.role !== this.newRole){
      this._studentService
        .setStudentRole(this.student.userId, this.newRole)
        .takeUntil(this.isDestroyed$)
        .subscribe((res)=>{
        this.paramObserver.unsubscribe();
        this.isDestroyed$.next(true);
        this.isDestroyed$.unsubscribe();
    }, (err)=>{
      this.errorMessage = err.error.message;
    });
    } else {
      this.paramObserver.unsubscribe();
        this.isDestroyed$.next(true);
        this.isDestroyed$.unsubscribe();
    }

  }

}
