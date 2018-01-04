import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGuard } from './admin-guard.service';

import { CourseRoutes } from './course/course.routes';
import { StudentRoutes } from './student/student.routes';

import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NotAuthComponent } from './not-auth/not-auth.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    canActivate:[AdminGuard],
    canActivateChild: [AdminGuard],
    component: AdminComponent,
    children: [
      {
        path: 'courses',
        //component: CourseComponent,
        children: CourseRoutes
      },
      {
        path: 'students',
        children: StudentRoutes
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

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRouteModule {}