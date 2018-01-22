import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ProfileRouteModule } from './profile.route.module';
import { ProfileService } from './profile.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';

@NgModule({
  imports: [
    SharedModule,
    ProfileRouteModule
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
