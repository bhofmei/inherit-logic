import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil'

import { StudentService } from '../student.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { ScenarioService } from '../../../scenario/scenario.service';

import { Course, AdminStudent, Scenario, StudentPhage, StudentFridge } from '../../../interfaces';

import { readErrorMessage } from '../../../shared/read-error';

@Component({
  selector: 'student-fridge',
  templateUrl: 'app/admin/student/student-fridge/student-fridge.template.html',
  //styleUrls: ['app/admin/student/student-indiv/student-indiv.style.css']
})

export class StudentFridgeComponent{

  /**
   * Fridge object (if it exists)
   */
  protected fridge: StudentFridge;
  /**
   * If fridge exists determine by if this.fridge has strains
   */
  protected hasFridge: boolean = false;
  private isDestroyed$: Subject<boolean>;
  private paramObserver: any;

  /**
   * Option to show all strains in fridge or
   * only strains of interest for grading (unknown
   * and submitted)
   * Should be "all" or "graded"
   */
  private viewStrains: string = 'all';
  /**
   * List of phage currently being viewed
   */
  private strainList: StudentPhage[];

  private errorMessage: string = '';

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _studentService: StudentService,
    private _authService: AuthenticationService){
    this.isDestroyed$ = new Subject<boolean>();
  }

  /**
   * Initialize the view
   * 1. Get studentId, scenarioId, and admin
   * 2. Get the fridge
   * 3. If the fridge exists
   * 3a. add the "guesses" to each strain
   * 3b. sort the strains by strain number
   */
  ngOnInit(){
    this.paramObserver = this._route.params.subscribe(params => {
      let studentId = params['studentId'];
      let scenId = params['scenId'];
      let admin = this._authService.getUser();

      this._studentService.getFridge(admin.id, studentId, scenId)
        .takeUntil(this.isDestroyed$)
              .subscribe((fridge) => {
              this.fridge = fridge;
              this.hasFridge = (fridge.strains !== undefined);
              if(this.hasFridge){
                let guesses = JSON.parse(this.fridge.guesses);
                for(let strain of this.fridge.strains){
                  let x = guesses[strain.strainNum];
                  if(x){
                    strain.guesses = x;
                  } else{
                    strain.guesses = [];
                  }
                }
                this.fridge.strains.sort((a,b)=>{return a.strainNum - b.strainNum});
              }
              this.setPhage('all');
            },
                (error) => {
              this.errorMessage = readErrorMessage(error);
            });
        });
  }

  /**
   * Determine the CSS class for the view strains button depending on selected option
   *
   * @param {string} src - button determining classes for
   *
   * @returns {Object} - classes which appy to this button in the form {"class": boolean, ...}
   *
   * @example
   * View stains is "all"
   * getButtonClass('all') -> {'btn btn-small': true, 'btn-primary': true, 'btn-primary-outline': false}
   * getButtonClass('graded') -> {'btn btn-small': true, 'btn-primary': false, 'btn-primary-outline': true}
   */
  getButtonClass(src: string): Object{
    return {
      'btn btn-sm': true,
      'btn-primary': (src === this.viewStrains),
      'btn-outline-primary': (src !== this.viewStrains)
    }
  }

  /**
   * When a viewStrain button is clicked,
   * update the list of visible phage appropriately
   *
   * @param {string} src - button which was clicked;
   * Should be one of ["all", "graded"]
   */
  setPhage(src: string){
    this.viewStrains = src;
    if(this.viewStrains === 'all'){
      this.strainList = this.fridge.strains;
    } else {
      this.strainList = this.fridge.strains.filter((strain)=>{
        if(strain.phageType === 'unknown'){
          return true;
        } else if(strain.phageType === 'user' && strain.submitted){
          return true;
        } else {
          return false;
        }
      });
    }
  }

  ngOnDestroy(){
    this.paramObserver.unsubscribe();
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }

}
