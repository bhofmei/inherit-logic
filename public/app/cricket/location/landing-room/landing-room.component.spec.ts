import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router, RouterStub, ActivatedRoute, ActivatedRouteStub, RouterLinkStubDirective, getAllRouterLinks, recurCSSQuery, addMatchers } from '../../../testing';

import { LandingRoomComponent } from './landing-room.component';
import { CricketService } from '../../cricket.service';

import { Scenario } from '../../../interfaces';
import { listOfScenarios } from '../../../testing/sample-data';
import { CricketServiceStub } from '../../../testing/service-stubs';

// Testing variables
let activateRoute: ActivatedRouteStub;
let router: RouterStub;
let fixture: ComponentFixture<LandingRoomComponent>;
let comp: LandingRoomComponent;
let page: Page;

describe('Landing Room Component', ()=>{
  beforeEach(async(()=>{
    activateRoute = new ActivatedRouteStub();
    activateRoute.parent = new ActivatedRouteStub();
    router = new RouterStub();
    TestBed.configureTestingModule({
      declarations: [LandingRoomComponent, RouterLinkStubDirective],
      providers: [
        {provide: CricketService, useClass: CricketServiceStub},
        {provide: Router, useValue: router},
        {provide: ActivatedRoute, useValue: activateRoute}
      ]
    }).compileComponents();
  })); // end beforeEach async

  describe('Test scenario 1', ()=>{
    let scenario = listOfScenarios[0];
    beforeEach(fakeAsync(()=>{
      activateRoute.parent.testParams = {scenId: scenario.scenCode};
      createComponent();
      tick();
      page.addElements();
    })); // end beforeEach fakeAsync

    it('Should have label', ()=>{
      let label = page.label.innerHTML;
      expect(label).toTemplateMatch(scenario.label);
    }); // end Should have label

    it('Should have purpose', ()=>{
      let purpose = page.purpose.innerHTML;
      expect(purpose).toTemplateMatch(scenario.purpose);
    }); // end Should have purpose

    it('Should have relevance', ()=>{
      let relevance = page.relevance.innerHTML;
      expect(relevance).toTemplateMatch(scenario.relevance);
    }); // end Should have relevance

    it('Should have starting point', ()=>{
      let startingPoint = page.startingPoint.innerHTML;
      expect(startingPoint).toTemplateMatch(scenario.startingPoint);
    }); // end Should have starting point
  }); // end Test scenario 1

  describe('Test scenario 2', ()=>{
    let scenario = listOfScenarios[1];
    beforeEach(fakeAsync(()=>{
      activateRoute.parent.testParams = {scenId: scenario.scenCode};
      createComponent();
      tick();
      page.addElements();
    })); // end beforeEach fakeAsync

    it('Should have label', ()=>{
      let label = page.label.innerHTML;
      expect(label).toTemplateMatch(scenario.label);
    }); // end Should have label

    it('Should have purpose', ()=>{
      let purpose = page.purpose.innerHTML;
      expect(purpose).toTemplateMatch(scenario.purpose);
    }); // end Should have purpose

    it('Should have relevance', ()=>{
      let relevance = page.relevance.innerHTML;
      expect(relevance).toTemplateMatch(scenario.relevance);
    }); // end Should have relevance

    it('Should have starting point', ()=>{
      let startingPoint = page.startingPoint.innerHTML;
      expect(startingPoint).toTemplateMatch(scenario.startingPoint);
    }); // end Should have starting point
  }); // end Test scenario 2

  describe('Test non-existant scenario', ()=>{

    beforeEach(fakeAsync(()=>{
      activateRoute.parent.testParams = {scenId: 'UNKNOWN'};
      createComponent();
      tick();
      page.addElements();
    })); // end beforeEach fakeAsync

    it('Should navigate home', ()=>{
      let navPath = router.path;
      expect(navPath).toBe('/');
    }); // end Should navigate home
  }); // end Test non-existant scenario
}); // end Landing Room Component



class Page{
  label: HTMLElement;
  purpose: HTMLElement;
  relevance: HTMLElement;
  startingPoint: HTMLElement;

  constructor(){}

  addElements(){
    if(comp.scenario){
      this.label = fixture.debugElement.query(By.css('h3')).nativeElement;
      this.purpose = fixture.debugElement.query(By.css('#scenPurpose')).nativeElement;
      this.relevance = fixture.debugElement.query(By.css('#scenRelev')).nativeElement;
      this.startingPoint = fixture.debugElement.query(By.css('#scenStartPt')).nativeElement;
    } else {
      this.label = null;
      this.purpose = null;
      this.relevance = null;
      this.startingPoint = null;
    }
  }
}

function createComponent(){
  fixture = TestBed.createComponent(LandingRoomComponent);
  comp = fixture.componentInstance;

  page = new Page();
  fixture.detectChanges(); // trigger ngOnInit
  addMatchers();
}
