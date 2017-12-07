import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  private routingObserver: any;
  private userId: number;
  private errorMessage: string = '';
  private subscription: any;
  private _width: string;

  constructor(private _router: Router,
               private _route: ActivatedRoute,
               private _authenticationService: AuthenticationService,
              private _scenarioService: ScenarioService){
    this.stepSize = ScenarioGlobals.deletionGuessLength;
    this.geneAr = [];
    let nBlocks: number = 0;
    for(let i = 0; i < ScenarioGlobals.geneLength; i+= this.stepSize){
      this.geneAr.push(i);
      nBlocks++;
    }
    this._width = (100 / nBlocks).toString();
  }

  ngOnInit(){
    let userObj = this._authenticationService.user;
    this.userId =  userObj.userId || userObj.id;
    this.routingObserver = this._route.parent.params.subscribe(params =>{
      this.scenarioId = params['scenId']
    });
    let scenCode;
    this.subscription = this._scenarioService.getGuesses
      .subscribe((dels) => {
      this.guesses = dels;
      this.keys = Object.keys(dels).map((k)=> {return Number.parseInt(k);});
    });
  }

  ngOnDestory(){
    this.routingObserver.unsubscribe();
    this.subscription.unsubscribe();
  }

  getBlockClass(strain: number, pos: number){
    let posGuess = this.guesses[strain][pos];
    return {
      'guess-block border border-primary': true,
      'bg-primary': posGuess // active
    }
  }

  toggleBlock(strain: number, pos: number){
    let c = this.guesses[strain][pos];
    this.guesses[strain][pos] = !c;
  }
}
