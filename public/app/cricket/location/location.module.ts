import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { LocationRoutes } from './location.routes';

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
    RouterModule.forChild(LocationRoutes)
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
