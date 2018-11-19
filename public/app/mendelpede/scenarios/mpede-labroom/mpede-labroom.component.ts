import { Component, OnInit, HostListener, Input} from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../../interfaces/user.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { MendelpedePede } from '../../../interfaces/mendelpede-pede.interface';
import { MendelpedeScenarioService } from '../../scenarios/mendelpede-scenarios.service';
import { Subject } from 'rxjs';
import { MendelpedeFridgeComponent } from '../mpede-fridge/mpede-fridge.component'
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
  storablePedes: MendelpedePede[][][]; 

  private sSubscription: Subscription;

  private paramObserver: any;

  private numOfChildren: number;

  private storageSlots: number;

  private currFridgeGenoFacts: string;

  undoSpotList: number[] = [];

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
    this.paramObserver = this._route.params.subscribe((params) => {
    this._scenarioService.getGenoFacts
    .takeUntil(this.isDestroyed$)
      .subscribe((details) => {this.currFridgeGenoFacts = details});
    })
  }

  _initPedes() {
    this.malePede = {bugId: 0, genotype: null, phenotype: null, userId: null, isFemale: null, scenCode: null, id: null};
    this._initChildPedes();
    this._emptyStoragePedes();
    this.undoSpotList = [];
    this.femalePede = {bugId: 1, genotype: null, phenotype: null, userId: null, isFemale: null, scenCode: null, id: null}
  }

  _emptyStoragePedes() {
    var counter: number = 0;
    this.storablePedes = [];
    for (let j = 0; j < this.storageSlots/4 ; j++){
      this.storablePedes[j] = [];
      for (let k = 0; k < 4; k++){
        this.storablePedes[j][k] = [];
        this.storablePedes[j][k].push({bugId: counter, genotype: null, phenotype: null, userId: null, isFemale: null, scenCode: null, id: null});
        counter++;
      }
    }
  }

  _initChildPedes() {
    this.childPedes = [];
    for (let i = 0; i < this.numOfChildren; i++){
      this.childPedes.push({bugId: 0, genotype: null, phenotype: null, userId: null, isFemale: null, scenCode:null, id: null});
    }
  }

  @Input() mendelFridge: MendelpedeFridgeComponent;

  @HostListener('storePede')
  storePede(pedeToStore: MendelpedePede){
    //console.log('button pressed');
    this.mendelFridge.storePede(pedeToStore);
  }

  @HostListener('clearAll')
  clearAll(){
    this._initPedes();
  }

  @HostListener('clearAll')
  undoPede(){
    var undoSpot: number = this.undoSpotList[this.undoSpotList.length-1]
    //var arrLength = this.storablePedes[Math.ceil((this.undoSpot+1)/4)-1][this.undoSpot>3?(this.undoSpot-4):(this.undoSpot)].length; 
    var undoPede:MendelpedePede = this.storablePedes[Math.ceil((undoSpot+1)/4)-1][undoSpot>3?(undoSpot-4):(undoSpot)].pop();
    this.childPedes.push(undoPede);
    this.undoSpotList.pop();
  }

  @HostListener('dropPedeToStorage')
  dropPedeToStorage(spot: number){
    let pede: MendelpedePede = this.childPedes[this.childPedes.length-1];
    this.undoSpotList.push(spot);
    this.storablePedes[Math.ceil((spot+1)/4)-1][spot>3?(spot-4):(spot)].push( {
      bugId: this.storablePedes[Math.ceil((spot+1)/4)-1][spot>3?(spot-4):(spot)][0].bugId, 
      genotype: pede.genotype, 
      userId: pede.userId, 
      phenotype: pede.phenotype, 
      isFemale: pede.isFemale,
      scenCode: pede.scenCode,
      id: pede.id
    })
    if (this.childPedes.length === 1){
      this.createChildPedes();
    }else {
      this.childPedes.pop();
    }
    //console.log('stack of pedes');
    //console.log(this.storablePedes);
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
  dropPede(pede: MendelpedePede){
    //console.log('dropping pede')
    if (pede.isFemale === 'M' && this.malePede.phenotype === null){
      this.malePede = {
        bugId: pede.bugId, 
        genotype: pede.genotype, 
        phenotype: pede.phenotype, 
        userId: pede.userId, 
        isFemale: pede.isFemale,
        scenCode: pede.scenCode,
        id: pede.id
      }
      if(this.femalePede.phenotype !== null){
        this.createChildPedes();
      }
    } else if (pede.isFemale === 'F' && this.femalePede.phenotype === null){
      this.femalePede = {
        bugId: pede.bugId, 
        genotype: pede.genotype, 
        phenotype: pede.phenotype, 
        userId: pede.userId, 
        isFemale: pede.isFemale,
        scenCode: pede.scenCode,
        id: pede.id
      }
      if(this.malePede.phenotype !== null){
        this.createChildPedes();
      }
    }
    
  }

  createChildPedes(){
    if(this.malePede.phenotype !== null && this.femalePede.phenotype !== null){
      let userId = this.user.id;
      this.paramObserver = this._route.params.subscribe((params) => {
        
        let scenShortCode = params['scenShortCode'];
        
        this._scenarioService.makeChildren(this.malePede, this.femalePede, this.currFridgeGenoFacts)
          .takeUntil(this.isDestroyed$)
          .subscribe(
            (childPedes) => {
              this.childPedes = childPedes;
              //console.log(this.childPedes);
            },
            (err) => {
              //console.log('error occurred');
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
