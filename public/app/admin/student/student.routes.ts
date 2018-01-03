import { Routes } from '@angular/router';

import { StudentListComponent } from './student-list/student-list.component';
import { StudentIndivComponent } from './student-indiv/student-indiv.component';
import { StudentFridgeComponent } from './student-fridge/student-fridge.component';

export const StudentRoutes: Routes = [
  {
    path: ':studentId',
    component: StudentIndivComponent
  },
  {
    path: ':studentId/:scenId',
    component: StudentFridgeComponent
  },
  {
    path: '',
    component: StudentListComponent
  }
];
