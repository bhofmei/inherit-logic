import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Directive, DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { RouterLinkStubDirective, getAllRouterLinks } from '../../testing';

import { ListComponent } from './list.component';
import { AuthenticationService } from '../../authentication/authentication.service';
import { ScenarioService } from '../scenario.service';

import { User } from '../../interfaces/user.interface';
import { Scenario } from '../../interfaces/scenario.interface';

const testUser: User = {
    id: 2,
    firstName: 'First',
    lastName: 'Last',
    email: 'test@test.com',
    role: 0 // admin
}
const testScenario: Scenario = {
  label: 'Test Scenario',
  scenCode: 'test',
  purpose: 'This is the purpose',
  startingPoint: 'This is the starting point',
  relevance: 'This is the relevance'
}

class AuthServiceStub {
  getUser$ = Observable.of(testUser);
  getUser(): User {
    return null;
  }
}

class ScenarioServiceStub {
  listScenarios(): Observable<Scenario[]>{
    return Observable.of([testScenario]);
  }
}

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
      fixture.detectChanges();
      links = getAllRouterLinks(fixture);
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

    let links;
    beforeEach(()=>{
      authService.getUser = ()=>{return testUser};
      fixture.detectChanges();
      links = getAllRouterLinks(fixture);
    }); // end beforeEach

    it('Should have 1 scenario link', ()=>{
      let linkEl = links[0];
      expect(linkEl.linkParams[0]).toBe(testScenario.scenCode);
    }); // end Should have sign up link

  }); // end With user
}); // end List Component
