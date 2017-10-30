import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ScenarioComponent } from './scenario.component';
import { ListComponent } from './list/list.component';
const scenarioRoutes: Routes = [
  {
    path: '',
    component: ListComponent,
    children: [
      {
        path: ':id',
        component: ScenarioComponent,
        //children: [{
         // path: '',
          loadChildren: 'app/scenario/location/location.module#LocationModule'
       // }]
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
