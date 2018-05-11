import { Component, OnDestroy, OnInit } from '@angular/core';

import { AuthenticationService } from '../authentication/authentication.service';
import { User } from '../interfaces/user.interface';

/**
 * Navigation bar at the top of the site
 */
@Component({
    selector: 'cricket-nav',
    templateUrl: './nav.template.html',
    styleUrls: ['./nav.style.css']
})
export class NavComponent implements OnInit, OnDestroy {

  /**
   * User object used to determine if profile link should be
   * included in the nav bar
   */
  private user: User;
  /**
   * Subscription stream for the authetnication service
   */
  private subscription: any;

  constructor(private _authService: AuthenticationService) {
    }

  /**
   * Initiate the component by getting the current user
   */
  ngOnInit(){
    this.subscription = this._authService.getUser$
    .subscribe((res)=>{
      this.user = res
    });
  }

  /**
   * Destory the component by unsubscribing, if necessary
   */
  ngOnDestroy(){
    if(this.subscription)
    this.subscription.unsubscribe();
  }
}
