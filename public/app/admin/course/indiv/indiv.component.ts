import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil'

import { CourseService } from '../course.service';
import { ScenarioService } from '../../../scenario/scenario.service';
//import { AuthenticationService } from '../../../authentication/authentication.service';

import { Course } from '../../../interfaces/course.interface';
import { Student } from '../../../interfaces/student.interface';
import { Scenario } from '../../../interfaces/scenario.interface';

@Component({
  selector: 'course-indiv',
  templateUrl: 'app/admin/course/indiv/indiv.template.html',
  styleUrls: ['app/admin/course/indiv/indiv.style.css']
})

export class IndivComponent{

  private students: Student[] = [];
  private courseInfo: Course;
  private scenarios: Scenario[];
  private isDestroyed$: Subject<boolean>;
  private paramObserver: any;

  //private courseNum: string;
  private errorMessage: string = '';

  constructor(private _router: Router,
        private _route: ActivatedRoute,
               private _courseService: CourseService,
              private _scenarioService: ScenarioService){
    this.isDestroyed$ = new Subject<boolean>();
  }

  ngOnInit(){
    this.paramObserver = this._route.params.subscribe(params => {
            let course = params['courseNum'];

            this._courseService.getCourse(course)
        .takeUntil(this.isDestroyed$)
              .subscribe((info) => {
              this.courseInfo = info;
              this._courseService.getStudents(course)
              .takeUntil(this.isDestroyed$)
              .subscribe((students)=>{
                this.students = students;
                this._scenarioService.listScenarios()
                  .takeUntil(this.isDestroyed$)
                  .subscribe((scens)=>{
                    this.scenarios = scens;
                });
              });
            },
                (error) => {
              this.errorMessage = error.message;
            });
        });
  }

  ngOnDestroy(){
    this.paramObserver.unsubscribe();
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }

}