// <reference path="../../../jasmine.matchers.d.ts" />
import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Directive, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { Router, RouterStub, ActivatedRoute, ActivatedRouteStub,RouterLinkStubDirective,  getAllRouterLinks, recurCSSQuery, addMatchers, click } from '../../../testing';

import { SharedModule } from '../../../shared/shared.module';
import { CourseMendelScenarioComponent } from './course-mendel-scenario.component';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { CourseService } from '../course.service';
import { MendelpedeScenarioService } from '../../../mendelpede/scenarios/mendelpede-scenarios.service';
import { StudentService } from '../../student/student.service';

import { User, Course, _User, MendelpedeScenario } from '../../../interfaces';
import { userAdmin, sampleCourse, listOfCourses } from '../../../testing/sample-data';
import { listOfMendelScenarios } from '../../../testing/mendelpede-sample-data';
import { CourseServiceStub, AuthServiceStub, StudentServiceStub } from '../../../testing/service-stubs';
import { MendelpedeServiceStub } from '../../../testing/service-stubs';
import {PersonNamePipe} from '../../../pipes/person-name.pipe'

// Testing variables
let activatedRoute: ActivatedRouteStub;
let route: RouterStub;
let fixture: ComponentFixture<CourseMendelScenarioTestComponent>;
let comp: CourseMendelScenarioTestComponent;
let page: Page;

// Extended Test Component
class CourseMendelScenarioTestComponent extends CourseMendelScenarioComponent{
  getScenario(){
    return this.scenario;
  }
  isCourseNumScen(){
    return (this.scenario && this.courseNum);
  }
}

describe('Mendelpede Course Scenario Component', ()=>{
  beforeEach(async(()=>{
    activatedRoute = new ActivatedRouteStub();
    route = new RouterStub();
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [CourseMendelScenarioTestComponent, RouterLinkStubDirective],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: CourseService, useClass: CourseServiceStub},
        {provide: AuthenticationService, useClass: AuthServiceStub},
        {provide: StudentService, useClass: StudentServiceStub},
        {provide: MendelpedeScenarioService, useClass: MendelpedeServiceStub},
        {provide: Router, useValue: route},
        {provide: PersonNamePipe, useValue: PersonNamePipe}
      ]
    })
      .compileComponents();
  })); // end beforeEach async

  describe('Test Mendelpede course scenario initial', ()=>{

    let testCourse: Course = listOfCourses[0];
    let scenario: MendelpedeScenario = listOfMendelScenarios[3];
    let expectedStudent = {id: 15, name: 'Student1 Tester'};
    let studentService: StudentService;

    beforeEach(fakeAsync(()=>{
      activatedRoute.testParams = {courseNum: testCourse.courseNum,
        scenShortCode: scenario.shortCode};
      createComponent();
      tick();
      page.addElements();
      addMatchers();
      studentService = fixture.debugElement.injector.get(StudentService);
    })); // end beforeEach fakeAsync

    describe('Test initial values', () => {

      it('should contain course number', () => {
        expect(page.courseNum).toBe(testCourse.courseNum);
      }); // end should contain course number

      it('should contain scenario code', () => {
        expect(page.scenarioCode).toBe(scenario.shortCode);
      }); // end should contain scenario code

      it('should contain scenario label', () => {
        expect(page.scenarioLabel).toBe(scenario.label);
      }); // end should contain scenario label

      it('should contain student name', () => {
        expect(page.studentName).toBe(expectedStudent.name);
      }); // end should contain student name

      it('should contain quiz score', () => {
        expect(page.quizScore).toContain('Score: 4');
      }); // end should contain quiz scores

      it('Should navigate to student mendel fridge', fakeAsync(()=>{
        click(page.goToFridgeButton);
        tick();
        let pathNav = route.path;
        expect(pathNav).toBe('/admin/students/'+expectedStudent.id + '/mendelpede/' + scenario.shortCode);
      }));

    });// end Test initial values

  }); // Test Test Mendelpede course scenario initial
}); // end Mendelpede Course Scenario Component

class Page {
  courseNum: string;
  scenarioCode: string;
  scenarioLabel: string;
  studentName: string;
  quizScore: string;

  goToFridgeButton: DebugElement;
  errorMessage: HTMLElement;

  constructor(){}

  addElements(){
    if(comp.getScenario()){
      if(comp.isCourseNumScen()){
        this.courseNum = fixture.debugElement.query(By.css('#info')).query(By.css('#courseNumber')).query(By.css('.text-dark')).query(By.css('h4')).nativeElement.innerHTML;
        this.scenarioCode = fixture.debugElement.query(By.css('#info')).query(By.css('#scenario-info')).query(By.css('.text-primary')).nativeElement.innerHTML;
        this.scenarioLabel = fixture.debugElement.query(By.css('#info')).query(By.css('#scenario-info')).query(By.css('.text-secondary')).nativeElement.innerHTML;
        this.studentName = fixture.debugElement.query(By.css('#info')).query(By.css('.list-group')).query(By.css('.list-group-item')).query(By.css('.access-status')).query(By.css('.student-label')).nativeElement.innerHTML;
        this.quizScore = fixture.debugElement.query(By.css('#info')).query(By.css('.list-group')).query(By.css('.list-group-item')).query(By.css('.btn-group')).query(By.css('.text-secondary')).nativeElement.innerHTML;
        this.goToFridgeButton = fixture.debugElement.queryAll(By.css('button'))[0];
    }
    let tmp = fixture.debugElement.query(By.css('.alert'));
      if(tmp){
        this.errorMessage = tmp.nativeElement
      } else {
        this.errorMessage = null;
      }
      }
  }

}

function createComponent(){
  fixture = TestBed.createComponent(CourseMendelScenarioTestComponent);
  comp = fixture.componentInstance;
  page = new Page();
  fixture.detectChanges(); // trigger ngOnInit
}
