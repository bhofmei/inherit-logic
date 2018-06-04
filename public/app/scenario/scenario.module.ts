import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ScenarioRoutes } from './scenario.routes';
import { ScenarioComponent } from './scenario.component';
import { ListComponent } from './list/list.component';

/**
 * Module for scenario-related components and modules
 *
 * Mainly used to be able to async load the specific scenarios via the {@link LocationModule}
 */
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
