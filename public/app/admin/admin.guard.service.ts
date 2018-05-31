import { Injectable } from '@angular/core';
import { CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

/**
 * Guard the admin paths so only users with `admin` or `instr`
 * role can access the route
 */
@Injectable()
export class AdminGuard implements CanActivateChild {

  constructor(private _authenticationService: AuthenticationService, private _router: Router) {}

  /**
   * Determine if user can activate the route based on their role
   *
   * @param {ActivatedRouteSnapshot} route - route URL at the moment
   * @param {RouterStateSnapshot} state - router state; needed to implement interface
   *
   * @returns {boolean} - `true` if user is `admin` or `instr`
   * - `false` if user is only a `student`
   */
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
