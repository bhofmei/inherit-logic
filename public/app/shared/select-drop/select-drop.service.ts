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

  deselect(){
    this.curSource = null;
    this.data = null;
    this.isSelected = false;
  }

  select(sourceName: string, data: any){
    this.curSource = sourceName;
    this.data = data;
    this.isSelected = true;
  }
}
