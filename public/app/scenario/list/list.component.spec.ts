import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Directive, DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkStubDirective, getAllRouterLinks, addMatchers } from '../../testing';

import { ListComponent } from './list.component';
import { AuthenticationService } from '../../authentication/authentication.service';
import { ScenarioService } from '../scenario.service';

import { User, Scenario } from '../../interfaces';
import { AuthServiceStub, ScenarioServiceStub } from '../../testing/service-stubs';
import { userAdmin, listOfScenarios } from '../../testing/sample-data';

let fixture: ComponentFixture<ListComponent>;
let comp: ListComponent;
let authService: AuthenticationService;
let scenarioService: ScenarioService;
let page: Page;

describe('List Component', ()=>{
    beforeEach(async(()=>{
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ListComponent, RouterLinkStubDirective],
      providers: [
        {provide: AuthenticationService, useClass: AuthServiceStub},
        {provide: ScenarioService, useClass: ScenarioServiceStub}
      ]
    }).compileComponents();
  })); // end beforeEach async

  describe('Test with user', ()=>{
    beforeEach(fakeAsync(()=>{
      createComponent(true);
      tick();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync

    it('Should have header', ()=>{
      expect(page.header.innerHTML).toBe('Available Scenarios');
    }); // end Should have header

    it('Should have two scenarios', ()=>{
      expect(page.links.length).toBe(2);
      expect(page.labels.length).toBe(2);
    }); // end Should have two scenarios

    it('Should have scenario 1', ()=>{
      let expected = listOfScenarios[0];
      let linkEl = page.links[0];
      expect(linkEl.linkParams[0]).toBe(expected.scenCode);
      let labelEl = page.labels[0];
      expect(labelEl.innerHTML).toTemplateMatch(expected.label);
    }); // end Should have scenario 1

    it('Should have scenario 2', ()=>{
      let expected = listOfScenarios[1];
      let linkEl = page.links[1];
      expect(linkEl.linkParams[0]).toBe(expected.scenCode);
      let labelEl = page.labels[1];
      expect(labelEl.innerHTML).toTemplateMatch(expected.label);
    }); // end Should have scenario 2
  }); // Test with user

  describe('Test without user', ()=>{
    beforeEach(fakeAsync(()=>{
      createComponent(false);
      tick();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync

    it('Should have header', ()=>{
      expect(page.header.innerHTML).toBe('Available Scenarios');
    }); // end Should have header

    it('Should not have scenarios', ()=>{
      expect(page.labels.length).toBe(0);
    }); // end Should not have scenarios

    it('Should have sign in link', ()=>{
      let linkEl = page.links[0];
      expect(linkEl.linkParams[0]).toBe('/authentication/signin');
    }); // end Should have sign in link

    it('Should have sign up link', ()=>{
      let linkEl = page.links[1];
      expect(linkEl.linkParams[0]).toBe('/authentication/signup');
    }); // end Should have sign up link
  }); // Test without user
}); // end List Component

class Page{

  header: HTMLElement;
  links: any[];
  labels: any[];

  constructor(){}

  addElements(){
    if(fixture){
      this.links = getAllRouterLinks(fixture.debugElement);
      this.header = fixture.debugElement.query(By.css('h2')).nativeElement;
    this.labels = fixture.debugElement.queryAll(By.css('.list-group-item-action'))
        .map((el)=>{return el.nativeElement});
    }
  }
}

function createComponent(hasUser: boolean){
  fixture = TestBed.createComponent(ListComponent);
  comp = fixture.componentInstance;
  authService = TestBed.get(AuthenticationService);
  if(hasUser === false){
    authService.setUser(null);
  }
  page = new Page();
  fixture.detectChanges();
}
