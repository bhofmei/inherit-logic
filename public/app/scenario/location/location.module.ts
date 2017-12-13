import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { LocationRouterModule } from './location.route.module';
import { LocationGuard } from './location-guard.service';
import { ExperimentService } from './experiment.service';

import { FridgeComponent } from '../fridge/fridge.component';
import { NgbdModalContent } from '../fridge/phage.component';
import { LocationComponent } from './location.component';
import { LandingRoomComponent } from './landing-room/landing-room.component';
import { LabRoomComponent } from './lab-room/lab-room.component';
import { PlexerRoomComponent } from './plexer-room/plexer-room.component';
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
    PlexerRoomComponent,
    ModelRoomComponent,
    LandingRoomComponent,
    NgbdModalContent
  ],
  providers: [
    ExperimentService,
    LocationGuard
  ],
  entryComponents: [
    NgbdModalContent
  ]
})
export class LocationModule {}
