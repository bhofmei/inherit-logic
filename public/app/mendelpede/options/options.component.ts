import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthenticationService } from '../../authentication/authentication.service';
import { MendelpedeScenarioService } from '../scenarios/mendelpede-scenarios.service';
import { CourseService } from '../../admin/course/course.service';
import { User } from '../../interfaces/user.interface';
import { MendelpedeScenario, sortScenarios } from '../../interfaces/mendelpede-scenarios.interface';
@Component({
  selector: 'options',
  templateUrl: './options.template.html',
  styles: ['.list-group-item {padding: 0.5em 1.25em!important; }']
})
export class OptionsComponent implements OnInit {

  user: User;
  private isUndergrad: boolean;
  /**
  * list of available scenarios
  */
  options: MendelpedeScenario[];
  scenarios: MendelpedeScenario[] = Array();
  quizzes: MendelpedeScenario[] = Array();
  discoveries: MendelpedeScenario[] = Array();
  pathways: MendelpedeScenario[] = Array();

  errorMessage: string;
  /**
   * State to monitior if component active to make unsubscribing to
   * multiple streams easier
   */
  private isDestroyed$: Subject<boolean>;

  constructor(
    private _authenticationService: AuthenticationService,
    private _scenarioService: MendelpedeScenarioService,
    private _courseService: CourseService) {
    this.isDestroyed$ = new Subject<boolean>();
  }

  ngOnInit() {
    this.user = this._authenticationService.getUser();
    //console.log(this.user);
    this._courseService.getCourseById(this.user.courseId)
      .takeUntil(this.isDestroyed$)
      .subscribe((course) => {
        //console.log(course);
        this.isUndergrad = (course.level === 'undergraduate');
        this._scenarioService.listScenarios(course.level)
          .takeUntil(this.isDestroyed$)
          .subscribe((options) => {
            //console.log(options)
            this._initOptions(options);
          }, (err) => {
            this._initOptions([]);
            this.errorMessage = err;
          });
      },
        (err) => {
          console.log(err);
          this.errorMessage = err;
        });
  } // end ngInit

  _initOptions(optList: MendelpedeScenario[]) {
    // separate into list types
    for (let opt of optList) {
      switch (opt.scenType) {
        case 'quiz':
          this.quizzes.push(opt);
          break;
        case 'discovery':
          this.discoveries.push(opt);
          break;
        case 'pathway':
          this.pathways.push(opt);
          break;
        default: // scenario
          this.scenarios.push(opt);
      }
    } // end for
    this.scenarios.sort(sortScenarios);
    this.quizzes.sort(sortScenarios);
    this.discoveries.sort(sortScenarios);
    this.pathways.sort(sortScenarios);
  }

  /**
   * When destroying component, unsubscribe from service if necessary
   * to prevent memory leaks
   */
  ngOnDestroy() {
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }

}
