import { ChangeDetectorRef, Directive, Input, Output, EventEmitter, ElementRef } from '@angular/core';

import { SelectDropComponent } from './select-drop.component';
import { SelectDropService, SelectDropData } from './select-drop.service';

@Directive({selector: '[io-droppable]'})
export class DroppableComponent extends SelectDropComponent {

  @Input("dropEnabled") set droppable(value: boolean){
    this.dropEnabled = !!value;
  }

  @Output() onDropSuccess: EventEmitter<SelectDropData> = new EventEmitter<SelectDropData>();

  @Input("allowDrop") set allowDrop(value: (dropData: any)=> boolean ){
    this.allowDrop = value;
  }

  constructor(
    elemRef: ElementRef,
    selectDropService: SelectDropService,
    cdr: ChangeDetectorRef
  ){
     super(elemRef, selectDropService, cdr);
      this.dropEnabled = true;
    }

  _onDropCallback( event: MouseEvent ){
    let dataTransfer = (event)
  }
}
