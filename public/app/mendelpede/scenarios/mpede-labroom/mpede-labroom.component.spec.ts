import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Directive, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs';
import { Router, RouterStub, ActivatedRoute, ActivatedRouteStub, RouterLinkStubDirective, getAllRouterLinks, recurCSSQuery, click, addMatchers } from '../../../testing';
import * as _ from 'lodash';

import { SharedModule } from '../../../shared/shared.module';
import { MendelpedeLabroomComponent } from './mpede-labroom.component';
import { MendelpedeScenarioService } from '../mendelpede-scenarios.service';
import { AuthenticationService } from '../../../authentication/authentication.service';

import { MendelpedeFridge, MendelpedePede, MendelpedeScenario } from '../../../interfaces';
import { listOfMendelpedes, listOfMendelScenarios } from '../../../testing/mendelpede-sample-data';
import { MendelpedeServiceStub, AuthServiceStub  } from '../../../testing/service-stubs';

class MendelpedeLabRoomTestComponent extends MendelpedeLabroomComponent {
  // so we have access to internal properties
  storePede(pedeToStore: MendelpedePede){
    //console.log("storePede called");
    page.pedeStoreLoc = pedeToStore.bugID;
  }
}

// Testing variables
let fixture: ComponentFixture<MendelpedeLabRoomTestComponent>;
let comp: MendelpedeLabRoomTestComponent;
let activateRoute: ActivatedRouteStub;
let route: RouterStub;
let page: Page;

