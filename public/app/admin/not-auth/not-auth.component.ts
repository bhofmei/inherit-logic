import { Component } from '@angular/core';

/**
 * A basic view component when user tries to access an admin
 * page but does not have admin access
 */
@Component({
  selector: 'not-auth',
  templateUrl: './not-auth.template.html'
})

export class NotAuthComponent{

}
