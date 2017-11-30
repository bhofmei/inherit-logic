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

  constructor(){}

  addPhage(phage: any, dir: string, spot: number){
    if(dir === 'row' && spot < 8){
      this.rows[spot] = phage;
    } else if (spot < 8) { // column
      this.cols[spot] = phage;
    }
  }

  isRowVisible(rowInt: number){
    return !(this.plexerType === 'multi' && rowInt > 1)
  }

}
