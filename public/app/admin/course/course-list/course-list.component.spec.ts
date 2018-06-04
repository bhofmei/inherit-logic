import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Directive, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { Router, RouterStub, ActivatedRoute, ActivatedRouteStub, RouterLinkStubDirective, getAllRouterLinks, recurCSSQuery, click } from '../../../testing';

import { CourseListComponent } from './course-list.component';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { CourseService } from '../course.service';

import { User, Course } from '../../../interfaces';
import { userInstr, listOfCourses } from '../../../testing/sample-data';
import { CourseServiceStub, AuthServiceStub } from '../../../testing/service-stubs';

// testing variables
let fixture: ComponentFixture<CourseListComponent>;
let comp: CourseListComponent;
let page: Page;
let authService: AuthenticationService;
let courseService: CourseService;

describe('Course List Component', ()=>{
  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      declarations: [CourseListComponent, RouterLinkStubDirective],
      providers: [
        {provide: AuthenticationService, useClass: AuthServiceStub},
        {provide: CourseService, useClass: CourseServiceStub}
      ]
    }).compileComponents();
  })); // end beforeEach async

  describe('Test as admin',()=>{
    beforeEach(fakeAsync(()=>{
      createComponent(false);
      tick();
      page.addElements();
    })); // end beforeEach fakeAsync

    it('Should have 2 courses', ()=>{
      expect(page.courses.length).toBe(2);
    }); // end Should have 2 courses

    it('Should have correct course numbers', ()=>{
      expect(page.courses[0])
        .toMatch(listOfCourses[0].courseNum);
      expect(page.courses[1])
        .toMatch(listOfCourses[1].courseNum);
    }); // end Should have correct course numbers

    it('Should have 3 links', ()=>{
      expect(page.links.length).toBe(3);
    }); // end Should hae 3 links

    it('Should have create link', ()=>{
      let linkEl = page.links[0];
      expect(linkEl.linkParams[0]).toMatch(/create/);
    }); // end Should have create link

    it('Should have correct course links', ()=>{
      let link1 = page.links[1].linkParams[0];
      let link2 = page.links[2].linkParams[0];
      expect(link1).toBe(listOfCourses[0].courseNum);
      expect(link2).toBe(listOfCourses[1].courseNum);
    }); // end Should have correct course links
  }); // end Test as admin

  describe('Test as instr', ()=>{
    beforeEach(fakeAsync(()=>{
      createComponent(true);
      tick();
      page.addElements();
    })); // end beforeEach fakeAsync

    it('Should have 1 course', ()=>{
      expect(page.courses.length).toBe(1);
    }); // end Should have 1 course

     it('Should have correct course number', ()=>{
      expect(page.courses[0])
        .toMatch(listOfCourses[0].courseNum);
    }); // end Should have correct course number

    it('Should have 2 links', ()=>{
      expect(page.links.length).toBe(2);
    }); // end Should have 2 links

    it('Should have create link', ()=>{
      let linkEl = page.links[0];
      expect(linkEl.linkParams[0]).toMatch(/create/);
    }); // end Should have create link

    it('Should have correct course link', ()=>{
      let link1 = page.links[1].linkParams[0];
      expect(link1).toBe(listOfCourses[0].courseNum);
    }); // end Should have correct course link
  }); // end Test as instr
}); // end Course List Component

class Page {
  courses: HTMLElement[];
  links: any[];

  constructor(){}

  addElements(){
    this.courses = fixture.debugElement.queryAll(By.css('.list-group-item')).map((el)=>{return el ? el.nativeElement.innerHTML : null;});
    if(fixture){
      this.links = getAllRouterLinks(fixture.debugElement);
    }
  }
}

function createComponent(isInstr: boolean){
  fixture = TestBed.createComponent(CourseListComponent);
  comp = fixture.componentInstance;
  authService = TestBed.get(AuthenticationService);
  courseService = TestBed.get(CourseService);
  if(isInstr){
    authService.setUser(userInstr);
    courseService.listCourses = ()=>{return Observable.of([listOfCourses[0]])};
  }
  page = new Page();
  fixture.detectChanges();
}
