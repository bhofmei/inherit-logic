import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseIndivComponent } from './course-indiv/course-indiv.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseScenarioComponent } from './course-scenario/course-scenario.component';
import { ConfirmDeleteDialogComponent } from '../../shared/confirm-delete-dialog.component';

import { CourseRouteModule } from './course.route.module';
import { CourseResolver } from './course.resolver';

@NgModule({
  imports: [
    SharedModule,
    CourseRouteModule
  ],
  declarations: [
    CourseCreateComponent,
    CourseIndivComponent,
    CourseEditComponent,
    CourseListComponent,
    CourseScenarioComponent
  ],
  entryComponents: [
    ConfirmDeleteDialogComponent
  ],
  providers: [
    CourseResolver
  ]
})
export class CourseModule {}
