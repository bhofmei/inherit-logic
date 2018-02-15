import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Directive, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { Router, RouterStub, ActivatedRoute, ActivatedRouteStub, RouterLinkStubDirective, getAllRouterLinks } from '../../../testing';

import { SharedModule } from '../../../shared/shared.module';
import { CourseIndivComponent } from './course-indiv.component';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { CourseService } from '../course.service';
import { ScenarioService } from '../../../scenario/scenario.service';

import { User, Course, _User, Scenario } from '../../../interfaces';
import { userAdmin, sampleCourse, sampleScenario, listOfCourses } from '../../../testing/sample-data';
import { CourseServiceStub } from '../../../testing/service-stubs/fake.course.service';

// Testing variables
let activatedRoute: ActivatedRouteStub;
let fixture: ComponentFixture<CourseIndivComponent>;
let comp: CourseIndivComponent;
let page: Page;

describe('Course Indiv Component', ()=>{

  beforeEach(async(()=>{
    activatedRoute = new ActivatedRouteStub();
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [CourseIndivComponent, RouterLinkStubDirective],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: CourseService, useClass: CourseServiceStub},
        {provide: AuthenticationService, useClass: AuthServiceStub},
        {provide: ScenarioService, useClass: ScenarioServiceStub},
        {provide: Router, useClass: RouterStub}
      ]
    }).compileComponents();
  })); // end beforeEach async

  describe('Navigate to existing course', ()=>{
    let expected: Course;
    beforeEach(fakeAsync(()=>{
      expected = sampleCourse;
      activatedRoute.testParams = {courseNum: expected.courseNum};
      createComponent();
      tick();
      page.addElements();
    })); // end beforeEach fakeAsync

    it('Should display course number', ()=>{

     let cnt = page.courseNumDisplay.innerHTML;
      cnt = cnt.replace(/^(\s|\n|\t)+|(\s|\n|\t)+$/g, '');

      expect(cnt).toBe(expected.courseNum);
      expect(page.errorMessage).toBe(null);
    }); // end Should display course number

    it('Should display course description', ()=>{
      let des = page.courseDescrDisplay.innerHTML.replace(/^(\n|\t)+|(\n|\t)+$/g, '');
      expect(des).toBe(expected.description);
    });

  }); // end Navigate to existing course

  describe('Navigate to non-existing course', ()=>{
    beforeEach(fakeAsync(()=>{
      activatedRoute.testParams = {courseNum: 'UNKNOWN'};
      createComponent();
      tick();
      fixture.detectChanges();
      page.addElements();
    })); // end beforeEach async

    it('Should have error message', ()=>{
      let m = page.errorMessage.innerHTML;
      expect(m).toMatch(/Failed to load course/);
    });
  }); // end Navigate to non-existing course

  describe('Test router links', ()=>{
    let expected: Course;
    let links;
    beforeEach(fakeAsync(()=>{
      expected = sampleCourse;
      activatedRoute.testParams = {courseNum: expected.courseNum};
      createComponent();
      tick();
      page.addElements();
      links = getAllRouterLinks(fixture.debugElement);
    })); // end beforeEach fakeAsync

    it('Should have edit link', ()=>{
      let linkEl = links[0];
      expect(linkEl.linkParams[0]).toMatch('/edit');
    }); // end Should have edit link

    it('Should have scenario links', ()=>{
      let scenDE = fixture.debugElement.query(By.css('#statusByScenario'));
      let scenLinks = getAllRouterLinks(scenDE);
      expect(scenLinks.length).toBe(1);
      expect(scenLinks[0].linkParams[1]).toBe(sampleScenario.scenCode);

    }); // end Should have scenario links

    it('Should have student links', ()=>{
      let scenDE = fixture.debugElement.query(By.css('#statusByStudent'));
      let scenLinks = getAllRouterLinks(scenDE);
      expect(scenLinks.length).toBe(2);
      expect(scenLinks[0].linkParams[0]).toMatch(/admin\/students/);

    }); // end Should have scenario links
  }); // end Test router links
}); // end Course Indiv Component

// Helpers
class AuthServiceStub {
  getUser(): User {
    return userAdmin;
  }
}

class ScenarioServiceStub {
  listScenarios(): Observable<Scenario[]>{
    return Observable.of([sampleScenario]);
  }
}

class Page {
  courseNumDisplay: HTMLElement;
  courseDescrDisplay: HTMLElement;
  listInstr: HTMLElement[];
  links: RouterLinkStubDirective[];
  errorMessage: HTMLElement;

  constructor(){}

  addElements(){
    if(comp.courseInfo){
      let tmp = fixture.debugElement.query(By.css('#course-name'));
      this.courseNumDisplay = tmp.query(By.css('h4')).nativeElement;
      tmp = fixture.debugElement.query(By.css('#course-desc'));
      this.courseDescrDisplay = tmp.query(By.css('.text-secondary')).nativeElement;
      tmp = fixture.debugElement.query(By.css('#course-instr'));
      this.listInstr = tmp.queryAll(By.css('.text-secondary')).map((de)=>{return de.nativeElement});
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
  fixture = TestBed.createComponent(CourseIndivComponent);
  comp = fixture.componentInstance;
  page = new Page();
  fixture.detectChanges(); // trigger ngOnInit
}
