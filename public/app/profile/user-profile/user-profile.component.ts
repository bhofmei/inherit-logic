import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil'

import { ProfileService } from '../profile.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { User } from '../../interfaces/user.interface';
import { readErrorMessage } from '../../shared/read-error';

@Component({
  selector: 'user-profile-cmp',
  templateUrl: 'app/profile/user-profile/user-profile.template.html',
  //styleUrls: ['app/profile/profile.style.css']
})

export class UserProfileComponent{

  private userId: number
  private userInfo: any;
  private isDestroyed$: Subject<boolean>;
  private errorMessage: string = '';

  constructor(
    private _profileService: ProfileService,
    private _authService: AuthenticationService
  ){
      this.isDestroyed$ = new Subject<boolean>();
    }

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

  ngOnDestroy(){
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }
}
