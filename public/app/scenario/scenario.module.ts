import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ScenarioRouterModule } from './scenario.route.module';
import { ScenarioService } from './scenario.service';
import { ScenarioComponent } from './scenario.component';

import { LocationModule } from './location/location.module';

import { ListComponent } from './list/list.component';

import{ FridgeComponent } from './fridge/fridge.component';

@NgModule({
  imports: [
    CommonModule,
    ScenarioRouterModule
  ],
  declarations: [
    FridgeComponent,
    ScenarioComponent,
    ListComponent
  ],
  providers: [
    ScenarioService
  ]
})
export class ScenarioModule {}
