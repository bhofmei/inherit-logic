import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AuthenticationService } from '../authentication.service';
import { readErrorMessage } from '../../shared/read-error';

@Component({
    selector: 'forget-pswd',
    templateUrl: './forget-password.template.html'
})
export class ForgetPasswordComponent {
    private errorMessage: string = '';
  private successMessage: string = '';
    private email: string;
  private subscription: Subscription;

    constructor(private _authenticationService: AuthenticationService) { }

    sendForget() {
      this.successMessage = '';
      this.errorMessage = '';
      let body = {email: this.email};
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

  ngOnDestroy(){
    if(this.subscription)
    this.subscription.unsubscribe();
  }
}
