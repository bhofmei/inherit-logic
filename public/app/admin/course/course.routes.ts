import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseComponent } from './course.component';
import { CreateComponent } from './create/create.component';
import { IndivComponent } from './indiv/indiv.component';

export const CourseRoutes: Routes = [
  {
    path: 'create',
    component: CreateComponent
  },
  { path: ':courseNum',
    component: IndivComponent
  },
  {
    path: '',
    component: CourseComponent
  }
];
