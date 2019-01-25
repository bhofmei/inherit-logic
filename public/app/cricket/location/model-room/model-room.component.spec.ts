import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Directive, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { Router, RouterStub, ActivatedRoute, ActivatedRouteStub, RouterLinkStubDirective, getAllRouterLinks, recurCSSQuery, click, addMatchers } from '../../../testing';
import * as _ from 'lodash';

import { SharedModule } from '../../../shared/shared.module';
import { ModelRoomComponent } from './model-room.component';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { CricketService } from '../../cricket.service';

//import { Fridge, FridgePhage, User, Scenario, GenotypePhage } from '../../interfaces';
import { guesses, listOfScenarios } from '../../../testing/sample-data';
import { AuthServiceStub, CricketServiceStub } from '../../../testing/service-stubs';

class ModelRoomTestComponent extends ModelRoomComponent {
  // can use private things if necessary
}

let fixture: ComponentFixture<ModelRoomTestComponent>;
let comp: ModelRoomTestComponent;
let page: Page;
let scenarioService: CricketService;
let activateRoute: ActivatedRouteStub;
let router: RouterStub;

describe('Model Room Component', ()=>{
  beforeEach(async(()=>{
    activateRoute = new ActivatedRouteStub();
    activateRoute.parent = new ActivatedRouteStub();
    router = new RouterStub();
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ModelRoomTestComponent],
      providers: [
        {provide: AuthenticationService, useClass: AuthServiceStub},
        {provide: CricketService, useClass: CricketServiceStub},
        {provide: Router, useValue: router},
        {provide: ActivatedRoute, useValue: activateRoute}
      ]
    }).compileComponents();
  })); // end beforeEach async

  describe('Test scenario 1', ()=>{
    let scenario = listOfScenarios[0].scenCode;
    beforeEach(fakeAsync(()=>{
      activateRoute.parent.testParams = {scenId: scenario};
      createComponent(scenario);
      tick();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync

    it('Should have invisible error message', ()=>{
      let cList = page.errorMessage.className;
      expect(cList).toContain('invisible');
    }); // end Should have invisible error message

    it('Should have correct row labels', ()=>{
      expect(page.strainLabels.length).toBe(2);
      let s1 = page.strainLabels[0].innerHTML;
      expect(s1).toTemplateMatch('1');
      let s2 = page.strainLabels[1].innerHTML;
      expect(s2).toTemplateMatch('2');
    }); // end Should have correct row labels

    it('Should have correct block classes, row 1', ()=>{
      // row 1, check blocks 0, 5, 8, 12
      let expClasses = ['btn-outline-secondary', 'bg-dark', 'bg-dark', 'btn-outline-secondary'];
      let checkBlocks = [page.row1Blocks[0], page.row1Blocks[5], page.row1Blocks[8], page.row1Blocks[12]];
      checkBlocks.forEach((bl, i)=>{
        expect(bl.nativeElement.className).toContain(expClasses[i]);
      });
    }); // end Should have correct block classes, row 1

    it('Should have correct block classes, row 2', ()=>{
      // row 1, check blocks 0, 20, 25, 31, 34
      let expClasses = ['btn-outline-secondary', 'btn-outline-secondary', 'bg-dark', 'bg-dark', 'btn-outline-secondary'];
      let checkBlocks = [page.row2Blocks[0], page.row2Blocks[20], page.row2Blocks[25], page.row2Blocks[31], page.row2Blocks[34]];
      checkBlocks.forEach((bl, i)=>{
        expect(bl.nativeElement.className).toContain(expClasses[i]);
      });
    }); // end Should have correct block classes, row 2

    it('Should change class on block click', fakeAsync(()=>{
      // click row 1, button 4
      expect(page.row1Blocks[4].nativeElement.className)
        .not.toContain('bg-dark');
      click(page.row1Blocks[4]);
      tick();
      fixture.detectChanges();
      page.addElements();
      let c = page.row1Blocks[4].nativeElement.className;
      expect(c).toContain('bg-dark')
    })); // end Should change class on block click

    it('Should have save on button click', fakeAsync(()=>{
      click(page.row2Blocks[2]);
      tick();
      fixture.detectChanges();
      click(page.saveBtn);
      tick();
      fixture.detectChanges();
      page.addElements();
      let wasCalled = page.saveDelSpy.calls.any();
      expect(wasCalled).toBeTruthy();
      let c = page.row2Blocks[2].nativeElement.className;
      expect(c).toContain('bg-dark')
    })); // end Should have save on button click
  }); // end Test scenario 1

  describe('Test scenario 3 - error saving', ()=>{
    let scenario = 'test3';
    beforeEach(fakeAsync(()=>{
      activateRoute.parent.testParams = {scenId: scenario};
      createComponent(scenario);
      tick();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync

    it('Should have one row of buttons', ()=>{
      expect(page.strainLabels.length).toBe(1);
      expect(page.row1Blocks).not.toBeNull();
      expect(page.row2Blocks).toBeNull();
    }); // end Should have one row of buttons

    it('Should have error on button click', fakeAsync(()=>{
      click(page.row1Blocks[0]);
      tick();
      fixture.detectChanges();
      click(page.saveBtn);
      tick();
      fixture.detectChanges();
      page.addElements();
      let wasCalled = page.saveDelSpy.calls.any();
      expect(wasCalled).toBeTruthy();
      let eMessage = page.errorMessage.innerHTML;
      expect(eMessage).toTemplateMatch('Error saving deletions');
    })); // end Should have save on button click
  }); // end Test scenario 3 - error saving

  describe('Test scenario 4 - no phage for guessing', ()=>{
     let scenario = 'test4';
    beforeEach(fakeAsync(()=>{
      activateRoute.parent.testParams = {scenId: scenario};
      createComponent(scenario);
      tick();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync

    it('Should have error message', ()=>{
      let eMessage = page.errorMessage.innerHTML;
      expect(eMessage).toTemplateMatch('No phage available for modelling');
    }); // end Should have error message

    it('Should have no phage', ()=>{
      expect(page.strainLabels.length).toBe(0);
      expect(page.row1Blocks).toBeNull();
      expect(page.row2Blocks).toBeNull();
    }); // end Should have no phage
  }); // end Test scenario 4 - no phage for guessing
}); // end Model Room Component

class Page {
  saveBtn: DebugElement;
  strainLabels: HTMLElement[];
  row1Blocks: DebugElement[];
  row2Blocks: DebugElement[];
  errorMessage: HTMLElement;

  saveDelSpy: any;

  constructor(){
    let scenService = fixture.debugElement.injector.get(CricketService);
    this.saveDelSpy = spyOn(scenService, 'saveDeletions').and.callThrough();
  }

  addElements(){
    let de = fixture.debugElement;
    if(de){
    this.saveBtn = de.query(By.css('button'));

    let l = de.query(By.css('#modeller'))
    this.strainLabels = ( l ?
      l.queryAll(By.css('div.row.text-secondary'))
      .map((el)=>{return el.nativeElement}) : [] )
    let rows = de.queryAll(By.css('.phage-delete-row'));

    this.row1Blocks = ( rows.length > 0 ? rows[0].queryAll(By.css('div')): null );
    this.row2Blocks = ( rows.length > 1 ? rows[1].queryAll(By.css('div')) : null );

    let tmp = fixture.debugElement.query(By.css('.alert'));
    this.errorMessage = (tmp ? tmp.nativeElement : null);
    }
  }
}

function createComponent(scenId: string){
    fixture = TestBed.createComponent(ModelRoomTestComponent);
  comp = fixture.componentInstance;
  scenarioService = TestBed.get(CricketService);
  let s = guesses[scenId];
  if(s){
    scenarioService.getGuesses = Observable.of(s);
  } else {
      scenarioService.getGuesses = Observable.of({});
    //scenarioService.setScenario('', '{}');
  }

  page = new Page();
  fixture.detectChanges(); // trigger ngOnInit
}
