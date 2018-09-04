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
    if(!body.email){
      return Observable.throw({message: 'required'})
    } else if(body.email === 'error@test.com'){
      // fake a sever error message
      return Observable.throw({message: 'Error with server email service.'});
    } else if (body.email !== this._user.email){
      return Observable.throw({message: 'No account with that email.'})
    } {
      return Observable.of({message: 'An email has been sent to '+body.email+' with further instructions'});
    }
  }

  resetPassword(credentials: any): Observable<any>{
    if(!credentials.token){
      return Observable.throw({message: 'Invalid token.'});
    } else if (credentials.token === 'expired-token'){
      return Observable.throw({message: 'Token has expired.'});
    } else if(credentials.password !== credentials.confirmPassword){
      return Observable.throw({message: 'Confirm password does not match.'});
    } else {
      return Observable.of({message: 'Password has been reset.'})
    }
  }
}
