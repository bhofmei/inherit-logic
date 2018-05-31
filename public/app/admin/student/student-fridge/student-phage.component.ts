import { Component, Input} from '@angular/core';

import { StudentPhage } from '../../../interfaces/phage.interface';

/**
 * Small component which encompasses a single phage strain being viewed
 * within a student's fridge
 */
@Component({
  selector: 'student-phage',
  templateUrl: './student-phage.template.html'
})

export class StudentPhageComponent{

  /**
   * The phage which the component is created for
   */
  @Input() phage: StudentPhage;

  constructor(){}

  /**
   * Produces formatted string based on phage type and if phage is
   * submitted to be graded
   *
   * @returns {string} formatted string
   *
   * @example
   * reference phage -> "REFERENCE"
   * scenario unknown phage -> "UNKOWN"
   * user phage, not sumitted -> "USER"
   * submitted phage -> "SUBMISSION"
   */
  formatPhageType(): string{
    if(this.phage){
      let t = this.phage.phageType;
      if(this.phage.phageType === 'user' && this.phage.submitted){
        return 'SUBMISSION'
      } else {
        return this.phage.phageType.toUpperCase();
      }
    } else {
      return '';
    }
  }
}
