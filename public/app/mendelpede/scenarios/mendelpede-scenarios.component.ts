import { Component, OnInit} from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { AuthenticationService } from '../../authentication/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'mendelpede-scenarios',
  templateUrl: './mendelpede-scenarios.template.html',
  styleUrls: ['./mendelpede-scenarios.style.css']
})
export class MendelpedeScenariosComponent implements OnInit{

  user: User;

  /**
   * State to monitior if component active to make unsubscribing to
   * multiple streams easier
   */
  private isDestroyed$: Subject<boolean>;
  /**
   * Observes the scenCode of the URL
   */
  private paramObserver: any;

  private hasQuiz: boolean = false;

  ngOnInit() {
    this.user = this._authenticationService.getUser();
    this.paramObserver = this._route.params.subscribe((params) => {
      let scenShortCode: String = params['scenShortCode'];
      if (scenShortCode.toUpperCase().includes('QUIZ')){
        this.hasQuiz = true
      }
    });
  }
  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _authenticationService: AuthenticationService,
    private _modalService: NgbModal) {
    this.isDestroyed$ = new Subject<boolean>();
    }

  ngOnDestroy(){
    this.paramObserver.unsubscribe();
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }
  
}
