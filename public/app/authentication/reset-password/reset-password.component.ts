import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AuthenticationService } from '../authentication.service';
import { readErrorMessage } from '../../shared/read-error';
import { passwordMatchValidator } from '../../shared/confirm-password.validator';

/**
 * After user requests to reset password and they have a token,
 * this component allows them to set the password to a new password
 * (assuming token is valid)
 */
@Component({
    selector: 'reset-pswd',
    templateUrl: './reset-password.template.html'
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
  /**
   * Potential error message from server
   */
    private errorMessage: string = '';
  /**
   * Message when new password successfully saved
   */
  private successMessage: string = '';
  /**
   * Email and new passwords to be able to update the database
   * - `password` - the new password to set
   * - `confirmPassword` - confirm password typed correctly
   * - `token` - password reset token to confirm user had access to the email and didn't wait too long
   */
  private credentials: FormGroup;
  /**
   * Subscription to {@link AuthenticationService} when retting
   */
  private subscription: Subscription;
  /**
   * Is the submit button disabled; this would happen when
   * there is no token
   */
  //private isDisabled: boolean = false;

    constructor(
      private _authenticationService: AuthenticationService,
      private _route: ActivatedRoute
    ) {
    }
  /**
   * When initializing the component, get the token from the URL
   *
   * If there is no token, give error message and disable submit button
   */
  ngOnInit(){
    this.credentials = new FormGroup({
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'confirmPassword': new FormControl('', [Validators.required, passwordMatchValidator]),
      'token': new FormControl('', Validators.required)
    });

    let urlToken = this._route.snapshot.paramMap.get('token');
    if (urlToken === ''){
      this.errorMessage = 'No token specified.'
    }
    this.credentials.patchValue({token: urlToken});
  }

  get password() { return this.credentials.get('password'); }
  get confirmPassword() { return this.credentials.get('confirmPassword'); }

  /**
   * Attempts to reset the new password
   * 1. If no errors, send credentials to server
   * 2. Password correctly reset, displays the success message
   * 3. If error reseting the password, displays error message
   */
    sendReset() {
      this.successMessage = '';
        this.subscription = this._authenticationService
          .resetPassword(this.credentials.value)
          .subscribe((result) => {
          // if successful, should get success message
          this.credentials.setValue({'password': '', 'confirmPassword': '', token: ''});
          this.successMessage = result.message;
        },
          (error) => {
          this.errorMessage = readErrorMessage(error)
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
   * On component destruction, unsubscribe from authentication service if necessary
   */
  ngOnDestroy(){
    if(this.subscription)
    this.subscription.unsubscribe();
  }
}
