import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Directive, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { RouterLinkStubDirective, getAllRouterLinks } from '../../../testing';

import { CourseListComponent } from './course-list.component';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { CourseService } from '../course.service';

import { User, Course } from '../../../interfaces';
import { userAdmin, userInstr, listOfCourses } from '../../../testing/sample-data';
import { CourseServiceStub } from '../../../testing/service-stubs/fake.course.service';
import { AuthServiceStub } from '../../../testing/service-stubs/fake.authentication.service';

describe('Course List Component', ()=>{
  let fixture: ComponentFixture<CourseListComponent>;
  let authService: AuthenticationService;
   let courseService: CourseService;

    beforeEach(async()=>{
    TestBed.configureTestingModule({
      declarations: [CourseListComponent, RouterLinkStubDirective],
      providers: [
        {provide: AuthenticationService, useClass: AuthServiceStub},
        {provide: CourseService, useClass: CourseServiceStub}
      ]
    }).compileComponents();
  }) // end beforeEach async

  beforeEach(()=>{
    fixture = TestBed.createComponent(CourseListComponent);
    authService = TestBed.get(AuthenticationService);
    courseService = TestBed.get(CourseService);
  }); // end beforeEach

  describe('Test as admin', ()=>{
    let links;
      beforeEach(()=>{
        fixture.detectChanges();
        links = getAllRouterLinks(fixture.debugElement);
      }); // end beforeEach

    it('Should have create link', ()=>{
      let linkEl = links[0];
      expect(linkEl.linkParams[0]).toMatch(/create/);
    }); // end Should have create link

    it('Should have two courses listed', ()=>{
      let courses = fixture.debugElement.queryAll(By.css('.list-group-item'));
      expect(courses.length).toBe(2);
      let courseNums = courses.map((el)=>{return el.nativeElement.textContent});
      expect(courseNums[0]).toBe(listOfCourses[0].courseNum);
      expect(courseNums[1]).toBe(listOfCourses[1].courseNum);
    }); // end Should have two courses listed

    it('Should have correct course links', ()=>{
      let link1 = links[1].linkParams[0];
      let link2 = links[2].linkParams[0];
      expect(link1).toBe(listOfCourses[0].courseNum);
      expect(link2).toBe(listOfCourses[1].courseNum);
    }); // end Should have correct course links
    }); // end Test as admin

  describe('Test as instr', ()=>{
    let links;
      beforeEach(()=>{
        authService.setUser(userInstr)
        courseService.listCourses = ()=>{return Observable.of([listOfCourses[1]])}
        fixture.detectChanges();
        links = getAllRouterLinks(fixture.debugElement);
      }); // end beforeEach

    it('Should have create link', ()=>{
      let linkEl = links[0];
      expect(linkEl.linkParams[0]).toMatch(/create/);
    }); // end Should have create link

    it('Should have one course listed', ()=>{
      let courses = fixture.debugElement.queryAll(By.css('.list-group-item'));
      expect(courses.length).toBe(1);
      let courseNums = courses.map((el)=>{return el.nativeElement.textContent});
     expect(courseNums[0]).toBe(listOfCourses[1].courseNum);
    }); // end Should have one courses listed

    it('Should have correct course link', ()=>{
      let link1 = links[1].linkParams[0];
      expect(link1).toBe(listOfCourses[1].courseNum);
    }); // end Should have correct course link
    }); // end Test as instr

}); // end Course List Component
