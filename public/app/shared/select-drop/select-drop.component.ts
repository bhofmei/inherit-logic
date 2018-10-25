import {Directive, Input, Output, EventEmitter, ChangeDetectorRef, ViewRef} from '@angular/core';
import {ElementRef} from '@angular/core';

import { SelectDropService, SelectDropData } from './select-drop.service';

@Directive({selector: '[select-droppable]'})
export class SelectDropComponent {
    _elem: HTMLElement;
    _defaultCursor: string;

    private _selectEnabled: boolean = false;
    set selectEnabled(enabled: boolean) {
        this._selectEnabled = !!enabled;
    }
    get selectEnabled(): boolean {
        return this._selectEnabled;
    }
    private _dropDisabled: boolean = false;
    set dropDisabled(disable: boolean){
      this._dropDisabled = !!disable;
    }
    get dropDisabled(): boolean{
      return this._dropDisabled;
    }

     @Input("selectEnabled") set selectable(value:boolean) {
         this.selectEnabled = !!value;
     }
     @Input("dropDisabled") set undroppable(value:boolean) {
         this.dropDiabled = !!value;
     }

     @Input() allowDrop: (dropData: any) => boolean;
     @Input("selectData") data: any;
     @Input() sourceName: string;

     @Output() onDropSuccess: EventEmitter<SelectDropData> = new EventEmitter<SelectDropData>();
@Output("onSuccess") onSuccessCallback: EventEmitter<SelectDropData> = new EventEmitter<SelectDropData>();
@Output() onError: EventEmitter<string> = new EventEmitter<string>();
    constructor(elemRef: ElementRef, public _selectDropService: SelectDropService,
        private _cdr: ChangeDetectorRef) {

        // Assign default cursor unless overridden
        this._defaultCursor = 'pointer';
        this._elem = elemRef.nativeElement;
        if(!this.dropDisabled && !this.selectEnabled)
          this._elem.style.cursor = this._defaultCursor;  // set default cursor on our element

        this._elem.onmouseenter = (event: MouseEvent) => {
            this._onMouseEnter(event);
        }
        this._elem.onmouseout = (event: MouseEvent) => {
          this._onMouseOut(event);
        }
        // Click events - both select and drop
      this._elem.onclick = (event: MouseEvent) =>{
        this._onClick(event);
      }
        //
    }

    private _onClick(event: MouseEvent): void {
      if (event.preventDefault) {
          // Necessary. Allows us to drop.
          event.preventDefault();
      }
      // if nothing selected and selectEnabled -> select
      if(this._selectDropService.isSelected === false && this.selectEnabled){
        //this._elem.classList.add('selected-object');
        this._onSelectCallback(event);
    } // if we re-clicked the object -> deselect
    else if(this._selectDropService.isSelected && this.sourceName === this._selectDropService.curSource){
        //this._elem.classList.remove('selected-object');
        this._onDeselectCallback(event);
    } // if we can drop, then drop
    else if(this._isDropAllowed(event)){
      //this._elem.classList.remove('selected-object');
      this._onDropCallback(event);
    } // if something selected, select this instead
    else if(this._selectDropService.isSelected && this.selectEnabled){
      //this._elem.classList.add('selected-object');
      // update to remove selected-class on previously selected elem
      this._selectDropService.removeElemClass();
      this._onSelectCallback(event);
    } else {
      this._onErrorCallback(event);
    }
    }

    private _onMouseEnter(event: Event) {
            // // console.log('ondragover._isDropAllowed', this._isDropAllowed);
            if (this._isDropAllowed(event)) {
              this._elem.classList.add('drop-object');
                // The element is over the same source element - do nothing
                if (event.preventDefault) {
                    // Necessary. Allows us to drop.
                    event.preventDefault();
                }
            }
        }
    private _onMouseOut(event: Event){
      this._elem.classList.remove('drop-object');
    }

    detectChanges () {
        // Programmatically run change detection to fix issue in Safari
        setTimeout(() => {
            if ( this._cdr && !(this._cdr as ViewRef).destroyed ) {
                this._cdr.detectChanges();
            }
        }, 250);
    }

    private _isDropAllowed(event: any): boolean {
        if (this._selectDropService.isSelected) {
            // First, if `allowDrop` is set, call it to determine whether the
            if(this.dropDiabled){
            return false
          }
            if (this.allowDrop) {
                return this.allowDrop(this._selectDropService.data);
            }
            return true;
        }
        return false;
    }

    private _preventAndStop(event: Event): any {
        if (event.preventDefault) {
            event.preventDefault();
        }
        if (event.stopPropagation) {
            event.stopPropagation();
        }
    }


  _onErrorCallback(event: Event): void {
    this.onError.emit('There was an error');
    this._selectDropService.deselect();
  }

    _onDropCallback( event: MouseEvent ){
      let dataTransfer = (event as any).dataTransfer;
      if(this._selectDropService.isSelected){
        this.onDropSuccess.emit({data: this._selectDropService.data, mouseEvent: event});
        if(this._selectDropService.onSuccessCallback){
          this._selectDropService.onSuccessCallback.emit({data: this._selectDropService.data, mouseEvent: event});
        }
        this._selectDropService.deselect();

      }
    }

    _onDeselectCallback(event: MouseEvent){
      this._selectDropService.deselect();
    }

    _onSelectCallback(event: MouseEvent) {
        if(!this.sourceName && (this.data.source || this.data.src)){
          this.sourceName = this.data.source ? this.data.source : this.data.src;
        } else if(!this.sourceName){
          this.sourceName = ''
        }
        //this._selectDropService.elem = this._elem;
        this._selectDropService.select(this.sourceName, this.data, this._elem);
        this._selectDropService.onSuccessCallback = this.onSuccessCallback;
    }
}
