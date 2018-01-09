import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { HomeRouteModule } from './home.route.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRouteModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {}
