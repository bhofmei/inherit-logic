import { Routes } from '@angular/router';
import { HelpComponent } from './help.component';

export const HelpRoutes: Routes = [
  {
    path: 'help',
    component: HelpComponent,
    data: {breadcrumbs: 'Help'}
  }
];
