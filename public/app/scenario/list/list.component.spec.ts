import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Directive, DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { RouterLinkStubDirective, getAllRouterLinks, addMatchers } from '../../testing';

import { ListComponent } from './list.component';
import { AuthenticationService } from '../../authentication/authentication.service';
import { ScenarioService } from '../scenario.service';

import { User, Scenario } from '../../interfaces';
import { AuthServiceStub, ScenarioServiceStub } from '../../testing/service-stubs';
import { userAdmin, listOfScenarios } from '../../testing/sample-data';

describe('List Component', ()=>{
  let comp: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let authService: AuthenticationService;
  let scenService: ScenarioService;

  beforeEach(async()=>{
    TestBed.configureTestingModule({
      declarations: [ListComponent, RouterLinkStubDirective],
      providers: [
        {provide: AuthenticationService, useClass: AuthServiceStub},
        {provide: ScenarioService, useClass: ScenarioServiceStub}
      ]
    }).compileComponents();

  }) // end beforeEach async

  beforeEach(()=>{
    fixture = TestBed.createComponent(ListComponent);
    authService = TestBed.get(AuthenticationService);
    scenService = TestBed.get(ScenarioService);
    addMatchers();
  }); // end beforeEach

  it('Should have header', ()=>{
    fixture.detectChanges();
    let h = fixture.debugElement.query(By.css('h2'));
    let hTxt = h.nativeElement.innerHTML;
    expect(hTxt).toBe('Available Scenarios');
  }); // end Should have header

  describe('Without user', ()=>{
    let links;
    beforeEach(()=>{
      authService.getUser = ()=>{return null};
      fixture.detectChanges();
      links = getAllRouterLinks(fixture.debugElement);
    }); // end beforeEach

    it('Should have sign in link', ()=>{
      let linkEl = links[0];
      expect(linkEl.linkParams[0]).toBe('/authentication/signin');
    }); // end Should have sign in link

    it('Should have sign up link', ()=>{
      let linkEl = links[1];
      expect(linkEl.linkParams[0]).toBe('/authentication/signup');
    }); // end Should have sign up link

  }); // end Without user

  describe('With user', ()=>{

    let links, labels;
    beforeEach(()=>{
      fixture.detectChanges();
      links = getAllRouterLinks(fixture.debugElement);
      labels = fixture.debugElement.queryAll(By.css('.list-group-item-action'))
        .map((el)=>{return el.nativeElement});
    }); // end beforeEach

    it('Should have 2 scenarios', ()=>{
      expect(links.length).toBe(2);
      expect(labels.length).toBe(2);
    });

    it('Should have scenario 1', ()=>{
      let expected = listOfScenarios[0]
      let linkEl = links[0];
      expect(linkEl.linkParams[0]).toBe(expected.scenCode);
      let labelEl = labels[0].innerHTML;
      expect(labelEl).toTemplateMatch(expected.label);
    }); // end Should have scenario 1

    it('Should have scenario 2', ()=>{
      let expected = listOfScenarios[1]
      let linkEl = links[1];
      expect(linkEl.linkParams[0]).toBe(expected.scenCode);
      let labelEl = labels[1].innerHTML;
      expect(labelEl).toTemplateMatch(expected.label);
    }); // end Should have scenario 2

  }); // end With user
}); // end List Component
