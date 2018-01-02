import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil'

import { StudentService } from '../student.service';
import { ScenarioService } from '../../../scenario/scenario.service';

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
              console.log(info);
              this.student = info;
              this._scenarioService.listScenarios()
                  .takeUntil(this.isDestroyed$)
                  .subscribe((scens)=>{
                    this.scenarios = scens;
                });
            },
                (error) => {
              console.log(error);
              this.errorMessage = error.message;
            });
        });
  }

  getScenStatus(scenCode: string): string{
    let st = this.student.accessGranted[scenCode];
    if(st === true){
      return 'Access granted'
    } else if (st === false) {
      return 'Access not granted'
    } else {
      return 'NA'
    }
  }

  getStudentDesc(){
    let s: AdminStudent = this.student;
    if(s.role === 'student'){
      if(s.course){
        return s.course.courseNum;
      } else {
        return 'No course';
      }
    } else {
      return s.role;
    }
  }

  ngOnDestroy(){
    this.paramObserver.unsubscribe();
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }

}
