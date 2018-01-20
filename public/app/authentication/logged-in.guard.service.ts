import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class LoggedInGuard implements CanActivate, CanActivateChild {

  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot
  ): boolean {
    let url: string = state.url;

    let isLoggedIn: boolean = this._authenticationService.isLoggedIn();
    if(isLoggedIn)
      return true;
    else {
      this._authenticationService.redirectUrl = url;
      this._router.navigate(['authentication/signin']);
      return false;
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
}
