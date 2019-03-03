import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Directive, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs';
import { Router, RouterStub, ActivatedRoute, ActivatedRouteStub, RouterLinkStubDirective, getAllRouterLinks, recurCSSQuery, click, addMatchers } from '../../testing';
import * as _ from 'lodash';

import { SharedModule } from '../../shared/shared.module';
import { OptionsComponent } from './options.component';
import { MendelpedeScenarioService } from '../scenarios/mendelpede-scenarios.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { CourseService } from '../../admin/course/course.service'

import { MendelpedeFridge, MendelpedePede, MendelpedeScenario } from '../../interfaces';
import { listOfMendelpedes, listOfScenarios } from '../../testing/mendelpede-sample-data';
import { MendelpedeServiceStub, AuthServiceStub, CourseServiceStub  } from '../../testing/service-stubs';

class MendelpedeOptionsTestComponent extends OptionsComponent {
  // so we have access to internal properties
}

// Testing variables
let fixture: ComponentFixture<MendelpedeOptionsTestComponent>;
let comp: MendelpedeOptionsTestComponent;
let activateRoute: ActivatedRouteStub;
let route: RouterStub;


describe('Mendelpede Options Component', () => {
  beforeEach(async(() => {
    activateRoute = new ActivatedRouteStub();
    route = new RouterStub();
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [MendelpedeOptionsTestComponent],
      providers: [
        { provide: MendelpedeScenarioService, useClass: MendelpedeServiceStub },
        { provide: AuthenticationService, useClass: AuthServiceStub },
        { provide: ActivatedRoute, useValue: activateRoute},
        { provide: Router, useValue: route},
        { provide: CourseService, useClass: CourseServiceStub}
      ]
    }).compileComponents();
  })); // end beforeEach async
  
  describe('Test all options', () => {
    let scenario: MendelpedeScenario;
    
    beforeEach(fakeAsync(() => {
      createComponent();
      //comp.dropPhageBact({ dragData: dropPhage }, 'B');
      tick();
      fixture.detectChanges();
    })); // end beforeEach fakeAsync

    it('should have 12 scenarios', () => {
      expect(comp.scenarios.length).toBe(12);
    }) // end should have 6 mendelpedes test1

  }); // end Test Fridge initial UI
}); // end Mendelpede Options Component

function createComponent() {
  fixture = TestBed.createComponent(MendelpedeOptionsTestComponent);
  comp = fixture.componentInstance;
  fixture.detectChanges(); // trigger ngOnInit
}
