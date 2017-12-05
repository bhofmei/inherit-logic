import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DndModule } from 'ng2-dnd';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      DndModule.forRoot(),
      NgbModule.forRoot()
    ],
    exports: [
      CommonModule,
      FormsModule,
      DndModule,
      NgbModule
    ],
})
export class SharedModule {
}
