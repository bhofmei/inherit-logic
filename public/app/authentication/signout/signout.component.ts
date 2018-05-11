import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'signout',
  template: ''
})

export class SignoutComponent{

  private subscription: Subscription;

  constructor(
    private _authService: AuthenticationService,
    private _router: Router
  ){}

  ngOnInit(){
    this.subscription = this._authService.signout()
      .subscribe((res)=>{
        this._authService.setUser(null);
        this._router.navigate(['/']);
    })
  }

  /*ngOnDestroy(){
    this.subscription.unsubscribe();
  }*/
}
