import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';

import { CourseService } from '../course.service';
import { MendelpedeScenarioService } from '../../../mendelpede/scenarios/mendelpede-scenarios.service';
import { AuthenticationService } from '../../../authentication/authentication.service';

import { Course, Student, User, MendelpedeScenario, sortStudents } from '../../../interfaces/';

import { readErrorMessage } from '../../../shared/read-error';

/**
 * For Mendelpede, This component displays the scenario status of all students
 * within the course and allows for navigation to student fridges
 * and grant access for a student
 */
@Component({
  selector: 'course-scen',
  templateUrl: './course-mendel-scenario.template.html',
  styles: []
})

export class CourseMendelScenarioComponent implements OnInit, OnDestroy {

  /**
   * List of students in the course
   */
  protected students: Student[] = [];
  /**
   * The course number
   */
  protected courseNum: string;
  /**
   * Information about the mendel scenario
   */
  protected scenario: MendelpedeScenario;
  protected
  /**
   * State variable to make unsubscribing from services easier
   */
  private isDestroyed$: Subject<boolean>;
  /**
   * Subscription to observe url `courseNum` parameter
   */
  private paramObserver: any;
  /**
  * The logged in admin user
  */
  private admin: User;
  /**
   * Potential backend error messages
   */
  private errorMessage: string = '';


  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _authService: AuthenticationService,
    private _courseService: CourseService,
    private _scenarioService: MendelpedeScenarioService
              ){
    this.isDestroyed$ = new Subject<boolean>();
  }

  /**
   * Initalize the component
   * 1. Get the logged in user
   * 2. Based on the URL, get the course number and scenario code
   * 3. Get the scenario information
   * 4. Get the scenario status of students in the course
   * 5. Get the mendel fridge information for student
   */
  ngOnInit() {
    this.admin = this._authService.getUser();
    this.paramObserver = this._route.params
      .subscribe(params => {
          let course = params['courseNum'];
          let scenCode = params['scenShortCode'];
          this.courseNum = course.toUpperCase();
          this._scenarioService.getScenario(scenCode)
            .takeUntil(this.isDestroyed$)
            .subscribe((res)=>{
              // success
              this.scenario = res;
            this._courseService.getMendelScenarioStatus(this.admin.id, course, scenCode)
              .takeUntil(this.isDestroyed$)
              .subscribe((stats)=>{
                this.students = stats.sort(sortStudents);
            }, (err2)=>{
              this.errorMessage = readErrorMessage(err2);
            });

          }, (err)=>{
            this.errorMessage = readErrorMessage(err);
          });
            });
  }

  /**
   * On "View Fridge" button, navigates to that student's fridge
   * for this scenario
   *
   * Called on `(click)` of "View Fridge" button of a student
   *
   * @param {number} studentId - the student's userID
   */
  goToFridge(studentId: number){
    // student-indiv
    this._router.navigate(['/admin/students/', studentId,'mendelpede', this.scenario.shortCode]);
  }

  downloadCSV(){

    let headers = ['Last Name', 'First Name', 'Score'];
    var result = 'data:text/csv;charset=utf-8,';
    result += headers.join(',') + '\n';
    for(let student of this.students){
      let row = [student.lastName, student.firstName, student.quiz].join(',');
      result += row + '\n';
    }

    const encoded = encodeURI(result);
    const outFile = this.courseNum + '_' + this.scenario.shortCode + '.csv';
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', encoded);
    link.setAttribute('download', outFile);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  /**
   * When destroying component, unsubscribe from services to prevent memory leaks
   */
  ngOnDestroy(){
    this.paramObserver.unsubscribe();
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }

}
