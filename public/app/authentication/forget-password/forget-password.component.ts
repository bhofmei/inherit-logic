import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';

import { AuthenticationService } from '../authentication.service';
import { readErrorMessage } from '../../shared/read-error';

/**
 * If user forgets their password, they can enter
 * there email address. If there is an account with the email address,
 * an email is sent with a link that allows user to reset their password
 *
 * This component is for entering email address and
 * informing if email address was valid and reset * password email was successfully sent
 */
@Component({
    selector: 'forget-pswd',
    templateUrl: './forget-password.template.html'
})
export class ForgetPasswordComponent implements OnDestroy{
  /**
   * Possible error messages
   */
  private errorMessage: string = '';
  /**
   * Message when reset password email was successfully sent
   */
  private successMessage: string = '';
  /**
   * User's email to check if an account exists
   */
  email: FormControl;
  /**
   * Authentication service subscription
   */
  private subscription: Subscription;

    constructor(private _authenticationService: AuthenticationService) { }

  /**
   * Initialize the form on component creation
   */
  ngOnInit(){
    this.email = new FormControl('', [Validators.required, Validators.email]);
  }
  /**
   * After submitting form, reset _success_ and _error_ messages, send email to the server, and wait for response
   *
   * - If password reset email successfully set, _success_ message is updated
   * - If there was an error (server error, email doesn't below to any user), _error_ message is set with description of the error
   */
    sendForget() {
      this.successMessage = '';
      this.errorMessage = '';
      let body = {email: this.email.value};
        this.subscription = this._authenticationService
          .forgetPassword(body)
          .subscribe((result) => {
          // if successful, should get success message
          this.successMessage = result.message;
        },
            (error) => {
          this.errorMessage = readErrorMessage(error)
        });
    }

  /**
   * Get the CSS class for the email input based on it's validity
   *
   * Always has `.form-control` then `.is-invalid` or `.is-valid` are set once input has been touched
   *
   * @returns {Object} CSS classes which apply
   */
  getInputClass(){
    let out = {'form-control': true};
    if(this.email && (this.email.dirty || this.email.touched)){
      out['is-invalid'] = this.email.invalid;
      out['is-valid'] = this.email.valid;
    }
    return out;
  }

  /**
   * When destroying component, unsubscribe from authentication service to prevent memory leaks
   */
  ngOnDestroy(){
    if(this.subscription)
    this.subscription.unsubscribe();
  }
}
