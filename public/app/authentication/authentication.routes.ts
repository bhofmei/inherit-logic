import { Routes } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SignoutComponent } from './signout/signout.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

export const AuthenticationRoutes: Routes = [{
    path: 'authentication',
    children: [
        { path: 'signin', component: SigninComponent },
        { path: 'signup', component: SignupComponent },
        { path: 'signout', component: SignoutComponent },
      {path: 'forget-password', component: ForgetPasswordComponent},
      {path: 'reset-password/:token', component: ResetPasswordComponent}
    ]
}];
