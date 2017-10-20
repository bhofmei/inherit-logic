import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ScenarioRouterModule } from './scenario.route.module';
import { ScenarioService } from './scenario.service';
import { ScenarioComponent } from './scenario.component';

@NgModule({
  imports: [
    CommonModule,
    ScenarioRouterModule
    //RouterModule.forChild(_Routes)
  ],
  declarations: [
    ScenarioComponent
  ],
  providers: [
    ScenarioService
  ]
})
export class ScenarioModule {}
