import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OptionsComponent } from './options/options.component';
import { MendelpedeScenariosComponent } from './scenarios/scenarios.component';
import { MendelpedeFridgeComponent } from './mpede-fridge/mpede-fridge.component';
import { MendelpedeRoutes } from './mendelpede.routes';
import { MendelpedeComponent } from './mendelpede.component';
import { SharedModule } from '../shared/shared.module';

/**
 * Module for Mendelpede-related components and modules
 *
 * 
 */
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(MendelpedeRoutes)
  ],
  declarations: [
    OptionsComponent,
    MendelpedeScenariosComponent,
    MendelpedeFridgeComponent,
    MendelpedeComponent,
  ]
})
export class MendelpedeModule {
}