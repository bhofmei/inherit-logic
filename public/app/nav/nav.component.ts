import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'cricket-nav',
  templateUrl: './app/nav/nav.template.html',
  styleUrls: ['./app/nav/nav.style.css']
})
export class NavComponent {
  user: any;

  constructor(private _authenticationService: AuthenticationService) {
    this.user = _authenticationService.user;
  }
}
