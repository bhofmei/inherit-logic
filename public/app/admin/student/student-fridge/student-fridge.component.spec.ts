import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Directive, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { Router, RouterStub, ActivatedRoute, ActivatedRouteStub, RouterLinkStubDirective, getAllRouterLinks, recurCSSQuery, click } from '../../../testing';

import { SharedModule } from '../../../shared/shared.module';
import { StudentFridgeComponent } from './student-fridge.component';
import { StudentPhageComponent } from './student-phage.component';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { StudentService } from '../student.service';
import { CricketService } from '../../../cricket/cricket.service';
import { PhageGuessesPipe, PhageMutationsPipe, PhageDeletionsPipe } from '../../../pipes/phage.pipes';

import { User, AdminStudent, _User, Scenario } from '../../../interfaces';
import { userAdmin, userInstr, sampleCourse, listOfCourses, listOfScenarios, listOfStudents, listOfUsers } from '../../../testing/sample-data';
import { StudentServiceStub, AuthServiceStub, CricketServiceStub } from '../../../testing/service-stubs';

class StudentFridgeTestComponent extends StudentFridgeComponent {
  getFridge(){
    return this.fridge;
  }
  hasAFridge(){
    return this.hasFridge
  }
}

// Testing variables
let activatedRoute: ActivatedRouteStub;
let route: RouterStub;
let fixture: ComponentFixture<StudentFridgeTestComponent>;
let comp: StudentFridgeTestComponent;
let page: Page;

describe('Student Fridge Component', ()=>{
  beforeEach(async(()=>{
    activatedRoute = new ActivatedRouteStub();
     route = new RouterStub();
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [StudentFridgeTestComponent, StudentPhageComponent, RouterLinkStubDirective, PhageGuessesPipe, PhageMutationsPipe, PhageDeletionsPipe],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: StudentService, useClass: StudentServiceStub},
        {provide: AuthenticationService, useClass: AuthServiceStub},
        {provide: CricketService, useClass: CricketServiceStub},
        {provide: Router, useValue: route}
      ]
    }).compileComponents();
  })); // end beforeEach async

  describe('Test existing fridge', ()=>{
    let expectedStudent: AdminStudent;
    let expectedScenario: Scenario;
    let studentService: StudentService;
    beforeEach(fakeAsync(()=>{
      expectedStudent = listOfStudents[0];
      expectedScenario = listOfScenarios[0];
      activatedRoute.testParams = {studentId: expectedStudent.userId, scenId: expectedScenario.scenCode};
      createComponent();
      tick();
      page.addElements();
      studentService = fixture.debugElement.injector.get(StudentService);
    })); // end beforeEach fakeAsync

    describe('Test view elements', ()=>{
      it('Should have student name', ()=>{
        let x = page.studentName.innerHTML;
        let n = expectedStudent.firstName + ' ' + expectedStudent.lastName;
        expect(x).toMatch(n);
      }); // end Should have student name

      it('Should have scenario code', ()=>{
        let x = page.scenarioCode.innerHTML;
        expect(x).toMatch(expectedScenario.scenCode);
      }); // end Should have scenario code

       it('Should have scenario label', ()=>{
        let x = page.scenarioLabel.innerHTML;
        expect(x).toMatch(expectedScenario.label);
      }); // end Should have scenario label

      it('Should have access granted', ()=>{
        let x = page.accessLabel.innerHTML;
        expect(x).toMatch('Access granted: true');
      }); // Should have access granted
    }); // end Test view elements

    describe('Test strains', ()=>{
      it('Should view all strains', ()=>{
        let strains = page.strainList;
        expect(strains.length).toBe(4);
      }); // end Should view all strains

      it('Should view graded strains', fakeAsync(()=>{
        click(page.gradedStrainsButton);
        tick();
        fixture.detectChanges();
        page.addElements();
        let strains = page.strainList;
        expect(strains.length).toBe(2);
      })); // end Should view graded strains
    }); // end Test strains

    it('Should have link to student', ()=>{
      let infoSec = fixture.debugElement.query(By.css('#student-name'));
      let links = getAllRouterLinks(infoSec);
      let linkParam = links[0].linkParams;
      expect(linkParam[0]).toBe('../../');
    }); // end Should have link to student
  }); // end Test existing fridge

  describe('Test non-existant fridge', ()=>{
    let expectedStudent: AdminStudent;
    let expectedScenario: Scenario;
    let studentService: StudentService;
    beforeEach(fakeAsync(()=>{
      expectedStudent = listOfStudents[0];
      expectedScenario = listOfScenarios[1];
      activatedRoute.testParams = {studentId: expectedStudent.userId, scenId: expectedScenario.scenCode};
      createComponent();
      tick();
      page.addElements();
      studentService = fixture.debugElement.injector.get(StudentService);
    })); // end beforeEach fakeAsync

    describe('Test view elements', ()=>{
      it('Should have student name', ()=>{
        let x = page.studentName.innerHTML;
        let n = expectedStudent.firstName + ' ' + expectedStudent.lastName;
        expect(x).toMatch(n);
      }); // end Should have student name

      it('Should have scenario code', ()=>{
        let x = page.scenarioCode.innerHTML;
        expect(x).toMatch(expectedScenario.scenCode);
      }); // end Should have scenario code

       it('Should have scenario label', ()=>{
        let x = page.scenarioLabel.innerHTML;
        expect(x).toMatch(expectedScenario.label);
      }); // end Should have scenario label

      it('Should have no "access granted" label', ()=>{
        let x = page.accessLabel;
        expect(x).toBeUndefined();;
      }); // Should have no "access granted" label

      it('Should have "Fridge does not exist" label', ()=>{
        let x = fixture.debugElement.query(By.css('#no-fridge')).nativeElement;
        expect(x.innerHTML).toMatch('Fridge does not exist yet');
      }); // end Should have "Fridge does not exist" label
    }); // end Test view elements

    describe('Test button elements', ()=>{
      it('Should not have "All strains" button', ()=>{
        let b = page.allStrainsButton;
        expect(b).toBeUndefined();
      }); // end Should not have "All strains" button

      it('Should not have "Graded strains" button', ()=>{
        let b = page.gradedStrainsButton;
        expect(b).toBeUndefined();
      }); // end Should not have "Graded strains" button
    }); // end Test button elements
  }); // end Test non-existant fridge
}); // end Student Fridge Component

