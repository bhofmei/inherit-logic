import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ScenarioComponent } from './scenario.component';
import { ListComponent } from './list/list.component';

import { LocationRoutes } from './location/location.routes';
const scenarioRoutes: Routes = [
  {
    path: '',
    //component: ScenarioComponent,
    children: [
      {
        path: ':scenId',
        component: ScenarioComponent,
        children: LocationRoutes
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
