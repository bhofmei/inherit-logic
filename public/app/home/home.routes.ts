import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SigninComponent } from '../authentication/signin/signin.component';
import { SignupComponent } from '../authentication/signup/signup.component';

export const HomeRoutes: Routes =
      [{
  path: '',
  component: HomeComponent
},
      {
        path: 'signin',
        component: SigninComponent
      },{
        path: 'signup',
        component: SignupComponent
      }
      ];
