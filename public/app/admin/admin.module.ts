import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AdminRouterModule } from './admin.route.module';
import { AdminComponent } from './admin.component';
import { NotAuthComponent } from './not-auth/not-auth.component';
import { CourseComponent } from './course/course.component';

import { AdminGuard } from './admin-guard.service';

import { CourseService } from './course/course.service';
import { UserService } from './user/user.service';
//import { AdminComp } from './location/location.module';

@NgModule({
  imports: [
    SharedModule,
    AdminRouterModule
  ],
  declarations: [
    AdminComponent,
    NotAuthComponent,
    CourseComponent
  ],
  providers: [
    AdminGuard,
    CourseService,
    UserService
  ]
})
export class AdminModule {}
