import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';


import { ProfileService } from '../profile.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { User } from '../../interfaces/user.interface';
import { readErrorMessage } from '../../shared/read-error';

/**
 * Component for a logged in user to update their password
 * by entering their current password then the new password
 */
@Component({
  selector: 'user-password',
  templateUrl: './update-password.template.html'
})

export class UpdatePasswordComponent{

  /**
   * The logged in user
   */
  private user: User;
  /**
   * - Password information to send to server to update password
   * - Has fields `password` (current password), `newPassword` (password to change to), 
   * `confirmPassword` (confirms typing of new password), and 
   * `username` (user's email)
   */
  private credentials: any;
  /**
   * State to keep track of compoenent alive
   */
  private isDestroyed$: Subject<boolean>;
  /**
   * Potential backend error message displayed prominantly
   */
  private errorMessage: string = '';
  /**
   * Error message about submission and why the submission didn't work as expected
   */
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

  /**
   * Initialize the component
   * 1. Get the logged in user info
   * 2. Set up the credentials with email address
   */
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

  /**
   * Attempt to update the password
   * - If successful, redirects to profile page
   * - If there's an error, displays error message
   */
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

  /**
   * Does various checks to ensure the password fields are valid
   * 1. All fields are filled in
   * 2. New password is different from old password
   * 3. Confirm password matches new password
   *
   * @returns {string} error message if at least one condition isn't met or `''` if everything is valid
   */
  protected _checkPasswords(){
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

  /**
   * On component destruction, unsubscribe to services/streams
   * to prevent memory leaks
   */
  ngOnDestroy(){
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }
}