describe('Mendelpede Lab Room Component', () => {
  beforeEach(async(() => {
    activateRoute = new ActivatedRouteStub();
    route = new RouterStub();
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [MendelpedeLabRoomTestComponent],
      providers: [
        { provide: MendelpedeScenarioService, useClass: MendelpedeServiceStub },
        { provide: AuthenticationService, useClass: AuthServiceStub },
        {provide: ActivatedRoute, useValue: activateRoute},
        {provide: Router, useValue: route},
      ]
    }).compileComponents();
  })); // end beforeEach async
  
  describe('Test initial UI of labroom', () => {
    let malePede: MendelpedePede;
    let femalePede: MendelpedePede;
    let scenario: MendelpedeScenario;
    beforeEach(fakeAsync(() => {
      scenario = listOfMendelScenarios[0];
      malePede = listOfMendelpedes[1];
      femalePede = listOfMendelpedes[0];
      activateRoute.testParams = {scenShortCode: scenario.shortCode};
      createComponent();
      //comp.dropPhageBact({ dragData: dropPhage }, 'B');
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
    })); // end beforeEach fakeAsync

    describe('Test female, male and child pedes', () => {

      it('Should not have error message', ()=>{
        expect(page.errorMessage).toBeNull();
      })

      it('Should have empty male pede', fakeAsync(() => {
        let malePedeBugId = page.malePedeBugId.query(By.css(".row")).query(By.css("#maleBugId"));
        expect(malePedeBugId).toBeNull();
      })); // end Should have empty male pede

      it('Should have empty child pede', fakeAsync(() => {
        let topChildPedeBugId = page.topChildPedeBugId.query(By.css(".row")).query(By.css("#topChildPedeBugId"))
        expect(topChildPedeBugId).toBeNull();
      })); // end Should have empty child pede

      it('Should have empty female pede', fakeAsync(() => {
        let femalePedeBugId = page.femalePedeBugId.query(By.css(".row")).query(By.css("#femalePedeBugId"))
        expect(femalePedeBugId).toBeNull();
      })); // end Should have empty female pede

    }); // end Test add male pede
  }); // end Test initial UI of labroom

  describe('Test drop pede from Fridge', () => {
    let malePede: MendelpedePede;
    let femalePede: MendelpedePede;
    let scenario: MendelpedeScenario;
    beforeEach(fakeAsync(() => {
      scenario = listOfMendelScenarios[0];
      malePede = listOfMendelpedes[1];
      femalePede = listOfMendelpedes[0];
      activateRoute.testParams = {scenShortCode: scenario.shortCode};
      createComponent();
      comp.dropPede(malePede);
      comp.dropPede(femalePede);
      //comp.dropPhageBact({ dragData: dropPhage }, 'B');
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
    })); // end beforeEach fakeAsync

    describe('Test female, male and child pedes', () => {

      it('Should not have error message', ()=>{
        expect(page.errorMessage).toBeNull();
      })

      it('Should have male pede bugId', fakeAsync(() => {
        let malePedeBugId = page.malePedeBugId.query(By.css(".row")).query(By.css("#maleBugId")).nativeElement.innerHTML;
        expect(malePedeBugId).toBe('3');
      })); // Should have male pede bugId

      it('Should have child pede bugId', fakeAsync(() => {
        let topChildPedeBugId = page.topChildPedeBugId.query(By.css(".row")).query(By.css("#topChildPedeBugId")).nativeElement.innerHTML;
        expect(topChildPedeBugId).toBe('#1');
      })); // Should have child pede bugId

      it('Should have female pede bugId', fakeAsync(() => {
        let femalePedeBugId = page.femalePedeBugId.query(By.css(".row")).query(By.css("#femalePedeBugId")).nativeElement.innerHTML;
        expect(femalePedeBugId).toBe('2');
      })); // Should have female pede bugId

    }); // end Test female, male and child pedes
  }); // end Test drop pede from Fridge
  
  describe('Test drop one pede from Fridge', () => {
    let malePede: MendelpedePede;
    let femalePede: MendelpedePede;
    let scenario: MendelpedeScenario;
    beforeEach(fakeAsync(() => {
      scenario = listOfMendelScenarios[0];
      malePede = listOfMendelpedes[1];
      femalePede = listOfMendelpedes[0];
      activateRoute.testParams = {scenShortCode: scenario.shortCode};
      createComponent();
      comp.dropPede(malePede);
      //comp.dropPhageBact({ dragData: dropPhage }, 'B');
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
    })); // end beforeEach fakeAsync
    
    it('Should not have error message', ()=>{
      expect(page.errorMessage).toBeNull();
    })

    it('Should not create children if just one of the female or male pede is dropped', () => {
      let topChildPedeBugId = page.topChildPedeBugId.query(By.css(".row")).query(By.css("#topChildPedeBugId"));
      expect(topChildPedeBugId).toBeNull();
    }); // Should not create children if just one of the female or male pede is dropped
  }); // end Test drop one pede from Fridge
  
  describe('Test clear button', () => {
    let malePede: MendelpedePede;
    let femalePede: MendelpedePede;
    let scenario: MendelpedeScenario;
    beforeEach(fakeAsync(() => {
      scenario = listOfMendelScenarios[0];
      malePede = listOfMendelpedes[1];
      femalePede = listOfMendelpedes[0];
      activateRoute.testParams = {scenShortCode: scenario.shortCode};
      createComponent();
      comp.dropPede(malePede);
      comp.dropPede(femalePede);
      //comp.dropPhageBact({ dragData: dropPhage }, 'B');
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
    })); // end beforeEach fakeAsync

    it('Should have no male pede', fakeAsync(() => {
      click(page.btnClear);
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
      let malePedeBugId = page.malePedeBugId.query(By.css(".row")).query(By.css("#maleBugId"));
      expect(malePedeBugId).toBeNull();
    })); // end Should have no female pede

    it('Should have no female pede', fakeAsync(() => {
      click(page.btnClear);
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
      let femalePedeBugId = page.femalePedeBugId.query(By.css(".row")).query(By.css("#femalePedeBugId"))
      expect(femalePedeBugId).toBeNull();
    })); // end Should have no male pede

    it('Should have no children pedes', fakeAsync(() => {
      click(page.btnClear);
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
      let topChildPedeBugId = page.topChildPedeBugId.query(By.css(".row")).query(By.css("#topChildPedeBugId"));
      expect(topChildPedeBugId).toBeNull();
    })); // end Should have no children pedes

    it('Should have no storage pedes', fakeAsync(() => {
      click(page.btnClear);
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
      let topChildPedeBugId = page.storagePedeBugIds[0].query(By.css(".row")).query(By.css("#topChildPedeBugId"));
      expect(topChildPedeBugId).toBeNull();
    })); // end Should have no storage pedes
  }); // end Test clear button

  describe('Test storage pedes', () => {
    let malePede: MendelpedePede;
    let femalePede: MendelpedePede;
    let scenario: MendelpedeScenario;
    beforeEach(fakeAsync(() => {
      scenario = listOfMendelScenarios[0];
      malePede = listOfMendelpedes[1];
      femalePede = listOfMendelpedes[0];
      activateRoute.testParams = {scenShortCode: scenario.shortCode};
      createComponent();
      comp.dropPede(malePede);
      comp.dropPede(femalePede);
      //comp.dropPhageBact({ dragData: dropPhage }, 'B');
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
    })); // end beforeEach fakeAsync
    
    it('Should click and add pede to storage', fakeAsync(() => {
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
      let storagePedeBugId = page.storagePedeBugIds[0].query(By.css(".row")).query(By.css("#storageBugId"));
      expect(storagePedeBugId).toBeNull();
    })); // end Should click and add pede to storage

    it('Should click and add pede to storage row 1 column 1', fakeAsync(() => {
      //comp.dropPedeToStorage(0);
      click(page.storagePedeBugIds[0]);
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
      let storagePedeBugId = page.storagePedeBugIds[0].query(By.css(".row")).query(By.css("#storageBugId")).nativeElement.innerHTML;
      expect(storagePedeBugId).toBe('#1');
    })); // end Should click and add pede to storage

    it('Should click and add pede to storage row 1 column 3', fakeAsync(() => {
      //comp.dropPedeToStorage(3);
      click(page.storagePedeBugIds[3]);
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
      let storagePedeBugId = page.storagePedeBugIds[3].query(By.css(".row")).query(By.css("#storageBugId")).nativeElement.innerHTML;
      expect(storagePedeBugId).toBe('#1');
    })); // end Should click and add pede to storage

    it('Should click and add pede to storage row 2 column 2', fakeAsync(() => {
      //comp.dropPedeToStorage(5);
      click(page.storagePedeBugIds[5]);
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
      let storagePedeBugId = page.storagePedeBugIds[5].query(By.css(".row")).query(By.css("#storageBugId")).nativeElement.innerHTML;
      expect(storagePedeBugId).toBe('#1');
    })); // end Should click and add pede to storage

    it('Should remove pede from child pedes when stored', fakeAsync(() => {
      //comp.dropPedeToStorage(5);
      click(page.storagePedeBugIds[5]);
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
      let topChildPedeBugId = page.topChildPedeBugId.query(By.css(".row")).query(By.css("#topChildPedeBugId")).nativeElement.innerHTML;
      expect(topChildPedeBugId).toBe('#2');
    })); // end Should remove pede from child pedes when stored
  }); // end Test storage pedes

  describe('Test Undo button', () => {
    let malePede: MendelpedePede;
    let femalePede: MendelpedePede;
    let scenario: MendelpedeScenario;
    beforeEach(fakeAsync(() => {
      scenario = listOfMendelScenarios[0];
      malePede = listOfMendelpedes[1];
      femalePede = listOfMendelpedes[0];
      activateRoute.testParams = {scenShortCode: scenario.shortCode};
      createComponent();
      comp.dropPede(malePede);
      comp.dropPede(femalePede);
      comp.dropPedeToStorage(5);
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
    })); // end beforeEach fakeAsync

    it('should check for dropPede', () => {
      let storagePedeBugId = page.storagePedeBugIds[5].query(By.css(".row")).query(By.css("#storageBugId")).nativeElement.innerHTML;
      let topChildPedeBugId = page.topChildPedeBugId.query(By.css(".row")).query(By.css("#topChildPedeBugId")).nativeElement.innerHTML;
      expect(topChildPedeBugId).toBe('#2');
      expect(storagePedeBugId).toBe('#1');
    }); // end should undo by removing pede from storage

    it('should undo by removing pede from storage', fakeAsync(() => {
      click(page.btnUndo);
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
      let topChildPedeBugId = page.topChildPedeBugId.query(By.css(".row")).query(By.css("#topChildPedeBugId")).nativeElement.innerHTML;
      let storagePedeBugId = page.storagePedeBugIds[5].query(By.css(".row")).query(By.css("#storageBugId"));
      expect(topChildPedeBugId).toBe('#1');
      expect(storagePedeBugId).toBeNull();
    })); // end should undo by removing pede from storage
  }); // end Test Undo button

  describe('Test css class for mendelpede image', () => {
    let malePede: MendelpedePede;
    let femalePede: MendelpedePede;
    let scenario: MendelpedeScenario;
    beforeEach(fakeAsync(() => {
      scenario = listOfMendelScenarios[0];
      malePede = listOfMendelpedes[1];
      femalePede = listOfMendelpedes[0];
      createComponent();
      activateRoute.testParams = {scenShortCode: scenario.shortCode};
      //comp.dropPhageBact({ dragData: dropPhage }, 'B');
      tick();
      fixture.detectChanges();
      //page.addElements();
      //addMatchers();
      comp.dropPede(malePede);
      comp.dropPede(femalePede);
    })); // end beforeEach fakeAsync
    it('should have correct css class', () => {
      expect(comp.getMendelpede([ "Yellow", "Red", "LightGreen", "2", "1" ])).not.toBeNull();
    }); //end should have correct css class
  }); // end Test css class for mendelpede image

  describe('Test store button for mendelpede labroom', () => {
    let malePede: MendelpedePede;
    let femalePede: MendelpedePede;
    let scenario: MendelpedeScenario;
    beforeEach(fakeAsync(() => {
      scenario = listOfMendelScenarios[0];
      malePede = listOfMendelpedes[1];
      femalePede = listOfMendelpedes[0];
      createComponent();
      comp.dropPedeToStorage(0);
      activateRoute.testParams = {scenShortCode: scenario.shortCode};
      //comp.dropPhageBact({ dragData: dropPhage }, 'B');
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
      //page.addElements();
      //addMatchers();
      comp.dropPede(malePede);
      comp.dropPede(femalePede);
    })); // end beforeEach fakeAsync

    it('Should click store button', fakeAsync(() => {
      //comp.dropPedeToStorage(0);
      click(page.btnStore0);
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
      //let storagePedeBugId = page.storagePedeBugIds[0].query(By.css(".row")).query(By.css("#storageBugId")).nativeElement.innerHTML;
      expect(page.pedeStoreLoc).toBe(0);

    })); // end Should click and add pede to storage
  }); // end Test store button for mendelpede labroom

}); // end Mendelpede Lab Room Component

