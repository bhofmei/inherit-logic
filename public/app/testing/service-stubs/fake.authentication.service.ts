// fake authentication service used in testing
import { Observable } from 'rxjs';
import { User } from '../../interfaces';
import { userAdmin } from '../sample-data';

export class AuthServiceStub {
  private _user: User = userAdmin;
  public redirectUrl: string = '/';
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
    if(!(credentials.username && credentials.password)){
      return Observable.throw({message: 'Missing Credentials'});
    } else if(credentials.username !== this._user.email){
      return Observable.throw({message: 'User not found'});
    } else if(credentials.password === 'invalid'){
      return Observable.throw({message: 'Invalid password'})
    } else {
      return Observable.of(this._user);
    }
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
