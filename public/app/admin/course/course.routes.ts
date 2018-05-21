import { Routes } from '@angular/router';

import { CourseResolver } from './course.resolver';
import { ScenarioResolver } from '../../scenario/scenario.resolver';

import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseIndivComponent } from './course-indiv/course-indiv.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseScenarioComponent } from './course-scenario/course-scenario.component';

export const CourseRoutes: Routes = [
  { path: '',
   children: [
  {
    path: 'create',
    component: CourseCreateComponent,
    data: {breadcrumbs: 'Create new course'}
  },
  { path: ':courseNum',
   resolve: {course: CourseResolver},
   data: {breadcrumbs: '{{course.courseNum}}' },
   children: [
     { path: 'edit',
    component: CourseEditComponent
  },
  {
    path: ':scenId',
    component: CourseScenarioComponent,
    resolve: {scenario: ScenarioResolver},
    data: {breadcrumbs: '{{ scenario.label }}'}
  },
     {path: '',
     component: CourseIndivComponent}
   ]
  },
  {
    path: '',
    component: CourseListComponent
  }
     ]
}
];