class Page {
  // variables
  //practice: HTMLElement;
  storagePedeBugIds: DebugElement[];
  btnClear: DebugElement;
  btnUndo: DebugElement;
  btnStore0: DebugElement;
  btnStore1: DebugElement;
  btnStore2: DebugElement;
  btnStore3: DebugElement;
  btnStore4: DebugElement;
  btnStore5: DebugElement;
  btnStore6: DebugElement;
  btnStore7: DebugElement;
  errorMessage: HTMLElement;
  pedeStoreLoc: any;

  malePedeBugId: DebugElement;
  topChildPedeBugId: DebugElement;
  femalePedeBugId: DebugElement;

  constructor(){
    let scenService = fixture.debugElement.injector.get(MendelpedeScenarioService);
    //this.createFridgeSpy = spyOn(scenService, 'createMendelFridge').and.callThrough();
  }

  addElements(){
    //let header = fixture.debugElement.query(By.css('.card-header')).query(By.css('.card-title'));
    //this.practice = (header ? header.nativeElement : null);
    this.malePedeBugId = fixture.debugElement.query(By.css('#cross-male'));
    this.topChildPedeBugId = fixture.debugElement.query(By.css('#cross-progeny'));
    this.storagePedeBugIds = fixture.debugElement.queryAll(By.css('#storagePedes')); 
    this.femalePedeBugId = fixture.debugElement.query(By.css('#cross-female'));
    let btns = fixture.debugElement.queryAll(By.css('button'));
    let tmp = fixture.debugElement.query(By.css('.alert'));
    this.btnClear = btns[0];
    this.btnUndo = btns[1];
    this.btnStore0 = btns[2];
    this.btnStore1 = btns[3];
    this.btnStore2 = btns[4];
    this.btnStore3 = btns[5];
    this.btnStore4 = btns[6];
    this.btnStore5 = btns[7];
    this.btnStore6 = btns[8];
    this.btnStore7 = btns[9];
    this.errorMessage = (tmp ? tmp.nativeElement : null);
  }
}

function createComponent() {
  fixture = TestBed.createComponent(MendelpedeLabRoomTestComponent);
  comp = fixture.componentInstance;
  page = new Page();
  fixture.detectChanges(); // trigger ngOnInit
}
