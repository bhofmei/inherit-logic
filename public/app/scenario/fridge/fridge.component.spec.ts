import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Directive, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { Router, RouterStub, ActivatedRoute, ActivatedRouteStub, RouterLinkStubDirective, getAllRouterLinks, recurCSSQuery, click, addMatchers } from '../../testing';
import * as _ from 'lodash';

import { SharedModule } from '../../shared/shared.module';
import { FridgeComponent } from './fridge.component';
import { PhageDialogComponent } from './phage-dialog.component';
import { AuthenticationService } from '../../authentication/authentication.service';
import { ScenarioService } from '../../scenario/scenario.service';

import { Fridge, FridgePhage, User, Scenario, GenotypePhage } from '../../interfaces';
import { listOfScenarios, userStudent, userStudent2 } from '../../testing/sample-data';
import { AuthServiceStub, ScenarioServiceStub } from '../../testing/service-stubs';

class FridgeTestComponent extends FridgeComponent {
  editPhage(src: number){
    return null // do nothing, for testing we will directly test the _editPhage and
    // _deletePhage methods
  }
}

// Testing variables
let activateRoute: ActivatedRouteStub;
let route: RouterStub;
let fixture: ComponentFixture<FridgeTestComponent>;
let comp: FridgeTestComponent;
let page: Page;
let authService: AuthenticationService;

