import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ScenarioComponent } from './scenario.component';
import { ScenarioResolver } from './scenario.resolver';
import { ListComponent } from './list/list.component';

import { LocationRoutes } from './location/location.routes';
const scenarioRoutes: Routes = [
  {
    path: 'scenarios',
    data: {
      // Uses static text (Home)
      breadcrumbs: 'Scenarios'
    },
    component: ScenarioComponent,
    children: [
      {
        path: ':scenId',
        //component: ScenarioComponent,
        children: LocationRoutes,
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

@NgModule({
  imports: [
    RouterModule.forChild(scenarioRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ScenarioRouterModule {}
