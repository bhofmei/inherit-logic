import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
//import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../interfaces/user.interface';

@Injectable()
export class ProfileService {

  private _baseUrl = '/api/users/';

  constructor(private http: HttpClient){}

  editProfile(userId: number, details: any): Observable<User>{
    //let body = JSON.stringify(details);
    return this.http.post<User>(this._baseUrl + userId, details);
  }

  updatePassword(userId: number, credentials: any): Observable<User>{
    //let body = JSON.stringify(credentials);
    return this.http.post<User>(this._baseUrl + userId + '/update-password', credentials);
  }
}
