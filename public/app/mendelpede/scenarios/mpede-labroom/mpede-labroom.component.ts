import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { User } from '../../../interfaces/user.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { MendelpedePede } from '../../../interfaces/mendelpede-pede.interface';
import { MendelpedeScenarioService } from '../../scenarios/mendelpede-scenarios.service';

import { MendelpedeFridgeComponent } from '../mpede-fridge/mpede-fridge.component'
import { PedeImagePipe } from '../../../pipes/pede-image.pipe';
import { readErrorMessage } from '../../../shared/read-error';

@Component({
  selector: 'mpede-labroom',
  templateUrl: './mpede-labroom.template.html',
  styleUrls: ['./mpede-labroom.style.css', '../mpede-pedes.style.css']
})
export class MendelpedeLabroomComponent implements OnInit {
  /**
   * user in the session
   */
  user: User;
  /**
   * male mendelpede
   */
  malePede: MendelpedePede;
  /**
   * Children pedes dependant on male and female pede
   */
  childPedes: MendelpedePede[];
  /**
   * female mendelpede
   */
  femalePede: MendelpedePede;
  /**
   * data structure holding mendelpedes for storage area of the labroom
   */
  storablePedes: MendelpedePede[][][];

  private sSubscription: Subscription;

  private paramObserver: any;

  /**
   *  Used to determine how many children we will get from backend
  */
   private numOfChildren: number;

  /**
   * how many storage slots
   */
  private storageSlots: number;

  /**
   * Fridge genofacts of the session
   */
  private currFridgeGenoFacts: string;
  /**
   * Used to fill correct number of child pedes
   */
  private currNumChildren: number;
  /**
   * store mendelpedes to support undo functionaity
   */
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

  @Input() mendelFridge: MendelpedeFridgeComponent;
  isQuiz: boolean = null;

  constructor(private _authenticationService: AuthenticationService,
    private _router: Router,
    private _scenarioService: MendelpedeScenarioService,
    private _route: ActivatedRoute) {
    this.isDestroyed$ = new Subject<boolean>();
    this.numOfChildren = 20;
    this.storageSlots = 8
  }
  /**
   * get the genofacts
   */
  ngOnInit() {
    this._initPedes();
    this.user = this._authenticationService.getUser();
    let userId = this.user.id;
    this.paramObserver = this._route.params.subscribe((params) => {
      this._scenarioService.getGenoFacts
        .takeUntil(this.isDestroyed$)
        .subscribe((details) => { this.currFridgeGenoFacts = details });
    });
  }
  /**
   * initialize the labroom
   */
  _initPedes() {
    this.currNumChildren = 0;
    this.malePede = { bugID: 0, genotype: null, phenotype: null, userId: null, isFemale: null, scenCode: null, id: null };
    this._initChildPedes();
    this._emptyStoragePedes();
    this.undoSpotList = [];
    this.femalePede = { bugID: 1, genotype: null, phenotype: null, userId: null, isFemale: null, scenCode: null, id: null }
  }

  /**
   * Empty each variables
   */
  _emptyStoragePedes() {
    var counter: number = 0;
    this.storablePedes = [];
    for (let j = 0; j < this.storageSlots / 4; j++) {
      this.storablePedes[j] = [];
      for (let k = 0; k < 4; k++) {
        this.storablePedes[j][k] = [];
        this.storablePedes[j][k].push({ bugID: counter, genotype: null, phenotype: null, userId: null, isFemale: null, scenCode: null, id: null });
        counter++;
      }
    }
  }

  /**
   * Initialize child pedes
   */
  _initChildPedes() {
    this.childPedes = [];
    for (let i = 0; i < this.numOfChildren; i++) {
      this.childPedes.push({ bugID: 0, genotype: null, phenotype: null, userId: null, isFemale: null, scenCode: null, id: null });
    }
  }

  /**
   * store mendelpede in the fridge by calling same method of mendelpede 
   * fridge component
   * called by `(click)` on store button
   * @param {MendelpedePede} pedeToStore : mendelpede to be stored
   */
  @HostListener('storePede')
  storePede(pedeToStore: MendelpedePede) {
    this.mendelFridge.storePede(pedeToStore);
  }
  /**
   * Clear everything
   * called by `(click)` on clear button
   */
  @HostListener('clearAll')
  clearAll() {
    this._initPedes();
  }

  @HostListener('clearAll')
  /**
   * undo and remove pede from storage are and move to child pede stack
   */
  undoPede() {
    var undoSpot: number = this.undoSpotList[this.undoSpotList.length - 1]
    //var arrLength = this.storablePedes[Math.ceil((this.undoSpot+1)/4)-1][this.undoSpot>3?(this.undoSpot-4):(this.undoSpot)].length;
    var undoPede: MendelpedePede = this.storablePedes[Math.ceil((undoSpot + 1) / 4) - 1][undoSpot > 3 ? (undoSpot - 4) : (undoSpot)].pop();
    undoPede.bugID = this.childPedes[0].bugID - 1;
    this.childPedes.unshift(undoPede);
    this.undoSpotList.pop();
  }

