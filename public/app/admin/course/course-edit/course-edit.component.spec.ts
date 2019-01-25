import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Directive, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { Router, RouterStub, ActivatedRoute, ActivatedRouteStub, RouterLinkStubDirective, getAllRouterLinks, recurCSSQuery, click, newEvent } from '../../../testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';
import { CourseEditComponent } from './course-edit.component';
import { ConfirmDeleteDialogComponent } from '../../../shared/confirm-delete-dialog.component';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { CourseService } from '../course.service';

import { User, Course, AdminStudent, _User } from '../../../interfaces';
import { listOfCourses } from '../../../testing/sample-data';
import { AuthServiceStub, CourseServiceStub } from '../../../testing/service-stubs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

let activatedRoute: ActivatedRouteStub;
let route: RouterStub;
let fixture: ComponentFixture<CourseEditComponent>;
let comp: CourseEditComponent;
let page: Page;

let testCourse: Course = listOfCourses[0];

class CourseEditTestComponent extends CourseEditComponent {
  // override so we don't have to deal with modal in testing
  deleteCourse(){
    this._callDeleteCourse();
  }
  deleteCourseStudents(){
    this._callDeleteCourseStudents();
  }
}

describe('Course Edit Component', ()=>{
  beforeEach(async(()=>{
    activatedRoute = new ActivatedRouteStub();
    route = new RouterStub();
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [CourseEditTestComponent, RouterLinkStubDirective],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: CourseService, useClass: CourseServiceStub},
        {provide: AuthenticationService, useClass: AuthServiceStub},
        {provide: Router, useValue: route}
      ]
    })
      .compileComponents();
  })); // end beforeEach async

  describe('Has course information', ()=>{
    beforeEach(fakeAsync(()=>{
      activatedRoute.testParams = {courseNum: testCourse.courseNum};
      createComponent();
      tick();
      page.addElements();
    })); // end beforeEach fakeAsync

    it('Should have course number', ()=>{
      let cnt = page.courseNumDisplay.innerHTML;
      cnt = cnt.replace(/^(\s|\n|\t)+|(\s|\n|\t)+$/g, '');

      expect(cnt).toBe(testCourse.courseNum);
    }); // end should have course number

    it('Should have description', ()=>{
      let dec = page.courseDescrTextArea;
      expect(dec.value).toBe(testCourse.description);
    }); // end Should have description

    it('Should have instructor', ()=>{
      let l = page.listInstr;
      let inst = l[0].innerHTML;
      expect(l.length).toBe(1); // 1
      expect(inst).toBe('Instr Tester');
    }); // end Should have instructor

    it('Should have possible instructors', ()=>{
      let i = page.instrAdd;
      let inst = i[1].innerHTML;
      expect(i.length).toBe(2);
      expect(inst).toBe('Tester, Add');
    }); // end Should have possible instructors
  }); // end Has course information

  describe('Edit description', ()=>{
    let editedDesc = 'Updated description';
    let cService, updateSpy;
    beforeEach(fakeAsync(()=>{
      activatedRoute.testParams = {courseNum: testCourse.courseNum};
      createComponent();
      tick();
      page.addElements();
      page.courseDescrTextArea.value = editedDesc;
      cService = fixture.debugElement.injector.get(CourseService);
      updateSpy = spyOn(cService, 'editCourse').and.callThrough();
    })); // end beforeEach fakeAsync

    it('Should update on "Submit"', ()=>{

      click(page.submitButton);
      let didUpdate = updateSpy.calls.any();
      expect(didUpdate).toBe(true);
    }); // end Should spy on update when click save

    it('Should save and navigate on "Submit"', fakeAsync(()=>{
      click(page.submitButton);
      tick();
      //let didNavigate = page.navSpy.calls.any();
      let pathNav = route.path;
      expect(pathNav).toBe('../');
    })); // end Should save and navigate when click save

    it('Should navigate on "Cancel"', fakeAsync(()=>{
      click(page.cancelButton);
      tick();
      let pathNav = route.path;
      expect(pathNav).toBe('../');
      let didUpdate = updateSpy.calls.any();
      expect(didUpdate).toBe(false);
    })); // end Should navigate on Cancel

  }); // end Edit description

  describe('Add instructor', ()=>{
    let cService, addSpy;
    beforeEach(fakeAsync(()=>{
      activatedRoute.testParams = {courseNum: testCourse.courseNum};
      createComponent();
      tick();
      page.addElements();
      cService = fixture.debugElement.injector.get(CourseService);
      addSpy = spyOn(cService, 'addInstructor').and.callThrough();
    })); // end beforeEach fakeAsync

    it('Should add instructor on "Add"', fakeAsync(()=>{
      comp.selectedAdd = 5;
      fixture.detectChanges();
      click(page.addInstrButton);
      let didAdd = addSpy.calls.any();
      expect(didAdd).toBe(true);
    })); // end Should add instructor on Add

    it('Should remove potential instructor from list', fakeAsync(()=>{
      comp.selectedAdd = 5;
      click(page.addInstrButton);
      tick();
      fixture.detectChanges();
      page.addElements();
      let list = page.instrAdd;
      expect(list.length).toBe(1);
    })); // end Should remove potential instructor from list

    it('Should add instructor to list', fakeAsync(()=>{
      comp.selectedAdd = 5;
      click(page.addInstrButton);
      tick();
      fixture.detectChanges();
      page.addElements();
      let instructors = page.listInstr;
      expect(instructors.length).toBe(2);
    })); // end Should add instructor to list
  }); // end Add instructor

  describe('Delete course', ()=>{
    let cService, delSpy;
    beforeEach(fakeAsync(()=>{
      activatedRoute.testParams = {courseNum: testCourse.courseNum};
      createComponent();
      tick();
      page.addElements();
      cService = fixture.debugElement.injector.get(CourseService);
      delSpy = spyOn(cService, 'deleteCourse').and.callThrough();
    })); // end beforeEach fakeAsync

    it('Should delete on click "Delete"', fakeAsync(()=>{
      click(page.deleteButton);
      let didDel = delSpy.calls.any();
      expect(didDel).toBe(true);
    })); // end Should delete on click Delete

    it('Should navigate after click "Delete"', fakeAsync(()=>{
      click(page.deleteButton);
      tick();
      let pathNav = route.path;
      expect(pathNav).toBe('/admin/courses');
    })); // end Should navigate after click Delete
  }); // end Delete course

 describe('Delete course students', ()=>{
    let cService, delStuSpy;
    beforeEach(fakeAsync(()=>{
      activatedRoute.testParams = {courseNum: testCourse.courseNum};
      createComponent();
      tick();
      page.addElements();
      cService = fixture.debugElement.injector.get(CourseService);
      delStuSpy = spyOn(cService, 'deleteStudents').and.callThrough();
    })); // end beforeEach fakeAsync

    it('Should delete on click "Delete students"', fakeAsync(()=>{
      click(page.deleteStudentsButton);
      let didDel = delStuSpy.calls.any();
      expect(didDel).toBe(true);
    })); // end Should delete on click Delete students

    it('Should navigate after click "Delete students"', fakeAsync(()=>{
      click(page.deleteStudentsButton);
      tick();
      let pathNav = route.path;
      expect(pathNav).toBe('/admin/courses/'+testCourse.courseNum);
    })); // end Should navigate after click Delete students
  }); // end Delete course students

}); // end Course Edit Component

