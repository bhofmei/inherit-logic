import { Component, OnInit} from '@angular/core';
import { User } from '../../../interfaces/user.interface';
import { AuthenticationService } from '../../../authentication/authentication.service';

@Component({
  selector: 'mpede-labroom',
  templateUrl: './mpede-labroom.template.html',
  styleUrls: ['./mpede-labroom.style.css']
})
export class MendelpedeLabroomComponent implements OnInit{

  user: User;

  ngOnInit() {
    this.user = this._authenticationService.getUser();
    
  }

  constructor(private _authenticationService: AuthenticationService) {

  }
  /**
   * Gets CSS classes 
   *
   * @returns {Object} classes wh
   */

  getMendelpede(): Object{
    return {
      'mpede-basic-top-right': true,
    }
  }
  getMendelpedetopleft(): Object{
    return {
      'mpede-basic-top-left': true,
    }
  }
  getMendelpedebottomleft(): Object{
    return {
      'mpede-basic-bottom-left': true,
    }
  }
  
}
