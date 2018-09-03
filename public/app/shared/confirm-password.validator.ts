import { AbstractControl } from '@angular/forms'

  /**
  * Custom validator to check that input password and confirmation password are the same
  *
  * @param ac {AbstractControl} - reactive form control for `confirmPassword` input
  * - must be part of a FormGroup with also has a `password` input
  *
  * @returns {null | Object } - `null` when passwords match or before form is initialized
  * - `{mismatch:true}` when passwords don't match
  */

export function passwordMatchValidator(ac: AbstractControl){
      let fg = ac.parent;
    if(!fg){
      return null;
    } else {
      return fg.get('password').value === fg.get('confirmPassword').value ? null : {mismatch: true};
    }
}
