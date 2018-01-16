import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil'

import { AuthenticationService } from '../authentication/authentication.service';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'admin-cmp',
  templateUrl: 'app/admin/admin.template.html'
})

export class AdminComponent{
  private adminUser: User;
  private errorMessage: string = '';
  //private isDestroyed$: Subject<boolean>

  constructor(
    private _authenticationService: AuthenticationService
  ){}

  ngOnInit(){
    this.adminUser = this._authenticationService.getUser();
  }

}
