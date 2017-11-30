import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { LocationRouterModule } from './location.route.module';
import { ExperimentService } from './experiment.service';

import { FridgeComponent } from '../fridge/fridge.component';
import { LocationComponent } from './location.component';
// landing/info room
import { LandingRoomComponent } from './landing-room/landing-room.component';
// lab room
import { LabRoomComponent } from './lab-room/lab-room.component';
import { BactTubeLabComponent } from './lab-room/bact-tube.lab.component';
import { DilutionTubeLabComponent } from './lab-room/dilution-tube.lab.component';
import { PlateLabComponent } from './lab-room/plate.lab.component';
// plexer room
import { PlexerRoomComponent } from './plexer-room/plexer-room.component';
//import { BactTubePlexerComponent } from './plexer-room/bact-tube.plexer.component';
// model room
import { ModelRoomComponent } from './model-room/model-room.component';


@NgModule({
  imports: [
    SharedModule,
    LocationRouterModule
  ],
  declarations: [
    LocationComponent,
    FridgeComponent,
    LabRoomComponent,
    BactTubeLabComponent,
    DilutionTubeLabComponent,
    PlateLabComponent,
    PlexerRoomComponent,
    //BactTubePlexerComponent,
    ModelRoomComponent,
    LandingRoomComponent
  ],
  providers: [
    ExperimentService
  ]
})
export class LocationModule {}
