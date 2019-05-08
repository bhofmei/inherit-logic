import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';


import { CourseService } from '../course.service';
import { MendelpedeScenarioService } from '../../../mendelpede/scenarios/mendelpede-scenarios.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { StudentService } from '../../student/student.service';

import { Course, Student, User, MendelpedeScenario } from '../../../interfaces/';

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
  /**
   * Scoremap which contains quiz score for all listed students if any
   */
  private scoreMap: Map<string, string> = new Map<string, string>();

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _authService: AuthenticationService,
    private _courseService: CourseService,
    private _studentService: StudentService,
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
                this.students = stats;
                this.students.forEach((student) => {
                  this._studentService.getMendelFridge(this.admin.id, student.userId, scenCode)
                    .takeUntil(this.isDestroyed$)
                          .subscribe((mfridge) => {
                            //console.log('we got fridge from db')
                            //console.log('coming for quiz');
                            let score = 'Quiz not submitted yet'
                            if(mfridge.quiz){
                              score = mfridge.quiz.score.toString();
                            }
                            this.scoreMap[student.userId] = score;
                        },
                            (error) => {
                          this.errorMessage = readErrorMessage(error);
                        });
                      });
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
   * Returns quiz score of the student
   * @param studentId: student userid
   */
  getQuizScore(studentId: string){
    //console.log(this.scoreMap);
    //console.log(scenId);
    return this.scoreMap[studentId];
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

  /**
   * When destroying component, unsubscribe from services to prevent memory leaks
   */
  ngOnDestroy(){
    this.paramObserver.unsubscribe();
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }

}
