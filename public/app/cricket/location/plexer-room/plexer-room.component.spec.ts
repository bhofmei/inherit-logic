import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Directive, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs';
import { Router, RouterStub, ActivatedRoute, ActivatedRouteStub, RouterLinkStubDirective, getAllRouterLinks, recurCSSQuery, click, addMatchers } from '../../../testing';
import * as _ from 'lodash';

import { SharedModule } from '../../../shared/shared.module';
import { PlexerRoomComponent } from './plexer-room.component';
import { ExperimentService } from '../experiment.service';
import { CricketService } from '../../cricket.service';

import { ExperimentPhage, GenotypePhage, FridgePhage, Phage, PlexerInput } from '../../../interfaces';
import { listOfPhage } from '../../../testing/sample-data';
import { CricketServiceStub, ExperimentServiceStub } from '../../../testing/service-stubs';

class PlexerRoomTestComponent extends PlexerRoomComponent {
  // so we have access to internal properties
}

// Testing variables
let fixture: ComponentFixture<PlexerRoomTestComponent>;
let comp: PlexerRoomTestComponent;
let page: Page;

describe('Plexer Room Component', ()=>{

  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [PlexerRoomTestComponent],
      providers: [
        {provide: CricketService, useClass: CricketServiceStub},
        {provide: ExperimentService, useClass: ExperimentServiceStub}
      ]
    }).compileComponents();
  })); // end beforeEach async

  describe('Test initial page (no previous interaction)', ()=>{
    beforeEach(fakeAsync(()=>{
      createComponent();
      tick();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync

    it('Should have no table labels', ()=>{
      page.colLabels.forEach((lb)=>{
        expect(lb).toBeNull();
      });
      expect(page.colLabels.length).toBe(8);

      page.rowLabels.forEach((lb)=>{
         expect(lb).toBeNull();
      });
      expect(page.rowLabels.length).toBe(8);
    }); // end Should have no table labels

    it('Should have submit disabled', ()=>{
      var isDisabled = page.submitBtn.nativeElement.hasAttribute('disabled');
      expect(isDisabled).toBeTruthy();
    }); // end Should have submit disabled

    it('Should have no bacteria selected', ()=>{
      let classesB = page.tubeBBtn.nativeElement.className;
      expect(classesB).not.toContain('chosen');
      expect(classesB).toContain('btn-outline-info');

       let classesK = page.tubeKBtn.nativeElement.className;
      expect(classesK).not.toContain('chosen');
      expect(classesK).toContain('btn-outline-danger');
    }); // end Should have no bacteria selected
  }); // end Test initial page (no previous interaction)

  describe('Test select bacteria', ()=>{
    beforeEach(fakeAsync(()=>{
      createComponent();
      tick();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync

    it('Should choose B bacteria', fakeAsync(()=>{
      click(page.tubeBBtn);
      tick();
      fixture.detectChanges();
      page.addElements();

      let classesB = page.tubeBBtn.nativeElement.className;
      expect(classesB).toContain('chosen');
      expect(classesB).toContain('btn-info');

      var isDisabled = page.submitBtn.nativeElement.hasAttribute('disabled');
      expect(isDisabled).toBeTruthy();
    })); // end Should choose B bacteria

        it('Should choose K bacteria', fakeAsync(()=>{
      click(page.tubeKBtn);
      tick();
      fixture.detectChanges();
      page.addElements();

      let classesK = page.tubeKBtn.nativeElement.className;
      expect(classesK).toContain('chosen');
      expect(classesK).toContain('btn-danger');

      var isDisabled = page.submitBtn.nativeElement.hasAttribute('disabled');
      expect(isDisabled).toBeTruthy();
    })); // end Should choose K bacteria
  }); // end Test select bacteria*/

    describe('Test add phage to plexer', ()=>{
          beforeEach(fakeAsync(()=>{
      createComponent();
      tick();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync

      it('Should add to column', fakeAsync(()=>{
        let phageToAdd = listOfPhage[0];
        comp.addPhage({data: phageToAdd}, 'col', 0);
        tick();
        fixture.detectChanges();
        page.addElements();

        let lb1 = page.colLabels[0];
        expect(lb1.innerHTML).toTemplateMatch('1');
      })); // end Should add to column

      it('Should add to column', fakeAsync(()=>{
        let phageToAdd = listOfPhage[0];
        comp.addPhage({data: phageToAdd}, 'col', 0);
        tick();
        fixture.detectChanges();
        page.addElements();

        expect(page.colLabels[0].innerHTML).toTemplateMatch('1');
        expect(page.colLabels[1]).toBeNull();
      })); // end Should add to column

      it('Should add to row', fakeAsync(()=>{
        let phageToAdd = listOfPhage[1];
        comp.addPhage({data: phageToAdd}, 'row', 4);
        tick();
        fixture.detectChanges();
        page.addElements();

        expect(page.rowLabels[4].innerHTML).toTemplateMatch('2');
        expect(page.rowLabels[0]).toBeNull();
      })); // end Should add to row

      describe('Test add to both', ()=>{
        beforeEach(fakeAsync(()=>{
          let phageToAdd1 = listOfPhage[0];
          comp.addPhage({data: phageToAdd1}, 'col', 1);
          tick();
          let phageToAdd2 = listOfPhage[1];
          comp.addPhage({data: phageToAdd2}, 'row', 2);
          tick();
          fixture.detectChanges();
          page.addElements();
        })); // end beforeEach fakeAsync

        it('Should have labels correct', ()=>{
          expect(page.colLabels[1].innerHTML).toTemplateMatch('1');
        expect(page.colLabels[0]).toBeNull();
          expect(page.rowLabels[2].innerHTML).toTemplateMatch('2');
        expect(page.rowLabels[0]).toBeNull();
        }); // end should have labels correct

        it('Should not be able to submit', ()=>{
          var isDisabled = page.submitBtn.nativeElement.hasAttribute('disabled');
      expect(isDisabled).toBeTruthy();
        }); // end Should not be able to submit

        it('Should be able to submit after selecting bacteria', fakeAsync(()=>{
          click(page.tubeBBtn);
          tick();
          fixture.detectChanges();
          page.addElements();
           var isDisabled = page.submitBtn.nativeElement.hasAttribute('disabled');
      expect(isDisabled).toBeFalsy();
        })); // end Should be able to submit after selecting bacteria
      }); // end Test add to both
    }); // end Test add phage to plexer

    describe('Test perform plexer', ()=>{
      let phageA0 = listOfPhage[0], // 0
          phageA1 = listOfPhage[1], // 1
          phageA4=listOfPhage[7], // 7
          phageB2=listOfPhage[4], // 5
          phageB3=listOfPhage[6]; // 6
      describe('Plexer 3x2, PERM bact', ()=>{
        // a1, a0, b3 x a4, b3
        beforeEach(fakeAsync(()=>{
          createComponent();
          comp.addPhage({data: phageA1}, 'row', 0);
          tick();
          fixture.detectChanges();
          comp.addPhage({data: phageA0}, 'row', 1);
          tick();
          fixture.detectChanges();
          comp.addPhage({data: phageB3}, 'row', 2);
          tick();
          fixture.detectChanges();
          comp.addPhage({data: phageA4}, 'col', 0);
          tick();
          fixture.detectChanges();
          comp.addPhage({data: phageB3}, 'col', 1);
          tick();
          fixture.detectChanges();
          page.addElements();
          click(page.tubeBBtn);
          tick();
          fixture.detectChanges();
          page.addElements();
          click(page.submitBtn);
          tick();
          fixture.detectChanges();
          page.addElements();
          addMatchers();
        })); // end beforeEach

        it('Should have the correct labels', ()=>{
          //page.colLabels.forEach((el)=>{console.log(el.innerHTML)});
          expect(page.colLabels[0].innerHTML).toTemplateMatch('8');
          expect(page.colLabels[1].innerHTML).toTemplateMatch('7');
          expect(page.colLabels[2]).toBeNull();

          expect(page.rowLabels[0].innerHTML).toTemplateMatch('2');
          expect(page.rowLabels[1].innerHTML).toTemplateMatch('1');
          expect(page.rowLabels[2].innerHTML).toTemplateMatch('7');
          expect(page.rowLabels[3]).toBeNull();
        }); // end should have correct labels

        it('Should have correct row 1 results', ()=>{
          let block00 = page.results[0];
          let res00 = block00.query(By.css('.plexer-td-results')).nativeElement.innerHTML;
          let block01 = page.results[1];
          let res01 = block01.query(By.css('.plexer-td-results')).nativeElement.innerHTML;
          expect(res00).toMatch('Small: 0');
          expect(res00).toMatch('Large: 107');
          expect(res01).toMatch('Small: 54');
          expect(res01).toMatch('Large: 89');
        }); // end Should have correct row 1 results

         it('Should have correct row 2 results', ()=>{
          let block10 = page.results[8];
          let res10 = block10.query(By.css('.plexer-td-results')).nativeElement.innerHTML;
          let block11 = page.results[9];
          let res11 = block11.query(By.css('.plexer-td-results')).nativeElement.innerHTML;
          expect(res10).toMatch('Small: 38');
          expect(res10).toMatch('Large: 76');
          expect(res11).toMatch('Small: 176');
          expect(res11).toMatch('Large: 0');
        }); // end Should have correct row 2 results

        it('Should have correct row 3 results', ()=>{
          let block20 = page.results[16];
          let res20 = block20.query(By.css('.plexer-td-results')).nativeElement.innerHTML;
          let block21 = page.results[17];
          // 21 should be full
          let res21 = block21.query(By.css('div > div')).nativeElement.innerHTML;
          expect(res20).toMatch('Small: 75');
          expect(res20).toMatch('Large: 87');
          expect(res21).toTemplateMatch('Over capacity');
        }); // end Should have correct row 3 results
      }); // end Plexer 3x2, PERM bact

      describe('Plexer 2x3, REST bact', ()=>{
        // a0, a1 x a4, b2, b3
        beforeEach(fakeAsync(()=>{
          createComponent();
          comp.addPhage({data: phageA0}, 'row', 0);
          tick();
          fixture.detectChanges();
          comp.addPhage({data: phageA1}, 'row', 2);
          tick();
          fixture.detectChanges();
          comp.addPhage({data: phageB2}, 'col', 2);
          tick();
          fixture.detectChanges();
          comp.addPhage({data: phageA4}, 'col', 0);
          tick();
          fixture.detectChanges();
          comp.addPhage({data: phageB3}, 'col', 3);
          tick();
          fixture.detectChanges();
          page.addElements();
          click(page.tubeKBtn);
          tick();
          fixture.detectChanges();
          page.addElements();
          click(page.submitBtn);
          tick();
          fixture.detectChanges();
          page.addElements();
          addMatchers();
        })); // end beforeEach

        it('Should have the correct labels', ()=>{
          expect(page.colLabels[0].innerHTML).toTemplateMatch('8');
          expect(page.colLabels[1]).toBeNull();
          expect(page.colLabels[2].innerHTML).toTemplateMatch('6');
          expect(page.colLabels[3].innerHTML).toTemplateMatch('7');
          expect(page.colLabels[4]).toBeNull();

          expect(page.rowLabels[0].innerHTML).toTemplateMatch('1');
          expect(page.rowLabels[1]).toBeNull();
          expect(page.rowLabels[2].innerHTML).toTemplateMatch('2');
          expect(page.rowLabels[3]).toBeNull();
        }); // end should have correct labels

        it('Should have correct row 1 results', ()=>{
          let block00 = page.results[0];
          let res00 = block00.query(By.css('.plexer-td-results')).nativeElement.innerHTML;
          // empty
          let block01 = page.results[1];
          let res01 = block01.children.length;

          let block02 = page.results[2];
          let res02 = block02.query(By.css('.plexer-td-results')).nativeElement.innerHTML;

          // over capacity
          let block03 = page.results[3];
          let res03 = block03.query(By.css('div > div')).nativeElement.innerHTML;

          expect(res00).toMatch('Small: 99');
          expect(res00).toMatch('Large: 0');
          expect(res01).toBe(0); // empty
          expect(res02).toMatch('Small: 54');
          expect(res02).toMatch('Large: 0');
          expect(res03).toTemplateMatch('Over capacity');
        }); // end Should have correct row 1 results

         it('Should have empty row 2', ()=>{
           // row 2 is empty
          let block10 = page.results[8];
          expect(block10.children.length).toBe(0);
           let block11 = page.results[9];
          expect(block11.children.length).toBe(0);
        }); // end Should have correct row 2 results

        it('Should have correct row 3 results', ()=>{
          let block20 = page.results[16];
          let res20 = block20.query(By.css('.plexer-td-results')).nativeElement.innerHTML;

          // empty
          let block21 = page.results[17];
          let res21 = block21.children.length;

          let block22 = page.results[18];
          let res22 = block22.query(By.css('.plexer-td-results')).nativeElement.innerHTML;

          let block23 = page.results[19];
          let res23 = block23.query(By.css('.plexer-td-results')).nativeElement.innerHTML;

          expect(res20).toMatch('Small: 0');
          expect(res20).toMatch('Large: 0');
          expect(res21).toBe(0);
          expect(res22).toMatch('Small: 4');
          expect(res22).toMatch('Large: 0');
          expect(res23).toMatch('Small: 68');
          expect(res23).toMatch('Large: 0');
        }); // end Should have correct row 3 results
      }); // end Plexer 2x3, REST bact
    }); // end Test perform plexer

  describe('Test reset button', ()=>{
    let phageToAdd = listOfPhage[0];

    beforeEach(fakeAsync(()=>{
      createComponent();
      page.addElements();
      // select bacteria
      click(page.tubeBBtn);
      tick();
      fixture.detectChanges();
      // add phage
      comp.addPhage({data: phageToAdd}, 'row', 0);
      tick();
      fixture.detectChanges();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync

    it('Should have data selected', ()=>{
      // bacteria B selected
      let classesB = page.tubeBBtn.nativeElement.className;
      expect(classesB).toContain('chosen');
      expect(classesB).toContain('btn-info');

      // phage in row 1
      expect(page.rowLabels[0].innerHTML).toTemplateMatch('1');
      expect(page.rowLabels[1]).toBeNull();
    }); // end Should have data selected

    it('Should clear table on button click', fakeAsync(()=>{
      click(page.resetBtn);
      tick();
      fixture.detectChanges();
      page.addElements();

      // no bacteria selected
      let classesB = page.tubeBBtn.nativeElement.className;
      expect(classesB).not.toContain('chosen');
      expect(classesB).toContain('btn-outline-info');

       let classesK = page.tubeKBtn.nativeElement.className;
      expect(classesK).not.toContain('chosen');
      expect(classesK).toContain('btn-outline-danger');

      // no phage in table labels
      page.rowLabels.forEach((lb)=>{
         expect(lb).toBeNull();
      });
      expect(page.rowLabels.length).toBe(8);
    })); // end Should clear table on button click
  }); // end Test reset button
}); // end Plexer Room Component

class Page {

  tubeBBtn: DebugElement;
  tubeKBtn: DebugElement;

  resetBtn: DebugElement;
  submitBtn: DebugElement;

  colLabels: HTMLElement[];
  rowLabels: HTMLElement[];

  results: DebugElement[];

  clearAllButton: DebugElement;

  errorMessage: HTMLElement;

  constructor() { }

  addElements() {
    this.tubeBBtn = fixture.debugElement.query(By.css('#tubeB'));
    this.tubeKBtn = fixture.debugElement.query(By.css('#tubeK'));

    let tmpBtns = fixture.debugElement.query(By.css('#reset-submit-btns'))
      .queryAll(By.css('button'));
    this.resetBtn = tmpBtns[0];
    this.submitBtn = tmpBtns[1];

    this.colLabels = fixture.debugElement.query(By.css('.data-table-header'))
      .queryAll(By.css('.plexer-td-label'))
      .map( (lb)=>{
      let t = lb.query(By.css('span'));
      return (t ? t.nativeElement : null)
    });

    this.rowLabels = fixture.debugElement.queryAll(By.css('.data-table-row'))
      .map( (row)=>{
      let lb = row.query(By.css('.plexer-td-label'))
      let t = lb.query(By.css('span'));
      return (t ? t.nativeElement : null)
    });

    this.results = fixture.debugElement.queryAll(By.css('.plexer-td'));

    let tmp = fixture.debugElement.query(By.css('.alert'));
    this.errorMessage = (tmp ? tmp.nativeElement : null);
  }
}

function createComponent() {
  fixture = TestBed.createComponent(PlexerRoomTestComponent);
  comp = fixture.componentInstance;

  page = new Page();
  fixture.detectChanges(); // trigger ngOnInit
}
