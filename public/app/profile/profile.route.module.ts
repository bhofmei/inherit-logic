import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from '../authentication/logged-in.guard.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';

const ProfileRoutes: Routes = [
  {
    path: 'profile',
    canActivate: [LoggedInGuard],
    canActivateChild: [LoggedInGuard],
    children: [
      {path: 'update-password',
      component: UpdatePasswordComponent
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

@NgModule({
  imports: [
    RouterModule.forChild(ProfileRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfileRouteModule {}
