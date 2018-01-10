import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DndModule } from 'ng2-dnd';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      DndModule.forRoot(),
      NgbModule.forRoot(),
      McBreadcrumbsModule.forRoot()
    ],
    exports: [
      CommonModule,
      FormsModule,
      DndModule,
      NgbModule,
      McBreadcrumbsModule
    ],
})
export class SharedModule {
}
