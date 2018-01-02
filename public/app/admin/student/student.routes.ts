import { Routes } from '@angular/router';

import { StudentListComponent } from './student-list/student-list.component';
import { StudentIndivComponent } from './student-indiv/student-indiv.component';

export const StudentRoutes: Routes = [
  {
    path: ':studentId',
    component: StudentIndivComponent
  },
  {
    path: '',
    component: StudentListComponent
  }
];
