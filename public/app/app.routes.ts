import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const AppRoutes: Routes =
      [{
        path: '**',
        component: PageNotFoundComponent
      }];
