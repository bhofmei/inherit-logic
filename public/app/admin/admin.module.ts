import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AdminRouteModule } from './admin.route.module';
import { AdminComponent } from './admin.component';
import { NotAuthComponent } from './not-auth/not-auth.component';
import { CourseComponent } from './course/course.component';
import { CreateComponent } from './course/create/create.component';
import { IndivComponent } from './course/indiv/indiv.component';
import { EditComponent } from './course/edit/edit.component';
import { ListComponent } from './course/list/list.component';
import { StatusComponent } from './course/status/status.component';

import { AdminGuard } from './admin-guard.service';

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
    IndivComponent,
    EditComponent,
    ListComponent,
    StatusComponent
  ],
  providers: [
    AdminGuard,
    UserService
  ]
})
export class AdminModule {}
