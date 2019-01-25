import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes =
      [{
        path: '',
        component: HomeComponent
      },
       {
        path: '**',
        component: PageNotFoundComponent
      }];
