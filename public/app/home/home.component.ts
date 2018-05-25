import { Component } from '@angular/core';

import { AuthenticationService } from '../authentication/authentication.service';

import { User } from '../interfaces/user.interface';

/**
 * The home landing page when going to the website
 * Mainly a view component, but some aspects are dependent
 * on if a user is logged in and the user role
 */
@Component({
  selector: 'home',
  templateUrl: './home.template.html',
  styleUrls: ['./home.style.css']
})

export class HomeComponent{
  /**
   * The logged in user, if any
   */
  private user: User;

  constructor(private _authenticationService: AuthenticationService){}

  ngOnInit(){
    this.user = this._authenticationService.getUser();
  }

  ngOnDestroy(){
    this.user = undefined;
  }
}
