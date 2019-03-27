import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Directive, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs';
import { Router, RouterStub, ActivatedRoute, ActivatedRouteStub, RouterLinkStubDirective, getAllRouterLinks, recurCSSQuery, click, addMatchers } from '../../../testing';
import * as _ from 'lodash';

import { SharedModule } from '../../../shared/shared.module';
import { MendelpedeFridgeComponent } from './mpede-fridge.component';
import { MendelpedeScenarioService } from '../mendelpede-scenarios.service';
import { AuthenticationService } from '../../../authentication/authentication.service';

import { MendelpedeFridge, MendelpedePede, MendelpedeScenario } from '../../../interfaces';
import { listOfMendelpedes, listOfMendelScenarios } from '../../../testing/mendelpede-sample-data';
import { MendelpedeServiceStub, AuthServiceStub  } from '../../../testing/service-stubs';

class MendelpedeFridgeTestComponent extends MendelpedeFridgeComponent {
  // so we have access to internal properties
  sendPede(pede: MendelpedePede){
    //console.log("pede sent");
    page.sendPedeClicked = true;
  }
}

// Testing variables
let fixture: ComponentFixture<MendelpedeFridgeTestComponent>;
let comp: MendelpedeFridgeTestComponent;
let activateRoute: ActivatedRouteStub;
let route: RouterStub;
let page: Page;


describe('Mendelpede Fridge Component', () => {
  beforeEach(async(() => {
    activateRoute = new ActivatedRouteStub();
    route = new RouterStub();
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [MendelpedeFridgeTestComponent],
      providers: [
        { provide: MendelpedeScenarioService, useClass: MendelpedeServiceStub },
        { provide: AuthenticationService, useClass: AuthServiceStub },
        {provide: ActivatedRoute, useValue: activateRoute},
        {provide: Router, useValue: route},
      ]
    }).compileComponents();
  })); // end beforeEach async
  
  describe('Test Fridge initial UI', () => {
    let scenario: MendelpedeScenario;
    
    beforeEach(fakeAsync(() => {
      scenario = listOfMendelScenarios[0];
      activateRoute.testParams = {scenShortCode: scenario.shortCode};
      createComponent();
      //comp.dropPhageBact({ dragData: dropPhage }, 'B');
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
    })); // end beforeEach fakeAsync

    it('should have 6 mendelpedes test1', () => {
      //expect(comp.pedeList[5].genotype).not.toBeNull();
      expect(page.pedes.length).toBe(6);
    }) // end should have 6 mendelpedes test1

    it('Should have 256 spaces in Fridge', () => {
      expect(comp.pedeList.length).toBe(256);
    })// end Should have 256 spaces

    it('Should have 8 places in shelf', () => {
      expect(page.fridgeShelf.length * 2).toBe(8);
    })// Should have 8 places in shelf

    it('Should have first shelf displayed', () => {
      expect(comp.shelf).toBe(0);
    })// end Should have first shelf displayed

    it('Should not have error message', ()=>{
      expect(page.errorMessage).toBeNull();
    })

  }); // end Test Fridge initial UI
  describe('Test Fridge initial UI (Quiz)', () => {
    let scenario: MendelpedeScenario;
    
    beforeEach(fakeAsync(() => {
      scenario = listOfMendelScenarios[2];
      activateRoute.testParams = {scenShortCode: scenario.shortCode};
      createComponent();
      //comp.dropPhageBact({ dragData: dropPhage }, 'B');
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
    })); // end beforeEach fakeAsync

    it('should have 8 mendelpedes test1', () => {
      expect(page.pedes.length).toBe(8);
    }) // end should have 8 mendelpedes test1
    
    it('should have 8 mendelpedes test2', () => {
      expect(comp.pedeList[8].genotype).toBeNull();
    }) // should have 8 mendelpedes test2

    it('Should have 8 places in shelf', () => {
      expect(page.fridgeShelf.length * 2).toBe(8);
    })// Should have 8 places in shelf

    it('Should not have error message', ()=>{
      expect(page.errorMessage).toBeNull();
    })
  }); // end Test Fridge initial UI (Quiz)

  describe('Test changing shelves', ()=>{
    beforeEach(fakeAsync(()=>{
      let scenario: MendelpedeScenario;

      scenario = listOfMendelScenarios[2];
      activateRoute.testParams = {scenShortCode: scenario.shortCode};
      createComponent();
      comp.setShelf(3);
      //comp.dropPhageBact({ dragData: dropPhage }, 'B');
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
    })); // end beforeEach fakeAsync

    it('Should not have error message', ()=>{
      expect(page.errorMessage).toBeNull();
    })

    it('shelf should be 3 at starting', ()=>{
      expect(comp.shelf).toBe(3);
    })

    it('Should go forward a shelf', fakeAsync(()=>{
      click(page.btnForward);
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
      // comp shelf should be changed to 1
      expect(comp.shelf).toBe(4);
    })); // end Should go forward a shelf

    it('Should go to first shelf', fakeAsync(()=>{
      click(page.btnFirst);
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
      // go to first shelf
      expect(comp.shelf).toBe(0);
      // back buttons should be disabled
      let firstDisabled = page.btnFirst.nativeElement.hasAttribute('disabled');
      let backDisabled = page.btnBackward.nativeElement.hasAttribute('disabled');
      let forDisabled = page.btnForward.nativeElement.hasAttribute('disabled');
      expect(firstDisabled).toBe(true);
      expect(backDisabled).toBe(true);
      expect(forDisabled).toBe(false);
    })); // end Should go to first shelf

    it('Should go to last shelf', fakeAsync(()=>{
      click(page.btnLast);
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
      // first phage should be #496(+1)
      expect(comp.shelf).toBe(31);
      // forward buttons should be disabled
      let backDisabled = page.btnBackward.nativeElement.hasAttribute('disabled');
      let forDisabled = page.btnForward.nativeElement.hasAttribute('disabled');
      let lastDisabled = page.btnLast.nativeElement.hasAttribute('disabled');
      expect(backDisabled).toBe(false);
      expect(forDisabled).toBe(true);
      expect(lastDisabled).toBe(true);
    })); // end Should go to last shelf

    it('Should go back a shelf', fakeAsync(()=>{
      click(page.btnBackward);
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
      // comp shelf should be changed to 30
      expect(comp.shelf).toBe(2);
    })); // end Should go back a shelf

  }); // end Test student1 scenario1

  describe('Test send pede (Click on mendelpede)', () => {
    let scenario: MendelpedeScenario;
    
    beforeEach(fakeAsync(() => {
      scenario = listOfMendelScenarios[0];
      activateRoute.testParams = {scenShortCode: scenario.shortCode};
      createComponent();
      //comp.dropPhageBact({ dragData: dropPhage }, 'B');
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
    })); // end beforeEach fakeAsync

    it('should click on pede', fakeAsync(() => {
      //comp.storePede(listOfMendelpedes[11]);
      click(page.pedes[2]);
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
      expect(page.sendPedeClicked).toBe(true);
    })); // end should click on pede

  }); // end Test send pede (Click on mendelpede)
  
  describe('Test store pede', () => {
    let scenario: MendelpedeScenario;
    
    beforeEach(fakeAsync(() => {
      scenario = listOfMendelScenarios[0];
      activateRoute.testParams = {scenShortCode: scenario.shortCode};
      createComponent();
      //comp.dropPhageBact({ dragData: dropPhage }, 'B');
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
    })); // end beforeEach fakeAsync

    it('should store pede in fridge', fakeAsync(() => {
      comp.storePede(listOfMendelpedes[11]);
      expect(comp.pedeList[6].phenotype).not.toBeNull();
    })); // end should store pede in fridge

  }); // end Test store pede

  describe('Test delete pede', () => {
    let scenario: MendelpedeScenario;
    
    beforeEach(fakeAsync(() => {
      scenario = listOfMendelScenarios[0];
      activateRoute.testParams = {scenShortCode: scenario.shortCode};
      createComponent();
      //comp.dropPhageBact({ dragData: dropPhage }, 'B');
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
    })); // end beforeEach fakeAsync

    it('should delete stored pede', () => {
      comp.storePede(listOfMendelpedes[11]);
      comp.deletePede(comp.pedeList[6]);
      expect(comp.pedeList[6].phenotype).toBeNull();
    }); // end should delete stored pede
    
    it('should delete stored pede at the location only', () => {
      comp.storePede(listOfMendelpedes[11]);
      comp.storePede(listOfMendelpedes[14]);
      comp.deletePede(comp.pedeList[6]);
      expect(comp.pedeList[7].phenotype).toBeNull();
      expect(comp.pedeList[6].phenotype).not.toBeNull();
    }); // end should delete stored pede at the location only

  }); // end Test delete pede

  describe('Test css class for mendelpede image', () => {
    let scenario: MendelpedeScenario;
    
    beforeEach(fakeAsync(() => {
      scenario = listOfMendelScenarios[0];
      activateRoute.testParams = {scenShortCode: scenario.shortCode};
      createComponent();
      //comp.dropPhageBact({ dragData: dropPhage }, 'B');
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
    })); // end beforeEach fakeAsync
    it('should have correct css class', () => {
      expect(comp.getMendelpede([ "Yellow", "Red", "LightGreen", "2", "1" ])).not.toBeNull();
    }); //end should have correct css class
  }); // end Test css class for mendelpede image
}); // end Mendelpede Fridge Component

