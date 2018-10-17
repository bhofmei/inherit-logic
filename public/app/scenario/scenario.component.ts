import { Component } from '@angular/core';

/**
 * View component used to link the breadcrumb with the location
 * module components or scenario list
 */
@Component({
  selector: 'scenario',
  template: '<mc-breadcrumbs></mc-breadcrumbs><router-outlet></router-outlet>'
})

export class ScenarioComponent {
}
