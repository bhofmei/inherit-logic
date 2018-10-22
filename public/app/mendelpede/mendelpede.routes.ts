import { Routes } from '@angular/router';
import { OptionsComponent } from './options/options.component'
import { MendelpedeComponent } from './mendelpede.component';
import { MendelpedeScenariosComponent } from './scenarios/scenarios.component'
import { MendelpedeFridgeComponent } from './mpede-fridge/mpede-fridge.component'

export const MendelpedeRoutes: Routes = [
  {
    path : 'mendelpede',
    component : MendelpedeComponent,
    data: {
      breadcrumbs: 'mendelpede'
    },

    children:[
      {
        path : 'options', 
        component : OptionsComponent
      },
      {
        path : 'mpede-fridge', 
        component : MendelpedeFridgeComponent
      },
      {
        path : 'mendelpede-scenarios', 
        component : MendelpedeScenariosComponent,
        data: {
          breadcrumbs: 'scenarios'
        }
      } 
    ]
  }
];

