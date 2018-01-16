import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DndModule } from 'ng2-dnd';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';
import { PersonNamePipe } from '../pipes/person-name.pipe';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      DndModule.forRoot(),
      NgbModule.forRoot(),
      McBreadcrumbsModule.forRoot()
    ],
  declarations: [
    PersonNamePipe
  ],
    exports: [
      CommonModule,
      FormsModule,
      DndModule,
      NgbModule,
      McBreadcrumbsModule,
      PersonNamePipe
    ],
})
export class SharedModule {
}
