import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { StudentRouteModule } from './student.route.module';

import { StudentListComponent } from './student-list/student-list.component';
import { StudentIndivComponent } from './student-indiv/student-indiv.component';
import { StudentFridgeComponent } from './student-fridge/student-fridge.component';
import { StudentPhageComponent } from './student-fridge/student-phage.component';

import { StudentResolver } from './student.resolver';
import { PhageGuessesPipe } from '../../pipes/phage-guesses.pipe';
import { PhageMutationsPipe } from '../../pipes/phage-mutations.pipe';
import { PhageDeletionsPipe } from '../../pipes/phage-deletions.pipe';

@NgModule({
  imports: [
    SharedModule,
    StudentRouteModule
  ],
  declarations: [
    StudentListComponent,
    StudentIndivComponent,
    StudentFridgeComponent,
    StudentPhageComponent,
    PhageGuessesPipe,
    PhageMutationsPipe,
    PhageDeletionsPipe
  ],
  providers: [
    StudentResolver
  ]
})
export class StudentModule {}
