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

import { MendelpedeFridge, MendelpedePede, MendelpedeScenario, MendelpedeQuiz } from '../../../interfaces';
import { listOfMendelpedes, listOfMendelScenarios, fridgeToCreateQuiz, fridgeToCreateQuiz2 } from '../../../testing/mendelpede-sample-data';
import { MendelpedeServiceStub, AuthServiceStub  } from '../../../testing/service-stubs';

class MendelpedeQuizTestComponent extends MendelpedeQuizComponent {
  // so we have access to internal properties
}

// Testing variables
let fixture: ComponentFixture<MendelpedeQuizTestComponent>;
let comp: MendelpedeQuizTestComponent;
let activateRoute: ActivatedRouteStub;
let route: RouterStub;
let page: Page;

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
      page.addElements();
      addMatchers();
      fixture.detectChanges();
    })); // end beforeEach fakeAsync

    it('Should have quiz trait', () =>{
      expect(page.quizTrait).toContain('Determine the genotype of each individual for trait');
    })

    it('Should not have quiz score', () =>{
      expect(page.quizScore).toBeNull();
    })

    it('Should have enabled submit button', () =>{
      let forDisabled = page.btnSubmit.nativeElement.hasAttribute('disabled');
      expect(forDisabled).toBe(false);
    })

    it('Should have quiz score 4 after submitting', fakeAsync(() => {
      click(page.btnSubmit);
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
      expect(comp.quiz.score).toBe(4);
    })); // end Should have quiz score 4

    it('Should have quiz submit button disabled after submitting', fakeAsync(() => {
      click(page.btnSubmit);
      tick();
      page.addElements();
      addMatchers();
      fixture.detectChanges();
      let forDisabled = page.btnSubmit.nativeElement.hasAttribute('disabled');
      expect(forDisabled).toBe(true);
    })); // end Should have quiz score 4
    
  }); // end Test initial Quiz UI
}); // end Mendelpede Quiz Component

class Page {
  // variables
  //practice: HTMLElement;
  storagePedeBugIds: DebugElement[];
  quizTrait: DebugElement;
  quizScore: DebugElement;
  btnSubmit: DebugElement;
  errorMessage: HTMLElement;

  constructor(){
    let scenService = fixture.debugElement.injector.get(MendelpedeScenarioService);
    //this.createFridgeSpy = spyOn(scenService, 'createMendelFridge').and.callThrough();
  }

  addElements(){
    //let header = fixture.debugElement.query(By.css('.card-header')).query(By.css('.card-title'));
    //this.practice = (header ? header.nativeElement : null);
    this.quizTrait = fixture.debugElement.query(By.css('.card-body')).query(By.css('#quizTrait')).nativeElement.innerHTML;
    this.quizScore = fixture.debugElement.query(By.css('.card-body')).query(By.css('#quizScore'));
    let btns = fixture.debugElement.queryAll(By.css('button'));
    let tmp = fixture.debugElement.query(By.css('.alert'));
    this.btnSubmit = btns[0];
    this.errorMessage = (tmp ? tmp.nativeElement : null);
  }
}

function createComponent() {
  fixture = TestBed.createComponent(MendelpedeQuizTestComponent);
  comp = fixture.componentInstance;
  page = new Page();
  fixture.detectChanges(); // trigger ngOnInit
}
