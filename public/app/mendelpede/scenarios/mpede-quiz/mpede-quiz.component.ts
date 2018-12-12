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
   * placeholder to store Quiz answers
   */
  private quizTrait: string;

  private quizSubmitted: boolean = false;

  private quizFridgeId: string;

  private quiz: MendelpedeQuiz;

  private errorMessage: string = '';

  @Input() mendelFridge: MendelpedeFridgeComponent;

  constructor(private _authenticationService: AuthenticationService,
    //private _router: Router,
    private _scenarioService: MendelpedeScenarioService,
    //private _route: ActivatedRoute
  ) {
      this.isDestroyed$ = new Subject<boolean>();
  }

  getQuizBackgroundColor(n: number){
    return {
      'text-success': this.quiz.isAnswerCorrect && this.quiz.isAnswerCorrect[n] && this.quizSubmitted
    }
  }

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
