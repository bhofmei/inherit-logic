import { Component, Input, OnInit, HostListener} from '@angular/core';
import { MendelpedeFridgeComponent } from '../mpede-fridge/mpede-fridge.component';
import { MendelpedePede } from '../../../interfaces/mendelpede-pede.interface';
import { MendelpedeScenarioService } from '../mendelpede-scenarios.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
//import { User } from '../../interfaces/user.interface';
//import { AuthenticationService } from '../../authentication/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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
  private quizAnswers: any[] = [];

  private quizTrait: string;

  private actualAnswers: boolean[] = [];

  private quizSubmitted: boolean = false;

  private quizFridgeId: string

  private quizScore: number

  constructor(private _authenticationService: AuthenticationService,
    private _router: Router,
    private _scenarioService: MendelpedeScenarioService,
    private _route: ActivatedRoute) {
      this.isDestroyed$ = new Subject<boolean>();
      for (let i = 0; i < 8; i++){
          this.quizAnswers.push({
            id: i,
            answer: "Not answered yet"
          });
        }
  }

  getQuizBackgroundColor(answer: boolean){
    return {
      'text-success': answer && this.quizSubmitted
    }
  }

  ngOnInit(){
    //console.log('getting Mendelpedes for quiz');

    this._scenarioService.getFridge
    .takeUntil(this.isDestroyed$)
      .subscribe((fridge) => {
        this.quizPedes = fridge.pedes
        this.quizTrait = fridge.firstTraitForQuiz;
        this.quizFridgeId = fridge.id;
        if(fridge.quiz){
          this.quizSubmitted = true;
          this.quizScore = fridge.quiz.score;
          this.actualAnswers = fridge.quiz.studentAnswers;
        } else{
          this.quizSubmitted = false;
        }
      });

    /*
    this._scenarioService.getQuizPedes
    .takeUntil(this.isDestroyed$)
      .subscribe((details) => {
        this.quizPedes = details;
        this._scenarioService.getFirstTraitForQuiz
        .takeUntil(this.isDestroyed$)
        .subscribe((trait) => {
          this.quizTrait = trait;
          this._scenarioService.getFridgeId
          .takeUntil(this.isDestroyed$)
          .subscribe((fridgeId) => {
            this.quizFridgeId = fridgeId;
            this._scenarioService.isQuizDone
            .takeUntil(this.isDestroyed$)
            .subscribe((isQuizDone) => {
              this.quizSubmitted = isQuizDone;
            });
          });
        });
    });*/
  }

  @Input() mendelFridge: MendelpedeFridgeComponent;

  submitQuiz(){
    //console.log('submitting the quiz')
    //console.log(this.quizAnswers)
    //console.log(this.quizPedes)
    this.quizPedes = this.quizPedes.slice(0,8);
    this.quizSubmitted = true
    this._scenarioService.calculateQuizScore(this.quizPedes, this.quizAnswers, this.quizFridgeId)
    .takeUntil(this.isDestroyed$)
    .subscribe((answers) => {
      this.actualAnswers = answers;
      this.quizSubmitted = true
      this.quizScore = answers.filter(Boolean).length
      //console.log('we got the answers');
      //console.log(this.actualAnswers);
    })
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
