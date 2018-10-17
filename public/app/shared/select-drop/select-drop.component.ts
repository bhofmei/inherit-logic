// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd

import {Injectable, ChangeDetectorRef, ViewRef} from '@angular/core';
import {ElementRef} from '@angular/core';

import { SelectDropService } from './select-drop.service';

@Injectable()
export abstract class AbstractComponent {
    _elem: HTMLElement;
    _defaultCursor: string;

    /**
     * Whether the object is draggable. Default is true.
     */
    private _selectEnabled: boolean = false;
    set selectEnabled(enabled: boolean) {
        this._selectEnabled = !!enabled;
    }
    get selectEnabled(): boolean {
        return this._selectEnabled;
    }

    /**
     * Allows drop on this element
     */
    dropEnabled: boolean = false;

    /**
     * Restrict places where a draggable element can be dropped.
     *
     * - allowDrop: a boolean function for droppable components, that is checked
     *   when an item is dragged. The function is passed the dragData of this
     *   item.
     *   - if it returns true, the item can be dropped in this component
     *   - if it returns false, the item cannot be dropped here
     */
    allowDrop: (dropData: any) => boolean;

    constructor(elemRef: ElementRef, public _selectDropService: SelectDropService,
        private _cdr: ChangeDetectorRef) {

        // Assign default cursor unless overridden
        this._defaultCursor = 'pointer';
        this._elem = elemRef.nativeElement;
        this._elem.style.cursor = this._defaultCursor;  // set default cursor on our element
        //
        // DROP events
        //
        /*this._elem.ondragenter = (event: Event) => {
            this._onDragEnter(event);
        };*/
        this._elem.onmouseover = (event: MouseEvent) => {
            this._onMouseOver(event);

            return false;
        };
        //
        // Click events - both select and drop
      this._elem.onclick = (event: MouseEvent) =>{
        this._onClick(event);
      }
        //
    }

    /******* Change detection ******/

    detectChanges () {
        // Programmatically run change detection to fix issue in Safari
        setTimeout(() => {
            if ( this._cdr && !(this._cdr as ViewRef).destroyed ) {
                this._cdr.detectChanges();
            }
        }, 250);
    }

    //****** Droppable *******//

    private _onMouseOver(event: Event) {
        // // console.log('ondragover._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // The element is over the same source element - do nothing
            if (event.preventDefault) {
                // Necessary. Allows us to drop.
                event.preventDefault();
            }

            this._onMouseOverCallback(event);
        }
    }

    /*private _onDrop(event: Event): void {
        // console.log('ondrop._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // Necessary. Allows us to drop.
            this._preventAndStop(event);

            this._onDropCallback(event);

            this.detectChanges();
        }
    }*/

    private _isDropAllowed(event: any): boolean {
        if (this._selectDropService.isSelected && this.dropEnabled) {
            // First, if `allowDrop` is set, call it to determine whether the
            // dragged element can be dropped here.
            if (this.allowDrop) {
                return this.allowDrop(this._selectDropService.data);
            }
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

    //*********** Draggable **********//
  private _onClick(event: Event){}
    /*private _onDragStart(event: Event): void {
        //console.log('ondragstart.dragEnabled', this._dragEnabled);
        if (this._dragEnabled) {
            this._dragDropService.allowedDropZones = this.dropZones;
            // console.log('ondragstart.allowedDropZones', this._dragDropService.allowedDropZones);
            this._onDragStartCallback(event);
        }
    }

    private _onDragEnd(event: Event): void {
        this._dragDropService.allowedDropZones = [];
        // console.log('ondragend.allowedDropZones', this._dragDropService.allowedDropZones);
        this._onDragEndCallback(event);
    }*/

    //**** Drop Callbacks ****//
    _onMouseOverCallback(event: Event) { }
    _onDropCallback(event: Event) { }

    //**** Drag Callbacks ****//
    _onSelectCallback(event: Event) { }
    //_onDragEndCallback(event: Event) { }
}
