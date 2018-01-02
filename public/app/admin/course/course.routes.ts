import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseComponent } from './course.component';
import { CreateComponent } from './create/create.component';
import { IndivComponent } from './indiv/indiv.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { StatusComponent } from './status/status.component';

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
    path: ':courseNum/:scenId',
    component: StatusComponent
  },
  {
    path: '',
    component: ListComponent
  }
];
