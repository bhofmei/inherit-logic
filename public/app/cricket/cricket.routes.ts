import { Routes } from '@angular/router';

import { CricketComponent } from './cricket.component';
import { ScenarioResolver } from './scenario.resolver';
import { ScenarioListComponent } from './scenario-list/scenario-list.component';

export const CricketRoutes: Routes = [
  {
    path: 'cricket',
    data: {
      breadcrumbs: 'Cricket'
    },
    component: CricketComponent,
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
        component: ScenarioListComponent
      }
    ]
  }
];
