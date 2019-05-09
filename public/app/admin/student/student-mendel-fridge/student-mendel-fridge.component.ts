import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDeleteDialogComponent } from '../../../shared/confirm-delete-dialog.component';

import { StudentService } from '../student.service';
import { AuthenticationService } from '../../../authentication/authentication.service';

import { Course, AdminStudent, MendelpedePede, StudentMendelFridge } from '../../../interfaces';

import { readErrorMessage } from '../../../shared/read-error';
import { PedeImagePipe } from '../../../pipes/pede-image.pipe';

@Component({
  selector: 'student-mendel-fridge',
  templateUrl: './student-mendel-fridge.template.html',
  //template: require('./student-mendel-fridge.template.html')

  styleUrls: ['./student-mendel-fridge.style.css','../../../mendelpede/scenarios/mpede-pedes.style.css']
})

export class StudentMendelFridgeComponent implements OnInit, OnDestroy {
  /**
   * Student mendel Fridge object (if it exists)
   */
  protected fridge: StudentMendelFridge;
  /**
   * If fridge exists
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

  /**
   * Genofacts to be diaplayed on the page
  */
  private currGenoFacts: any;

  /**
   * Has the student taken the quiz: helps to display quiz score section
   */
  protected isQuizTaken: boolean = false;

  /**
   * List of mendelpedes currently being viewed
   */
  pedes: MendelpedePede[];

  /**
   * Error message from the server
   */
  private errorMessage: string = '';

  /**
   * Student's id
   */
  private studentId: any;

  /**
   * Mendel scenario id
   */
  private scenId: any;

  /**
   * Admin
   */
  private admin: any;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _studentService: StudentService,
    private _authService: AuthenticationService,
    private _modalService: NgbModal){
      //console.log('construct');
    this.isDestroyed$ = new Subject<boolean>();
  }

  /**
   * Initialize the view
   * 1. Get studentId, scenarioId, and admin
   * 2. Get the fridge
   * 3. If the fridge exists
   * add quiz, mendelpedes to the view
   */
  ngOnInit(){
    this.paramObserver = this._route.params.subscribe(params => {
      this.studentId = params['studentId'];
      this.scenId = params['scenShortCode'];
      this.admin = this._authService.getUser();

      this._studentService.getMendelFridge(this.admin.id, this.studentId, this.scenId)
        .takeUntil(this.isDestroyed$)
              .subscribe((mfridge) => {
              this.fridge = mfridge;
              this.fridge.owner = mfridge.owner;
              console.log(this.fridge);
              if(this.fridge.quiz){
                this.isQuizTaken = true;
              }
              if(mfridge.genoFacts){
                this.currGenoFacts = JSON.parse(mfridge.genoFacts);
                if (this.currGenoFacts !== null){
                  this.hasFridge = true
                }
              }
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

  /**
   * - when clicking delete quiz button, open a modal dialog to confirm delete
   * - if confirm, delete quiz and redirect to same page
   * - otherwise, do nothing
   *
   * Called on `(click)` of the "Delete" button
   */
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

  /**
   * - Delete quiz score
   *
   * Called on `(click)` of the "Delete" button
   */
  deleteQuizScore(){
    this.isQuizTaken = false;
    this._studentService.deleteQuizScore(this.admin.id, this.studentId, this.scenId)
    .takeUntil(this.isDestroyed$)
    .subscribe((err)=>{

    });
  }

  /**
   * Delete Student fridge
   */
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
