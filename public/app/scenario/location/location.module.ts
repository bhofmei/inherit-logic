import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { LocationRouteModule } from './location.route.module';

import { ExperimentService } from './experiment.service';

import { FridgeComponent } from '../fridge/fridge.component';
import { PhageDialogComponent } from '../fridge/phage-dialog.component';

import { LocationComponent } from './location.component';
import { LandingRoomComponent } from './landing-room/landing-room.component';
import { LabRoomComponent } from './lab-room/lab-room.component';
import { PlexerRoomComponent } from './plexer-room/plexer-room.component';
import { ModelRoomComponent } from './model-room/model-room.component';

@NgModule({
  imports: [
    SharedModule,
    LocationRouteModule
  ],
  declarations: [
    FridgeComponent,
    PhageDialogComponent,
    LocationComponent,
    LabRoomComponent,
    PlexerRoomComponent,
    ModelRoomComponent,
    LandingRoomComponent
  ],
   entryComponents: [
    PhageDialogComponent
  ],
  providers: [
    ExperimentService
  ]
})
export class LocationModule {
}
