import { Component, OnInit} from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'mendelpede-fridge',
  templateUrl: './mpede-fridge.template.html'
})
export class MendelpedeFridgeComponent implements OnInit{

  user: User;

  ngOnInit() {
    this.user = this._authenticationService.getUser();
    
  }

  constructor(private _authenticationService: AuthenticationService) {

  }
  
}
