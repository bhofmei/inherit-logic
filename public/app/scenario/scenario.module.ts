import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ScenarioRouteModule } from './scenario.route.module';
import { ScenarioComponent } from './scenario.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    SharedModule,
    ScenarioRouteModule
  ],
  declarations: [
    ScenarioComponent,
    ListComponent
  ]
})
export class ScenarioModule {
}
