import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ScenarioComponent } from './scenario.component';
import { ListComponent } from './list/list.component';
const scenarioRoutes: Routes = [
  {
    path: '',
    //component: ScenarioComponent,
    children: [
      {
        path: ':id',
        component: ScenarioComponent,
        children:[
        {
          path: '',
          loadChildren: 'app/scenario/location/location.module#LocationModule'
        }]
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
