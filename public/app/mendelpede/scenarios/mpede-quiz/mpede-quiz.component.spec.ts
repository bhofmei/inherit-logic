import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Directive, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs';
import { Router, RouterStub, ActivatedRoute, ActivatedRouteStub, RouterLinkStubDirective, getAllRouterLinks, recurCSSQuery, click, addMatchers } from '../../../testing';
import * as _ from 'lodash';

import { SharedModule } from '../../../shared/shared.module';
import { MendelpedeQuizComponent } from './mpede-quiz.component';
import { MendelpedeScenarioService } from '../mendelpede-scenarios.service';
import { AuthenticationService } from '../../../authentication/authentication.service';

import { MendelpedeFridge, MendelpedePede, MendelpedeScenario } from '../../../interfaces';
import { listOfMendelpedes, listOfMendelScenarios } from '../../../testing/mendelpede-sample-data';
import { MendelpedeServiceStub, AuthServiceStub  } from '../../../testing/service-stubs';

class MendelpedeQuizTestComponent extends MendelpedeQuizComponent {
  // so we have access to internal properties
}

// Testing variables
let fixture: ComponentFixture<MendelpedeQuizTestComponent>;
let comp: MendelpedeQuizTestComponent;
let activateRoute: ActivatedRouteStub;
let route: RouterStub;


describe('Mendelpede Quiz Component', () => {
  beforeEach(async(() => {
    activateRoute = new ActivatedRouteStub();
    route = new RouterStub();
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [MendelpedeQuizTestComponent],
      providers: [
        { provide: MendelpedeScenarioService, useClass: MendelpedeServiceStub },
        { provide: AuthenticationService, useClass: AuthServiceStub },
        {provide: ActivatedRoute, useValue: activateRoute},
        {provide: Router, useValue: route},
      ]
    }).compileComponents();
  })); // end beforeEach async
  
  describe('Test initial Quiz UI', () => {
    beforeEach(fakeAsync(() => {
      createComponent();
      tick();
      fixture.detectChanges();
    })); // end beforeEach fakeAsync

    describe('Test Quizpedes', () => {
      it('Should have 8 quizpedes', () => {
        expect(comp.quizPedes.length).toBe(8);
      }); // end Should have 8 quizpedes

      it('Should have -1 score', () => {
        expect(comp.quiz.score).toBe(-1);
      })
    }); // end Test Quizpedes

  }); // end Test initial Quiz UI

  describe('Test Quiz submission', () => {
    beforeEach(fakeAsync(() => {
      createComponent();
      tick();
      fixture.detectChanges();
    })); // end beforeEach fakeAsync

    describe('Test submit quiz', () => {
      
      it('Should have quiz score 4', () => {
        comp.submitQuiz();
        expect(comp.quiz.score).toBe(4);
      }); // end Should have quiz score 4

      it('Should have quiz submitted', () => {
        comp.submitQuiz();
        expect(comp.quizSubmitted).toBe(true);
      }); // end Should have quiz score 4

      it('Should have correct scoring for one question', () => {
        comp.submitQuiz();
        expect(comp.quiz.isAnswerCorrect[0]).toBe(true);
      })
    }); // end Test submit quiz

  }); // end Quiz submission
}); // end Mendelpede Quiz Component

function createComponent() {
  fixture = TestBed.createComponent(MendelpedeQuizTestComponent);
  comp = fixture.componentInstance;
  fixture.detectChanges(); // trigger ngOnInit
}
