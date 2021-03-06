import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

/**
 * Functions which communicate to backend to allow
 * users to update their profile and/or change the password
 */
@Injectable()
export class ProfileService {

  /**
   * Leading backend url path
   */
  private _baseUrl: string = '/api/users/';

  constructor(private http: HttpClient){}

  /**
   * Edit details about the user profile including
   * 1. Nme
   * 2. Email address
   *
   * @param {number} userId userID of the logged in user
   * @param {any} details user details to update with
   * exisiting information
   *
   * @returns {Observable<User>} - The updated user information
   * - or error "User does not exist" if non-existant user
   * - or other server/database error
   */
  editProfile(userId: number, details: any): Observable<User>{
    return this.http.post<User>(this._baseUrl + userId, details);
  }

  /**
   * Update the user's password once already signed in
   *
   * @param {number} userId userID of logged in user
   * @param {any} credentials - password information
   * - includes: "password" (old password) and "newPassword"  (password to update to)
   *
   * @returns {Observable<User>} - information about the user just updated
   * - or error "User does not exist" if non-existant user
   * - or error "Incorrect password" if wrong old password
   * - or other server/database error
   */
  updatePassword(userId: number, credentials: any): Observable<User>{
    return this.http.post<User>(this._baseUrl + userId + '/update-password', credentials);
  }
}
