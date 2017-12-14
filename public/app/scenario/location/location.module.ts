import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { LocationRouterModule } from './location.route.module';
import { LocationGuard } from './location-guard.service';
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
    LocationRouterModule
  ],
  declarations: [
    LocationComponent,
    FridgeComponent,
    PhageDialogComponent,
    LabRoomComponent,
    PlexerRoomComponent,
    ModelRoomComponent,
    LandingRoomComponent
  ],
  providers: [
    ExperimentService,
    LocationGuard
  ],
  entryComponents: [
    PhageDialogComponent
  ]
})
export class LocationModule {}
