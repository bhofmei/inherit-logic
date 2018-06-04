//import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { User } from '../interfaces/user.interface';

/**
 * Service that deals with validating and logging in/out users and
 * resetting forgotten passwords
 */
@Injectable()
export class AuthenticationService {
    private _user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
    getUser$ = this._user.asObservable();

    private _baseUrl = '/api/auth/'

  /**
   * When a non-logged in user tries to access a page which requires logging in,
   * save that page's url and direct user there after they log in
   */
    public redirectUrl: string = '/';

    constructor(private http: HttpClient) {
    }

  /**
   * Sets the services `user` variable which is stored after user logs in
   *
   * @param {User} user - current user who logged in
   * - or `null` to unset the user
   */
  setUser(user: User){
    this._user.next(user);
  }

  /**
   * Get the current user information not as an observable
   * so it is synchronous and keeps the app components' `ngOnInit`
   * functions cleaner
   *
   * @returns {User} the current user or `null` if no user logged in
   */
  getUser(): User{
    return this._user.getValue();
  }

  /**
   * Checks if a user is logged in
   *
   * @requires {boolean} - `true` if a user is logged in
   * - `false` otherwise
   */
  isLoggedIn(): boolean{
    return (!!this.getUser());
  }

  /**
   * Checks if the current user can access the admin pages
   *
   * @returns {boolean} - `true` if user is instr or admin
   * - `false` if user is only a student
   */
  canAccessAdmin(): boolean{
    if(this.getUser()){
      return this.getUser().role > 0
    }
    else{
      return false;
    }
  }

  /**
   * Attempts to sign a user in using the provided credentials
   *
   * @param {any} credentials - `username` (as email) and `password` to be tested for logging in
   *
   * @returns {Observable<User>} - the successfully logged in user
   * - or error message for server/database/authentication error
   */
  signin(credentials: any): Observable<User> {
      let body = JSON.stringify(credentials);
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      return this.http.post<User>(this._baseUrl + 'signin', body, { headers: headers });
  }

  /**
   * Attempts to create a new user using the provided user details
   *
   * @param {any} user - user details including `firstName`, `lastName`, `username` (email), `course`, and `password`
   *
   * @returns {Observable<User>} - The new logged-in user when successfully create new user
   * - or error 400 if errror logging in
   * - or error 500 if error creating user
   */
  signup(user: any): Observable<User> {
      let body = JSON.stringify(user);
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      return this.http.post<User>(this._baseUrl + 'signup', body, { headers: headers });
  }

  /**
   * Signs out the user
   *
   * @returns {Observable<any>} returns `true` if successfully signed out
   */
  signout(): Observable<any>{
    return this.http.get(this._baseUrl + 'signout');
  }

  /**
   * Submit email address of potential user to allow that user
   * to reset their password if the user exists
   *
   * The backend then sends a password reset email to the
   * email address
   *
   * @param {any} body - request body that includes `email` of user
   *
   * @returns {Observable<any>} - Success message if password reset email sent
   * - error message `Error with server email service` if problem with email transporter
   * - error message `No account with that email.` if email address doesn't correspond to an existing user
   * - error 422 for other server errors
   */
  forgetPassword(body: any): Observable<any>{
    return this.http.post(this._baseUrl + 'forget-password', body);
  }

  /**
   * Attempts to reset a user's password using the credentials
   *
   * @param {any} credentials - info needed to reset password: `password, `confirmPassword`, and `token`
   *
   * @returns {Observable<any>} - If successful, sends success message `Passwords has been reset`.
   * - error message `Invalid token` if token doesn't match a user
   * - error message `Token has expired` for valid tokens but user took too long to attempt to reset
   * - error message for all other errors
   */
  resetPassword(credentials: any): Observable<any>{
    return this.http.post(this._baseUrl + 'reset-password', credentials);
  }
}
