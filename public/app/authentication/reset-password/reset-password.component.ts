import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { AuthenticationService } from '../authentication.service';
import { readErrorMessage } from '../../shared/read-error';

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
    private credentials: any;
  /**
   * Subscription to {@link AuthenticationService} when retting
   */
  private subscription: Subscription;
  /**
   * Is the submit button disabled; this would happen when
   * there is no token
   */
  private isDisabled: boolean = false;

    constructor(
      private _authenticationService: AuthenticationService,
      private _route: ActivatedRoute
    ) {
      this.credentials = {
        password: '',
        confirmPassword: '',
        token: null
      }
    }
  /**
   * When initializing the component, get the token from the URL
   *
   * If there is no token, give error message and disable submit button
   */
  ngOnInit(){
    this.credentials.token = this._route.snapshot.paramMap.get('token');
    if(this.credentials.token === ''){
      this.errorMessage = 'No token specified';
      this.isDisabled = true;
    }
  }

  /**
   * Attempts to reset the new password
   * 1. Check the input passwords for errors
   * 2. If no errors, send credentials to server
   * 3. Password correctly reset, displays the success message
   * 4. If error reseting the password, displays error message
   */
    sendReset() {
      this.successMessage = '';
       this.errorMessage = this._checkPasswords();
      if(this.errorMessage === ''){ // able to submit
        this.subscription = this._authenticationService
          .resetPassword(this.credentials)
          .subscribe((result) => {
          // if successful, should get success message
          this.credentials.password = '';
          this.credentials.confirmPassword = '';
          this.successMessage = result.message;
        },
            (error) => {
          this.errorMessage = readErrorMessage(error)
        });
      }
    }

  /**
   * Compares the input passwords to make sure they are both specified and that they match each other
   */
  _checkPasswords(){
    let p = this.credentials.password;
    let c = this.credentials.confirmPassword;
    if(p === ''){
      return 'Enter new password';
    } else if(c === ''){
      return 'Confirm new password';
    } else if(p !== c){
      return 'Confirm password does not match';
    } else {
      return '';
    }
  }

  /**
   * On component destruction, unsubscribe from authentication service if necessary
   */
  ngOnDestroy(){
    if(this.subscription)
    this.subscription.unsubscribe();
  }
}
