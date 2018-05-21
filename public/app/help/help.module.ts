import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { HelpRoutes } from './help.routes';
import { HelpComponent } from './help.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(HelpRoutes)
  ],
  declarations: [
    HelpComponent
  ]
})
export class HelpModule {}
