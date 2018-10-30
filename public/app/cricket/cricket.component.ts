import { Component } from '@angular/core';

/**
 * View component used to link the breadcrumb with the location
 * module components or scenario list
 */
@Component({
  selector: 'cricket',
  template: '<mc-breadcrumbs></mc-breadcrumbs><router-outlet></router-outlet>'
})

export class CricketComponent {
}
