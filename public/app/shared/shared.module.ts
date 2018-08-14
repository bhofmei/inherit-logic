import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DndModule } from 'ng2-dnd';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';
import { SkyhookDndModule } from 'angular-skyhook';
import { default as TouchBackend } from 'react-dnd-touch-backend';

import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog.component';

import { PersonNamePipe } from '../pipes/person-name.pipe';
import { PeopleListNamesPipe } from '../pipes/people-list-names.pipe';
import { PhageParentsPipe } from '../pipes/phage-parents.pipe';

import { FormErrorsModule } from './form-errors/form-errors.module';
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
      DndModule.forRoot(),
      NgbModule.forRoot(),
      McBreadcrumbsModule.forRoot(),
      SkyhookDndModule.forRoot({ backend: TouchBackend })
    ],
  declarations: [
    PersonNamePipe,
    PeopleListNamesPipe,
    PhageParentsPipe,
    ConfirmDeleteDialogComponent
  ],
    exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      FormErrorsModule,
      DndModule,
      NgbModule,
      McBreadcrumbsModule,
      PersonNamePipe,
      PeopleListNamesPipe,
      PhageParentsPipe,
      SkyhookDndModule,
      ConfirmDeleteDialogComponent,
      //EmailErrorComponent
    ],
})
export class SharedModule {
}
