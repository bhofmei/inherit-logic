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
}

// Testing variables
let fixture: ComponentFixture<MendelpedeFridgeTestComponent>;
let comp: MendelpedeFridgeTestComponent;
let activateRoute: ActivatedRouteStub;
let route: RouterStub;


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
      fixture.detectChanges();
    })); // end beforeEach fakeAsync

    it('should have 6 mendelpedes test1', () => {
      expect(comp.pedeList[5].genotype).not.toBeNull();
    }) // end should have 6 mendelpedes test1
    
    it('should have 6 mendelpedes test2', () => {
      expect(comp.pedeList[6].genotype).toBeNull();
    }) // should have 6 mendelpedes test2

    it('Should have 256 spaces in Fridge', () => {
      expect(comp.pedeList.length).toBe(256);
    })// end Should have 256 spaces

    it('Should have first shelf displayed', () => {
      expect(comp.shelf).toBe(0);
    })// end Should have first shelf displayed

  }); // end Test Fridge initial UI

  describe('Test Fridge initial UI (Quiz)', () => {
    let scenario: MendelpedeScenario;
    
    beforeEach(fakeAsync(() => {
      scenario = listOfMendelScenarios[2];
      activateRoute.testParams = {scenShortCode: scenario.shortCode};
      createComponent();
      //comp.dropPhageBact({ dragData: dropPhage }, 'B');
      tick();
      fixture.detectChanges();
    })); // end beforeEach fakeAsync

    it('should have 8 mendelpedes test1', () => {
      expect(comp.pedeList[7].genotype).not.toBeNull();
    }) // end should have 8 mendelpedes test1
    
    it('should have 8 mendelpedes test2', () => {
      expect(comp.pedeList[8].genotype).toBeNull();
    }) // should have 8 mendelpedes test2
  }); // end Test Fridge initial UI (Quiz)

  describe('Test Changing shelf', () => {
    let scenario: MendelpedeScenario;
    
    beforeEach(fakeAsync(() => {
      scenario = listOfMendelScenarios[0];
      activateRoute.testParams = {scenShortCode: scenario.shortCode};
      createComponent();
      //comp.dropPhageBact({ dragData: dropPhage }, 'B');
      tick();
      fixture.detectChanges();
    })); // end beforeEach fakeAsync

    it('should change to next shelf', () => {
      comp.changeShelf(1);
      expect(comp.shelf).toBe(1);
    }) // should change to next shelf

    it('should change to next next shelf', () => {
      comp.changeShelf(1);
      comp.changeShelf(1);
      expect(comp.shelf).toBe(2);
    }) // should change to next next shelf

    it('should change to previous shelf', () => {
      comp.changeShelf(1);
      comp.changeShelf(1);
      comp.changeShelf(-1);
      expect(comp.shelf).toBe(1);
    }); // end should change to previous shelf

    it('should change to previous previous shelf', () => {
      comp.changeShelf(1);
      comp.changeShelf(1);
      comp.changeShelf(1);
      comp.changeShelf(-1);
      comp.changeShelf(-1);
      expect(comp.shelf).toBe(1)
    }); // end should change to previous previous shelf

    it('should go to last shelf', () => {
      comp.changeShelf(1);
      comp.changeShelf(1);
      comp.changeShelf(1);
      comp.setShelf(31);
      expect(comp.shelf).toBe(31);
    })// end should go to last shelf

    it('should go to first shelf', () => {
      comp.changeShelf(1);
      comp.changeShelf(1);
      comp.changeShelf(1);
      comp.setShelf(0);
      expect(comp.shelf).toBe(0);
    })// end should go to first shelf

  }); // end Test Changing shelf

  describe('Test store pede', () => {
    let scenario: MendelpedeScenario;
    
    beforeEach(fakeAsync(() => {
      scenario = listOfMendelScenarios[0];
      activateRoute.testParams = {scenShortCode: scenario.shortCode};
      createComponent();
      //comp.dropPhageBact({ dragData: dropPhage }, 'B');
      tick();
      fixture.detectChanges();
    })); // end beforeEach fakeAsync

    it('should store pede in fridge', () => {
      comp.storePede(listOfMendelpedes[11]);
      expect(comp.pedeList[6].phenotype).not.toBeNull();
    }); // end should store pede in fridge

  }); // end Test store pede

  describe('Test delete pede', () => {
    let scenario: MendelpedeScenario;
    
    beforeEach(fakeAsync(() => {
      scenario = listOfMendelScenarios[0];
      activateRoute.testParams = {scenShortCode: scenario.shortCode};
      createComponent();
      //comp.dropPhageBact({ dragData: dropPhage }, 'B');
      tick();
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
      fixture.detectChanges();
    })); // end beforeEach fakeAsync
    it('should have correct css class', () => {
      expect(comp.getMendelpede([ "Yellow", "Red", "LightGreen", "2", "1" ])).not.toBeNull();
    }); //end should have correct css class
  }); // end Test css class for mendelpede image

}); // end Mendelpede Fridge Component

function createComponent() {
  fixture = TestBed.createComponent(MendelpedeFridgeTestComponent);
  comp = fixture.componentInstance;
  fixture.detectChanges(); // trigger ngOnInit
}
