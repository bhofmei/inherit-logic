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

  describe('Test form validity', ()=>{
    beforeEach(fakeAsync(()=>{
      createComponent();
      tick();
    })); // end beforeEach fakeAsync

    it('should be invalid when empty', ()=>{
      expect(comp.credentials.valid).toBeFalsy();
    }); // end should be invalid when empty

    it('should have invalid email', ()=>{
      let email = comp.credentials.controls['username'];
      email.setValue('invaidemail');
      expect(email.valid).toBeFalsy();
      let errors = email.errors || {};
      expect(errors['email']).toBeTruthy();
    }); // end should have invalid email

    it('should have valid email', ()=>{
      let email = comp.credentials.controls['username'];
      email.setValue(userAdmin.email);
      expect(email.valid).toBeTruthy();
      let errors = email.errors || {};
      expect(errors['email']).toBeFalsy();
    }); // end should have valid email

    it('should have too short of password', ()=>{
      let password = comp.credentials.controls['password'];
      password.setValue('abc');
      expect(password.valid).toBeFalsy();
      let errors = password.errors || {};
      expect(errors['minlength']).toBeTruthy();
    }); // end should ahve too short of password

    it('should have acceptable password', ()=>{
      let password = comp.credentials.controls['password'];
      password.setValue('long-acceptable-password');
      expect(password.valid).toBeTruthy();
      let errors = password.errors || {};
      expect(errors['minlength']).toBeFalsy();
    }); // end should have acceptable password
  }); // end Test form validity

  describe('Test form warnings', ()=>{
    beforeEach(fakeAsync(()=>{
      createComponent();
      tick();
      page.addElements();
    })); // end beforeEach fakeAsync

    it('should have no warnings', ()=>{
      expect(page.warnings.length).toBe(0);
    }); // end should have no warnings

    it('should have email required warning', fakeAsync(()=>{
      let email = comp.credentials.controls['username'];
      email.setValue('');
      email.markAsTouched();
      fixture.detectChanges();
      page.addElements();
      expect(page.warnings.length).toBe(1);
      let warning = page.warnings[0].nativeElement.innerHTML;
      expect(warning).toBe('Email is required.')
    })); // end should have email required warning

    it('should have email invalid warning', fakeAsync(()=>{
      let email = comp.credentials.controls['username'];
      email.setValue('invalid-email');
      email.markAsTouched();
      fixture.detectChanges();
      page.addElements();
      expect(page.warnings.length).toBe(1);
      let warning = page.warnings[0].nativeElement.innerHTML;
      expect(warning).toBe('Email is invalid.')
    })); // end should have email invalid warning

    it('should have password required warning', fakeAsync(()=>{
      let password = comp.credentials.controls['password'];
      password.setValue('');
      password.markAsTouched();
      fixture.detectChanges();
      page.addElements();
      expect(page.warnings.length).toBe(1);
      let warning = page.warnings[0].nativeElement.innerHTML;
      expect(warning).toBe('Password is required.')
    })); // end should have password required warning

    it('should have password length warning', fakeAsync(()=>{
      let password = comp.credentials.controls['password'];
      password.setValue('abc');
      password.markAsTouched();
      fixture.detectChanges();
      page.addElements();
      expect(page.warnings.length).toBe(1);
      let warning = page.warnings[0].nativeElement.innerHTML;
      expect(warning).toBe('Password must be at least 6 characters.')
    })); // end should have password length warning

    it('should have no warnings with valid input', fakeAsync(()=>{
      let email = comp.credentials.controls['username'];
      email.setValue('valid@email.com');
      email.markAsTouched();
      let password = comp.credentials.controls['password'];
      password.setValue('abcdefghi');
      password.markAsTouched();
      fixture.detectChanges();
      page.addElements();
      expect(page.warnings.length).toBe(0);
    })); // end should have no warnings with valid input
  }); // end Test form warnings

  describe('Test form submission', ()=>{
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

    it('should have disabled button', ()=>{
     var isDisabled = page.submitButton.nativeElement.hasAttribute('disabled');
      expect(isDisabled).toBeTruthy();
    }); // end should have disabled button

    it('should not have disabled button', fakeAsync(()=>{
      let email = comp.credentials.controls['username'];
      email.setValue(testEmail);
      let password = comp.credentials.controls['password'];
      password.setValue('abcdefgh');
      fixture.detectChanges();
      page.addElements();
      var isDisabled = page.submitButton.nativeElement.hasAttribute('disabled');
      expect(isDisabled).toBeFalsy();
    })); // end should not have disabled button

    it('should submit', fakeAsync(()=>{
      let email = comp.credentials.controls['username'];
      email.setValue(testEmail);
      let password = comp.credentials.controls['password'];
      password.setValue('abcdefgh');
      fixture.detectChanges();
//      page.addElements();
//      click(page.submitButton);
      comp.signin();
      let didUpdate = signinSpy.calls.any();
      expect(didUpdate).toBe(true);
    })); // end should submit


      it('should navigate home on submit', fakeAsync(()=>{
        comp.credentials.controls['username'].setValue(testEmail);
        comp.credentials.controls['password'].setValue('abcdefgh');
        fixture.detectChanges();
        comp.signin();
        tick();
        fixture.detectChanges();
        let pathNav = route.path;
        expect(pathNav).toBe('/');
      })); // end should navigate home on submit

    it('should navigate redirect on submit', fakeAsync(()=>{
      let testRedirect = '/admin';
      aService.redirectUrl = testRedirect;
      tick();
        comp.credentials.controls['username'].setValue(testEmail);
        comp.credentials.controls['password'].setValue('abcdefgh');
        fixture.detectChanges();
        comp.signin();
        tick();
        fixture.detectChanges();
        let pathNav = route.path;
        expect(pathNav).toBe(testRedirect);
      })); // end should navigate redirect on submit
  }); // end Test form submission
}); // end Signin Component

class Page {
  links: RouterLinkStubDirective[];
  warnings: DebugElement[];
  submitButton: DebugElement;

  constructor(){}

  addElements(){
    let linkDes = fixture.debugElement
    .queryAll(By.directive(RouterLinkStubDirective));
    this.links = linkDes
    .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
    let possibleWarnings = fixture.debugElement.queryAll(By.css('.invalid-feedback'));
    this.warnings = possibleWarnings.map((w)=>{
      return w.query(By.css('div'))
    });
    this.submitButton = fixture.debugElement.query(By.css('button'));
  }
}

function createComponent(){
  fixture = TestBed.createComponent(SigninComponent);
  comp = fixture.componentInstance;
  page = new Page();
  fixture.detectChanges(); // trigger ngOnInit
}