class Page {
  studentName: HTMLElement;
  scenarioCode: HTMLElement;
  scenarioLabel: HTMLElement;

  accessLabel: HTMLElement;
  strainList: DebugElement[];
  errorMessage: HTMLElement;

  allStrainsButton: DebugElement;
  gradedStrainsButton: DebugElement;

  constructor(){}

  addElements(){
    if(comp.getFridge()){
      // at least have init
      this.studentName = recurCSSQuery(fixture.debugElement, ['#student-name', 'h4']);
       this.scenarioCode = recurCSSQuery(fixture.debugElement, ['#scenario-info', '.text-primary']);
       this.scenarioLabel = recurCSSQuery(fixture.debugElement, ['#scenario-info', '.text-secondary']);
    }
    if(comp.hasAFridge()){
      this.accessLabel = recurCSSQuery(fixture.debugElement, ['#scenario-info', '.ml-auto']);
      this.strainList = fixture.debugElement.queryAll(By.css('.list-group-item')).map((de)=>{return de.nativeElement});
      let buttons = fixture.debugElement.queryAll(By.css('button'));
      this.allStrainsButton = buttons[0];
      this.gradedStrainsButton = buttons[1];
    }
    let tmp = fixture.debugElement.query(By.css('.alert'));
      if(tmp){
        this.errorMessage = tmp.nativeElement
      } else {
        this.errorMessage = null;
      }
  }
}

function createComponent(){
  fixture = TestBed.createComponent(StudentFridgeTestComponent);
  comp = fixture.componentInstance;
  page = new Page();
  fixture.detectChanges(); // trigger ngOnInit
}
