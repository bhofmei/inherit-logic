import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OptionsComponent } from './options/options.component';
import { MendelpedeFridgeComponent } from './scenarios/mpede-fridge/mpede-fridge.component';
import { MendelpedeLabroomComponent } from './scenarios/mpede-labroom/mpede-labroom.component';
import { MendelpedeScenariosComponent } from './scenarios/mendelpede-scenarios.component';
import { MendelpedeScenarioService } from './scenarios/mendelpede-scenarios.service'
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
    MendelpedeFridgeComponent,
    MendelpedeLabroomComponent,
    MendelpedeScenariosComponent,
    MendelpedeComponent,
  ],
  providers: [
    MendelpedeScenarioService,
  ],
})
export class MendelpedeModule {
}
