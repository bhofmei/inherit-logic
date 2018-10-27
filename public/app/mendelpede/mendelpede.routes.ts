import { Routes } from '@angular/router';
import { OptionsComponent } from './options/options.component';
import { MendelpedeComponent } from './mendelpede.component';
import { MendelpedeScenariosComponent } from './scenarios/scenarios.component';

export const MendelpedeRoutes: Routes = [
  {
    path : 'mendelpede',
    component : MendelpedeComponent,
    data: {
      breadcrumbs: 'mendelpede'
    },

    children:[
      {
        path : '', 
        component : OptionsComponent
      },
      {
        path : 'mpede-scenarios', 
        component : MendelpedeScenariosComponent,
        data: {
          breadcrumbs: 'labroom'
        }
      }
    ]
  }
];
