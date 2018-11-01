import { User } from '../../../interfaces/user.interface';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

import { MendelpedeScenarioService } from '../mendelpede-scenarios.service';

import { MendelpedeFridge } from '../../../interfaces/mendelpede-fridge.interface';
import { MendelpedePede } from '../../../interfaces/mendelpede-pede.interface';
import { readErrorMessage } from '../../../shared/read-error';

@Component({
  selector: 'mendelpede-fridge',
  templateUrl: './mpede-fridge.template.html',
  styleUrls: ['./mpede-fridge.style.css']
})
export class MendelpedeFridgeComponent{

  user: User;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _authenticationService: AuthenticationService,
    private _scenarioService: MendelpedeScenarioService/*,
    private _modalService: NgbModal*/) {/*
    this.maxShelf = CricketGlobals.nFridgeShelf;
    this.spots = CricketGlobals.nFridgeSpots;
    this.isDestroyed$ = new Subject<boolean>();
    */
    }
  /**
   * Gets CSS classes 
   *
   * @returns {Object} classes wh
   */

  getMendelpede(): Object{
    return {
      'mpede-basic-top-right': true,
    }
  }
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

  

}
