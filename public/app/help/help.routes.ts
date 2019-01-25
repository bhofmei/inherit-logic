import { Routes } from '@angular/router';
import { HelpComponent } from './help.component';
import { HelpCricketComponent } from './help-cricket/help-cricket.component';
import { HelpMendelpedeComponent } from './help-mendelpede/help-mendelpede.component';

export const HelpRoutes: Routes = [
  {
    path: 'help',
    component: HelpComponent,
    data: {breadcrumbs: 'Help'},
    children: [
      {path: 'cricket',
      component: HelpCricketComponent,
      data: {breadcrumbs: 'Cricket'}
    },
    {path: 'mendelpede',
    component: HelpMendelpedeComponent,
    data: {breadcrumbs: 'MendelPede'}
    }
    ]
  }
];
