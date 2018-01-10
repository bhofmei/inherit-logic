import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { McBreadcrumbsConfig } from 'ngx-breadcrumbs';

import { ScenarioRouterModule } from './scenario.route.module';
import { ScenarioComponent } from './scenario.component';
import { ListComponent } from './list/list.component';

import { LocationGuard } from './location/location-guard.service';
import { ExperimentService } from './location/experiment.service';

import { FridgeComponent } from './fridge/fridge.component';
import { PhageDialogComponent } from './fridge/phage-dialog.component';
import { LocationComponent } from './location/location.component';
import { LandingRoomComponent } from './location/landing-room/landing-room.component';
import { LabRoomComponent } from './location/lab-room/lab-room.component';
import { PlexerRoomComponent } from './location/plexer-room/plexer-room.component';
import { ModelRoomComponent } from './location/model-room/model-room.component';

@NgModule({
  imports: [
    SharedModule,
    ScenarioRouterModule
  ],
  declarations: [
    ScenarioComponent,
    ListComponent,
    LocationComponent,
    FridgeComponent,
    PhageDialogComponent,
    LabRoomComponent,
    PlexerRoomComponent,
    ModelRoomComponent,
    LandingRoomComponent
  ],
  entryComponents: [
    PhageDialogComponent
  ],
  providers: [
    LocationGuard,
    ExperimentService
  ]
})
export class ScenarioModule {
}
