import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DndModule } from 'ng2-dnd';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      DndModule.forRoot()
    ],
    exports: [
      CommonModule,
      FormsModule,
      DndModule
    ],
})
export class SharedModule {
}
