import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AdminRouteModule } from './admin.route.module';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NotAuthComponent } from './not-auth/not-auth.component';

import { AdminGuard } from './admin.guard.service';

import { StudentService } from './student/student.service';

@NgModule({
  imports: [
    SharedModule,
    AdminRouteModule
  ],
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    NotAuthComponent
  ],
  providers: [
    AdminGuard,
    StudentService
  ]
})
export class AdminModule {}
