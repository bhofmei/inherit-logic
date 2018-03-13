import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Directive, DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';

import { StudentPhageComponent } from './student-phage.component';
import { PhageGuessesPipe, PhageMutationsPipe, PhageDeletionsPipe } from '../../../pipes/phage.pipes';

import { User, AdminStudent, StudentPhage, Scenario } from '../../../interfaces';
import { listOfPhage } from '../../../testing/sample-data';
import { recurCSSQuery, addMatchers } from '../../../testing';

// Fake component for testing StudentPhage as part of StudentFridge
@Component({
  template: `<student-phage [phage]="strain"></student-phage>`
})
class StudentFridgeTestComponent {
  strain: StudentPhage;
}

// variables for testing
let fixture: ComponentFixture<StudentFridgeTestComponent>;
let comp: StudentFridgeTestComponent;
let page: PhagePage;

describe('Student Phage Component', ()=>{
  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      declarations: [StudentFridgeTestComponent, StudentPhageComponent, PhageGuessesPipe, PhageMutationsPipe, PhageDeletionsPipe]
    }).compileComponents();
  })); // end beforeEach async

  describe('Test ref WT phage', ()=>{
    let expected;
    beforeEach(fakeAsync(()=>{
      expected = listOfPhage[0];
      createComponent(expected);
      tick();
      page.addElements();
    })); // end beforeEach fakeAsync

    it('Should have strain num', ()=>{
      expect(page.strainNum.innerHTML).toMatch('1');
    });

    it('Should have "reference" phage type', ()=>{
      expect(page.phageType.innerHTML).toMatch('REF');
    }); // end Should have "reference" phage type

    it('Should have comment', ()=>{
      expect(page.phageComment.innerHTML).toMatch(expected.comment);
    }); // end Should have comment

    it('Should not have mutations, deletions, and guesses', ()=>{
      expect(page.phageMutations).toBeNull();
      expect(page.phageDeletions).toBeNull();
      expect(page.phageGuesses).toBeNull();
    }); // end Should not have mutations, deletions, and guesses
  }); // end Test ref WT phage

  describe('Test ref MUT phage', ()=>{
    let expected;
    beforeEach(fakeAsync(()=>{
      expected = listOfPhage[1];
      createComponent(expected);
      tick();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync

    it('Should have strain num', ()=>{
      expect(page.strainNum.innerHTML).toMatch('2');
    });

    it('Should have "reference" phage type', ()=>{
      expect(page.phageType.innerHTML).toMatch('REF');
    }); // end Should have "reference" phage type

    it('Should have comment', ()=>{
      expect(page.phageComment.innerHTML).toMatch(expected.comment);
    }); // end Should have comment

    it('Should have a mutation', ()=>{
      let m = page.phageMutations.innerHTML;
      expect(m).toTemplateMatch('-1 at 77');
    });// end Should have a mutation

    it('Should not have deletions, and guesses', ()=>{
      expect(page.phageDeletions).toBeNull();
      expect(page.phageGuesses).toBeNull();
    }); // end Should not have deletions, and guesses
  }); // end Test ref MUT phage

    describe('Test DEL phage with guesses', ()=>{
    let expected;
    beforeEach(fakeAsync(()=>{
      expected = listOfPhage[2];
      createComponent(expected);
      tick();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync

    it('Should have strain num', ()=>{
      expect(page.strainNum.innerHTML).toTemplateMatch('3');
    });

    it('Should have "unknown" phage type', ()=>{
      expect(page.phageType.innerHTML).toMatch('UNKNOWN');
    }); // end Should have "unknown" phage type

    it('Should have comment', ()=>{
      expect(page.phageComment.innerHTML).toMatch(expected.comment);
    }); // end Should have comment

    it('Should have a deletion and guesses', ()=>{
      expect(page.phageDeletions.innerHTML).toMatch('10 - 40');
      expect(page.phageGuesses.innerHTML).toMatch('10 - 20');
    });// end Should have a deletion and guesses

    it('Should not have mutations', ()=>{
      expect(page.phageMutations).toBeNull();
    }); // end Should not have mutations
  }); // end Test DEL phage with guesses

  describe('Test user MUT phage', ()=>{
    let expected;
    beforeEach(fakeAsync(()=>{
      expected = listOfPhage[3];
      createComponent(expected);
      tick();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync

    it('Should have strain num', ()=>{
      expect(page.strainNum.innerHTML).toTemplateMatch('5');
    });

    it('Should have "user" phage type', ()=>{
      expect(page.phageType.innerHTML).toMatch('USER');
    }); // end Should have "user" phage type

    it('Should have comment', ()=>{
      expect(page.phageComment.innerHTML).toMatch(expected.comment);
    }); // end Should have comment

    it('Should have a mutation', ()=>{
      let m = page.phageMutations.innerHTML;
      expect(m).toTemplateMatch('+1 at 89, -1 at 123');
    }); // end Should have a mutation

    it('Should not have a deletion and guesses', ()=>{
      expect(page.phageDeletions).toBeNull();
      expect(page.phageGuesses).toBeNull();
    });// end Should not have a deletion and guesses*/
  }); // end Test user MUT phage

    describe('Test submitted MUT phage', ()=>{
    let expected;
    beforeEach(fakeAsync(()=>{
      expected = listOfPhage[4];
      createComponent(expected);
      tick();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync

    it('Should have strain num', ()=>{
      expect(page.strainNum.innerHTML).toMatch('6');
    });

    it('Should have "submitted" phage type', ()=>{
      expect(page.phageType.innerHTML).toMatch('SUBMISSION');
    }); // end Should have "submitted" phage type

    it('Should have comment', ()=>{
      expect(page.phageComment.innerHTML).toMatch(expected.comment);
    }); // end Should have comment

    it('Should have a mutation', ()=>{
      let m = page.phageMutations.innerHTML;
      expect(m).toTemplateMatch('+1 at 299');
    }); // end Should have a mutation

    it('Should not have a deletion and guesses', ()=>{
      expect(page.phageDeletions).toBeNull();
      expect(page.phageGuesses).toBeNull();
    });// end Should not have a deletion and guesses*/
  }); // end Test submitted MUT phage

  describe('Test DEL phage without guesses', ()=>{
    let expected;
    beforeEach(fakeAsync(()=>{
      expected = listOfPhage[5];
      createComponent(expected);
      tick();
      page.addElements();
    })); // end beforeEach fakeAsync

    it('Should have strain num', ()=>{
      expect(page.strainNum.innerHTML).toMatch('4');
    });

    it('Should have "unknown" phage type', ()=>{
      expect(page.phageType.innerHTML).toMatch('UNKNOWN');
    }); // end Should have "unknown" phage type

    it('Should have comment', ()=>{
      expect(page.phageComment.innerHTML).toMatch(expected.comment);
    }); // end Should have comment

    it('Should have a deletion', ()=>{
      expect(page.phageDeletions.innerHTML).toMatch('50 - 90');
    });// end Should have a deletion

    it('Should not have mutations and guesses', ()=>{
      expect(page.phageMutations).toBeNull();
      expect(page.phageGuesses).toBeNull();
    }); // end Should not have mutations and guesses
  }); // end Test DEL phage without guesses

}); // end Student Phage Component


class PhagePage {
  strainNum: HTMLElement;
  phageType: HTMLElement;
  phageComment: HTMLElement;

  phageMutations: HTMLElement;
  phageDeletions: HTMLElement;
  phageGuesses: HTMLElement;

  addElements(){
    if(comp.strain){
      this.strainNum = fixture.debugElement.query(By.css('#phageNum')).nativeElement;
      this.phageType = recurCSSQuery(fixture.debugElement, ['#phageType', '.row'])
      this.phageComment = fixture.debugElement.query(By.css('#phageComment')).nativeElement;
      let m = fixture.debugElement.query(By.css('#phageMutations'));
      this.phageMutations = (m ? m.nativeElement : null)
      let d = fixture.debugElement.query(By.css('#phageDeletion'));
      this.phageDeletions = (d ? d.nativeElement : null)
      let g = fixture.debugElement.query(By.css('#phageGuess'));
      this.phageGuesses = (g ? g.nativeElement : null)
    }
  }
}

function createComponent(phage){
  fixture = TestBed.createComponent(StudentFridgeTestComponent);
  comp = fixture.componentInstance;
  comp.strain = phage;
  if(phage.guesses === undefined)
    comp.strain.guesses = [];
  page = new PhagePage();
  fixture.detectChanges(); // trigger ngOnInit
}
