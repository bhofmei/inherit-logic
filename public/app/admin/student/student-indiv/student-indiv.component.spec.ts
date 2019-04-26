import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Directive, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { Router, RouterStub, ActivatedRoute, ActivatedRouteStub, RouterLinkStubDirective, getAllRouterLinks, recurCSSQuery, click } from '../../../testing';

import { SharedModule } from '../../../shared/shared.module';
import { StudentIndivComponent } from './student-indiv.component';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { StudentService } from '../student.service';
import { CricketService } from '../../../cricket/cricket.service';
import { MendelpedeScenarioService } from '../../../mendelpede/scenarios/mendelpede-scenarios.service';

import { User, AdminStudent, _User, Scenario } from '../../../interfaces';
import { userAdmin, userInstr, sampleCourse, listOfCourses, listOfScenarios, listOfStudents, listOfUsers } from '../../../testing/sample-data';
import { StudentServiceStub, AuthServiceStub, CricketServiceStub, MendelpedeServiceStub } from '../../../testing/service-stubs';

class StudentIndivTestComponent extends StudentIndivComponent {
  checkDelete(){
    return this._callDelete();
  }
  getStudent(){
    return this.student;
  }
}

// Testing variables
let activatedRoute: ActivatedRouteStub;
let route: RouterStub;
let fixture: ComponentFixture<StudentIndivTestComponent>;
let comp: StudentIndivTestComponent;
let page: Page;
let authService: AuthenticationService;

