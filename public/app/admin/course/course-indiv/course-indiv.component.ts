import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil'

import { CourseService } from '../course.service';
import { ScenarioService } from '../../../scenario/scenario.service';
import { AuthenticationService } from '../../../authentication/authentication.service';

import { Course } from '../../../interfaces/course.interface';
import { Student, sortStudents } from '../../../interfaces/student.interface';
import { Scenario } from '../../../interfaces/scenario.interface';
import { User } from '../../../interfaces/user.interface';

@Component({
  selector: 'course-indiv',
  templateUrl: 'app/admin/course/course-indiv/course-indiv.template.html',
  styleUrls: ['app/admin/course/course-indiv/course-indiv.style.css']
})

export class CourseIndivComponent{

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
               private _authService: AuthenticationService,
              private _scenarioService: ScenarioService){
    this.isDestroyed$ = new Subject<boolean>();
  }

  ngOnInit(){
    let admin: User = this._authService.getUser();
    this.paramObserver = this._route.params.subscribe(params => {
            let course = params['courseNum'];

            this._courseService.getCourse(admin.id, course)
        .takeUntil(this.isDestroyed$)
              .subscribe((info) => {
              this.courseInfo = info;
              this._courseService.getStudents(admin.id, course)
              .takeUntil(this.isDestroyed$)
              .subscribe((students)=>{
                this.students = students.sort(sortStudents);
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
