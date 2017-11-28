import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { LocationRouterModule } from './location.route.module';
import { ExperimentService } from './experiment.service';

import { FridgeComponent } from '../fridge/fridge.component';
import { LocationComponent } from './location.component';
import { LabRoomComponent } from './lab-room/lab-room.component';
import { PlateComponent } from './lab-room/plate.component';
import { BactTubeComponent } from './lab-room/bact-tube.component';
import { PlexerRoomComponent } from './plexer-room/plexer-room.component';
import { ModelRoomComponent } from './model-room/model-room.component';
import { LandingRoomComponent } from './landing-room/landing-room.component';

@NgModule({
  imports: [
    SharedModule,
    LocationRouterModule
  ],
  declarations: [
    LocationComponent,
    FridgeComponent,
    LabRoomComponent,
    PlateComponent,
    BactTubeComponent,
    PlexerRoomComponent,
    ModelRoomComponent,
    LandingRoomComponent
  ],
  providers: [
    ExperimentService
  ]
})
export class LocationModule {}
