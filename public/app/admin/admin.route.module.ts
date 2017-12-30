import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGuard } from './admin-guard.service';

import { AdminComponent } from './admin.component';
import { NotAuthComponent } from './not-auth/not-auth.component';
import { CourseComponent } from './course/course.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    canActivate:[AdminGuard],
    canActivateChild: [AdminGuard],
    component: AdminComponent,
    children: [
      {
        path: 'courses',
        component: CourseComponent,
        /*children: [
          {path: '',
          loadChildren: 'app/admin/course/course.module#CourseModule'}
        ]*/
      },
      /*{
        path: 'users',
        //component: AdminUsersComponent
      },*/
      {
        path: '',
        component: AdminComponent
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
export class AdminRouterModule {}
