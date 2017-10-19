import { Routes } from '@angular/router';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { SignoutComponent } from './authentication/signout/signout.component';

export const AppRoutes: Routes = [{
  path: '**',
  redirectTo: '/'
},
{
  path: 'signin',
  component: SigninComponent
}, {
  path: 'signup',
  component: SignupComponent
},
{
  path: 'signout',
  component: SignoutComponent
}
];
