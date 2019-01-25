import { Component } from '@angular/core';

/**
 * The main application component;
 * Links the nav bar to the content needed based on the url
 */
@Component({
    selector: 'inherit-logic',
    template: '<IL-nav></IL-nav><router-outlet></router-outlet>'
})
export class AppComponent {
    constructor() { }
}
