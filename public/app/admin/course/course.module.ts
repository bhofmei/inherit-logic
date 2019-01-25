import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseIndivComponent } from './course-indiv/course-indiv.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseScenarioComponent } from './course-scenario/course-scenario.component';
import { CourseMendelScenarioComponent } from './course-mendel-scenario/course-mendel-scenario.component'
import { ConfirmDeleteDialogComponent } from '../../shared/confirm-delete-dialog.component';

import { CourseRoutes } from './course.routes';
import { CourseResolver } from './course.resolver';

/**
 * Module for course-related tasks like adding, editing, 
 * deleting, and viewing a course and the students in a course
 */
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(CourseRoutes)
  ],
  declarations: [
    CourseCreateComponent,
    CourseIndivComponent,
    CourseEditComponent,
    CourseListComponent,
    CourseScenarioComponent,
    CourseMendelScenarioComponent
  ],
  entryComponents: [
    ConfirmDeleteDialogComponent
  ],
  providers: [
    CourseResolver
  ]
})
export class CourseModule {}
