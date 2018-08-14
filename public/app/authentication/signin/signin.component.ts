import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { patternValidator } from '../../shared/pattern-validator';

import { AuthenticationService } from '../authentication.service';
import { readErrorMessage } from '../../shared/read-error';
import { SharedModule} from '../../shared/shared.module';
/**
 * Component for existing users to sign in and be able
 * to access their scenarios/fridges
 */
@Component({
    selector: 'signin',
    templateUrl: './signin.template.html',
  styleUrls: ['../../shared/form-errors/form-errors.styles.css']
})
export class SigninComponent implements OnDestroy {
  /**
   * Potential error message
   */
  errorMessage: string = '';
  /**
   * Login credentials for user including `username` (email) and `password`
   */
    //credentials: any = {};
  /*credentials = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });*/
  credentials: FormGroup;
  /**
   * Authetnication service subscription from when trying to login the user
   */
  private subscription: Subscription;

    constructor(private _authenticationService: AuthenticationService,
        private _router: Router) { }

  ngOnInit(){
    this.credentials = new FormGroup({
    username: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  }

  get username() { return this.credentials.get('username');}
  get password() { return this.credentials.get('password');}
  /**
   * Upon form submission, attempts to sign in the user with `credentials` (using the service)
   *
   * When successful, navigate to
   * - the redirect URL if set (when non-logged in user tries to access a page that required logging in)
   * - the home page if redirect URL is not set
   *
   * When unsuccessful, display error message
   */
    signin() {
        this.subscription = this._authenticationService
          .signin(this.credentials.value)
          .subscribe((result) => {
          // TODO: update
          this._authenticationService.setUser(result);
          let redirect = this._authenticationService.redirectUrl ? this._authenticationService.redirectUrl : '/';
          this._router.navigate([redirect]);
        },
            (error) => {
          this.errorMessage = readErrorMessage(error)
        });
    }

  /**
   * On component desctruction, unsubscribe from the authentication service if necessary
   */
  ngOnDestroy(){
    if(this.subscription)
    this.subscription.unsubscribe();
  }
}
