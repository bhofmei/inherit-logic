import { Routes } from '@angular/router';

import { ScenarioComponent } from './scenario.component';
import { ScenarioResolver } from './scenario.resolver';
import { ListComponent } from './list/list.component';

export const ScenarioRoutes: Routes = [
  {
    path: 'scenarios',
    data: {
      breadcrumbs: 'Scenarios'
    },
    component: ScenarioComponent,
    children: [
      {
        path: ':scenId',
        loadChildren: './location/location.module#LocationModule',
        resolve: {
          scenario: ScenarioResolver
        },
        data: {
          breadcrumbs: '{{ scenario.label }}'
        }
      },
      {
        path: '',
        component: ListComponent
      }
    ]
  }
];
