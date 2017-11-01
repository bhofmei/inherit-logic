import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ScenarioRouterModule } from './scenario.route.module';
import { ScenarioService } from './scenario.service';
import { ScenarioComponent } from './scenario.component';

import { LocationModule } from './location/location.module';
import { DragulaModule, DragulaService } from 'ng2-dragula';

import { ListComponent } from './list/list.component';

import{ FridgeComponent } from './fridge/fridge.component';

@NgModule({
  imports: [
    CommonModule,
    DragulaModule,
    ScenarioRouterModule
  ],
  declarations: [
    FridgeComponent,
    ScenarioComponent,
    ListComponent
  ],
  providers: [
    ScenarioService,
    DragulaService
  ]
})
export class ScenarioModule {}
