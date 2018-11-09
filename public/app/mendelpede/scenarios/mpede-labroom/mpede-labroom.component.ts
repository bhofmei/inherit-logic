import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../../interfaces/user.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { MendelpedePede } from '../../../interfaces/mendelpede-pede.interface';
import { MendelpedeScenarioService } from '../../scenarios/mendelpede-scenarios.service';
import { Subject } from 'rxjs';
import { readErrorMessage } from '../../../shared/read-error';

@Component({
  selector: 'mpede-labroom',
  templateUrl: './mpede-labroom.template.html',
  styleUrls: ['./mpede-labroom.style.css']
})
export class MendelpedeLabroomComponent implements OnInit{

  user: User;

  malePede: MendelpedePede;
  childPedes: MendelpedePede[];
  femalePede: MendelpedePede;
  storablePedes: MendelpedePede[]; 

  private sSubscription: Subscription;

  private paramObserver: any;

  private numOfChildren: number;

  private storageSlots: number;

  private currFridgeGenoFacts: string = 's';

  /**
   * potential backend error message
   */
  errorMessage: string = '';
  /**
   * State to monitior if component active to make unsubscribing to
   * multiple streams easier
   */
  private isDestroyed$: Subject<boolean>;

  ngOnInit() {
    this._initPedes();
    this.user = this._authenticationService.getUser();
    let userId = this.user.id;
    this._scenarioService.getGenoFacts
    .takeUntil(this.isDestroyed$)
      .subscribe((details) => {this.currFridgeGenoFacts = JSON.stringify(details)});
  }

  _initPedes() {
    this.malePede = {bugId: 0, genotype: null, phenotype: null, userId: null, isFemale: null, scenCode: null, id: null};
    this._initChildPedes();

    this.storablePedes = [];
    for (let j = 0; j < this.storageSlots ; j++){
        this.storablePedes.push({bugId: 0, genotype: null, phenotype: null, userId: null, isFemale: null, scenCode: null, id: null});
    }
    this.femalePede = {bugId: 1, genotype: null, phenotype: null, userId: null, isFemale: null, scenCode: null, id: null}
  }

  _initChildPedes() {
    this.childPedes = [];
    for (let i = 0; i < this.numOfChildren; i++){
      this.childPedes.push({bugId: 0, genotype: null, phenotype: null, userId: null, isFemale: null, scenCode:null, id: null});
    }
  }

  dropPedeToStorage($event: any, spot: number){
    if (this.childPedes.length === 1){
      this.createChildPedes();
    }else {
      this.childPedes.shift();
    }
    let pede: MendelpedePede = $event.data;
    this.storablePedes[spot] = {
      bugId: pede.bugId, 
      genotype: pede.genotype, 
      phenotype: pede.phenotype, 
      userId: pede.userId, 
      isFemale: pede.isFemale,
      scenCode: pede.scenCode,
      id: pede.id
    }
  }

  /**
   * Adds a new strain to a fridge
   *
   * Called by `(onDropSucess)` of slot
   *
   * @param {any} $event - drag event, incuding data for strain to add;
   * has: shifts, deletion, parents
   * @param {number} spot - slot to drop new strain
   */
  dropPede($event: any){
    console.log('dropping pede')
    let pede: MendelpedePede = $event.data;
    if (pede.isFemale === 'M'){
      this.malePede = {
        bugId: pede.bugId, 
        genotype: pede.genotype, 
        phenotype: pede.phenotype, 
        userId: pede.userId, 
        isFemale: pede.isFemale,
        scenCode: pede.scenCode,
        id: pede.id
      }
    } else{
      this.femalePede = {
        bugId: pede.bugId, 
        genotype: pede.genotype, 
        phenotype: pede.phenotype, 
        userId: pede.userId, 
        isFemale: pede.isFemale,
        scenCode: pede.scenCode,
        id: pede.id
      }
    }
    this.createChildPedes();
  }

  createChildPedes(){
    if(this.malePede.phenotype !== null && this.femalePede.phenotype !== null){
      let userId = this.user.id;
      this.paramObserver = this._route.params.subscribe((params) => {
        console.log(params);
        let scenShortCode = params['scenShortCode'];
        console.log(this.currFridgeGenoFacts);
        console.log('male id'+this.malePede.id);
        console.log('female id'+ this.femalePede.id);
        this._scenarioService.makeChildren(this.malePede, this.femalePede, this.currFridgeGenoFacts)
          .takeUntil(this.isDestroyed$)
          .subscribe(
            (childPedes) => {
              this.childPedes = childPedes;
              console.log(this.childPedes);
            },
            (err) => {
              console.log('error occurred');
              this.errorMessage = err;
            }
          );
      });
      }
  }

  constructor(private _authenticationService: AuthenticationService,
    private _router: Router,
    private _scenarioService: MendelpedeScenarioService,
    private _route: ActivatedRoute) {
      this.isDestroyed$ = new Subject<boolean>();
      this.numOfChildren = 20;
      this.storageSlots = 8
  }
  /**
   * Gets CSS classes 
   *
   * @returns {Object} classes wh
   */
  getMendelpedetopleft(): Object{
    return {
      'mpede-basic-top-left': true,
    }
  }
  getMendelpedebottomleft(): Object{
    return {
      'mpede-basic-bottom-left': true,
    }
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
   * When destroying the component, unsubscribe from services
   * to prevent memory leak
   */
  ngOnDestroy(){
    this.paramObserver.unsubscribe();
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }
  
}