class Page {
  // variables
  //practice: HTMLElement;
  pedes: DebugElement[];
  btnFirst: DebugElement;
  btnBackward: DebugElement;
  btnForward: DebugElement;
  btnLast: DebugElement;
  fridgeShelf: DebugElement[];
  pedesWithBugIds: DebugElement[];
  deleteMpedes: DebugElement[];

  sendPedeClicked: boolean = false;

  errorMessage: HTMLElement;

  createFridgeSpy: any;

  constructor(){
    let scenService = fixture.debugElement.injector.get(MendelpedeScenarioService);
    //this.createFridgeSpy = spyOn(scenService, 'createMendelFridge').and.callThrough();
  }

  addElements(){
    if(comp.fridge){
      let header = fixture.debugElement.query(By.css('.card-header')).query(By.css('.card-title'));
      //this.practice = (header ? header.nativeElement : null);
      this.pedes = fixture.debugElement.queryAll(By.css('#fridge-pedes'));
      this.fridgeShelf = fixture.debugElement.queryAll(By.css('#fridge-shelf'));
      this.pedesWithBugIds = fixture.debugElement.queryAll(By.css('#bugId'));
      this.deleteMpedes = fixture.debugElement.queryAll(By.css('#deleteMpede'));
      let btns = fixture.debugElement.queryAll(By.css('button'));
      this.btnFirst = btns[0];
      this.btnBackward = btns[1];
      this.btnForward = btns[2];
      this.btnLast = btns[3];
    }

    let tmp = fixture.debugElement.query(By.css('.alert'));
    this.errorMessage = (tmp ? tmp.nativeElement : null);
  }
}

function createComponent() {
  fixture = TestBed.createComponent(MendelpedeFridgeTestComponent);
  comp = fixture.componentInstance;
  page = new Page();
  fixture.detectChanges(); // trigger ngOnInit
}
