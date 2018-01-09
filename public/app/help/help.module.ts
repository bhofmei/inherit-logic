import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { HelpRouteModule } from './help.route.module';
import { HelpComponent } from './help.component';

@NgModule({
  imports: [
    SharedModule,
    HelpRouteModule
  ],
  declarations: [
    HelpComponent
  ]
})
export class HelpModule {}
