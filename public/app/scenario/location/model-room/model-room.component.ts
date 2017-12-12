import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil'

import { AuthenticationService } from '../../../authentication/authentication.service';
import { ScenarioService } from '../../scenario.service';
import { ScenarioGlobals } from '../../scenario.globals';

@Component({
    selector: 'model-room',
    templateUrl: './app/scenario/location/model-room/model-room.template.html',
  styleUrls: ['./app/scenario/location/model-room/model-room.style.css']
})

export class ModelRoomComponent {

  private guesses: any;
  private keys: number[];
  private geneAr: number[];
  private stepSize: number;
  private scenarioId: string;
  private userId: number;
  private errorMessage: string = '';
  private _width: string;
  private isDestroyed$: Subject<boolean>;

  constructor(private _router: Router,
               private _route: ActivatedRoute,
               private _authenticationService: AuthenticationService,
              private _scenarioService: ScenarioService){
    this.isDestroyed$ = new Subject<boolean>();

    this.stepSize = ScenarioGlobals.deletionGuessLength;
    this.geneAr = [];
    let nBlocks: number = Math.ceil(ScenarioGlobals.geneLength/this.stepSize);
    for(let i = 0; i < nBlocks; i++){
      this.geneAr.push(i);
    }
    this._width = (100 / nBlocks).toString();
  }

  ngOnInit(){
    this._authenticationService.getUser
      .takeUntil(this.isDestroyed$)
      .subscribe( (res) =>{
      this.userId = res.id;
    });
    this._route.parent.params
      .takeUntil(this.isDestroyed$)
      .subscribe(params =>{
      this.scenarioId = params['scenId']
    });
    this._scenarioService.getGuesses
      .takeUntil(this.isDestroyed$)
      .subscribe((dels) => {
      this.guesses = dels;
      this.keys = Object.keys(dels).map((k)=> {return Number.parseInt(k);});
      if(this.keys.length === 0){
        this.errorMessage = 'No phage available for modelling'
      } else {
        this.errorMessage = '';
      }
    });
  }

  ngOnDestory(){
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }

  getBlockClass(strain: number, pos: number){
    let posGuess = this.guesses[strain][pos];
    return {
      'guess-block btn p-0': true,
      'btn-outline-secondary': !posGuess, // inactive
      'bg-dark': posGuess // active
    }
  }

  toggleBlock(strain: number, pos: number){
    let c = this.guesses[strain][pos];
    this.guesses[strain][pos] = !c;
  }

  saveData(){
    // use service and save data
    let out = JSON.stringify(this.guesses)
    this._scenarioService
      .saveDeletions(this.guesses, this.userId, this.scenarioId)
      .takeUntil(this.isDestroyed$)
      .subscribe((dat)=>{
      this.guesses = JSON.parse(dat);
      this._scenarioService.setScenario(null, dat);
    });
  }
}
