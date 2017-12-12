import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';

@Component({
    selector: 'signup',
    templateUrl: 'app/authentication/signup/signup.template.html',
  styleUrls: ['app/authentication/signup/signup.style.css']
})
export class SignupComponent {
    errorMessage: string;
    user: any = {};

    constructor(private _authenticationService: AuthenticationService,
        private _router: Router) { }

    signup() {
        this._authenticationService.signup(
            this.user).subscribe((result) => {
          this._authenticationService.user = result;
          this._router.navigate(['/'])},
            error => {console.log(error); this.errorMessage = error.error.message});
    }
}
