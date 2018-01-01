import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseComponent } from './course.component';
import { CreateComponent } from './create/create.component';

export const CourseRoutes: Routes = [
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: '',
    component: CourseComponent
  }
];
