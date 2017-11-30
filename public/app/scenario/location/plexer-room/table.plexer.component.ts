import { Component, Input } from '@angular/core';
import { ExperimentService } from '../experiment.service';

@Component({
  selector: 'table-plexer',
  templateUrl: './app/scenario/location/plexer-room/table.plexer.template.html',
  styleUrls: ['./app/scenario/location/plexer-room/table.plexer.style.css']
})

export class TablePlexerComponent {

  @Input() plexerType: string;
  private rows: any[] = [];
  private cols: any[] = [];
  private results: Object;

  constructor(){
    for(let i = 0; i < 8; i++){
      this.rows.push({data: null});
      this.cols.push({data: null});
    }
  }

  addPhage($event: any, dir: string, spot: number){
    let phage = $event.dragData;
    if(dir === 'row' && spot < 8){
      this.rows[spot].data = phage;
    } else if (spot < 8) { // column
      this.cols[spot].data = phage;
    }
  }

  getRowClass(rowInt: number): Object{
    return {
      'data-table-row': true,
      'invisible': this.isRowHidden(rowInt)
    }
  }

  isRowHidden(rowInt: number){
    return (this.plexerType === 'multi' && rowInt > 1)
  }



}
