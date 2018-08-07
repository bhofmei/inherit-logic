import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Directive, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { RouterLinkStubDirective, getAllRouterLinks, RouterStub, Router , click, addMatchers} from '../../testing';

import { SharedModule } from '../../shared/shared.module';
import { SigninComponent } from './signin.component';
import { AuthenticationService } from '../authentication.service';

import { userAdmin, userInstr, listOfUsers } from '../../testing/sample-data';
import { User } from '../../interfaces';
import { AuthServiceStub } from '../../testing/service-stubs';

let fixture: ComponentFixture<SigninComponent>;
let comp: SigninComponent;
let page: Page;
let authService: AuthenticationService;
let route: RouterStub

describe('Signin Component', ()=>{

  beforeEach(async(()=>{
    route = new RouterStub();
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [SigninComponent, RouterLinkStubDirective],
      providers: [
        {provide: AuthenticationService, useClass: AuthServiceStub},
        {provide: Router, useValue: route}
      ]
    }).compileComponents();
  })); // end beforeEach async

  describe('Test forget passsword link', ()=>{
    beforeEach(fakeAsync(()=>{
      createComponent();
      tick();
      page.addElements();
    })); // end beforeEach fakeAsync

    it('Should have 1 link', ()=>{
      expect(page.links.length).toBe(1);
    }); // end Should have 1 link

    it('Should have forget password link', ()=>{
      let linkEl = page.links.filter((el)=>{return el.linkParams[0] === '/authentication/forget-password'});
     expect(linkEl.length).toBe(1);
    }); // end Should have sign in link

  }); // end Test links

  describe('Test error messages', ()=>{
    let aService, signinSpy;
    let testEmail = userAdmin.email;
    beforeEach(fakeAsync(()=>{
      createComponent();
      tick();
      page.addElements();
      aService = fixture.debugElement.injector.get(AuthenticationService);
      signinSpy = spyOn(aService, 'signin').and.callThrough();
      addMatchers();
    })); // end beforeEach fakeAsync

    it('Should update on "Submit"', ()=>fakeAsync(()=>{
      click(page.submitButton);
      let didUpdate = signinSpy.calls.any();
      expect(didUpdate).toBe(true);
    })); // end Should spy on update when click save

  it('Should have error message with no email and password', fakeAsync(()=>{
      comp.signin();
      tick();
      fixture.detectChanges();
      page.addElements();
      expect(page.errorMessage).not.toBeNull();
      let message = page.errorMessage.innerHTML;
      expect(message).toTemplateMatch('Missing Credentials');
    })); // end Should have error message with no email and password

     it('Should have error message with no password', fakeAsync(()=>{
      page.emailInput.value = testEmail;
       page.emailInput.dispatchEvent(new Event('input'));
       fixture.detectChanges();
      comp.signin();
      tick();
      fixture.detectChanges();
      page.addElements();
      expect(page.errorMessage).not.toBeNull();
      let message = page.errorMessage.innerHTML;
      expect(message).toTemplateMatch('Missing Credentials');
    })); // end Should have error message with no password

    it('Should have error message with no email', fakeAsync(()=>{
      page.passwordInput.value = 'test-password';
      page.passwordInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      comp.signin();
      tick();
      fixture.detectChanges();
      page.addElements();
      expect(page.errorMessage).not.toBeNull();
      let message = page.errorMessage.innerHTML;
      expect(message).toTemplateMatch('Missing Credentials');
    })); // end Should have error message with no email

     it('Should have error message with incorrect email', fakeAsync(()=>{
      page.emailInput.value = 'fake@email.com';
      page.emailInput.dispatchEvent(new Event('input'));
      page.passwordInput.value = 'password';
       page.passwordInput.dispatchEvent(new Event('input'));
       fixture.detectChanges();
        comp.signin();
        tick(); fixture.detectChanges();
      page.addElements();
      expect(page.errorMessage).not.toBeNull();
      let message = page.errorMessage.innerHTML;
      expect(message).toTemplateMatch('User not found');
    })); // end Should have error message with incorrect email

      it('Should have error message with incorrect password', fakeAsync(()=>{
        page.emailInput.value = testEmail;
        page.emailInput.dispatchEvent(new Event('input'));
      page.passwordInput.value = 'invalid';
         page.passwordInput.dispatchEvent(new Event('input'));
        fixture.detectChanges();
      comp.signin();
      tick();
      fixture.detectChanges();
      page.addElements();
      expect(page.errorMessage).not.toBeNull();
      let message = page.errorMessage.innerHTML;
      expect(message).toTemplateMatch('Invalid password');
    })); // end Should have error message with incorrect password
  }); // end Test error messages

  describe('Test successful signin', ()=>{
    let aService;
    let testEmail = userAdmin.email;
    beforeEach(fakeAsync(()=>{
      createComponent();
      tick();
      page.addElements();
      aService = fixture.debugElement.injector.get(AuthenticationService);
      addMatchers();
    })); // end beforeEach fakeAsync

    it('should navigate home', fakeAsync(()=>{
      page.emailInput.value = testEmail;
      page.emailInput.dispatchEvent(new Event('input'));
      page.passwordInput.value = 'password';
      page.passwordInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      comp.signin();
      tick();
      fixture.detectChanges();
      let pathNav = route.path;
      expect(pathNav).toBe('/');
    })); // end should navigate home

    it('should naviate redirect', fakeAsync(()=>{
      let testRedirect = '/admin';
      aService.redirectUrl = testRedirect;
      tick();
      page.emailInput.value = testEmail;
      page.emailInput.dispatchEvent(new Event('input'));
      page.passwordInput.value = 'password';
      page.passwordInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      comp.signin();
      tick();
      fixture.detectChanges();
      let pathNav = route.path;
      expect(pathNav).toBe(testRedirect);
    }));
  }); // end Test successful signin
}); // end Signin Component

class Page {
  errorMessage: HTMLElement;
  submitButton: DebugElement;
  emailInput: HTMLInputElement;
  passwordInput: HTMLInputElement;
  links: RouterLinkStubDirective[];

  constructor(){}

  addElements(){
    // error message
    this.errorMessage = fixture.debugElement.query(By.css('.text-danger')).nativeElement;
    this.submitButton = fixture.debugElement.query(By.css('button'));

    this.emailInput = fixture.debugElement.query(By.css('#inputEmail')).nativeElement;
    this.passwordInput = fixture.debugElement.query(By.css('#inputPassword')).nativeElement;
    let linkDes = fixture.debugElement
    .queryAll(By.directive(RouterLinkStubDirective));
    this.links = linkDes
    .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  }
}

function createComponent(){
  fixture = TestBed.createComponent(SigninComponent);
  comp = fixture.componentInstance;
  page = new Page();
  fixture.detectChanges(); // trigger ngOnInit
}
