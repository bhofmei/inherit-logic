import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AdminRouteModule } from './admin.route.module';
import { AdminComponent } from './admin.component';
import { NotAuthComponent } from './not-auth/not-auth.component';
import { CourseComponent } from './course/course.component';
import { CreateComponent } from './course/create/create.component';
import { IndivComponent } from './course/indiv/indiv.component';

import { AdminGuard } from './admin-guard.service';

import { CourseService } from './course/course.service';
import { UserService } from './user/user.service';

@NgModule({
  imports: [
    SharedModule,
    AdminRouteModule
  ],
  declarations: [
    AdminComponent,
    NotAuthComponent,
    CourseComponent,
    CreateComponent,
    IndivComponent
  ],
  providers: [
    AdminGuard,
    CourseService,
    UserService
  ]
})
export class AdminModule {}
