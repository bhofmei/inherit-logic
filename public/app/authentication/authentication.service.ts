//import 'rxjs/Rx';
import { Injectable } from '@angular/core';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {
    public user: any;

    private _signinURL = 'api/auth/signin';
    private _signupURL = 'api/auth/signup';

    constructor(private http: HttpClient) {

    }

    isLoggedIn(): boolean {
        return (!!this.user);
    }

    signin(credentials: any): Observable<any> {
        let body = JSON.stringify(credentials);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });

        return this.http.post(this._signinURL, body, { headers: headers })
            //.map(res => this.user = res.json())
            //.catch(this.handleError)
    }

    signup(user: any): Observable<any> {
        let body = JSON.stringify(user);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });

        return this.http.post(this._signupURL, body, { headers: headers })
            //.map(res => this.user = res.json())
            //.catch(this.handleError)
    }

    /*private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().message || 'Server error');
    }*/
}
