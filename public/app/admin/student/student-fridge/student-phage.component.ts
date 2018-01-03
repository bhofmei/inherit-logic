import { Component, Input} from '@angular/core';

import { StudentPhage } from '../../../interfaces/phage.interface';

@Component({
  selector: 'student-phage',
  templateUrl: 'app/admin/student/student-fridge/student-phage.template.html'
})

export class StudentPhageComponent{

  @Input() phage: StudentPhage;

  constructor(){}

  formatPhageType(){
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
