import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Directive, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { Router, RouterStub, ActivatedRoute, ActivatedRouteStub, RouterLinkStubDirective, getAllRouterLinks, recurCSSQuery, click } from '../../../testing';

import { SharedModule } from '../../../shared/shared.module';
import { StudentMendelFridgeComponent } from './student-mendel-fridge.component';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { StudentService } from '../student.service';
import { MendelpedeScenarioService } from '../../../mendelpede/scenarios/mendelpede-scenarios.service';
import { PhageGuessesPipe, PhageMutationsPipe, PhageDeletionsPipe } from '../../../pipes/phage.pipes';

import { User, AdminStudent, _User, MendelpedeScenario } from '../../../interfaces';
import { userAdmin, userInstr, sampleCourse, listOfCourses, listOfMendelScenarios, listOfStudents, listOfUsers } from '../../../testing/mendelpede-sample-data';
import { StudentServiceStub, AuthServiceStub, MendelpedeServiceStub } from '../../../testing/service-stubs';

class StudentMendelFridgeTestComponent extends StudentMendelFridgeComponent {
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
let fixture: ComponentFixture<StudentMendelFridgeTestComponent>;
let comp: StudentMendelFridgeTestComponent;
let page: Page;

describe('Student Fridge Component', ()=>{
  beforeEach(async(()=>{
    console.log("before creating routes*************************");
    activatedRoute = new ActivatedRouteStub();
     route = new RouterStub();
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [StudentMendelFridgeTestComponent, RouterLinkStubDirective],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: StudentService, useClass: StudentServiceStub},
        {provide: AuthenticationService, useClass: AuthServiceStub},
        {provide: MendelpedeScenarioService, useClass: MendelpedeServiceStub},
        {provide: Router, useValue: route}
      ]
    }).compileComponents();
  })); // end beforeEach async

  describe('Test existing fridge', ()=>{
    console.log("before testing *************************");
    let expectedStudent: AdminStudent;
    let expectedScenario: MendelpedeScenario;
    let studentService: StudentService;
    beforeEach(fakeAsync(()=>{
      console.log("into async call*************************");
      expectedStudent = listOfStudents[0];
      console.log("1");
      expectedScenario = listOfMendelScenarios[0];
      console.log("2");
      activatedRoute.testParams = {studentId: expectedStudent.userId, scenId: expectedScenario.shortCode};
      console.log("3");
      createComponent();
      console.log("4");
      tick();
      console.log("5");
      page.addElements();
      console.log("6");
      studentService = fixture.debugElement.injector.get(StudentService);
      console.log("7");
    })); // end beforeEach fakeAsync
    
    describe('Test view elements', ()=>{
      it('Should have student name', ()=>{
        let x = page.studentName.innerHTML;
        let n = expectedStudent.firstName + ' ' + expectedStudent.lastName;
        expect(x).toMatch(n);
      }); // end Should have student name
      /*
      it('Should have scenario code', ()=>{
        let x = page.scenarioCode.innerHTML;
        expect(x).toMatch(expectedScenario.shortCode);
      }); // end Should have scenario code

       it('Should have scenario label', ()=>{
        let x = page.scenarioLabel.innerHTML;
        expect(x).toMatch(expectedScenario.label);
      }); // end Should have scenario label

      it('Should have access granted', ()=>{
        let x = page.accessLabel.innerHTML;
        expect(x).toMatch('Access granted: true');
      }); // Should have access granted */
    }); // end Test view elements
    /*
    describe('Test strains', ()=>{
      it('Should view all strains', ()=>{
        let pedes = page.pedeList;
        expect(pedes.length).toBe(4);
      }); // end Should view all strains
    }); // end Test strains

    it('Should have link to student', ()=>{
      let infoSec = fixture.debugElement.query(By.css('#student-name'));
      let links = getAllRouterLinks(infoSec);
      let linkParam = links[0].linkParams;
      expect(linkParam[0]).toBe('../');
    }); // end Should have link to student */
  }); // end Test existing fridge
  /*
  describe('Test non-existant fridge', ()=>{
    let expectedStudent: AdminStudent;
    let expectedScenario: MendelpedeScenario;
    let studentService: StudentService;
    beforeEach(fakeAsync(()=>{
      expectedStudent = listOfStudents[0];
      expectedScenario = listOfMendelScenarios[1];
      activatedRoute.testParams = {studentId: expectedStudent.userId, scenId: expectedScenario.shortCode};
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
        expect(x).toMatch(expectedScenario.shortCode);
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
    /*
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
  }); // end Test non-existant fridge */
}); // end Student Fridge Component

class Page {
  studentName: HTMLElement;
  scenarioCode: HTMLElement;
  scenarioLabel: HTMLElement;

  accessLabel: HTMLElement;
  pedeList: DebugElement[];
  //errorMessage: HTMLElement;

  //allStrainsButton: DebugElement;
  //gradedStrainsButton: DebugElement;

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
      this.pedeList = fixture.debugElement.queryAll(By.css('.list-group-item')).map((de)=>{return de.nativeElement});
      //let buttons = fixture.debugElement.queryAll(By.css('button'));
      //this.allStrainsButton = buttons[0];
      //this.gradedStrainsButton = buttons[1];
    }
    /*
    let tmp = fixture.debugElement.query(By.css('.alert'));
      if(tmp){
        this.errorMessage = tmp.nativeElement
      } else {
        this.errorMessage = null;
      }*/
  }
}

function createComponent(){
  console.log("a");
  fixture = TestBed.createComponent(StudentMendelFridgeTestComponent);
  console.log("b");
  comp = fixture.componentInstance;
  console.log("c");
  page = new Page();
  console.log("d");
  fixture.detectChanges(); // trigger ngOnInit
  console.log("e");
}
