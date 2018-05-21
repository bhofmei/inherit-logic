import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ProfileRoutes } from './profile.routes';
import { ProfileService } from './profile.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ProfileRoutes)
  ],
  declarations: [
    UserProfileComponent,
    UpdatePasswordComponent
  ],
  providers: [
    ProfileService
  ]
})
export class ProfileModule {}
