import {Injectable, EventEmitter} from '@angular/core';

export class SelectDropData {
  data: any;
  mouseEvent: MouseEvent;
  //name: string;
}

export function selectDropServiceFactory(): SelectDropService {
  return new SelectDropService();
}

@Injectable()
export class SelectDropService {
  // allowed drop zones?
  curSource: string;
  data: any;
  onSuccessCallback: EventEmitter<SelectDropData>;
  isSelected: boolean;
  elem: HTMLElement;

  deselect(){
    this.curSource = null;
    this.data = null;
    this.isSelected = false;
    this.onSuccessCallback = null;
    this.removeElemClass();
    this.elem=null;
  }

  select(sourceName: string, data: any, htmlelement: HTMLElement){
    this.curSource = sourceName;
    this.data = data;
    this.isSelected = true;
    this.elem = htmlelement;
    if(this.elem)
      this.elem.classList.add('selected-object');
  }

  removeElemClass(): void{
    if(this.elem)
      this.elem.classList.remove('selected-object');
  }
}