describe('Student Indiv Component', ()=>{
   beforeEach(async(()=>{
    activatedRoute = new ActivatedRouteStub();
     route = new RouterStub();
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [StudentIndivTestComponent, RouterLinkStubDirective],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: StudentService, useClass: StudentServiceStub},
        {provide: AuthenticationService, useClass: AuthServiceStub},
        {provide: CricketService, useClass: CricketServiceStub},
        {provide: MendelpedeScenarioService, useClass: MendelpedeServiceStub},
        {provide: Router, useValue: route}
      ]
    }).compileComponents();
  })); // end beforeEach async

  describe('Navigate to existing student as admin', ()=>{
    let expected: AdminStudent;
    let studentService: StudentService;
    beforeEach(fakeAsync(()=>{
      expected = listOfStudents[0];
      activatedRoute.testParams = {studentId: expected.userId};
      createComponent(false);
      tick();
      page.addElements();
      studentService = fixture.debugElement.injector.get(StudentService);
    })); // end beforeEach fakeAsync

    describe('Test view elements', ()=>{
      it('Should display student name', ()=>{
        console.log(page.scenarioLabels);
        let n = page.studentName.innerHTML;
        n = n.replace(/^(\s|\n|\t)+|(\s|\n|\t)+$/g, '');
        expect(n).toBe(expected.firstName + ' ' + expected.lastName);
    }); // end Should display student name

    it('Should display student email', ()=>{
      let e = page.studentEmail.innerHTML;
      expect(e).toBe(expected.email);
    }); // end Should display student email

    it('Should display course number', ()=>{
      let c = page.courseNum.innerHTML;
      expect(c).toBe(expected.course.courseNum);
    }); // end Should display course number

      it('Should have delete button enabled', ()=>{
        let isDisabled = page.deleteButton.nativeElement.hasAttribute('disabled');
        expect(isDisabled).toBe(false);
      }); // end Should have delete button enabled

      it('Should have all role buttons enabled', ()=>{
        let adminDisabled = page.adminRoleButton.nativeElement.hasAttribute('disabled');
        let instrDisabled = page.instrRoleButton.nativeElement.hasAttribute('disabled');
        let studentDisabled = page.studentRoleButton.nativeElement.hasAttribute('disabled');
        expect(adminDisabled).toBe(false);
        expect(instrDisabled).toBe(false);
        expect(studentDisabled).toBe(false);
      }); // end Should have all role buttons enabled

      it('Should have 2 scenarios', ()=>{
        expect(page.scenarioLabels.length).toBe(2);
        let label1 = page.scenarioLabels[0].innerHTML;
        let label2 = page.scenarioLabels[1].innerHTML;
        expect(label1).toMatch(listOfScenarios[0].label);
        expect(label2).toMatch(listOfScenarios[1].label);
      }); // end Should have 2 scenarios

      it('Should have access for scenario 1', ()=>{
        // test1 is true, test2 is false
        let access = page.scenarioAccess[0].innerHTML;
        let button = page.scenarioButtons[0].nativeElement.hasAttribute('disabled');
        expect(access).toMatch('Access granted');
        expect(button).toBe(true);
      }); // end Should have access for scenario 1

      it('Should not have access for scenario 2', ()=>{
        // test1 is true, test2 is false
        let access = page.scenarioAccess[1].innerHTML;
         let button = page.scenarioButtons[1].nativeElement.hasAttribute('disabled');
         expect(access).toMatch('Access not granted');
        expect(button).toBe(false);
      }); // end Should not have access for scenario 2
    }); // end Test view elements

    describe('Test links', ()=>{
      it('Should have course link', ()=>{
        let courseSec = fixture.debugElement.query(By.css('#student-desc'));
        let links = getAllRouterLinks(courseSec);
        let linkEl = links[0].linkParams;
        expect(linkEl[0]).toBe('/admin/courses');
        expect(linkEl[1]).toBe(expected.course.courseNum);
      }); // end Should have course link

      it('Should have fridge links', ()=>{
        let scenSec = fixture.debugElement.query(By.css('#student-scenarios'));
        let links = getAllRouterLinks(scenSec);
        expect(links.length).toBe(2);
        let link1 = links[0].linkParams[1];
        let link2 = links[1].linkParams[1];
        expect(link1).toBe(listOfScenarios[0].scenCode);
        expect(link2).toBe(listOfScenarios[1].scenCode);
      }); // end Should have fridge links
    }); // end Test links

    describe('Test buttons', ()=>{
      let accessSpy, roleSpy, deleteSpy;

      beforeEach(fakeAsync(()=>{
        accessSpy = spyOn(studentService, 'grantScenAccess').and.callThrough();
        roleSpy = spyOn(studentService, 'setStudentRole').and.callThrough();
        deleteSpy = spyOn(studentService, 'deleteStudent').and.callThrough();
      })); // end beforeEach

      it('Should grant access for scenario 2 and update page', fakeAsync(()=>{
        let access = page.scenarioAccess[1].innerHTML;
        expect(access).toMatch('Access not granted');
        click(page.scenarioButtons[1]);
        tick();
        fixture.detectChanges();
        page.addElements();
        let didAccess = accessSpy.calls.any();
        expect(didAccess).toBe(true);
        let access2 = page.scenarioAccess[1].innerHTML;
        expect(access2).toMatch('Access granted');
        let button2 = page.scenarioButtons[1].nativeElement.hasAttribute('disabled');
        expect(button2).toBe(true);
      })); // end Should grant access for scenario 2 and update page

      it('Should change role to instr', fakeAsync(()=>{
        click(page.instrRoleButton);
        tick();
        fixture.detectChanges();
        page.addElements();
        let didChange = roleSpy.calls.any();
        expect(didChange).toBe(true);
        let sButtonClasses = page.studentRoleButton.nativeElement.classList;
        let iButtonClasses = page.instrRoleButton.nativeElement.classList;
        expect(sButtonClasses).toContain('btn-outline-secondary');
        expect(iButtonClasses).toContain('btn-secondary');
      })); // end Should change role to instr

      it('Should delete student and navigate', fakeAsync(()=>{
        click(page.deleteButton);
        tick();
        let didDelete = deleteSpy.calls.any();
        let pathNav = route.path;
        expect(didDelete).toBe(true);
        expect(pathNav).toBe('/admin/students');
      })); // end Should delete student and navigate
    }); // end Test buttons
  }); //end Navigate to existing student as admin

  describe('Navigate to non-existant student as admin', ()=>{
    let studentService: StudentService;
    beforeEach(fakeAsync(()=>{
      activatedRoute.testParams = {studentId: 600};
      createComponent(false);
      tick();
      page.addElements();
      studentService = fixture.debugElement.injector.get(StudentService);
    })); // end beforeEach fakeAsync

    it('Should have error message', ()=>{
      let errorMessage = page.errorMessage.innerHTML;
      errorMessage = errorMessage.replace(/^(\s|\n|\t)+|(\s|\n|\t)+$/g, '');
      expect(errorMessage).toBe('User not found');
    }); // end Should have error message
  }); // end Should not navigate to non-existant student as admin

  describe('Navigate to existing student as instr', ()=>{
    let expected: AdminStudent;
    let studentService: StudentService;
    beforeEach(fakeAsync(()=>{
      expected = listOfStudents[0];
      activatedRoute.testParams = {studentId: expected.userId};
      createComponent(true);
      tick();
      page.addElements();
      studentService = fixture.debugElement.injector.get(StudentService);
    })); // end beforeEach fakeAsync

    describe('Test view elements', ()=>{
      it('Should display student name', ()=>{
        let n = page.studentName.innerHTML;
        n = n.replace(/^(\s|\n|\t)+|(\s|\n|\t)+$/g, '');
        expect(n).toBe(expected.firstName + ' ' + expected.lastName);
    }); // end Should display student name

    it('Should display student email', ()=>{
      let e = page.studentEmail.innerHTML;
      expect(e).toBe(expected.email);
    }); // end Should display student email

    it('Should display course number', ()=>{
      let c = page.courseNum.innerHTML;
      expect(c).toBe(expected.course.courseNum);
    }); // end Should display course number

      it('Should have delete button enabled', ()=>{
        let isDisabled = page.deleteButton.nativeElement.hasAttribute('disabled');
        expect(isDisabled).toBe(false);
      }); // end Should have delete button enabled

      it('Should have student, instr role buttons enabled', ()=>{
        let adminDisabled = page.adminRoleButton.nativeElement.hasAttribute('disabled');
        let instrDisabled = page.instrRoleButton.nativeElement.hasAttribute('disabled');
        let studentDisabled = page.studentRoleButton.nativeElement.hasAttribute('disabled');
        expect(adminDisabled).toBe(true);
        expect(instrDisabled).toBe(false);
        expect(studentDisabled).toBe(false);
      }); // end Should have all role buttons enabled

      it('Should have 2 scenarios', ()=>{
        expect(page.scenarioLabels.length).toBe(2);
        let label1 = page.scenarioLabels[0].innerHTML;
        let label2 = page.scenarioLabels[1].innerHTML;
        expect(label1).toMatch(listOfScenarios[0].label);
        expect(label2).toMatch(listOfScenarios[1].label);
      }); // end Should have 2 scenarios

      it('Should have access for scenario 1', ()=>{
        // test1 is true, test2 is false
        let access = page.scenarioAccess[0].innerHTML;
        let button = page.scenarioButtons[0].nativeElement.hasAttribute('disabled');
        expect(access).toMatch('Access granted');
        expect(button).toBe(true);
      }); // end Should have access for scenario 1

      it('Should not have access for scenario 2', ()=>{
        // test1 is true, test2 is false
        let access = page.scenarioAccess[1].innerHTML;
         let button = page.scenarioButtons[1].nativeElement.hasAttribute('disabled');
         expect(access).toMatch('Access not granted');
        expect(button).toBe(false);
      }); // end Should not have access for scenario 2
    }); // end Test view elements

    describe('Test links', ()=>{
      it('Should have course link', ()=>{
        let courseSec = fixture.debugElement.query(By.css('#student-desc'));
        let links = getAllRouterLinks(courseSec);
        let linkEl = links[0].linkParams;
        expect(linkEl[0]).toBe('/admin/courses');
        expect(linkEl[1]).toBe(expected.course.courseNum);
      }); // end Should have course link

      it('Should have fridge links', ()=>{
        let scenSec = fixture.debugElement.query(By.css('#student-scenarios'));
        let links = getAllRouterLinks(scenSec);
        expect(links.length).toBe(2);
        let link1 = links[0].linkParams[1];
        let link2 = links[1].linkParams[1];
        expect(link1).toBe(listOfScenarios[0].scenCode);
        expect(link2).toBe(listOfScenarios[1].scenCode);
      }); // end Should have fridge links
    }); // end Test links

    describe('Test buttons', ()=>{
      let accessSpy, roleSpy, deleteSpy;

      beforeEach(fakeAsync(()=>{
        accessSpy = spyOn(studentService, 'grantScenAccess').and.callThrough();
        roleSpy = spyOn(studentService, 'setStudentRole').and.callThrough();
        deleteSpy = spyOn(studentService, 'deleteStudent').and.callThrough();
      })); // end beforeEach

      it('Should grant access for scenario 2 and update page', fakeAsync(()=>{
        click(page.scenarioButtons[1]);
        tick();
        fixture.detectChanges();
        page.addElements();
        let didAccess = accessSpy.calls.any();
        expect(didAccess).toBe(true);
        let access2 = page.scenarioAccess[1].innerHTML;
        expect(access2).toMatch('Access granted');
        let button2 = page.scenarioButtons[1].nativeElement.hasAttribute('disabled');
        expect(button2).toBe(true);
      })); // end Should grant access for scenario 2 and update page

      it('Should change role to instr', fakeAsync(()=>{
        click(page.instrRoleButton);
        tick();
        fixture.detectChanges();
        page.addElements();
        let didChange = roleSpy.calls.any();
        expect(didChange).toBe(true);
        let sButtonClasses = page.studentRoleButton.nativeElement.classList;
        let iButtonClasses = page.instrRoleButton.nativeElement.classList;
        expect(sButtonClasses).toContain('btn-outline-secondary');
        expect(iButtonClasses).toContain('btn-secondary');
      })); // end Should change role to instr
    }); // end Test buttons
  }); //end Navigate to existing student as instr

    describe('Navigate to admin as admin', ()=>{
    let expected: AdminStudent;
    let studentService: StudentService;
    beforeEach(fakeAsync(()=>{
      expected = listOfUsers[0];
      activatedRoute.testParams = {studentId: expected.userId};
      createComponent(false);
      tick();
      page.addElements();
      studentService = fixture.debugElement.injector.get(StudentService);
    })); // end beforeEach fakeAsync

    describe('Test view elements', ()=>{
      it('Should display admin name', ()=>{
        let n = page.studentName.innerHTML;
        n = n.replace(/^(\s|\n|\t)+|(\s|\n|\t)+$/g, '');
        expect(n).toBe(expected.firstName + ' ' + expected.lastName);
    }); // end Should display student name

    it('Should display student email', ()=>{
      let e = page.studentEmail.innerHTML;
      expect(e).toBe(expected.email);
    }); // end Should display student email

    it('Should not display course number', ()=>{
      let c = page.courseNum;
      expect(c).toBeNull();
    }); // end Should not display course number

    it('Should have delete button disabled', ()=>{
        let isDisabled = page.deleteButton.nativeElement.hasAttribute('disabled');
        expect(isDisabled).toBe(false);
      }); // end Should have delete button disabled

      it('Should have all role buttons disabled', ()=>{
        let adminDisabled = page.adminRoleButton.nativeElement.hasAttribute('disabled');
        let instrDisabled = page.instrRoleButton.nativeElement.hasAttribute('disabled');
        let studentDisabled = page.studentRoleButton.nativeElement.hasAttribute('disabled');
        expect(adminDisabled).toBe(true);
        expect(instrDisabled).toBe(true);
        expect(studentDisabled).toBe(true);
      }); // end Should have all role buttons enabled

      it('Should have 2 scenarios', ()=>{
        expect(page.scenarioLabels.length).toBe(2);
        let label1 = page.scenarioLabels[0].innerHTML;
        let label2 = page.scenarioLabels[1].innerHTML;
        expect(label1).toMatch(listOfScenarios[0].label);
        expect(label2).toMatch(listOfScenarios[1].label);
      }); // end Should have 2 scenarios

      it('Should not have access for scenario 1', ()=>{
        // test1 is true, test2 is false
        let access = page.scenarioAccess[0].innerHTML;
        let button = page.scenarioButtons[0].nativeElement.hasAttribute('disabled');
        expect(access).toMatch('Access not granted');
        expect(button).toBe(false);
      }); // end Should have access for scenario 1

      it('Should have access for scenario 2', ()=>{
        // test1 is true, test2 is false
        let access = page.scenarioAccess[1].innerHTML;
         let button = page.scenarioButtons[1].nativeElement.hasAttribute('disabled');
         expect(access).toMatch('Access granted');
        expect(button).toBe(true);
      }); // end Should not have access for scenario 2
    }); // end Test view elements

    describe('Test links', ()=>{

      it('Should have fridge links', ()=>{
        let scenSec = fixture.debugElement.query(By.css('#student-scenarios'));
        let links = getAllRouterLinks(scenSec);
        expect(links.length).toBe(2);
        let link1 = links[0].linkParams[1];
        let link2 = links[1].linkParams[1];
        expect(link1).toBe(listOfScenarios[0].scenCode);
        expect(link2).toBe(listOfScenarios[1].scenCode);
      }); // end Should have fridge links
    }); // end Test links

    describe('Test buttons', ()=>{
      let accessSpy;

      beforeEach(fakeAsync(()=>{
        accessSpy = spyOn(studentService, 'grantScenAccess').and.callThrough();
      })); // end beforeEach

      it('Should grant access for scenario 1 and update page', fakeAsync(()=>{
        let access = page.scenarioAccess[0].innerHTML;
        expect(access).toMatch('Access not granted');
        click(page.scenarioButtons[0]);
        tick();
        fixture.detectChanges();
        page.addElements();
        let didAccess = accessSpy.calls.any();
        expect(didAccess).toBe(true);
        let access1 = page.scenarioAccess[0].innerHTML;
        expect(access1).toMatch('Access granted');
        let button1 = page.scenarioButtons[0].nativeElement.hasAttribute('disabled');
        expect(button1).toBe(true);
      })); // end Should grant access for scenario 2 and update page

    }); // end Test buttons
  }); //end Navigate to admin as admin

}); // end Student Indiv Component

