import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil'

import { CourseService } from '../course.service';
import { ScenarioService } from '../../../scenario/scenario.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { readErrorMessage } from '../../../shared/read-error';

import { Course, Student, sortStudents, Scenario, User } from '../../../interfaces';

@Component({
  selector: 'course-indiv',
  templateUrl: 'app/admin/course/course-indiv/course-indiv.template.html',
  styleUrls: ['app/admin/course/course-indiv/course-indiv.style.css']
})


/**
 * Component to view an individual course
 * Includes information such as course number, description, instructors, and students
 */
export class CourseIndivComponent{

  /**
   * List of students enrolled in the course
   */
  private students: Student[] = [];
  /**
   * Course info: courseNum, description, instructors
   */
  courseInfo: Course;
  /**
   * list of available scenarios (used for linking)
   */
  private scenarios: Scenario[];
  private isDestroyed$: Subject<boolean>;
  private paramObserver: any;

  /**
   * Potential error message that could arise
   */
  private errorMessage: string = '';

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _courseService: CourseService,
    private _authService: AuthenticationService,
    private _scenarioService: ScenarioService){
    this.isDestroyed$ = new Subject<boolean>();
  }

  /**
   * Initialize all content on the page using several services
   */
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
            },(error) => {
              this.errorMessage = readErrorMessage(error);
            });
        });
  }

  /**
   * Unsubscribe from subscriptions
   */
  ngOnDestroy(){
    this.paramObserver.unsubscribe();
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }

}
