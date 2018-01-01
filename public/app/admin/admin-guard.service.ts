import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private _authenticationService: AuthenticationService, private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
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
