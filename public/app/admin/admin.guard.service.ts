import { Injectable } from '@angular/core';
import { CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class AdminGuard implements CanActivateChild {

  constructor(private _authenticationService: AuthenticationService, private _router: Router) {}

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    let role: boolean = this._authenticationService.canAccessAdmin();
    if(role)
      return true;
    else {
      this._authenticationService.redirectUrl = url;
      this._router.navigate(['/admin/not-auth']);
      return false;
    }
  }
}
