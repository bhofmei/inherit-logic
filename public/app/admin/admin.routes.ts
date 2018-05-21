import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { AdminGuard } from './admin.guard.service';
import { LoggedInGuard } from '../authentication/logged-in.guard.service';

import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NotAuthComponent } from './not-auth/not-auth.component';

export const AdminRoutes: Routes = [
  {
    path: 'admin',
    data: {
      breadcrumbs: 'Admin'
    },
    canActivate:[LoggedInGuard],
    canActivateChild: [AdminGuard],
    component: AdminComponent,
    children: [
      {
        path: 'courses',
        loadChildren: './course/course.module#CourseModule',
        data: {
          breadcrumbs: 'Courses'
        }
      },
      {
        path: 'students',
        loadChildren: './student/student.module#StudentModule',
        data: {
          breadcrumbs: 'Students'
        }
      },
      {
        path: '',
        component: AdminHomeComponent
      }
    ]
  },
  {
    path: 'admin/not-auth',
    component: NotAuthComponent
  }
];
