import { Component } from '@angular/core';
import { Subject } from 'rxjs';


import { ProfileService } from '../profile.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { User } from '../../interfaces/user.interface';
import { readErrorMessage } from '../../shared/read-error';

/**
 * Main user profile component; aimed for use to edit name and
 * email address. Also access update password link to update password
 */
@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.template.html'
})

export class UserProfileComponent{

  /**
   * Database user id
   */
  private userId: number;
  /**
   * User details (as an object)
   * Currently includes: firstName, lastName, and email
   */
  private userInfo: any;
  /**
   * State to maintain open subscriptions until component is destoryed
   */
  private isDestroyed$: Subject<boolean>;
  /**
   * Potential error message
   */
  private errorMessage: string = '';

  /**
   * Class constructor; includes services to fetch info
   *
   * @param {ProfileService} _profileService Service for updating the information
   * @param {AuthenticationService} _authService Service to get the current user information
   */
  constructor(
    private _profileService: ProfileService,
    private _authService: AuthenticationService
  ){
      this.isDestroyed$ = new Subject<boolean>();
    }

  /**
   * Initialize the component on creation
   * 1. Get the logged in user
   * 2. Save the user's details to object to be able to edit
   */
  ngOnInit(){
    // get current user info
    this._authService.getUser$
      .takeUntil(this.isDestroyed$)
      .subscribe((res)=>{
        this.userId = res.id;
      this.userInfo = {
        firstName: res.firstName,
        lastName: res.lastName,
        email: res.email
      }
    }, (idErr)=>{
      this.errorMessage = readErrorMessage(idErr);
    });
  }

  /**
   * Attempts to update the profile if possible or set error
   * message if there's a problem
   */
  updateProfile(){
    this._profileService.editProfile(this.userId, this.userInfo)
      .takeUntil(this.isDestroyed$)
      .subscribe((updated)=>{
      this.userInfo = {firstName: updated.firstName,
                      lastName: updated.lastName,
                      email: updated.email};
      this._authService.setUser(updated);
    }, (err)=>{
      this.errorMessage = readErrorMessage(err);
    });
  }

  /**
   * On component destruction, unsubscribe from services to prevent
   * memory leaks
   */
  ngOnDestroy(){
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }
}
