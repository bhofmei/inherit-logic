// <reference path="../../../jasmine.matchers.d.ts" />
import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Directive, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { Router, RouterStub, ActivatedRoute, ActivatedRouteStub,RouterLinkStubDirective,  getAllRouterLinks, recurCSSQuery, addMatchers, click } from '../../../testing';

import { SharedModule } from '../../../shared/shared.module';
import { CourseScenarioComponent } from './course-scenario.component';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { CourseService } from '../course.service';
import { ScenarioService } from '../../../scenario/scenario.service';
import { StudentService } from '../../student/student.service';

import { User, Course, _User, Scenario } from '../../../interfaces';
import { userAdmin, sampleCourse, listOfScenarios, listOfCourses } from '../../../testing/sample-data';
import { CourseServiceStub, AuthServiceStub, StudentServiceStub, ScenarioServiceStub } from '../../../testing/service-stubs';

// Testing variables
let activatedRoute: ActivatedRouteStub;
let route: RouterStub;
let fixture: ComponentFixture<CourseScenarioTestComponent>;
let comp: CourseScenarioTestComponent;
let page: Page;

// Extended Test Component
class CourseScenarioTestComponent extends CourseScenarioComponent{
  getScenario(){
    return this.scenario;
  }
}

describe('Course Scenario Component', ()=>{
  beforeEach(async(()=>{
    activatedRoute = new ActivatedRouteStub();
    route = new RouterStub();
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [CourseScenarioTestComponent, RouterLinkStubDirective],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: CourseService, useClass: CourseServiceStub},
        {provide: AuthenticationService, useClass: AuthServiceStub},
        {provide: StudentService, useClass: StudentServiceStub},
        {provide: ScenarioService, useClass: ScenarioServiceStub},
        {provide: Router, useValue: route}
      ]
    })
      .compileComponents();
  })); // end beforeEach async

  describe('Test existing course and scenario with access', ()=>{
    let testCourse: Course = listOfCourses[0];
    let scenario: Scenario = listOfScenarios[0];
    let expectedStudent = {id: 15, name: 'Student1 Tester'};
    let studentService: StudentService;
    beforeEach(fakeAsync(()=>{
      activatedRoute.testParams = {courseNum: testCourse.courseNum,
                                  scenId: scenario.scenCode};
      createComponent();
      tick();
      page.addElements();
      addMatchers();
      studentService = fixture.debugElement.injector.get(StudentService);
    })); // end beforeEach fakeAsync

    describe('Test view elements', ()=>{
      it('Should have course number', ()=>{
        expect(page.courseNum.innerHTML).toTemplateMatch(testCourse.courseNum);
      }); // end

      it('Should have scenario info', ()=>{
        expect(page.scenarioCode.innerHTML).toTemplateMatch(scenario.scenCode);
        expect(page.scenarioLabel.innerHTML).toTemplateMatch(scenario.label);
      }); // end

      it('Should have 1 student, access granted',  ()=>{
        let students = page.studentList;
        expect(students.length).toBe(1);
        // check name
        let name = students[0].query(By.css('span')).nativeElement.innerHTML;
        expect(name).toTemplateMatch(expectedStudent.name+':');
        // fetch access status
        let status = students[0].query(By.css('.access-status')).nativeElement.innerHTML;
        expect(status).toMatch('Access granted');
      }); // end Should have 1 student, access granted

    }); // end Test view elements

    describe('Test buttons', ()=>{

      it('Should have grant access button disabled', ()=>{
        let isDisabled = page.accessButton.nativeElement.hasAttribute('disabled');
        expect(isDisabled).toBe(true);
      }); // end Should have grant access button disabled

      it('Should navigate to student fridge', fakeAsync(()=>{
        click(page.fridgeButton);
        tick();
        let pathNav = route.path;
        expect(pathNav).toBe('/admin/students/'+expectedStudent.id + '/' + scenario.scenCode);
      }));
    }); // end Test buttons
  }); // end Test existing course and scenario with access

  describe('Test existing course and scenario without access', ()=>{
    let testCourse: Course = listOfCourses[0];
    let scenario: Scenario = listOfScenarios[1];
    let expectedStudent = {id: 15, name: 'Student1 Tester'};
    let studentService: StudentService;
    beforeEach(fakeAsync(()=>{
      activatedRoute.testParams = {courseNum: testCourse.courseNum,
                                  scenId: scenario.scenCode};
      createComponent();
      tick();
      page.addElements();
      addMatchers();
      studentService = fixture.debugElement.injector.get(StudentService);
    })); // end beforeEach fakeAsync

    describe('Test view elements', ()=>{
      it('Should have course number', ()=>{
        expect(page.courseNum.innerHTML).toTemplateMatch(testCourse.courseNum);
      }); // end

      it('Should have scenario info', ()=>{
        expect(page.scenarioCode.innerHTML).toTemplateMatch(scenario.scenCode);
        expect(page.scenarioLabel.innerHTML).toTemplateMatch(scenario.label);
      }); // end

      it('Should have 1 student, access not granted',  ()=>{
        let students = page.studentList;
        expect(students.length).toBe(1);
        // check name
        let name = students[0].query(By.css('span')).nativeElement.innerHTML;
        expect(name).toTemplateMatch(expectedStudent.name+':');
        // fetch access status
        let status = students[0].query(By.css('.access-status')).nativeElement.innerHTML;
        expect(status).toMatch('Access not granted');
      }); // end Should have 1 student, access not granted

    }); // end Test view elements

    describe('Test buttons', ()=>{
      let accessSpy;

      beforeEach(fakeAsync(()=>{
        accessSpy = spyOn(studentService, 'grantScenAccess').and.callThrough();
      })); // end beforeEach

      it('Should grant access', fakeAsync(()=>{
        let students = page.studentList;
        click(page.accessButton);
        tick();
        fixture.detectChanges();
        page.addElements();
        let didAccess = accessSpy.calls.any();
        expect(didAccess).toBe(true);
        let status = students[0].query(By.css('.access-status')).nativeElement.innerHTML;
        expect(status).toMatch('Access granted');
      })); // end Should grant access

      it('Should navigate to student fridge', fakeAsync(()=>{
        click(page.fridgeButton);
        tick();
        let pathNav = route.path;
        expect(pathNav).toBe('/admin/students/'+expectedStudent.id + '/' + scenario.scenCode);
      })); // end Should navigate to student fridge
    }); // end Test buttons
  }); // end Test existing course and scenario without access

  describe('Test non-existing course and existing scenario', ()=>{
    //Failed to load course
    let scenario: Scenario = listOfScenarios[1];
    beforeEach(fakeAsync(()=>{
      activatedRoute.testParams = {courseNum: 'NONE',
                                  scenId: scenario.scenCode};
      createComponent();
      tick();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync

    it('Should have error message', ()=>{
      let errorMessage = page.errorMessage.innerHTML;
      expect(errorMessage).toTemplateMatch('Failed to load course NONE');
    }); // end Should have error message
  }); // end Test non-existing course and existing scenario

    describe('Test existing course and non-existing scenario', ()=>{
    //Failed to load course
    let testCourse: Course = listOfCourses[0];
    beforeEach(fakeAsync(()=>{
      activatedRoute.testParams = {courseNum: testCourse.courseNum,
                                  scenId:'CODE'};
      createComponent();
      tick();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync

    it('Should have error message', ()=>{
      let errorMessage = page.errorMessage.innerHTML;
      expect(errorMessage).toTemplateMatch('Failed to load scenario CODE');
    }); // end Should have error message
  }); // end Test existing course and non-existing scenario

}); // end Course Scenario Component


class Page {
  courseNum: HTMLElement;
  scenarioCode: HTMLElement;
  scenarioLabel: HTMLElement;

  studentList: DebugElement[];

  accessButton: DebugElement;
  fridgeButton: DebugElement;
  errorMessage: HTMLElement;

  constructor(){}

  addElements(){
    if(comp.getScenario()){
      this.courseNum = recurCSSQuery(fixture.debugElement, ['#info', 'h4']);
      let tmp = fixture.debugElement.query(By.css('#scenario-info'));
      this.scenarioCode = tmp.query(By.css('.text-primary')).nativeElement;
      this.scenarioLabel = tmp.query(By.css('.text-secondary')).nativeElement;

      this.studentList = fixture.debugElement.queryAll(By.css('.list-group-item'));

      let buttons = fixture.debugElement.queryAll(By.css('button'));
      this.accessButton = buttons[0];
      this.fridgeButton = buttons[1];
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
  fixture = TestBed.createComponent(CourseScenarioTestComponent);
  comp = fixture.componentInstance;
  page = new Page();
  fixture.detectChanges(); // trigger ngOnInit
}
