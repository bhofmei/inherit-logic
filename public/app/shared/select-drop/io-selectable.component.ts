// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd

import {ChangeDetectorRef} from '@angular/core';
import {Directive, Input, Output, EventEmitter, ElementRef} from '@angular/core';

import {AbstractComponent} from './select-drop.component';
import {SelectDropService, SelectDropData} from './select-drop.service';

@Directive({ selector: '[io-selectable]' })
export class SelectComponent extends AbstractComponent {

    @Input("selectEnabled") set selectable(value:boolean) {
        this.selectEnabled = !!value;
    }

    /**
     * Callback function called when the drag actions happened.
     */
    @Output() onSelect: EventEmitter<SelectDropData> = new EventEmitter<SelectDropData>();

    /**
     * The data that has to be dragged. It can be any JS object
     */
    @Input() data: any;

    /**
     * Callback function called when the drag action ends with a valid drop action.
     * It is activated after the on-drop-success callback
     */
    @Output("onSelectSuccess") onSelectSuccessCallback: EventEmitter<any> = new EventEmitter<any>();

    constructor(elemRef: ElementRef, selectDropService: SelectDropService,
        cdr:ChangeDetectorRef) {

        super(elemRef, selectDropService, cdr);
        this._defaultCursor = this._elem.style.cursor;
        this.selectEnabled = true;
    }

    _onSelectCallback(event: MouseEvent) {
        this._dragDropService.isDragged = true;
        this._dragDropService.dragData = this.dragData;
        this._dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
        this._elem.classList.add(this._config.onDragStartClass);
        //
        this.onDragStart.emit({dragData: this.dragData, mouseEvent: event});
    }

    _onDragEndCallback(event: MouseEvent) {
        this._dragDropService.isDragged = false;
        this._dragDropService.dragData = null;
        this._dragDropService.onDragSuccessCallback = null;
        this._elem.classList.remove(this._config.onDragStartClass);
        //
        this.onDragEnd.emit({dragData: this.dragData, mouseEvent: event});
    }
}
