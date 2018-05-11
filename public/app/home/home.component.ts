import { Component } from '@angular/core';

import { AuthenticationService } from '../authentication/authentication.service';

import { User } from '../interfaces/user.interface';
@Component({
  selector: 'home',
  templateUrl: './home.template.html',
  styleUrls: ['./home.style.css']
})

export class HomeComponent{
  private user: User;
  private errorMessage: string;

  constructor(private _authenticationService: AuthenticationService){}

  ngOnInit(){
    this.user = this._authenticationService.getUser();
  }

  ngOnDestroy(){
    this.user = undefined;
  }
}
