import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { AuthenticationService } from '../authentication.service';
import { readErrorMessage } from '../../shared/read-error';

@Component({
    selector: 'reset-pswd',
    templateUrl: 'app/authentication/reset-password/reset-password.template.html',
  //styleUrls: ['app/authentication/signin/signin.style.css']
})
export class ResetPasswordComponent {
    private errorMessage: string = '';
  private successMessage: string = '';
    private credentials: any;
  private subscription: Subscription;
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

  ngOnInit(){
    this.credentials.token = this._route.snapshot.paramMap.get('token');
    if(this.credentials.token === ''){
      this.errorMessage = 'No token specified';
      this.isDisabled = true;
    }
  }

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

  ngOnDestroy(){
    if(this.subscription)
    this.subscription.unsubscribe();
  }
}
