import { Directive, Input, Output, EventEmitter, ElementRef, ChangeDetectorRef, ViewRef } from '@angular/core';

import { SelectDropService, SelectDropData } from './select-drop.service';

@Directive({selector: '[selectable]'})
export class SelectableComponent {
  private _selectEnabled: boolean = false;
  /*set selectEnabled(enabled: boolean){
    this._selectEnabled = !!enabled;
  }*/
  /*get selectEnabled(): boolean {
    return this._selectEnabled();
  }*/
  private _dropEnabled: boolean = false;
  allowDrop: (sourceName: string ) => boolean;

  _elem: HTMLElement;
  _cursor: string;

  /* Inputs */
  @Input("selectEnabled") set selectable(value: boolean){
    this._selectEnabled = !!value;
  }
  @Input() data: any;
  @Input() sourceName: string;

  /* Outputs */
  //@Output() onSelect
  // callback when object is selected
  @Output() onSelect: EventEmitter<SelectDropData> = new EventEmitter<SelectDropData>();
  // callback when object is successfully dropped; acitvated after onDropSuccess
  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() on

  constructor(elemRef: ElementRef, public selectDropService: SelectDropService, private _cdr: ChangeDetectorRef){
    this._cursor = 'pointer';
    this._elem = elemRef.nativeElement;
    this._elem.style.cursor = this._cursor;

    this._elem.onclick = (event: MouseEvent) => {
      console.log('Click');
      this._onClick(event);
    }
    this._elem.onmouseover = (event: MouseEvent) => {
      console.log('mouseover');
      this._onMouseOver(event);
    }
  }

  private _onClick(event: Event) {

  }

  private _onSelect(event: MouseEvent) {
    this.selectDropService.select(this.sourceName, this.data);
    this._elem.classList.add('selected-object');
    this.onSelect.emit({data: this.data, mouseEvent: event});
  }

  private _alreadySelected(event: Event){
    // if same source
  }

  // Drop the selected object -- already checked drop allowed?
  private _drop(event: Event){
    this._preventAndStop(event);
    this._onDropCallback(event);
    this.detectChanges();
  }

  private _isDropAllowed(event: any): boolean{
    if(this.selectDropService.isSelected && this._dropEnabled){
      if(this.allowDrop){
        return this.allowDrop(this.selectDropService.curSource);
      }
    }
    return false;
  }

  private _onMouseOver(event: MouseEvent){

  }


  _onSuccessCallback(event: Event){ }

  _onDropCallback(event: Event){ }


  detectChanges () {
  // Programmatically run change detection to fix issue in Safari
  setTimeout(() => {
      if ( this._cdr && !(this._cdr as ViewRef).destroyed ) {
          this._cdr.detectChanges();
      }
  }, 250);
  }


  private _preventAndStop(event: Event): any {
    if (event.preventDefault) {
            event.preventDefault();
        }
        if (event.stopPropagation) {
            event.stopPropagation();
        }
    }
}
