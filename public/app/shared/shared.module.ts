import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';

import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog.component';

import { PersonNamePipe } from '../pipes/person-name.pipe';
import { TitleCasePipe } from '../pipes/title-case.pipe';
import { PedeImagePipe } from '../pipes/pede-image.pipe';
import { PedeQuizTraitPipe } from '../pipes/pede-quizTrait.pipe'
import { PedeGenotypePipe } from '../pipes/pede-genotype.pipe';
import { PeopleListNamesPipe } from '../pipes/people-list-names.pipe';
import { PhageParentsPipe } from '../pipes/phage-parents.pipe';

import { FormErrorsModule } from './form-errors/form-errors.module';
import { SelectDropModule } from './select-drop/select-drop.module';
//import { CustomValidators } from './custom-validators';
/**
 * The Shared Module contains modules, pipes, and components
 * that are needed across the application
 *
 * Saves time by importing this module rather than the
 * pipes/modules/components individually
 */
@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      FormErrorsModule,
      SelectDropModule.forRoot(),
      NgbModule.forRoot(),
      McBreadcrumbsModule.forRoot()
    ],
  declarations: [
    PersonNamePipe,
    TitleCasePipe,
    PedeGenotypePipe,
    PedeImagePipe,
    PedeQuizTraitPipe,
    PeopleListNamesPipe,
    PhageParentsPipe,
    ConfirmDeleteDialogComponent
  ],
    exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      FormErrorsModule,
      NgbModule,
      SelectDropModule,
      McBreadcrumbsModule,
      PersonNamePipe,
      TitleCasePipe,
      PedeGenotypePipe,
      PedeImagePipe,
      PeopleListNamesPipe,
      PhageParentsPipe,
      PedeQuizTraitPipe,
      ConfirmDeleteDialogComponent
    ],
})
export class SharedModule {
}
