import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationComponent } from './location.component';

import { LabRoomComponent } from './lab-room/lab-room.component';
import { PlexerRoomComponent } from './plexer-room/plexer-room.component';
import { ModelRoomComponent } from './model-room/model-room.component';
import { LandingRoomComponent } from './landing-room/landing-room.component';

const locationRoutes: Routes = [
  {
        path: '',
        component: LocationComponent,
        children: [
          { path: 'lab-room', component: LabRoomComponent },
          { path: 'plexer-room', component: PlexerRoomComponent },
          { path: 'model-room', component: ModelRoomComponent},
          {path: 'info', component: LandingRoomComponent},
          { path: '', component: LandingRoomComponent}
        ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(locationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LocationRouterModule {}
