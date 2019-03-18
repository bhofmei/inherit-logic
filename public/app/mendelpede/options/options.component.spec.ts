import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Directive, DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterStub, ActivatedRouteStub,Router, ActivatedRoute, RouterLinkStubDirective, getAllRouterLinks, addMatchers } from '../../testing';

import { OptionsComponent } from './options.component';
import { AuthenticationService } from '../../authentication/authentication.service';
import { CourseService } from '../../admin/course/course.service';
import { MendelpedeScenarioService } from '../scenarios/mendelpede-scenarios.service';

import { User, Scenario } from '../../interfaces';
import { AuthServiceStub, MendelpedeServiceStub, CourseServiceStub } from '../../testing/service-stubs';
import { userAdmin, listOfMendelScenarios } from '../../testing/mendelpede-sample-data';

let fixture: ComponentFixture<OptionsComponent>;
let comp: OptionsComponent;
let authService: AuthenticationService;
let scenarioService: MendelpedeScenarioService;
let page: Page;

describe('List Component', ()=>{
    beforeEach(async(()=>{
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [OptionsComponent, RouterLinkStubDirective],
      providers: [
        {provide: AuthenticationService, useClass: AuthServiceStub},
        {provide: CourseService, useClass: CourseServiceStub},
        {provide: MendelpedeScenarioService, useClass: MendelpedeServiceStub}
        //{provide: ActivatedRoute, useValue: activateRoute},
        //{provide: Router, useValue: route}
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
      console.log(page);
      expect(page.header.innerHTML).toBe('MendelPede Scenarios');
    }); // end Should have header
    
    it('Should have three scenarios', ()=>{
      expect(page.links.length).toBe(3);
      expect(page.labels.length).toBe(3);
    }); // end Should have two scenarios

    it('Should have scenario 1', ()=>{
      let expected = listOfMendelScenarios[0];
      let linkEl = page.links[0];
      expect(linkEl.linkParams[0]).toBe(expected.shortCode);
      let labelEl = page.labels[0];
      expect(labelEl.innerHTML).toTemplateMatch(expected.label);
    }); // end Should have scenario 1
    
    it('Should have scenario 2', ()=>{
      let expected = listOfMendelScenarios[1];
      let linkEl = page.links[1];
      expect(linkEl.linkParams[0]).toBe(expected.shortCode);
      let labelEl = page.labels[1];
      expect(labelEl.innerHTML).toTemplateMatch(expected.label);
    }); // end Should have scenario 2
  }); // Test with user
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
  fixture = TestBed.createComponent(OptionsComponent);
  comp = fixture.componentInstance;
  authService = TestBed.get(AuthenticationService);
  if(hasUser === false){
    authService.setUser(null);
  }
  page = new Page();
  fixture.detectChanges();
}
