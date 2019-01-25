import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Directive, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { RouterLinkStubDirective, getAllRouterLinks } from '../../../testing';

import { SharedModule } from '../../../shared/shared.module';
import { StudentListComponent } from './student-list.component';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { StudentService } from '../student.service';

import { AdminStudent, Course } from '../../../interfaces';
import { userAdmin, userInstr, listOfUsers } from '../../../testing/sample-data';
import { StudentServiceStub, AuthServiceStub } from '../../../testing/service-stubs';

describe('Student List Component', ()=>{
  let fixture: ComponentFixture<StudentListComponent>;
  let authService: AuthenticationService;
  let studentService: StudentService;

  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [StudentListComponent, RouterLinkStubDirective],
      providers: [
        {provide: AuthenticationService, useClass: AuthServiceStub},
        {provide: StudentService, useClass: StudentServiceStub}
      ]
    }).compileComponents();
  })); // end beforeEach async
  beforeEach(()=>{
    fixture = TestBed.createComponent(StudentListComponent);
    authService = TestBed.get(AuthenticationService);
    studentService = TestBed.get(StudentService);
  }); // end beforeEach

  describe('Test as admin', ()=>{
    let links;
    beforeEach(()=>{
      fixture.detectChanges();
      links = getAllRouterLinks(fixture.debugElement);
    }); // end beforeEaach

    it('Should have 5 users', ()=>{
      let students = fixture.debugElement.queryAll(By.css('.list-group-item')).map((de)=>{return de.nativeElement});
      expect(students.length).toBe(5);
    }); // end Should have 3 students

    it('Should have the correct names', ()=>{
      let studentNames = fixture.debugElement.queryAll(By.css('.text-primary')).map((de)=>{return de.nativeElement.innerHTML});
      expect(studentNames[0]).toBe('Tester, Admin');
      expect(studentNames[1]).toBe('Tester, Instr');
      expect(studentNames[2]).toBe('Tester, Student1');
      expect(studentNames[3]).toBe('Tester, Student2');
      expect(studentNames[4]).toBe('ZTester, Student3');
    }); // end Should have the correct names

    it('Should have correct links', ()=>{
      expect(links.length).toBe(5);
      for(let i = 0; i <5; i++){
        let link = links[i].linkParams[0];
        expect(link).toBe(listOfUsers[i].userId);
      }
    }); // end Should have correct links
  }); // end Test as admin

  describe('Test as instr', ()=>{
    let links;
      beforeEach(()=>{
        authService.setUser(userInstr)
        studentService.listStudents = ()=>{return Observable.of(listOfUsers.slice(4,5))}
        fixture.detectChanges();
        links = getAllRouterLinks(fixture.debugElement);
      }); // end beforeEach

    it('Should have 1 student', ()=>{
      let students = fixture.debugElement.queryAll(By.css('.list-group-item')).map((de)=>{return de.nativeElement});
      expect(students.length).toBe(1);
    }); // end Should have 1 student

    it('Should have the correct names', ()=>{
      let studentNames = fixture.debugElement.queryAll(By.css('.text-primary')).map((de)=>{return de.nativeElement.innerHTML});
      expect(studentNames[0]).toBe('ZTester, Student3');
    }); // end Should have the correct names

    it('Should have correct links', ()=>{
      expect(links.length).toBe(1);
      let link = links[0].linkParams[0];
      expect(link).toBe(listOfUsers[4].userId);
    }); // end Should have correct links
  }); // end Test as instr

}); // end Student List Component
