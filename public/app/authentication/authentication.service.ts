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

    private _signinURL = 'api/auth/signin';
    private _signupURL = 'api/auth/signup';

    constructor(private http: HttpClient) {
      //this._user = new BehaviorSubject<User>(null);
    }

  setUser(user: User){
    console.log(user);
    this._user.next(user);
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
