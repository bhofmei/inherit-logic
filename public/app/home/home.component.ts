import { Component, OnInit, OnDestroy } from '@angular/core';

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

export class HomeComponent implements OnInit, OnDestroy{
  /**
   * The logged in user, if any
   */
  private user: User;

  constructor(private _authenticationService: AuthenticationService){}

  /**
   * When intializing component, get the logged in user, if any
   */
  ngOnInit(){
    this.user = this._authenticationService.getUser();
  }

  /**
   * When destroying the component, unset the user variable
   */
  ngOnDestroy(){
    this.user = undefined;
  }
}
