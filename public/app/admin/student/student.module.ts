import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { StudentRoutes } from './student.routes';

import { StudentListComponent } from './student-list/student-list.component';
import { StudentIndivComponent } from './student-indiv/student-indiv.component';
import { StudentFridgeComponent } from './student-fridge/student-fridge.component';
import { StudentMendelFridgeComponent } from './student-mendel-fridge/student-mendel-fridge.component' 
import { StudentPhageComponent } from './student-fridge/student-phage.component';
import { ConfirmDeleteDialogComponent } from '../../shared/confirm-delete-dialog.component';

import { StudentResolver } from './student.resolver';
import { PhageGuessesPipe } from '../../pipes/phage-guesses.pipe';
import { PhageMutationsPipe } from '../../pipes/phage-mutations.pipe';
import { PhageDeletionsPipe } from '../../pipes/phage-deletions.pipe';

/**
 * Module for admin-regulated student things like setting the
 * role, viewing fridges for grading, and listing all students
 */
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(StudentRoutes)
  ],
  declarations: [
    StudentListComponent,
    StudentIndivComponent,
    StudentFridgeComponent,
    StudentMendelFridgeComponent,
    StudentPhageComponent,
    PhageGuessesPipe,
    PhageMutationsPipe,
    PhageDeletionsPipe
  ],
  entryComponents: [
    ConfirmDeleteDialogComponent
  ],
  providers: [
    StudentResolver
  ]
})
export class StudentModule {}
