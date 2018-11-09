import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../../interfaces/user.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { MendelpedePede } from '../../../interfaces/mendelpede-pede.interface';
import { MendelpedeScenarioService } from '../../scenarios/mendelpede-scenarios.service';
import { Subject } from 'rxjs';

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

  private sSubscription: Subscription;

  private paramObserver: any;

  private numOfChildren: number;

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
    this.user = this._authenticationService.getUser();
    this._initPede();
  }
  _initPede() {
    this.malePede = {bugId: 0, genotype: null, phenotype: null, userId: null, isFemale: null}
    this.childPedes = [];
    for (let i = 0; i < this.numOfChildren; i++){
      this.childPedes.push({bugId: 0, genotype: null, phenotype: null, userId: null, isFemale: null});
    }
    this.femalePede = {bugId: 1, genotype: null, phenotype: null, userId: null, isFemale: null}
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
  dropPede($event: any, spot: number){
    console.log('dropping pede')
    let pede: MendelpedePede = $event.data;
    if (pede.isFemale === 'M'){
      this.malePede = {
        bugId: pede.bugId, 
        genotype: pede.genotype, 
        phenotype: pede.phenotype, 
        userId: pede.userId, 
        isFemale: pede.isFemale
      }
    } else{
      this.femalePede = {
        bugId: pede.bugId, 
        genotype: pede.genotype, 
        phenotype: pede.phenotype, 
        userId: pede.userId, 
        isFemale: pede.isFemale
      }
    }
    if(this.malePede.phenotype !== null && this.femalePede.phenotype !== null){
    console.log(this.user);
    let userId = this.user.id;
    this.paramObserver = this._route.params.subscribe((params) => {
      console.log(params);
      let scenShortCode = params['scenShortCode'];
      this._scenarioService.makeChildren(userId, scenShortCode, this.malePede.bugId, this.femalePede.bugId)
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
  
}
