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

// Testing variables
let activatedRoute: ActivatedRouteStub;
let route: RouterStub;
let fixture: ComponentFixture<CourseMendelScenarioTestComponent>;
let comp: CourseMendelScenarioTestComponent;

// Extended Test Component
class CourseMendelScenarioTestComponent extends CourseMendelScenarioComponent{
  getScenario(){
    return this.scenario;
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
        {provide: Router, useValue: route}
      ]
    })
      .compileComponents();
  })); // end beforeEach async

  describe('Test Mendelpede course scenario initial', ()=>{
    
    let testCourse: Course = listOfCourses[0];
    let scenario: MendelpedeScenario = listOfMendelScenarios[0];
    let expectedStudent = {id: 15, name: 'Student1 Tester'};
    let studentService: StudentService;

    beforeEach(fakeAsync(()=>{
      activatedRoute.testParams = {courseNum: testCourse.courseNum,
        scenShortCode: scenario.shortCode};
      createComponent();
      tick();
      addMatchers();
      studentService = fixture.debugElement.injector.get(StudentService);
    })); // end beforeEach fakeAsync
    
    describe('Test initial values', () => {
      
      it('should contain non-null scoremap', () => {
        expect(comp.scoreMap).not.toBeNull();
      }); // end should contain non-null scoremap

    });// end Test initial values

    describe('Test formatting access', () => {
      
      it('should get appropriate formatting access test 1', () => {
        expect(comp.formatAccess(true)).toBe('Access granted');
      });// end should get appropriate formatting access test 1

      it('should get appropriate formatting access test 2', () => {
        expect(comp.formatAccess(false)).toBe('Access not granted');
      });// end should get appropriate formatting access test 2

    }); // end Test formatting access

    describe('Get quiz score for student', () => {
      it('Should get correct quiz score for student', () => {
        expect(comp.getQuizScore('15')).toBe('4');
      }); // end Should get correct quiz score for student
    }); // end Get quiz score for student

  }); // Test Test Mendelpede course scenario initial
}); // end Mendelpede Course Scenario Component

function createComponent(){
  fixture = TestBed.createComponent(CourseMendelScenarioTestComponent);
  comp = fixture.componentInstance;
  fixture.detectChanges(); // trigger ngOnInit
}
