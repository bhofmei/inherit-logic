//import { NO_ERRORS_SCHEMA } from '@angular/core';
import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Directive, DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';

import { NavComponent } from './nav.component';
import { AuthenticationService } from '../authentication/authentication.service';

import { User } from '../interfaces/user.interface';

const testUser: User = {
    id: 1,
    firstName: 'First',
    lastName: 'Last',
    email: 'test@test.com',
    role: 2 // admin
}

class AuthServiceStub {
  getUser$ = Observable.of(testUser);
}


describe('Nav Component', ()=>{
  let comp: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let authService; //: AuthenticationService;
  let spy;

  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [NavComponent],
      providers: [{provide: AuthenticationService, use: AuthServiceStub}]
    }).overrideComponent(NavComponent, {
      set: {
        providers: [
          {provide: AuthenticationService, useClass: AuthServiceStub}
        ]
      }
    }).compileComponents();
  })); // end beforeEach async

  beforeEach(()=>{
    fixture = TestBed.createComponent(NavComponent);
    comp = fixture.componentInstance;
    authService = fixture.debugElement.injector.get(AuthenticationService);
    //spy = spyOn(authService, 'getUser$').and.returnValue(new Observable(testUser));

  }); // end beforeEach

  it('Should not have user before OnInit', ()=>{
    let listElements = fixture.debugElement.queryAll(By.css('li'));
    expect(listElements.length).toBe(2);
  }); // end Should not have user before OnInit

  it('Should have user after OnInit', async(()=>{
    comp.ngOnInit();
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      fixture.detectChanges();
      let listElements = fixture.debugElement.queryAll(By.css('li'));
    expect(listElements.length).toBe(3);
    });

  })); // end Should have user after OnInit

  it('Should have scenario link', ()=>{
    let listElements = fixture.debugElement.queryAll(By.css('li'));
    let scenElement = listElements[0].query(By.css('a'));
    let link = scenElement.nativeElement.getAttribute('routerLink');
    expect(link).toMatch(/scenarios/);
  })

}); // end App Component
