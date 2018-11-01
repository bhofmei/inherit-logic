import { Routes } from '@angular/router';
import { OptionsComponent } from './options/options.component';
import { MendelpedeComponent } from './mendelpede.component';
import { MendelpedeScenariosComponent } from './scenarios/mendelpede-scenarios.component';
import { MendelpedeScenarioResolver } from './mendelpede-scenario.resolver';
 
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
        path : ':scenShortCode',
        resolve: {
          mendelpedeScenario: MendelpedeScenarioResolver
        },
        component : MendelpedeScenariosComponent,
        data: {
          breadcrumbs: '{{ mendelpedeScenario.label }}'
        }
      }
    ]
  }
];
