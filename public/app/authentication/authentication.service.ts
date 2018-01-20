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

    private _signinURL = 'api/auth/signin';
    private _signupURL = 'api/auth/signup';

    public redirectUrl: string = '/';

    constructor(private http: HttpClient) {
    }

  setUser(user: User){
    this._user.next(user);
  }

  getUser(): User{
    return this._user.getValue();
  }

  isLoggedIn(){
    return (!!this.getUser());
  }

  canAccessAdmin(){
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

      return this.http.post<User>(this._signinURL, body, { headers: headers });
  }

  signup(user: any): Observable<User> {
      let body = JSON.stringify(user);
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      return this.http.post<User>(this._signupURL, body, { headers: headers })
  }
}
