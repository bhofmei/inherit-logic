import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ScenarioRoutes } from './scenario.routes';
import { ScenarioComponent } from './scenario.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ScenarioRoutes)
  ],
  declarations: [
    ScenarioComponent,
    ListComponent
  ]
})
export class ScenarioModule {
}
