import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Directive, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { Router, RouterStub, ActivatedRoute, ActivatedRouteStub, RouterLinkStubDirective, getAllRouterLinks, recurCSSQuery, click } from '../../../testing';

import { SharedModule } from '../../../shared/shared.module';
import { StudentMendelFridgeComponent } from './student-mendel-fridge.component';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { StudentService } from '../student.service';
import { CricketService } from '../../../cricket/cricket.service';
import { PhageGuessesPipe, PhageMutationsPipe, PhageDeletionsPipe } from '../../../pipes/phage.pipes';

import { User, AdminStudent, _User, MendelpedeScenario } from '../../../interfaces';
import { userAdmin, userInstr, sampleCourse, listOfCourses, listOfStudents, listOfUsers } from '../../../testing/sample-data';
import { listOfMendelScenarios } from '../../../testing/mendelpede-sample-data';
import { StudentServiceStub, AuthServiceStub, CricketServiceStub } from '../../../testing/service-stubs';

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

describe('Student Mendel Fridge Component', ()=>{
  beforeEach(async(()=>{
    activatedRoute = new ActivatedRouteStub();
     route = new RouterStub();
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [StudentMendelFridgeTestComponent, RouterLinkStubDirective, PhageGuessesPipe, PhageMutationsPipe, PhageDeletionsPipe],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: StudentService, useClass: StudentServiceStub},
        {provide: AuthenticationService, useClass: AuthServiceStub},
        {provide: CricketService, useClass: CricketServiceStub},
        {provide: Router, useValue: route}
      ]
    }).compileComponents();
  })); // end beforeEach async

  describe('Test existing fridge', ()=>{
    let expectedStudent: AdminStudent;
    let expectedScenario: MendelpedeScenario;
    let studentService: StudentService;
    beforeEach(fakeAsync(()=>{
      expectedStudent = listOfStudents[0];
      expectedScenario = listOfMendelScenarios[0];
      activatedRoute.testParams = {studentId: expectedStudent.userId, scenShortCode: expectedScenario.shortCode};
      createComponent();
      tick();
      studentService = fixture.debugElement.injector.get(StudentService);
    })); // end beforeEach fakeAsync

    describe('Test view elements', ()=>{
      it('Should have student name', ()=>{
        expect(this.comp.studentId).toBe(expectedStudent.userId);
      }); // end Should have student name
    }); // end Test view elements
  }); // end Test existing fridge
}); // end Student Mendel Fridge Component

function createComponent(){
  fixture = TestBed.createComponent(StudentMendelFridgeTestComponent);
  comp = fixture.componentInstance;
  fixture.detectChanges(); // trigger ngOnInit
}
