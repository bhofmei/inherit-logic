import { Component, OnDestroy, OnInit } from '@angular/core';

import { AuthenticationService } from '../authentication/authentication.service';
import { User } from '../interfaces/user.interface';

/**
 * Navigation bar at the top of the site
 */
@Component({
    selector: 'cricket-nav',
    templateUrl: 'app/nav/nav.template.html',
    styleUrls: ['app/nav/nav.style.css']
})
export class NavComponent implements OnInit, OnDestroy {

  /**
   * User object used to determine if profile link should be
   * included in the nav bar
   */
  private user: User;
  private subscription: any;

    constructor(private _authService: AuthenticationService) {
    }

  ngOnInit(){
    this.subscription = this._authService.getUser$
    .subscribe((res)=>{
      this.user = res
    });
  }

  ngOnDestroy(){
    if(this.subscription)
    this.subscription.unsubscribe();
  }
}
