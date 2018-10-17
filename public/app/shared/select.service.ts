import { Injectable } from '@angular/core';

@Injectable()
export class SelectService {
  curSource: string;
  data: any;
  dropZones: string[];
  onDropCallback: any;

  allowDrop(testZone: string) {
    if(this.dropZones.length === 0){
      return true;
    }
    for(let x of this.dropZones){
      if(x === testZone){
        return true;
      }
    }
    return false;
  }

  onClick(sourceName: string, data: any){
    // if re-click selected object, deselect
    if(sourceName===this.curSource){
      this._deselect();
    }
    // if nothing selected, select
    if(this.curSource === null){
      this._select();
    }
    // if something selected, try to drop
    else {

    }
  }

  isSelectedObject(sourceName: string){
    return sourceName === this.curSource;
  }

  private _deselect(){
    this.curSource = null;
    this.data = null;
    this.dropZones = [];
    this.onDropCallback = null;
  }

  private _select(){

  }

  private _drop(){

  }

}
