import { Routes } from '@angular/router';

import { StudentListComponent } from './student-list/student-list.component';
import { StudentIndivComponent } from './student-indiv/student-indiv.component';
import { StudentFridgeComponent } from './student-fridge/student-fridge.component';

import { ScenarioResolver } from '../../cricket/scenario.resolver';
import { StudentResolver } from './student.resolver';

export const StudentRoutes: Routes = [
  {path: '',
   children: [
     {
    path: ':studentId',
    resolve: {student: StudentResolver},
    data: {breadcrumbs: '{{ student.firstName }} {{ student.lastName }}'},
    children: [
      {
    path: ':scenId',
    component: StudentFridgeComponent,
        resolve: {scenario: ScenarioResolver},
        data: {breadcrumbs: '{{ scenario.label }}'}
  },
      {path: '',
       component: StudentIndivComponent
      }
    ]
  },
  {
    path: '',
    component: StudentListComponent
  }
   ]
  }
];
