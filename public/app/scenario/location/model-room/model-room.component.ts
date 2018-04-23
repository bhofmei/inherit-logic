import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil'

import { AuthenticationService } from '../../../authentication/authentication.service';
import { ScenarioService } from '../../scenario.service';
import { ScenarioGlobals } from '../../scenario.globals';
import { readErrorMessage } from '../../../shared/read-error';

@Component({
    selector: 'model-room',
    templateUrl: 'app/scenario/location/model-room/model-room.template.html',
  styleUrls: ['app/scenario/location/model-room/model-room.style.css']
})

export class ModelRoomComponent {

  /**
   * Current user guesses
   */
  private guesses: any;
  /**
   * Array of strain numbers included
   */
  private keys: number[];
  /**
   *
   */
  private geneAr: number[];
  /**
   * Size of each block
   */
  private stepSize: number;
  /**
   * Scenario code
   */
  private scenarioId: string;
  /**
   * User id
   */
  private userId: number;
  private errorMessage: string = '';
  /**
   * CSS width of each block dependent on length of gene and step size
   */
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

  /**
   * Initialize the component
   * 1. Get user id
   * 2. Get the scenario id from parent URL
   * 3. Get user guesses from scenario service (set by fridge)
   */
  ngOnInit(){
    let u = this._authenticationService.getUser();
    if(u){
      this.userId = u.id;
    }
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

  /**
   * Destroy the component by unsubscribing
   */
  ngOnDestory(){
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }

  /**
   * Get the CSS classes for a strain guess block
   * Block indicates wheater user thinks that section of the chromosome
   * is deleted in the strain
   *
   * @param {number} strain - strain number (matches nummber is fridge)
   * @param {number} pos - block index
   *
   * @returns {Object} - applicable CSS classes in the form
   * {'class': boolean, ...}
   */
  getBlockClass(strain: number, pos: number){
    let posGuess = this.guesses[strain][pos];
    return {
      'guess-block btn p-0': true,
      'btn-outline-secondary': !posGuess, // inactive
      'bg-dark': posGuess // active
    }
  }

  /**
   * Toggle block guess from true to false OR false to true
   *
   * called on (click) of the block
   *
   * @param {number} strain - strain number (matches nummber is fridge)
   * @param {number} pos - block index
   */
  toggleBlock(strain: number, pos: number){
    let c = this.guesses[strain][pos];
    this.guesses[strain][pos] = !c;
  }

  /**
   * Saves the guesses to the backend/database using the service
   *
   * called on (click) of Save Button
   */
  saveData(){
    // clear error message beforehand
    this.errorMessage = '';
    // use service and save data
    let out = JSON.stringify(this.guesses)
    this._scenarioService
      .saveDeletions(this.guesses, this.userId, this.scenarioId)
      .takeUntil(this.isDestroyed$)
      .subscribe((dat)=>{
      this.guesses = JSON.parse(dat);
      this._scenarioService.setScenario(null, dat);
    }, (err)=>{
      this.errorMessage = readErrorMessage(err);
    });
  }
}
