import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';


import { StudentService } from '../student.service';
import { AuthenticationService } from '../../../authentication/authentication.service';

import { Course, AdminStudent, Scenario, MendelpedePede, StudentMendelFridge } from '../../../interfaces';

import { readErrorMessage } from '../../../shared/read-error';

@Component({
  selector: 'student-mendel-fridge',
  templateUrl: './student-mendel-fridge.template.html',
  styleUrls: ['../../../mendelpede/scenarios/mpede-labroom/mpede-labroom.style.css']
})

export class StudentMendelFridgeComponent implements OnInit, OnDestroy {
  /**
   * Fridge object (if it exists)
   */
  protected fridge: StudentMendelFridge;
  /**
   * If fridge exists determine by if this.fridge has strains
   */
  protected hasFridge: boolean = false;
  /**
   * Boolean state variable to make unsubscribing from multiple observables easier
   */
  private isDestroyed$: Subject<boolean>;
   /**
   * Subscription for URL parameters
   */
  private paramObserver: any;

  private currGenoFacts: any;

  /**
   * Option to show all strains in fridge or
   * only strains of interest for grading (unknown
   * and submitted)
   *
   * Should be `"all"` or `"graded"`
   */
  //private viewStrains: string = 'all';
  /**
   * List of phage currently being viewed
   */
  pedes: MendelpedePede[];
  /**
   * Error message from the server
   */
  private errorMessage: string = '';

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _studentService: StudentService,
    private _authService: AuthenticationService){
    this.isDestroyed$ = new Subject<boolean>();
  }
  /**
   * Gets CSS classes 
   *
   * @returns {Object} classes wh
   */

  getMendelpede(phenotype: string[]): Object{
    var mpedeCssClass: {} = {};
    
    // create css classes using traits
    var segcol: string = 'mpede-bodycol-'+phenotype[2];
    var eyecol: string = 'mpede-eyecol-'+phenotype[1]
    var imurl: string = 'mpede-pede-'+phenotype[0].toLowerCase()+'-seg'+phenotype[4]+'-leg'+phenotype[3]+'-min'
    mpedeCssClass[segcol] = true
    mpedeCssClass[eyecol] = true
    mpedeCssClass[imurl] = true
    mpedeCssClass['sizeI'] = true
    return mpedeCssClass
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
      let scenId = params['scenShortCode'];
      let admin = this._authService.getUser();

      this._studentService.getMendelFridge(admin.id, studentId, scenId)
        .takeUntil(this.isDestroyed$)
              .subscribe((mfridge) => {
                console.log('we got fridge from db')
                console.log(mfridge)
              this.fridge = mfridge;
              this.currGenoFacts = JSON.parse(mfridge.genoFacts)
              if (this.currGenoFacts !== null){
                this.hasFridge = true
              }
              console.log('we got genofacts')
              console.log(this.currGenoFacts)
              //this.pedes = this.fridge.pedeList;
              //this.hasFridge = (fridge.strains !== undefined);
              /*if(this.hasFridge){
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
              }*/
              //this.setPhage('all');
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
   * @returns {Object} classes which appy to this button in the form {"class": boolean, ...}
   *
   * @example <caption>View strains is "all"</caption>
   * getButtonClass('all') -> {'btn btn-small': true, 'btn-primary': true, 'btn-primary-outline': false}
   * getButtonClass('graded') -> {'btn btn-small': true, 'btn-primary': false, 'btn-primary-outline': true}
   
  getButtonClass(src: string): Object{
    return {
      'btn btn-sm': true,
      'btn-primary': (src === this.viewStrains),
      'btn-outline-primary': (src !== this.viewStrains)
    }
  }
*/
  /**
   * update the list of visible phage appropriately
   *
   * Called on `(click)` of "View Strain" button
   * @param {string} src - button which was clicked;
   * Should be one of `["all", "graded"]`
  
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
 */
  /**
   * When destorying the component, unsubscribe from services and
   * observables to prevent memory leak
   */
  ngOnDestroy(){
    this.paramObserver.unsubscribe();
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }

}
