import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'signout',
  template: '<div>Signed out</div><div>{{errorMessage}}</div>'
})
export class SignoutComponent {
  errorMessage: string;

  constructor(private _authenticationService: AuthenticationService,
    private _router: Router) { }

  signout() {
    this._authenticationService.signout().subscribe(result => this._router.navigate(['/']), error => this.errorMessage = error);
  }
}