class Page {
  courseNumDisplay: HTMLElement;
  courseDescrTextArea: HTMLTextAreaElement;
  listInstr: HTMLElement[];
  instrAdd: HTMLElement[];
  links: RouterLinkStubDirective[];
  errorMessage: HTMLElement;

  addInstrButton: DebugElement;
  submitButton: DebugElement;
  cancelButton: DebugElement;
  deleteButton: DebugElement;
  deleteStudentsButton: DebugElement;

  constructor(){
  }

  addElements(){
    if(comp.courseInfo){
      this.courseNumDisplay = recurCSSQuery(fixture.debugElement, ['#course-info', 'h4']);
      this.courseDescrTextArea = fixture.debugElement.query(By.css('#desc-input')).nativeElement;
      let buttons = fixture.debugElement.queryAll(By.css('button'));
      this.addInstrButton = buttons[0];
      this.submitButton = buttons[1];
      this.cancelButton = buttons[2];
      this.deleteButton = buttons[3];
      this.deleteStudentsButton = buttons[4];
      this.listInstr = fixture.debugElement.query(By.css('#currInstructors'))
        .queryAll(By.css('.ml-2')).map((de)=>{return de.nativeElement});
      this.instrAdd = fixture.debugElement.query(By.css('#addInstructor'))
        .queryAll(By.css('option')).map((de)=>{return de.nativeElement});
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
  fixture = TestBed.createComponent(CourseEditTestComponent);
  comp = fixture.componentInstance;
  page = new Page();
  fixture.detectChanges(); // trigger ngOnInit
}
