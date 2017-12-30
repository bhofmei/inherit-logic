//import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { User } from '../interfaces/user.interface';

@Injectable()
export class AuthenticationService {
    private _user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
    public getUser = this._user.asObservable();

    private _user2: User;

    private _signinURL = 'api/auth/signin';
    private _signupURL = 'api/auth/signup';

    public redirectUrl: string;

    constructor(private http: HttpClient) {
      //this._user = new BehaviorSubject<User>(null);
    }

  setUser(user: User){
    this._user.next(user);
    this._user2 = user;
  }

  getUser2(): User{
    return this._user2;
  }

  isLoggedIn(){
    return (!!this._user2);
  }

  canAccessAdmin(){
    if(this._user2){
      return this._user2.role > 0
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

    /*private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().message || 'Server error');
    }*/
}
