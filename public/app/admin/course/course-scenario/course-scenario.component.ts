import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil'

import { CourseService } from '../course.service';
import { ScenarioService } from '../../../scenario/scenario.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { StudentService } from '../../student/student.service';

import { Course } from '../../../interfaces/course.interface';
import { Student } from '../../../interfaces/student.interface';
import { Scenario } from '../../../interfaces/scenario.interface';
import { User } from '../../../interfaces/user.interface';

import { readErrorMessage } from '../../../shared/read-error';

@Component({
  selector: 'course-scen',
  templateUrl: 'app/admin/course/course-scenario/course-scenario.template.html',
  styleUrls: ['app/admin/course/course-scenario/course-scenario.style.css']
})

/**
 * This component displays the scenario status of all students
 * within the course and allows for navigation to student fridges
 * and grant access for a student
 */
export class CourseScenarioComponent{

  /**
   * List of students in the course
   */
  protected students: Student[] = [];
  private courseNum: string;
  /**
   * Information about the scenario
   */
  protected scenario: Scenario;
  private isDestroyed$: Subject<boolean>;
  private paramObserver: any;
  /**
  * The logged in admin user
  */
  private admin: User;

  private errorMessage: string = '';

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _authService: AuthenticationService,
    private _courseService: CourseService,
    private _studentService: StudentService,
    private _scenarioService: ScenarioService
              ){
    this.isDestroyed$ = new Subject<boolean>();
  }

  /**
   * Initalize the component
   * 1. Get the logged in user
   * 2. Based on the URL, get the course number and scenario code
   * 3. Get the scenario information
   * 4. Get the scenario status of students in the course
   */
  ngOnInit() {
    this.admin = this._authService.getUser();
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
        this._courseService.getScenarioStatus(this.admin.id, course, scenCode)
          .takeUntil(this.isDestroyed$)
          .subscribe((stats)=>{

            this.students = stats;
        }, (err2)=>{
          this.errorMessage = readErrorMessage(err2);
        });

      }, (err)=>{
        this.errorMessage = readErrorMessage(err);
      });
        });
  }

  /**
   * Simple formatting function which returns formatted string
   * depending on if student has access granted or not
   *
   * @param {boolean} isGranted - has access been granted
   *
   * @returns {string} - formatted string; "Access granted" if access has been granted, "Access not granted" otherwise
   */
  formatAccess(isGranted: boolean): string{
    return (isGranted ? 'Access granted' : 'Access not granted');
  }

  /**
   * On "Grant access" button click, calls service to grant
   * the student access to the scenario
   *
   * @param {number} studentIndex - positional index of student in the list of students
   * This is NOT the student's userId
   */
  grantAccess(studentIndex: number){
    let scenId = this.scenario.scenCode;
    let studentId = this.students[studentIndex].userId;
    this._studentService.grantScenAccess(this.admin.id, studentId, scenId, true)
      .takeUntil(this.isDestroyed$)
      .subscribe((res)=>{
        if(res !== undefined && res !== null){
          this.students[studentIndex].status = res.accessGranted[scenId];
        }
    }, (err)=>{
      this.errorMessage = readErrorMessage(err);
    })
  }

  /**
   * On "View Fridge" button, navigates to that student's fridge
   * for this scenario
   *
   * @param {number} studentId - the student's userID
   */
  goToFridge(studentId: number){
    this._router.navigate(['/admin/students/', studentId, this.scenario.scenCode]);
  }

  ngOnDestroy(){
    this.paramObserver.unsubscribe();
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }

}
