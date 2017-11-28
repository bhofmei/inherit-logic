import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DndModule } from 'ng2-dnd';

@NgModule({
    imports: [
      CommonModule,
      DndModule.forRoot()
    ],
    exports: [
      CommonModule,
      DndModule
    ],
})
export class SharedModule {
}
