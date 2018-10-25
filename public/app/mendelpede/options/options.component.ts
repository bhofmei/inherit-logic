import { Component, OnInit} from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'options',
  templateUrl: './options.template.html'
})
export class OptionsComponent implements OnInit{

  user: User;

  ngOnInit() {
    this.user = this._authenticationService.getUser();
    
  }

  constructor(private _authenticationService: AuthenticationService) {

  }
  
}
