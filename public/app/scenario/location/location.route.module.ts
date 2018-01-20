import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationComponent } from './location.component';
import { LoggedInGuard } from '../../authentication/logged-in.guard.service';

import { LabRoomComponent } from './lab-room/lab-room.component';
import { PlexerRoomComponent } from './plexer-room/plexer-room.component';
import { ModelRoomComponent } from './model-room/model-room.component';
import { LandingRoomComponent } from './landing-room/landing-room.component';

export const LocationRoutes: Routes = [
  {
    path: '',
    component: LocationComponent,
    canActivate: [LoggedInGuard],
    children: [
      {
        path: 'lab-room',
        component: LabRoomComponent,
        data: {
          breadcrumbs: 'Lab'
        }
      },
      {
        path: 'plexer-room',
        component: PlexerRoomComponent,
        data: {
          breadcrumbs: 'Plexer'
        }
      },
      {
        path: 'model-room',
        component: ModelRoomComponent,
        data: {
          breadcrumbs: 'Model'
        }
      },
      { path: 'info', component: LandingRoomComponent},
      { path: '', component: LandingRoomComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(LocationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LocationRouteModule {}
