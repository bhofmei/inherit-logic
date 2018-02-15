// fake authentication service used in testing
import { Observable } from 'rxjs/Observable';
import { User } from '../../interfaces';
import { userAdmin } from '../sample-data';

export class AuthServiceStub {
  private _user: User = userAdmin;
  getUser$ = Observable.of(this._user);

  setUser(user: User){
    this._user = user;
  }

  getUser(){
    return this._user;
  }

  isLoggedIn(){
    return true;
  }

  canAccessAdmin(): boolean{
    if(this._user.role > 0){
      return true;
    } else {
      return false;
    }
  }
  signin(credentials: any): Observable<User>{
    if(credentials.email && credentials.password)
    return Observable.of(this._user);
  }

   signup(user: any): Observable<User>{
    if(user.username && user.password)
    return Observable.of(this._user);
  }

  signout(): Observable<any>{
    return Observable.of(true);
  }

  forgetPassword(body: any): Observable<any>{
    return Observable.of(true);
  }
  resetPassword(credentials: any): Observable<any>{
    return Observable.of(true);
  }
}
