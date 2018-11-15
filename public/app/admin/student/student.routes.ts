import { Routes } from '@angular/router';

import { StudentListComponent } from './student-list/student-list.component';
import { StudentIndivComponent } from './student-indiv/student-indiv.component';
import { StudentFridgeComponent } from './student-fridge/student-fridge.component';
import { StudentMendelFridgeComponent } from './student-mendel-fridge/student-mendel-fridge.component'

import { ScenarioResolver } from '../../cricket/scenario.resolver';
import { MendelpedeScenarioResolver } from '../../mendelpede/mendelpede-scenario.resolver';
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
    path: 'cricket/:scenId',
    component: StudentFridgeComponent,
        resolve: {scenario: ScenarioResolver},
        data: {breadcrumbs: '{{ scenario.label }}'}
  },
  {
    path: 'mendelpede/:scenShortCode',
    component: StudentMendelFridgeComponent,
    resolve: {mendelpedeScenario: MendelpedeScenarioResolver},
    data: {breadcrumbs: '{{ mendelpedeScenario.label }}'}
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
