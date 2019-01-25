import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { FridgePhage } from '../../interfaces/phage.interface';

/**
 * Modal dialog box for individual phage strains
 * Used to edit phage comment, view phage parents, or delete phage
 */
@Component({
  selector: 'phage-dialog-content',
  templateUrl: './phage-dialog.template.html'
})
export class PhageDialogComponent {
  /**
   * The phage we are viewing
   */
  @Input() phage: FridgePhage;

  constructor(public activeModal: NgbActiveModal) {
  }

}
