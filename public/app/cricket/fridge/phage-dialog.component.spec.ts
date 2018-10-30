import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Directive, DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { PhageDialogComponent } from './phage-dialog.component';
import { SharedModule } from '../../shared/shared.module';

import { User, FridgePhage, Scenario } from '../../interfaces';
import { listOfPhage } from '../../testing/sample-data';
import { recurCSSQuery, addMatchers } from '../../testing';

// Fake component for testing PhageDialog as part of Fridge
@Component({
  template: `<phage-dialog-content [phage]="strain"></phage-dialog-content>`
})
class PhageDialogTestComponent{
  strain: FridgePhage
}

// variables for testing
let fixture: ComponentFixture<PhageDialogTestComponent>;
let comp: PhageDialogTestComponent;
let page: PhagePage;

describe('Phage Dialog Component', ()=>{
  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [PhageDialogTestComponent, PhageDialogComponent],
      providers: [NgbActiveModal]
    }).compileComponents();
  })); // end beforeEach async

  describe('Test reference phage', ()=>{
    let expected;
    beforeEach(fakeAsync(()=>{
      expected = listOfPhage[0];
      createComponent(expected);
      tick();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync

    it('Should have strainNum', ()=>{
      expect(page.strainNum.innerHTML).toTemplateMatch('Strain 1');
    }); // end Should have strainNum

    it('Should have "reference" phage type', ()=>{
      let pType = page.phageType.value;
      expect(pType).toMatch('reference');
    }); // end Should have "reference" phage type

    it('Should have comment', ()=>{
      let comment = page.phageComment.value;
      expect(comment).toBe(expected.comment);
    }); // end Should have comment

    it('Should not have parents', ()=>{
      expect(page.phageParents).toBeNull();
    }) // end Should not have parents
  }); // end Test reference phage

  describe('Test unknown phage', ()=>{
    let expected;
    beforeEach(fakeAsync(()=>{
      expected = listOfPhage[2];
      createComponent(expected);
      tick();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync

    it('Should have strainNum', ()=>{
      expect(page.strainNum.innerHTML).toTemplateMatch('Strain 3');
    }); // end Should have strainNum

    it('Should have "unknown" phage type', ()=>{
      let pType = page.phageType.value;
      expect(pType).toMatch('unknown');
    }); // end Should have "unknown" phage type

    it('Should have comment', ()=>{
      let comment = page.phageComment.value;
      expect(comment).toBe(expected.comment);
    }); // end Should have comment

    it('Should not have parents', ()=>{
      expect(page.phageParents).toBeNull();
    }) // end Should not have parents
  }); // end Test unknown phage

  describe('Test user not submitted phage', ()=>{
    let expected;
    beforeEach(fakeAsync(()=>{
      expected = listOfPhage[3];
      createComponent(expected);
      tick();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync

    it('Should have strainNum', ()=>{
      expect(page.strainNum.innerHTML).toTemplateMatch('Strain 5');
    }); // end Should have strainNum

    it('Should have "user" phage type', ()=>{
      let pType = page.phageType.value;
      expect(pType).toMatch('user');
    }); // end Should have "user" phage type

    it('Should have comment', ()=>{
      let comment = page.phageComment.value;
      expect(comment).toBe(expected.comment);
    }); // end Should have comment

    it('Should not be submitted', ()=>{
      let isChecked = page.phageSubmitted.checked;
      expect(isChecked).toBe(false);
    }); // end Should not be submitted

    it('Should have parent', ()=>{
      expect(page.phageParents.innerHTML).toTemplateMatch('Strain 1');
    }); // end Should have parent
  }); // end Test user not submitted phage

    describe('Test user submitted phage', ()=>{
    let expected;
    beforeEach(fakeAsync(()=>{
      expected = listOfPhage[4];
      createComponent(expected);
      tick();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync

    it('Should have strainNum', ()=>{
      expect(page.strainNum.innerHTML).toTemplateMatch('Strain 6');
    }); // end Should have strainNum

    it('Should have "user" phage type', ()=>{
      let pType = page.phageType.value;
      expect(pType).toMatch('user');
    }); // end Should have "user" phage type

    it('Should have comment', ()=>{
      let comment = page.phageComment.value;
      expect(comment).toBe(expected.comment);
    }); // end Should have comment

    it('Should be submitted', ()=>{
      let isChecked = page.phageSubmitted.checked;
      expect(isChecked).toBe(true);
    }); // end Should be submitted

    it('Should have parents', ()=>{
      expect(page.phageParents.innerHTML).toTemplateMatch('Strains 2 and 3');
    }); // end Should have parents
  }); // end Test user submitted phage

  describe('Test phage missing parent', ()=>{
    let expected;
    beforeEach(fakeAsync(()=>{
      expected = listOfPhage[5];
      expected.phageType = 'user';
      createComponent(expected);
      tick();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync

    it('Should have strainNum', ()=>{
      expect(page.strainNum.innerHTML).toTemplateMatch('Strain 4');
    }); // end Should have strainNum

    it('Should have "user" phage type', ()=>{
      let pType = page.phageType.value;
      expect(pType).toMatch('user');
    }); // end Should have "user" phage type

    it('Should have comment', ()=>{
      let comment = page.phageComment.value;
      expect(comment).toBe(expected.comment);
    }); // end Should have comment

    it('Should have missing parent', ()=>{
      expect(page.phageParents.innerHTML).toTemplateMatch('Strains 2 and ?');
    }); // end Should have parents
  }); // end Test phage missing parent

}); // end Phage Dialog Component

class PhagePage {
  strainNum: HTMLElement;
  phageType: HTMLInputElement;
  phageComment: HTMLTextAreaElement;
  phageSubmitted: HTMLInputElement;
  phageParents: HTMLElement;

  constructor(){}

  addElements(){
    if(comp.strain){
      this.strainNum = fixture.debugElement.query(By.css('.modal-title')).nativeElement;
      this.phageType = fixture.debugElement.query(By.css('#typeInput')).nativeElement;
      this.phageComment = fixture.debugElement.query(By.css('#commentInput')).nativeElement;
      let tmp = fixture.debugElement.query(By.css('#submitInput'));
      this.phageSubmitted = (tmp ? tmp.nativeElement : null);
      tmp = fixture.debugElement.query(By.css('#viewParents'));
      this.phageParents = (tmp ? tmp.query(By.css('.form-control-plaintext')).nativeElement : null);
    }
  }
}

function createComponent(phage){
  fixture = TestBed.createComponent(PhageDialogTestComponent);
  comp = fixture.componentInstance;
  comp.strain = phage;
  if(phage.numParents === undefined){
    comp.strain.parents = [];
    comp.strain.numParents = 0;
  }
  page = new PhagePage();
  fixture.detectChanges(); // trigger ngOnInit
}
