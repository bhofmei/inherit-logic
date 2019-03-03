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
}

// Testing variables
let fixture: ComponentFixture<MendelpedeLabRoomTestComponent>;
let comp: MendelpedeLabRoomTestComponent;
let activateRoute: ActivatedRouteStub;
let route: RouterStub;


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
  
  describe('Test drop pede from Fridge', () => {
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
      //addMatchers();*/
      comp.dropPede(malePede);
      comp.dropPede(femalePede);
    })); // end beforeEach fakeAsync

    describe('Test add male pede', () => {

      it('Should have male pede', () => {
        expect(comp.malePede.isFemale).toBe('M');
      }); // end Should have male pede

    }); // end Test add male pede
    describe('Test add female pede', () => {

      it('Should have female pede', () => {
        expect(comp.femalePede.isFemale).toBe('F');
      }); // end Should have female pede
    
    }); // end Test add female pede
    describe('Test check for 20 children', () => {

      it('Should create 20 children pedes', () => {
        expect(comp.childPedes[0].genotype).not.toBeNull();
      }); // end create Should 20 children pedes
    
    }); // end Test check for 20 children
  }); // end Test drop pede from Fridge
  
  describe('Test drop one pede from Fridge', () => {
    let malePede: MendelpedePede;
    let scenario: MendelpedeScenario;
    beforeEach(fakeAsync(() => {
      scenario = listOfMendelScenarios[0];
      malePede = listOfMendelpedes[1];
      createComponent();
      activateRoute.testParams = {scenShortCode: scenario.shortCode};
      //comp.dropPhageBact({ dragData: dropPhage }, 'B');
      tick();
      fixture.detectChanges();
      //page.addElements();
      //addMatchers();*/
      comp.dropPede(malePede);
    })); // end beforeEach fakeAsync
    it('Should not create children if just one of the female or male pede is dropped', () => {
      expect(comp.childPedes[0].genotype).toBeNull();
    }); // Should not create children if just one of the female or male pede is dropped
  }); // end Test drop one pede from Fridge
  
  describe('Test storage pedes', () => {
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
      //addMatchers();*/
      comp.dropPede(malePede);
      comp.dropPede(femalePede);
    })); // end beforeEach fakeAsync
    
    describe('Test empty storage pedes', () => {
      it('Should have empty storage pedes', () => {
        expect(comp.storablePedes[0][0][0].genotype).toBeNull();
      }); // end Should have empty storage pedes
    }); // end Test empty storage pedes

    describe('Test drop pede to storage', () => {
      it('Should drop pede to row 1 column 3', () => {
        comp.dropPedeToStorage(3);
        expect(comp.storablePedes[0][3][1].genotype).not.toBeNull();
      }); // end Should drop pede to row 1 column 3
      
      it('Should drop pede to row 2 column 2', () => {
        comp.dropPedeToStorage(5);
        expect(comp.storablePedes[1][1][1].genotype).not.toBeNull();
      }); // end Should drop pede to row 2 column 2
      
      it('Should drop pede to row 2 column 4', () => {
        comp.dropPedeToStorage(7);
        expect(comp.storablePedes[1][3][1].genotype).not.toBeNull();
      }); // end Should drop pede to row 2 column 4

      it('Should remove pede from child pedes when stored', () => {
        comp.dropPedeToStorage(3);
        expect(comp.childPedes.length).toBe(19);
      }); // end Should remove pede from child pedes when stored

      it('Should create new children when chilpedes are empty', () => {
        comp.dropPedeToStorage(2);
        comp.dropPedeToStorage(2);
        comp.dropPedeToStorage(2);
        comp.dropPedeToStorage(2);
        comp.dropPedeToStorage(2);
        comp.dropPedeToStorage(2);
        comp.dropPedeToStorage(2);
        comp.dropPedeToStorage(2);
        comp.dropPedeToStorage(2);
        comp.dropPedeToStorage(2);
        comp.dropPedeToStorage(2);
        comp.dropPedeToStorage(2);
        comp.dropPedeToStorage(2);
        comp.dropPedeToStorage(2);
        comp.dropPedeToStorage(2);
        comp.dropPedeToStorage(2);
        comp.dropPedeToStorage(2);
        comp.dropPedeToStorage(2);
        comp.dropPedeToStorage(2);
        comp.dropPedeToStorage(2);
        expect(comp.childPedes.length).toBe(21);
      }); // end Should create new children when chilpedes are empty
    }); // end Test drop pede to storage
  }); // end Test storage pedes
  describe('Test Undo button', () => {

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
      //addMatchers();*/
      comp.dropPede(malePede);
      comp.dropPede(femalePede);
    })); // end beforeEach fakeAsync

    it('should undo by removing pede from storage', () => {
    comp.dropPedeToStorage(2);
    comp.dropPedeToStorage(3);
    comp.dropPedeToStorage(5);
    comp.undoPede();
    expect(comp.storablePedes[1][1].length).toBe(1);
    }); // end should undo by removing pede from storage

    it('Should undo and add pede from storage pedes to child pedes', () => {
    comp.dropPedeToStorage(2);
    comp.dropPedeToStorage(3);
    comp.undoPede();
    expect(comp.childPedes.length).toBe(19);
    }); // end Should undo and add pede from storage pedes to child pedes
  }); // end Test Undo button

  describe('Test clear button', () => {
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
      //addMatchers();*/
      comp.dropPede(malePede);
      comp.dropPede(femalePede);
    })); // end beforeEach fakeAsync

    it('Should have no female pede', () => {
      comp.dropPedeToStorage(2);
      comp.dropPedeToStorage(3);
      comp.dropPedeToStorage(5);
      comp.clearAll();
      expect(comp.femalePede.genotype).toBeNull();
    }); // end Should have no female pede

    it('Should have no male pede', () => {
      comp.dropPedeToStorage(2);
      comp.dropPedeToStorage(3);
      comp.dropPedeToStorage(5);
      comp.clearAll();
      expect(comp.malePede.genotype).toBeNull();
    }); // end Should have no male pede

    it('Should have no children pedes', () => {
      comp.dropPedeToStorage(2);
      comp.dropPedeToStorage(3);
      comp.dropPedeToStorage(5);
      comp.clearAll();
      expect(comp.childPedes[0].genotype).toBeNull();
    }); // end Should have no children pedes

    it('Should have no storage pedes', () => {
      comp.dropPedeToStorage(2);
      comp.dropPedeToStorage(3);
      comp.dropPedeToStorage(5);
      comp.clearAll();
      expect(comp.storablePedes[0][2].length).toBe(1);
    }); // end Should have no storage pedes
  }); // end Test clear button

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
  /*
  describe('Check keybord events', () => {
    let malePede: MendelpedePede;
    let femalePede: MendelpedePede;
    let scenario: MendelpedeScenario;
    beforeEach(fakeAsync(() => {
      scenario = listOfScenarios[0];
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

    describe('keycode is > 48 and < 57', () => {
      it('should drop pede to storage', () => {
        comp.keyEvent({keyCode: 50})
      }); // end should drop pede to storage
    }); // end keycode is > 48 and < 57
  }); // end Check keybord events*/
}); // end Mendelpede Lab Room Component

function createComponent() {
  fixture = TestBed.createComponent(MendelpedeLabRoomTestComponent);
  comp = fixture.componentInstance;
  fixture.detectChanges(); // trigger ngOnInit
}
