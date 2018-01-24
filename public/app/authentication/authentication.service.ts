//import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { User } from '../interfaces/user.interface';

@Injectable()
export class AuthenticationService {
    private _user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
    getUser$ = this._user.asObservable();

    //private _user2: User;
    private _baseUrl = '/api/auth/'

    public redirectUrl: string = '/';

    constructor(private http: HttpClient) {
    }

  setUser(user: User){
    this._user.next(user);
  }

  getUser(): User{
    return this._user.getValue();
  }

  isLoggedIn(): boolean{
    return (!!this.getUser());
  }

  canAccessAdmin(): boolean{
    if(this.getUser()){
      return this.getUser().role > 0
    }
    else{
      return false;
    }
  }

  signin(credentials: any): Observable<User> {
      let body = JSON.stringify(credentials);
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      return this.http.post<User>(this._baseUrl + 'signin', body, { headers: headers });
  }

  signup(user: any): Observable<User> {
      let body = JSON.stringify(user);
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      return this.http.post<User>(this._baseUrl + 'signup', body, { headers: headers });
  }

  signout(): Observable<any>{
    return this.http.get(this._baseUrl + 'signout');
  }

  forgetPassword(body: any): Observable<any>{
    console.log(body);
    return this.http.post(this._baseUrl + 'forget-password', body);
  }

  resetPassword(credentials: any): Observable<any>{
    return this.http.post(this._baseUrl + 'reset-password', credentials);
  }
}
