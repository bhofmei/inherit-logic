import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil'

import { AuthenticationService } from '../authentication/authentication.service';
import { User } from '../interfaces/user.interface';

/**
 * Entrance component for admin features
 * Mainly, it is a card that allows navigation between course-related
 * info and student-related info
 * Content of the card is determined by router
 */
@Component({
  selector: 'admin',
  templateUrl: './admin.template.html'
})

export class AdminComponent{
  /**
   * Logged in user
   */
  private adminUser: User;
  private errorMessage: string = '';

  constructor(
    private _authenticationService: AuthenticationService
  ){}

  ngOnInit(){
    this.adminUser = this._authenticationService.getUser();
  }

}
