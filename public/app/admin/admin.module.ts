import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { AdminRoutes } from './admin.routes';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NotAuthComponent } from './not-auth/not-auth.component';

import { AdminGuard } from './admin.guard.service';

import { StudentService } from './student/student.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(AdminRoutes)
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
