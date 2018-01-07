import { Routes } from '@angular/router';

import { LocationComponent } from './location.component';
import { LocationGuard } from './location-guard.service';

import { LabRoomComponent } from './lab-room/lab-room.component';
import { PlexerRoomComponent } from './plexer-room/plexer-room.component';
import { ModelRoomComponent } from './model-room/model-room.component';
import { LandingRoomComponent } from './landing-room/landing-room.component';

export const LocationRoutes: Routes = [
  {
    path: '',
    component: LocationComponent,
    canActivate: [LocationGuard],
    children: [
      { path: 'lab-room', component: LabRoomComponent },
      { path: 'plexer-room', component: PlexerRoomComponent },
      { path: 'model-room', component: ModelRoomComponent},
      {path: 'info', component: LandingRoomComponent},
      { path: '', component: LandingRoomComponent}
    ]
  }
];