import { Component, Input, OnInit, HostListener} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

import { MendelpedeFridgeComponent } from '../mpede-fridge/mpede-fridge.component';
import { MendelpedeScenarioService } from '../mendelpede-scenarios.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { readErrorMessage } from '../../../shared/read-error';

import { MendelpedePede, MendelpedeQuiz } from '../../../interfaces';

//import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'mendelpede-quiz',
  templateUrl: './mpede-quiz.template.html',
  styleUrls: ['./mpede-quiz.style.css']
})

export class MendelpedeQuizComponent{

  //private paramObserver: any;

  /**
   * State to monitior if component active to make unsubscribing to
   * multiple streams easier
   */
  private isDestroyed$: Subject<boolean>;

  /**
   *  All the mendelpedes belonging to quiz
   */
  private quizPedes: MendelpedePede[] = [];

  /**
   * first trait of the quiz to be displayed as a hint
   */
  private quizTrait: string;
  /**
   * If the quiz is already taken by student
   */
  private quizSubmitted: boolean = false;
  /**
   * fridge id of the quiz
   */
  private quizFridgeId: string;
  /**
   * quiz object
   */
  private quiz: MendelpedeQuiz;
  /**
   * error message
   */
  private errorMessage: string = '';
  /**
   * communicate with mendelfridge component
   */
  @Input() mendelFridge: MendelpedeFridgeComponent;

  constructor(private _authenticationService: AuthenticationService,
    //private _router: Router,
    private _scenarioService: MendelpedeScenarioService,
    //private _route: ActivatedRoute
  ) {
      this.isDestroyed$ = new Subject<boolean>();
  }
  /**
   * CSS class is set for correct or incorrect answers
   * @param {number} n index of the answer
   */
  getQuizBackgroundColor(n: number){
    return {
      'text-success': this.quiz.isAnswerCorrect && this.quiz.isAnswerCorrect[n] && this.quizSubmitted
    }
  }

  /**
   * 1. get fridge associated with the quiz
   */
  ngOnInit(){
    this._scenarioService.getFridge
    .takeUntil(this.isDestroyed$)
      .subscribe((fridge) => {
        this.quizPedes = fridge.pedes;
        this.quizTrait = fridge.firstTraitForQuiz;
        this.quizFridgeId = fridge.id;
        if(fridge.quiz){
          this.quizSubmitted = true;
          this.quiz = fridge.quiz;
        } else{
          this.quizSubmitted = false;
          this.quiz = this._initQuiz();
        }
      });
  }

  /**
   * Initialize the quiz with empty quiz options
   */
  private _initQuiz(){
    var arr1 = [];
    var arr2 = [];
    for(let i = 0; i < 8; i++){
      arr1.push(null);
      arr2.push(false);
    }
    return {
      score: -1,
      submittedAnswers: arr1,
      isAnswerCorrect: arr2
    }
  }

  /**
   * submit the quiz with student's answers
   * display the score of student
   */
  submitQuiz(){
    // reset error messages
    this.errorMessage = '';
    var returnPedes = this.quizPedes.slice(0,8);
    this._scenarioService.calculateQuizScore(returnPedes, this.quiz.submittedAnswers, this.quizFridgeId)
    .takeUntil(this.isDestroyed$)
    .subscribe((res) => {
      this.quiz = res;
      this.quizSubmitted = true;
    }, (err)=>{
      this.errorMessage = readErrorMessage(err);
      this.quiz = this._initQuiz();
    });
  }

  /**
   * When destroying the component, unsubscribe from services
   * to prevent memory leak
   */
  ngOnDestroy(){
    //this.paramObserver.unsubscribe();
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }
}