  /**
   * drop the mendelpede from child stack to storage area
   * @param {number} spot : spot where the mendelpede should be moved
   */
  @HostListener('dropPedeToStorage')
  dropPedeToStorage(spot: number) {
    let pede: MendelpedePede = this.childPedes[0];
    this.undoSpotList.push(spot);
    this.storablePedes[Math.ceil((spot + 1) / 4) - 1][spot > 3 ? (spot - 4) : (spot)].push({
      bugID: this.storablePedes[Math.ceil((spot + 1) / 4) - 1][spot > 3 ? (spot - 4) : (spot)][0].bugID,
      genotype: pede.genotype,
      userId: pede.userId,
      phenotype: pede.phenotype,
      isFemale: pede.isFemale,
      scenCode: pede.scenCode,
      id: pede.id
    })
    if (this.childPedes.length === 1) {
      this.createChildPedes();
      this.childPedes.push({ bugID: 0, genotype: null, phenotype: null, userId: null, isFemale: null, scenCode: null, id: null });
      this.childPedes.shift();

    } else {
      this.childPedes.shift();
    }
  }
  /**
   * handling keyboard presses
   * @param {KeyboardEvent} event key board event
   */
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    //console.log(event.keyCode);
    // keycode for numbers above keypad are 48-56 for 0-8
    // keycode for numpad are 96-104 for 0-8
    var keyCode = event.keyCode;
    if (this.childPedes[0].phenotype !== null) {
      if (keyCode > 48 && keyCode < 57) {
        this.dropPedeToStorage(keyCode - 49);
      } else if (keyCode > 96 && keyCode < 105) {
        this.dropPedeToStorage(keyCode - 97);
      } else if ((keyCode === 48 || keyCode === 96) && this.undoSpotList.length > 0) {
        this.undoPede();
      }
    }
  }

  /**
   * drop male or female pede to labroom from firdge
   * called by fridge component
   * Creates Child pedes if male and female bith mendelpedes are present
   * @param {MendelpedePede} pede - mendelpede female or male dropped from fridge
   */
  dropPede(pede: MendelpedePede) {
    this._checkQuiz();
    if (pede.isFemale === 'M' && this.malePede.phenotype === null) {
      this.malePede = {
        bugID: pede.bugID,
        genotype: pede.genotype,
        phenotype: pede.phenotype,
        userId: pede.userId,
        isFemale: pede.isFemale,
        scenCode: pede.scenCode,
        id: pede.id
      }
      if (this.femalePede.phenotype !== null) {
        this.createChildPedes();
      }
    } else if (pede.isFemale === 'F' && this.femalePede.phenotype === null) {
      this.femalePede = {
        bugID: pede.bugID,
        genotype: pede.genotype,
        phenotype: pede.phenotype,
        userId: pede.userId,
        isFemale: pede.isFemale,
        scenCode: pede.scenCode,
        id: pede.id
      }
      if (this.malePede.phenotype !== null) {
        this.createChildPedes();
      }
    }
  }
  /**
   * is this quiz?
   * set @isQuiz variable to true if this is a quiz else set false
   */
  _checkQuiz() {
    if (this.isQuiz == null) {
      if (this.mendelFridge) {
        this.isQuiz = this.mendelFridge.isQuiz;
      }
    }
  }

  /**
   * Create Children of the male and female pedes
   * Called when male and female both pedes are dropped
   * called when view runs out of 20 child pedes
   */
  createChildPedes() {
    if (this.malePede.phenotype !== null && this.femalePede.phenotype !== null) {
      let userId = this.user.id;
      this.paramObserver = this._route.params.subscribe((params) => {

        let scenShortCode = params['scenShortCode'];

        this._scenarioService.makeChildren(this.malePede, this.femalePede, this.currFridgeGenoFacts)
          .takeUntil(this.isDestroyed$)
          .subscribe(
            (childPedes) => {
              //this.childPedes = childPedes;
              //console.log(childPedes);
              if (this.childPedes[this.childPedes.length - 1].phenotype === null) {
                //console.log('clearing the list')
                //console.log(this.childPedes[this.childPedes.length-1])
                this.childPedes = [];
              }
              for (let i = 0; i < childPedes.length; i++) {
                childPedes[i].bugID = this.currNumChildren + i + 1;
                this.childPedes.push(childPedes[i]);
              }
              this.currNumChildren += this.childPedes.length;
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

  /**
   * When destroying the component, unsubscribe from services
   * to prevent memory leak
   */
  ngOnDestroy() {
    this.paramObserver.unsubscribe();
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }

}
