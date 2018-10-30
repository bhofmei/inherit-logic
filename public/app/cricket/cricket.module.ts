import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { CricketRoutes } from './cricket.routes';
import { CricketComponent } from './cricket.component';
import { ScenarioListComponent } from './scenario-list/scenario-list.component';

/**
 * Module for scenario-related components and modules
 *
 * Mainly used to be able to async load the specific scenarios via the {@link LocationModule}
 */
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(CricketRoutes)
  ],
  declarations: [
    CricketComponent,
    ScenarioListComponent
  ]
})
export class CricketModule {
}
