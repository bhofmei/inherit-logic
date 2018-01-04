import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AdminRouteModule } from './admin.route.module';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NotAuthComponent } from './not-auth/not-auth.component';

import { CourseComponent } from './course/course.component';
import { CourseCreateComponent } from './course/course-create/course-create.component';
import { CourseIndivComponent } from './course/course-indiv/course-indiv.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseScenarioComponent } from './course/course-scenario/course-scenario.component';

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
    AdminHomeComponent,
    NotAuthComponent,
    CourseComponent,
    CourseCreateComponent,
    CourseIndivComponent,
    CourseEditComponent,
    CourseListComponent,
    CourseScenarioComponent,
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
