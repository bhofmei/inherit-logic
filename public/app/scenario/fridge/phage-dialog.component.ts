import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { FridgePhage } from '../../interfaces/phage.interface';

@Component({
  selector: 'phage-dialog-content',
  templateUrl: './app/scenario/fridge/phage-dialog.template.html'
})
export class PhageDialogComponent {
  @Input() phage: FridgePhage;

  public viewParents: boolean = false;
  public hasParents: boolean;

  constructor(public activeModal: NgbActiveModal) {
    //this.hasParents = (this.phage.parents.length === 0);
  }
}
