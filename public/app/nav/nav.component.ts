import { Component } from '@angular/core';

import { AuthenticationService } from '../authentication/authentication.service';
import { User } from '../interfaces/user.interface';

@Component({
    selector: 'cricket-nav',
    templateUrl: './app/nav/nav.template.html',
    //styleUrls: ['./app/nav/nav.style.css']
})
export class NavComponent {

  private user: User;
  private subscription: any;

    constructor(private _authService: AuthenticationService) {
    }

  ngOnInit(){
    this.subscription = this._authService.getUser$
    .subscribe((res)=>{
      this.user = res
    });
    this.user = this._authService.getUser();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
