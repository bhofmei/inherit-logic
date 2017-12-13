import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { AuthenticationService } from '../authentication.service';

@Component({
    selector: 'signin',
    templateUrl: 'app/authentication/signin/signin.template.html',
  styleUrls: ['app/authentication/signin/signin.style.css']
})
export class SigninComponent {
    errorMessage: string;
    credentials: any = {};
  private subscription: Subscription;

    constructor(private _authenticationService: AuthenticationService,
        private _router: Router) { }

    signin() {
        this.subscription = this._authenticationService
          .signin(this.credentials)
          .subscribe((result) => {
          // TODO: update
          this._authenticationService.setUser(result);
          let redirect = this._authenticationService.redirectUrl ? this._authenticationService.redirectUrl : '/';
          this._router.navigate([redirect]);
        },
            (error) => {
          this.errorMessage = error.message
        });
    }

  ngOnDestroy(){
    if(this.subscription)
    this.subscription.unsubscribe();
  }
}