describe('Fridge Component', ()=>{
  beforeEach(async(()=>{
    activateRoute = new ActivatedRouteStub();
    route = new RouterStub();
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [FridgeTestComponent, PhageDialogComponent, RouterLinkStubDirective],
      providers: [
        {provide: ActivatedRoute, useValue: activateRoute},
        {provide: Router, useValue: route},
        {provide: AuthenticationService, useClass: AuthServiceStub},
        {provide: ScenarioService, useClass: ScenarioServiceStub}
      ]
    }).compileComponents();
  })); // end beforeEach async

  describe('Test phage types', ()=>{

     let student: User;
    let scenario: Scenario;
    beforeEach(fakeAsync(()=>{
      student = userStudent;
      scenario = listOfScenarios[0];
      activateRoute.testParams = {scenId:scenario.scenCode};
      createComponent(student);
      tick();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync

      it('Should have strain 1 empty', ()=>{
        let isEmpty = isPhageType(page.strains[0], 'empty');
        expect(isEmpty).toBe(true);
        let strainNum = page.strains[0].query(By.css('.strain-num')).nativeElement.innerHTML;
        expect(strainNum).toTemplateMatch('1');
      }); // end Should have strain 1 empty

      it('Should have strain 2 reference', ()=>{
        let strain = page.strains[1];
        let isRef = isPhageType(strain, 'reference');
        expect(isRef).toBe(true);
        let strainNum = strain.query(By.css('.strain-num')).nativeElement.innerHTML;
        expect(strainNum).toTemplateMatch('2');
      }); // end Should have strain 2 reference

      it('Should have strain 3 unknown', ()=>{
        let strain = page.strains[2];
        let isRef = isPhageType(strain, 'unknown');
        expect(isRef).toBe(true);
        let strainNum = strain.query(By.css('.strain-num')).nativeElement.innerHTML;
        expect(strainNum).toTemplateMatch('3');
      }); // end Should have strain 3 unknown

      it('Should have strain 4 empty', ()=>{
        let isEmpty = isPhageType(page.strains[3], 'empty');
        expect(isEmpty).toBe(true);
        let strainNum = page.strains[3].query(By.css('.strain-num')).nativeElement.innerHTML;
        expect(strainNum).toTemplateMatch('4');
      }); // end Should have strain 4 empty

      it('Should have strain 5 user', ()=>{
        let strain = page.strains[4];
        let isRef = isPhageType(strain, 'user');
        expect(isRef).toBe(true);
        let strainNum = strain.query(By.css('.strain-num')).nativeElement.innerHTML;
        expect(strainNum).toTemplateMatch('5');
      }); // end Should have strain 5 user

      it('Should have strain 6 submitted', ()=>{
        let strain = page.strains[5];
        let isRef = isPhageType(strain, 'submitted');
        expect(isRef).toBe(true);
        let strainNum = strain.query(By.css('.strain-num')).nativeElement.innerHTML;
        expect(strainNum).toTemplateMatch('6');
      }); // end Should have strain 5 unknown
  }); // Test phage types

      describe('Test student2 scenario1', ()=>{
    let student: User;
    let scenario: Scenario;
    beforeEach(fakeAsync(()=>{
      student = userStudent2;
      scenario = listOfScenarios[0];
      activateRoute.testParams = {scenId:scenario.scenCode};
      createComponent(student);
      tick();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync

    it('Should not have error message', ()=>{
      expect(page.errorMessage).toBeNull();
    })

    it('Should not be a practice fridge', ()=>{
      expect(page.practice).toBeNull();
    }); // end Should not be a practice fridge


      it('Should have strain 1 empty', ()=>{
         let strain = page.strains[0];
        let isEmpty = isPhageType(strain, 'empty');
        expect(isEmpty).toBe(true);
        let strainNum = strain.query(By.css('.strain-num')).nativeElement.innerHTML;
        expect(strainNum).toTemplateMatch('1');
      }); // end Should have strain 1 empty

      it('Should have strain 2 reference', ()=>{
        let strain = page.strains[1];
        let isRef = isPhageType(strain, 'reference');
        expect(isRef).toBe(true);
        let strainNum = strain.query(By.css('.strain-num')).nativeElement.innerHTML;
        expect(strainNum).toTemplateMatch('2');
      }); // end Should have strain 2 reference

      it('Should have strain 3 empty', ()=>{
        let strain = page.strains[2];
        let isEmpty = isPhageType(strain, 'empty');
        expect(isEmpty).toBe(true);
        let strainNum = strain.query(By.css('.strain-num')).nativeElement.innerHTML;
        expect(strainNum).toTemplateMatch('3');
      }); // end Should have strain 3 empty
  }); // end Test student2 scenario1

    describe('Test student2 scenario2', ()=>{
    let student: User;
    let scenario: Scenario;
    beforeEach(fakeAsync(()=>{
      student = userStudent2;
      scenario = listOfScenarios[1];
      activateRoute.testParams = {scenId:scenario.scenCode};
      createComponent(student);
      tick();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync

    it('Should not have error message', ()=>{
      expect(page.errorMessage).toBeNull();
    })

    it('Should be a practice fridge', ()=>{
      expect(page.practice.innerHTML).toTemplateMatch('Practice');
    }); // end Should not be a practice fridge

      it('Should have strain 1 reference', ()=>{
         let strain = page.strains[0];
        let isRef = isPhageType(strain, 'reference');
        expect(isRef).toBe(true);
        let strainNum = strain.query(By.css('.strain-num')).nativeElement.innerHTML;
        expect(strainNum).toTemplateMatch('1');
      }); // end Should have strain 1 reference

      it('Should have strain 2 empty', ()=>{
        let strain = page.strains[1];
        let isEmpty = isPhageType(strain, 'empty');
        expect(isEmpty).toBe(true);
        let strainNum = strain.query(By.css('.strain-num')).nativeElement.innerHTML;
        expect(strainNum).toTemplateMatch('2');
      }); // end Should have strain 2 empty

      it('Should have strain 3 empty', ()=>{
        let strain = page.strains[2];
        let isEmpty = isPhageType(strain, 'empty');
        expect(isEmpty).toBe(true);
        let strainNum = strain.query(By.css('.strain-num')).nativeElement.innerHTML;
        expect(strainNum).toTemplateMatch('3');
      }); // end Should have strain 3 empty

      it('Should have strain 4 unknown', ()=>{
        let strain = page.strains[3];
        let isUnknown = isPhageType(strain, 'unknown');
        expect(isUnknown).toBe(true);
        let strainNum = strain.query(By.css('.strain-num')).nativeElement.innerHTML;
        expect(strainNum).toTemplateMatch('4');
      }); // end Should have strain 4 reference
  }); // end Test student2 scenario2

  describe('Test changing shelves', ()=>{
    let student: User;
    let scenario: Scenario;
    beforeEach(fakeAsync(()=>{
      student = userStudent;
      scenario = listOfScenarios[0];
      activateRoute.testParams = {scenId:scenario.scenCode};
      createComponent(student);
      comp.setShelf(5);
      tick();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync

    it('Should not have error message', ()=>{
      expect(page.errorMessage).toBeNull();
    })

    it('Should not be a practice fridge', ()=>{
      expect(page.practice).toBeNull();
    }); // end Should not be a practice fridge

      it('Should go back a shelf', fakeAsync(()=>{
        click(page.btnBackward);
        tick();
        fixture.detectChanges();
        page.addElements();
        // first phage should be #64(+1)
        let strainNum = page.strains[0].query(By.css('.strain-num')).nativeElement.innerHTML;
        expect(strainNum).toTemplateMatch('65');
      })); // end Should go back a shelf

       it('Should go forward a shelf', fakeAsync(()=>{
        click(page.btnForward);
        tick();
         fixture.detectChanges();
        page.addElements();
        // first phage should be #96(+1)
        let strainNum = page.strains[0].query(By.css('.strain-num')).nativeElement.innerHTML;
        expect(strainNum).toTemplateMatch('97');
      })); // end Should go forward a shelf

       it('Should go to first shelf', fakeAsync(()=>{
        click(page.btnFirst);
        tick();
         fixture.detectChanges();
        page.addElements();
        // first phage should be #0(+1)
        let strainNum = page.strains[0].query(By.css('.strain-num')).nativeElement.innerHTML;
        expect(strainNum).toTemplateMatch('1');
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
        fixture.detectChanges();
        page.addElements();
        // first phage should be #496(+1)
        let strainNum = page.strains[0].query(By.css('.strain-num')).nativeElement.innerHTML;
        expect(strainNum).toTemplateMatch('497');
        // forward buttons should be disabled
         let backDisabled = page.btnBackward.nativeElement.hasAttribute('disabled');
         let forDisabled = page.btnForward.nativeElement.hasAttribute('disabled');
        let lastDisabled = page.btnLast.nativeElement.hasAttribute('disabled');
         expect(backDisabled).toBe(false);
         expect(forDisabled).toBe(true);
        expect(lastDisabled).toBe(true);
      })); // end Should go to last shelf
  }); // end Test student1 scenario1

  describe('Test create fridge student1 scenario2', ()=>{
    let student: User;
    let scenario: Scenario;
    beforeEach(fakeAsync(()=>{
      student = userStudent;
      scenario = listOfScenarios[1];
      activateRoute.testParams = {scenId:scenario.scenCode};
      createComponent(student);
      tick();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync

    it('Should create a fridge', ()=>{
      // is a practice fridge
      let practice = page.practice.innerHTML;
      expect(practice).toTemplateMatch('Practice');
      let isCalled = page.createFridgeSpy.calls.any();
      expect(isCalled).toBe(true);
    }); // end Should create a fridge

    it('Should have strain 1 reference', ()=>{
        let strain = page.strains[0];
        let isRef = isPhageType(strain, 'reference');
        expect(isRef).toBe(true);
        let strainNum = strain.query(By.css('.strain-num')).nativeElement.innerHTML;
        expect(strainNum).toTemplateMatch('1');
      }); // end Should have strain 1 reference
  }); // end Test create fridge student1 scenario2

  describe('Test add phage to fridge', ()=>{
    let student: User;
    let scenario: Scenario;
    let testPhage1: GenotypePhage = { shifts: [], deletion:[], parents: [], src: 'small'};
    let testPhage2: GenotypePhage = { shifts: [233], deletion:[], parents: [], src: 'large'};
    let addPhageSpy;
    beforeEach(fakeAsync(()=>{
      student = userStudent;
      scenario = listOfScenarios[0];
      activateRoute.testParams = {scenId:scenario.scenCode};
      createComponent(student);
      tick();
      page.addElements();
      addMatchers();
      let scenService = fixture.debugElement.injector.get(ScenarioService);
      addPhageSpy = spyOn(scenService, 'addStrain').and.callThrough();
    })); // end beforeEach fakeAsync

    it('Should be able to drop phage at empty spot', ()=>{
      let funcCanDrop = comp.canDrop(7);
      expect(funcCanDrop(testPhage1)).toBe(true);
      expect(funcCanDrop(testPhage2)).toBe(true);
    }); // end Should be able to drop at empty spot

    it('Should not be able to drop phage at filled spot', ()=>{
      let funcCanDrop = comp.canDrop(1);
      expect(funcCanDrop(testPhage1)).toBe(false);
      expect(funcCanDrop(testPhage2)).toBeFalsy();
    }); // end Should not be able to drop phage at filled spot


    describe('Test drop phage', ()=>{
      beforeEach(fakeAsync(()=>{
        let event = {dragData: testPhage1};
        comp.dropStrain(event, 8);
      tick();
      fixture.detectChanges();
        page.addElements();
      })); // end beforeEach fakeAsync

      it('Should call addStrain', ()=>{
        let calledAdded = addPhageSpy.calls.any();
      expect(calledAdded).toBe(true);
      }); // end Should call addStrain

      it('Should have strain 9 user', ()=>{
         let strain = page.strains[8];
        let isUser = isPhageType(strain, 'user');
        expect(isUser).toBe(true);
        let strainNum = strain.query(By.css('.strain-num')).nativeElement.innerHTML;
        expect(strainNum).toTemplateMatch('9');
      }); // end Should have strain 9 user
    }); // end Test drop phage
  }); // end Test add phage to fridge

  describe('Test delete phage', ()=>{
     let student: User;
    let scenario: Scenario;
    let delPhageSpy;
    beforeEach(fakeAsync(()=>{
      student = userStudent;
      scenario = listOfScenarios[0];
      activateRoute.testParams = {scenId:scenario.scenCode};
      createComponent(student);
      tick();
      page.addElements();
      addMatchers();
      let scenService = fixture.debugElement.injector.get(ScenarioService);
      delPhageSpy = spyOn(scenService, 'deleteStrain').and.callThrough();
    })); // end beforeEach fakeAsync

    it('Should delete strain 5', fakeAsync(()=>{
      let delSpot = 4;
      comp._deletePhage(delSpot);
      tick();
      fixture.detectChanges();
      page.addElements();

      let newStrain = page.strains[delSpot];
      let isEmpty = isPhageType(newStrain, 'empty');
      expect(isEmpty).toBe(true);
      let isCalled = delPhageSpy.calls.any();
      expect(isCalled).toBe(true);
    })); // end Should delete strain 5
  }); // end Test delete phage

    describe('Test edit phage', ()=>{
     let student: User;
    let scenario: Scenario;
    let editPhageSpy;
    beforeEach(fakeAsync(()=>{
      student = userStudent;
      scenario = listOfScenarios[0];
      activateRoute.testParams = {scenId:scenario.scenCode};
      createComponent(student);
      tick();
      page.addElements();
      addMatchers();
      let scenService = fixture.debugElement.injector.get(ScenarioService);
      editPhageSpy = spyOn(scenService, 'updateStrain').and.callThrough();
    })); // end beforeEach fakeAsync

    it('Should edit strain 5', fakeAsync(()=>{
      //let phage = _.cloneDeep(comp.strains[4]);
      let oldPhage = comp.strains[4];
      let phage: FridgePhage = {
        id: oldPhage.id,
        strainNum: oldPhage.strainNum,
        phageType: oldPhage.phageType,
        comment: 'new comment',
        submitted: true
      };
      comp._editPhage(4, phage);
      tick();
      fixture.detectChanges();
      page.addElements();
      let newStrain = page.strains[4];
      let isSubmitted = isPhageType(newStrain, 'submitted');
      expect(isSubmitted).toBe(true);
      let isCalled = editPhageSpy.calls.any();
      expect(isCalled).toBe(true);
    })); // end Should edit strain 5
  }); // end Test edit phage

}); // end Fridge Component

class Page {
  // variables
  practice: HTMLElement;
  strains: DebugElement[];
  btnFirst: DebugElement;
  btnBackward: DebugElement;
  btnForward: DebugElement;
  btnLast: DebugElement;

  errorMessage: HTMLElement;

  createFridgeSpy: any;

  constructor(){
    let scenService = fixture.debugElement.injector.get(ScenarioService);
    this.createFridgeSpy = spyOn(scenService, 'createFridge').and.callThrough();
  }

  addElements(){
    if(comp.fridge){
      let header = fixture.debugElement.query(By.css('.card-header')).query(By.css('.card-subtitle'));
      this.practice = (header ? header.nativeElement : null);
      this.strains = fixture.debugElement.queryAll(By.css('.ls-strain'));
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

function createComponent(user: User){
  fixture = TestBed.createComponent(FridgeTestComponent);
  comp = fixture.componentInstance;
  authService = TestBed.get(AuthenticationService);
  authService.setUser(user);

  page = new Page();
  fixture.detectChanges(); // trigger ngOnInit
}

function isPhageType(el: DebugElement, expected: string){
  let spans = el.queryAll(By.css('span'));
  if(expected === 'empty'){return (spans.length == 1)}
  else if(spans.length === 1){
    // is empty but expect something
    return false
  }
  let cList = spans[1].nativeElement.className;
  if(expected === 'reference'){
    return (cList.search('strain-image-reference') !== -1)
  } else if(expected === 'unknown'){
    return (cList.search('strain-image-unknown') !== -1)
  }else if(expected === 'submitted'){
    return (cList.search('strain-image-submitted') !== -1)
  } else {
    // user type -> no special class
    return true;
  }
}
