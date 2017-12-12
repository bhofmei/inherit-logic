import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { AuthenticationService } from '../authentication.service';

@Component({
    selector: 'signup',
    templateUrl: 'app/authentication/signup/signup.template.html',
  styleUrls: ['app/authentication/signup/signup.style.css']
})
export class SignupComponent implements OnDestroy {
    errorMessage: string;
  private subscription: Subscription;
    user: any = {};

    constructor(private _authenticationService: AuthenticationService,
        private _router: Router) { }

    signup() {
        this.subscription = this._authenticationService
          .signup(this.user)
          .subscribe((result) => {
          this._authenticationService.setUser(result);
          this._router.navigate(['/'])
        },
            (error) => {
          this.errorMessage = error.error.message
        });
    }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
