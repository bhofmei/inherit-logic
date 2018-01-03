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

import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentIndivComponent } from './student/student-indiv/student-indiv.component';
import { StudentFridgeComponent } from './student/student-fridge/student-fridge.component';
import { StudentPhageComponent } from './student/student-fridge/student-phage.component';

import { AdminGuard } from './admin-guard.service';

import { StudentService } from './student/student.service';

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
    StatusComponent,
    StudentListComponent,
    StudentIndivComponent,
    StudentFridgeComponent,
    StudentPhageComponent
  ],
  providers: [
    AdminGuard,
    StudentService
  ]
})
export class AdminModule {}
