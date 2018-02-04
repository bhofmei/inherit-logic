import { Component } from '@angular/core';

@Component({
    selector: 'cricket-app',
    template: '<cricket-nav></cricket-nav><router-outlet></router-outlet>',
})
export class AppComponent {
    constructor() { }
}
