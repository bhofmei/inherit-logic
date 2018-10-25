import { Routes } from '@angular/router';
import { OptionsComponent } from './options/options.component'
import { MendelpedeComponent } from './mendelpede.component';
import { MendelpedeFridgeComponent } from './mpede-fridge/mpede-fridge.component'
import { MendelpedeLabroomComponent } from './mpede-labroom/mpede-labroom.component'

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
        path : 'mpede-labroom', 
        component : MendelpedeLabroomComponent,
        data: {
          breadcrumbs: 'labroom'
        }
      }
    ]
  }
];
