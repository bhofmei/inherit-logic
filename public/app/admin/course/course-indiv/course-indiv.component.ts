import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';


import { CourseService } from '../course.service';
import { CricketService } from '../../../cricket/cricket.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { readErrorMessage } from '../../../shared/read-error';

import { Course, Student, sortStudents, Scenario, User } from '../../../interfaces';

@Component({
  selector: 'course-indiv',
  templateUrl: './course-indiv.template.html',
  styleUrls: ['./course-indiv.style.css']
})


/**
 * Component to view an individual course
 * Includes information such as course number, description, instructors, and students
 */
export class CourseIndivComponent implements OnInit, OnDestroy{

  /**
   * List of students enrolled in the course
   */
  private students: Student[] = [];
  /**
   * Course info including `courseNum`, `description`, `instructors`
   */
  courseInfo: Course;
  /**
   * list of available scenarios (used for linking)
   */
  private scenarios: Scenario[];
  /**
   * State variable to make unsubscribing from services easier
   */
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
    private _scenarioService: CricketService){
    this.isDestroyed$ = new Subject<boolean>();
  }

  /**
   * Initialize all content on the page using several services
   * 1. Get the logged in user
   * 2. Get the course information (description, instructors)
   * 3. Get the list of students in the course
   * 4. Get the list of scenarios
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
   * Unsubscribe from subscriptions to prevent memory leaks
   */
  ngOnDestroy(){
    this.paramObserver.unsubscribe();
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }

}
