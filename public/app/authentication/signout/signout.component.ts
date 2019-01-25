import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthenticationService } from '../authentication.service';

/**
 * Component that a user signs out. Has no view/template--resets
 * variables and navigate to home page
 */
@Component({
  selector: 'signout',
  template: ''
})

export class SignoutComponent implements OnInit, OnDestroy{

  private subscription: Subscription;

  constructor(
    private _authService: AuthenticationService,
    private _router: Router
  ){}

  /**
   * On component creation
   * 1. Sign out user on server
   * 2. Unset [AuthenticationService]{@link AuthenticationService} user
   * 3. Redirect to home page
   */
  ngOnInit(){
    this.subscription = this._authService.signout()
      .subscribe((res)=>{
        this._authService.setUser(null);
        this._router.navigate(['/']);
    })
  }

  /**
   * On component destruction, unsubscribe from authentication service if necessary
   */
  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe();
  }
}
