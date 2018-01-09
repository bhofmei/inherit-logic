import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help.component';

const helpRoute: Routes = [
  {
    path: 'help',
    component: HelpComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(helpRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class HelpRouteModule {}
