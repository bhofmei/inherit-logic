import { Routes } from '@angular/router';

import { CourseComponent } from './course.component';
import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseIndivComponent } from './course-indiv/course-indiv.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseScenarioComponent } from './course-scenario/course-scenario.component';

export const CourseRoutes: Routes = [
  {
    path: 'create',
    component: CourseCreateComponent
  },
  { path: ':courseNum',
    component: CourseIndivComponent
  },
  { path: ':courseNum/edit',
    component: CourseEditComponent
  },
  {
    path: ':courseNum/:scenId',
    component: CourseScenarioComponent
  },
  {
    path: '',
    component: CourseListComponent
  }
];
