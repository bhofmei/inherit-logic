import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';


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

export class AdminComponent implements OnInit {
  /**
   * Logged in user
   */
  private adminUser: User;
  private errorMessage: string = '';

  constructor(
    private _authenticationService: AuthenticationService
  ){}

  /**
   * When initializing the component, get the currently logged in user's information
   */
  ngOnInit(){
    this.adminUser = this._authenticationService.getUser();
  }

}
