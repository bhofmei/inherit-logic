import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

/**
 * Router guard that makes sure only logged in users can access the page and all child pages
 */
@Injectable()
export class LoggedInGuard implements CanActivate, CanActivateChild {

  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router) {}

  /**
   * Determines if user can activate (visit) a page
   * based on if a user is logged in
   *
   * If not logged in, sets the redirect url to take user back to this page _after_ logging in and
   * sends the user to the sign in page
   *
   * @param {ActivatedRouteSnapshot} route - current URL
   * @param {RouterStatesnapshot} state - router state including the url trying to acess
   *
   * @returns {boolean} - `true` if user is logged in
   * - `false` if user is not logged in
   */
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

  /**
   * Determines if user can activate all child/sub pages depending if user is logged in
   *
   * Only logged in users can activate the pages
   */
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
}
