import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { AuthenticationService } from '../authentication.service';
import { readErrorMessage } from '../../shared/read-error';
/**
 * Component for existing users to sign in and be able
 * to access their scenarios/fridges
 */
@Component({
    selector: 'signin',
    templateUrl: './signin.template.html'
})
export class SigninComponent implements OnDestroy {
  /**
   * Potential error message
   */
  errorMessage: string = '';
  /**
   * Login credentials for user including `username` (email) and `password`
   */
  credentials: FormGroup;
  /**
   * Authentication service subscription from when trying to login the user
   */
  private subscription: Subscription;

    constructor(private _authenticationService: AuthenticationService,
        private _router: Router) { }

  /**
  * Intialize the form group on component creation
  */
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
          this._authenticationService.setUser(result);
          let redirect = this._authenticationService.redirectUrl ? this._authenticationService.redirectUrl : '/';
          this._router.navigate([redirect]);
        },
            (error) => {
          this.errorMessage = readErrorMessage(error);
        });
    }

  /**
  * Get the form input CSS classes styling to provide feedback to user
  * whether input is valid on not
  *
  * Always has `.form-control` then `.is-invalid` or `.is-valid` are set once input has been touched
  *
  * @param {string} formLabel - form group name look-up input state
  *
  * @returns {Object} CSS classes which apply to this input
  */
  getInputClass(formLabel: string) {
    let out = {'form-control': true};
    if(this.credentials && this.credentials.get(formLabel)){
      let ac = this.credentials.get(formLabel);
      if(ac.dirty || ac.touched){
        out['is-invalid'] = ac.invalid;
        out['is-valid'] = ac.valid;
      }
    }
    return out;
  }

  /**
   * On component desctruction, unsubscribe from the authentication service if necessary
   */
  ngOnDestroy(){
    if(this.subscription)
    this.subscription.unsubscribe();
  }
}
