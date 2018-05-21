import { Component } from '@angular/core';

/**
 * The main application component;
 * Links the nav bar to the content needed based on the url
 */
@Component({
    selector: 'cricket-app',
    template: '<cricket-nav></cricket-nav><router-outlet></router-outlet>'
})
export class AppComponent {
    constructor() { }
}
