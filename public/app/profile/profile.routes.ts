import { Routes } from '@angular/router';
import { LoggedInGuard } from '../authentication/logged-in.guard.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';

export const ProfileRoutes: Routes = [
  {
    path: 'profile',
    canActivate: [LoggedInGuard],
    canActivateChild: [LoggedInGuard],
    children: [
      { path: 'update-password',
      component: UpdatePasswordComponent,
       data: {
         breadcrumbs: 'Update password'
       }
      },
  {
    path: '',
    component: UserProfileComponent
  }
    ],
    data: {
      breadcrumbs: 'Profile'
    }
  }
];