class Page {
  studentName: HTMLElement;
  studentEmail: HTMLElement;
  courseNum: HTMLElement;
  scenarioLabels: HTMLElement[];
  scenarioAccess: HTMLElement[];
  errorMessage: HTMLElement;

  deleteButton: DebugElement;
  adminRoleButton: DebugElement;
  instrRoleButton: DebugElement;
  studentRoleButton: DebugElement;
  scenarioButtons: DebugElement[];

  constructor(){}

  addElements(){
    if(comp.getStudent()){
      this.studentName = recurCSSQuery(fixture.debugElement, ['#student-name', 'h4']);
      this.studentEmail = recurCSSQuery(fixture.debugElement, ['#student-email', '.text-secondary']);
      let tmp = fixture.debugElement.query(By.css('#student-desc'));
      this.courseNum = (tmp ? tmp.query(By.css('a')).nativeElement : null);
      let sc = fixture.debugElement.query(By.css('#student-scenarios'));
      this.scenarioLabels = sc.queryAll(By.css('.scenario-label')).map((de)=>{return de.nativeElement});
      this.scenarioAccess = sc.queryAll(By.css('.text-secondary')).map((de)=>{return de.nativeElement});
      this.scenarioButtons = sc.queryAll(By.css('button'));


      let buttons = fixture.debugElement.queryAll(By.css('button'));
      this.deleteButton = buttons[0];
      this.adminRoleButton = buttons[3];
      this.instrRoleButton = buttons[2];
      this.studentRoleButton = buttons[1];

    }
    let tmp = fixture.debugElement.query(By.css('.alert'));
      if(tmp){
        this.errorMessage = tmp.nativeElement
      } else {
        this.errorMessage = null;
      }
  }
}

function createComponent(isInstr: boolean){
  fixture = TestBed.createComponent(StudentIndivTestComponent);
  comp = fixture.componentInstance;
  authService = TestBed.get(AuthenticationService);
  if(isInstr){
    authService.setUser(userInstr);
  }
  page = new Page();
  fixture.detectChanges(); // trigger ngOnInit
}
