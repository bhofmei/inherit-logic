import { Component } from '@angular/core';

@Component({
    selector: 'plexer-room',
    templateUrl: './app/scenario/location/plexer-room/plexer-room.template.html',
  styleUrls: ['./app/scenario/location/plexer-room/plexer-room.style.css']
})
export class PlexerRoomComponent {

  private chosenPhage: string;
  private plexerType: string = 'multi';

  phagePicked($event) {
    this.chosenPhage = $event;
  }
}
