import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil'

import { CourseService } from '../course.service';
import { ScenarioService } from '../../../scenario/scenario.service';

import { Course } from '../../../interfaces/course.interface';
import { Student } from '../../../interfaces/student.interface';
import { Scenario } from '../../../interfaces/scenario.interface';

@Component({
  selector: 'course-scen-status',
  templateUrl: 'app/admin/course/status/status.template.html',
  styleUrls: ['app/admin/course/status/status.style.css']
})

export class StatusComponent{

  private students: Student[] = [];
  private courseNum: string;
  private scenario: Scenario;
  private isDestroyed$: Subject<boolean>;
  private paramObserver: any;

  //private courseNum: string;
  private errorMessage: string = '';

  constructor(private _router: Router,
        private _route: ActivatedRoute,
               private _courseService: CourseService,
              private _scenarioService: ScenarioService
              ){
    this.isDestroyed$ = new Subject<boolean>();
  }

  ngOnInit() {
    this.paramObserver = this._route.params
      .subscribe(params => {
            let course = params['courseNum'];
          let scenCode = params['scenId'];
      this.courseNum = course.toUpperCase();
      this._scenarioService.getScenario(scenCode)
        .takeUntil(this.isDestroyed$)
        .subscribe((res)=>{
          // success
          this.scenario = res;
        this._courseService.getScenarioStatus(course, scenCode)
          .takeUntil(this.isDestroyed$)
          .subscribe((stats)=>{
          console.log(stats);
            this.students = stats;
        }, (err)=>{
          this.errorMessage = err.error.message;
        });

      }, (err)=>{
        this.errorMessage = err.error.message;
      });
        });
  }

  formatAccess(isGranted: boolean): string{
    return (isGranted ? 'Access granted' : 'Access  not granted');
  }

  grantAccess(){
    // will require studentService
  }

  ngOnDestroy(){
    this.paramObserver.unsubscribe();
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }

}
