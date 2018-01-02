import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseComponent } from './course.component';
import { CreateComponent } from './create/create.component';
import { IndivComponent } from './indiv/indiv.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

export const CourseRoutes: Routes = [
  {
    path: 'create',
    component: CreateComponent
  },
  { path: ':courseNum',
    component: IndivComponent
  },
  { path: ':courseNum/edit',
    component: EditComponent
  },
  {
    path: '',
    component: ListComponent
  }
];
