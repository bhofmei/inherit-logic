import { Routes } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SignoutComponent } from './signout/signout.component';

export const AuthenticationRoutes: Routes = [{
    path: 'authentication',
    //component: AuthenticationComponent,
    children: [
        { path: 'signin', component: SigninComponent },
        { path: 'signup', component: SignupComponent },
        { path: 'signout', component: SignoutComponent }
    ]
}];
