import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ScenarioRouterModule } from './scenario.route.module';
import { ScenarioService } from './scenario.service';
import { ScenarioComponent } from './scenario.component';

import { LocationModule } from './location/location.module';

import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    SharedModule,
    ScenarioRouterModule
  ],
  declarations: [
    ScenarioComponent,
    ListComponent
  ],
  providers: [
    ScenarioService
  ]
})
export class ScenarioModule {}
