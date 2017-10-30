import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LocationRouterModule } from './location.route.module';
import { ExperimentService } from './experiment.service';

import { LocationComponent } from './location.component';
import { LabRoomComponent } from './lab-room/lab-room.component';
import { PlexerRoomComponent } from './plexer-room/plexer-room.component';
import { ModelRoomComponent } from './model-room/model-room.component';
import { LandingRoomComponent } from './landing-room/landing-room.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LocationRouterModule
  ],
  declarations: [
    LocationComponent,
    LabRoomComponent,
    PlexerRoomComponent,
    ModelRoomComponent,
    LandingRoomComponent
  ],
  providers: [
    ExperimentService
  ]
})
export class LocationModule {}
