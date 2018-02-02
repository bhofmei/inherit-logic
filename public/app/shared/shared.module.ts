import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DndModule } from 'ng2-dnd';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';
import { PersonNamePipe } from '../pipes/person-name.pipe';
import { SkyhookDndModule } from 'angular-skyhook';
import { default as TouchBackend } from 'react-dnd-touch-backend';
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      DndModule.forRoot(),
      NgbModule.forRoot(),
      McBreadcrumbsModule.forRoot(),
      SkyhookDndModule.forRoot({ backend: TouchBackend })
    ],
  declarations: [
    PersonNamePipe,
    ConfirmDeleteDialogComponent
  ],
    exports: [
      CommonModule,
      FormsModule,
      DndModule,
      NgbModule,
      McBreadcrumbsModule,
      PersonNamePipe,
      SkyhookDndModule,
      ConfirmDeleteDialogComponent
    ],
})
export class SharedModule {
}
