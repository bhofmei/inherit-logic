import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDeleteDialogComponent } from '../../../shared/confirm-delete-dialog.component';

import { StudentService } from '../student.service';
import { AuthenticationService } from '../../../authentication/authentication.service';

import { Course, AdminStudent, Scenario, MendelpedePede, StudentMendelFridge } from '../../../interfaces';

import { readErrorMessage } from '../../../shared/read-error';

@Component({
  selector: 'student-mendel-fridge',
  templateUrl: './student-mendel-fridge.template.html',
  styleUrls: ['./student-mendel-fridge.style.css','../../../mendelpede/scenarios/mpede-pedes.style.css']
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

  protected isQuizTaken: boolean = false;

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

  private studentId: any;

  private scenId: any;

  private admin: any;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _studentService: StudentService,
    private _authService: AuthenticationService,
    private _modalService: NgbModal){
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
      this.studentId = params['studentId'];
      this.scenId = params['scenShortCode'];
      this.admin = this._authService.getUser();

      this._studentService.getMendelFridge(this.admin.id, this.studentId, this.scenId)
        .takeUntil(this.isDestroyed$)
              .subscribe((mfridge) => {
                //console.log('we got fridge from db')
              this.fridge = mfridge;
              this.fridge.owner = mfridge.owner;
              if(this.fridge.quiz){
                this.isQuizTaken = true;
              }
              if(mfridge.genoFacts){
                this.currGenoFacts = JSON.parse(mfridge.genoFacts);
                if (this.currGenoFacts !== null){
                  this.hasFridge = true
                }
              }

              //console.log('we got fridge')
              //console.log(this.fridge)
            },
                (error) => {
              this.errorMessage = readErrorMessage(error);
            });
        });
  }

  /**
   * - when clicking delete button, open a modal dialog to confirm delete
   * - if confirm, delete and redirect to students
   * - otherwise, do nothing
   *
   * Called on `(click)` of the "Delete" button
   */
  checkDeleteStudentFridge(){
    const modelRef = this._modalService.open(ConfirmDeleteDialogComponent, {size: 'sm'});
    modelRef.componentInstance.message = 'Are you sure you want to delete?';

    modelRef.result.then((result)=>{
      if(result === 'delete'){
        this.deleteStudentFridge();
      }
    }, (dismiss)=>{
      // do nothing
      return;
    });
  }

  checkDeleteQuizScore(){
    const modelRef = this._modalService.open(ConfirmDeleteDialogComponent, {size: 'sm'});
    modelRef.componentInstance.message = 'Are you sure you want to delete?';

    modelRef.result.then((result)=>{
      if(result === 'delete'){
        this.deleteQuizScore();
      }
    }, (dismiss)=>{
      // do nothing
      return;
    });
  }

  deleteQuizScore(){
    this.isQuizTaken = false;
    this._studentService.deleteQuizScore(this.admin.id, this.studentId, this.scenId)
    .takeUntil(this.isDestroyed$)
    .subscribe((err)=>{

    });
  }

  deleteStudentFridge(){
    this.fridge = null;
    this.hasFridge = false;
    this.currGenoFacts = null;
    this.isQuizTaken = false;
    this._studentService.deleteStudentMendelFridge(this.admin.id, this.studentId, this.scenId)
    .takeUntil(this.isDestroyed$)
    .subscribe((mfridge)=>{
      // successful
      this.fridge = mfridge;
      this.fridge.owner = mfridge.owner;
      if(this.fridge.quiz){
        this.isQuizTaken = true;
      }
      if(mfridge.genoFacts){
        this.currGenoFacts = JSON.parse(mfridge.genoFacts)
        if (this.currGenoFacts !== null){
          this.hasFridge = true
        }
      }
    }, (err)=>{
      this.errorMessage = readErrorMessage(err);
    })
  }
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
