import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil'

import { ProfileService } from '../profile.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { User } from '../../interfaces/user.interface';
import { readErrorMessage } from '../../shared/read-error';

@Component({
  selector: 'user-password-cmp',
  templateUrl: 'app/profile/update-password/update-password.template.html',
  //styleUrls: ['app/profile/profile.style.css']
})

export class UpdatePasswordComponent{

  private user: User;
  private credentials: any;
  private isDestroyed$: Subject<boolean>;
  private errorMessage: string = '';
  private passwordMessage: string = '';

  constructor(
    private _router: Router,
    private _profileService: ProfileService,
    private _authService: AuthenticationService
  ){
      this.isDestroyed$ = new Subject<boolean>();
      this.credentials = {
        password: '',
        newPassword: '',
        confirmPassword: ''
      };
    }

  ngOnInit(){
    // get current user info
    this._authService.getUser$
      .takeUntil(this.isDestroyed$)
      .subscribe((res)=>{
        this.user = res;
      this.credentials['username'] = res.email;
    }, (idErr)=>{
      this.errorMessage = readErrorMessage(idErr);
    });
  }

  updatePassword(){
    // do checks
    this.passwordMessage = this._checkPasswords();
    if(this.passwordMessage === ''){
      // can update
      this._profileService.updatePassword(this.user.id, this.credentials)
        .takeUntil(this.isDestroyed$)
        .subscribe((res)=>{
        this._router.navigate(['/profile']);
      }, (err)=>{
        this.errorMessage = readErrorMessage(err);
      });
    } else {
      this.errorMessage = '';
    }
  }

  _checkPasswords(){
    let p = this.credentials.password;
    let n = this.credentials.newPassword;
    let c = this.credentials.confirmPassword;
    if(p === ''){
      return 'Enter old password';
    } else if(n === ''){
      return 'Enter new password';
    } else if(c === ''){
      return 'Confirm new password';
    } else if(p === n){
      return 'New password cannot the same as the old password';
    } else if(n !== c){
      return 'Confirm password does not match';
    } else {
      return '';
    }
  }

  ngOnDestroy(){
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }
}
