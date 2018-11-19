import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';


import { CourseService } from '../course.service';
import { CricketService } from '../../../cricket/cricket.service';
import { MendelpedeScenarioService } from '../../../mendelpede/scenarios/mendelpede-scenarios.service'
import { AuthenticationService } from '../../../authentication/authentication.service';
import { readErrorMessage } from '../../../shared/read-error';

import { Course, Student, sortStudents, Scenario, User, MendelpedeScenario } from '../../../interfaces';

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

  /**
   * List of all Mendelpede scenarios
   */
  private mpedeOptions: MendelpedeScenario[];
  
  mpedeScenarios: MendelpedeScenario[] = Array();
  quizes: MendelpedeScenario[] = Array();
  discoveries: MendelpedeScenario[] = Array();
  pathways: MendelpedeScenario[] = Array();

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _courseService: CourseService,
    private _authService: AuthenticationService,
    private _scenarioService: CricketService,
    private _mpedeScenarioService: MendelpedeScenarioService,){
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
                this._mpedeScenarioService.listScenarios().takeUntil(this.isDestroyed$)
                    .subscribe((scens) => {
                      this.mpedeOptions = scens;
                      this.mpedeOptions.forEach((option) => {
                        if (option.scenType === 'scenario') {
                          this.mpedeScenarios.push(option);
                        } else if(option.scenType === 'quiz'){
                          this.quizes.push(option);
                        } else if(option.scenType === 'discovery'){
                          this.discoveries.push(option);
                        }else if(option.scenType === 'pathway'){
                          this.pathways.push(option);
                        }
                      });
                      this.mpedeScenarios = this.mpedeScenarios.sort((o1, o2) => {
                        if (o1.ordOfScen < o2.ordOfScen){
                          return -1;
                        } else if (o1.ordOfScen > o2.ordOfScen){
                          return 1;
                        } else{
                          return 0;
                        }
                      })
                      this.quizes = this.quizes.sort((o1, o2) => {
                        if (o1.ordOfScen < o2.ordOfScen){
                          return -1;
                        } else if (o1.ordOfScen > o2.ordOfScen){
                          return 1;
                        } else{
                          return 0;
                        }
                      })
                      this.discoveries = this.discoveries.sort((o1, o2) => {
                        if (o1.ordOfScen < o2.ordOfScen){
                          return -1;
                        } else if (o1.ordOfScen > o2.ordOfScen){
                          return 1;
                        } else{
                          return 0;
                        }
                      })
                      this.pathways = this.pathways.sort((o1, o2) => {
                        if (o1.ordOfScen < o2.ordOfScen){
                          return -1;
                        } else if (o1.ordOfScen > o2.ordOfScen){
                          return 1;
                        } else{
                          return 0;
                        }
                      })
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
