import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { HelpRoutes } from './help.routes';
import { HelpComponent } from './help.component';
import { HelpCricketComponent } from './help-cricket/help-cricket.component';
import { HelpMendelpedeComponent } from './help-mendelpede/help-mendelpede.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(HelpRoutes)
  ],
  declarations: [
    HelpComponent,
    HelpCricketComponent,
    HelpMendelpedeComponent
  ]
})
export class HelpModule {}
