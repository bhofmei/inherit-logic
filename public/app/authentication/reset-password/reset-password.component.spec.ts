import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Directive, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { RouterLinkStubDirective, getAllRouterLinks, ActivatedRouteStub, ActivatedRoute, click, addMatchers} from '../../testing';

import { SharedModule } from '../../shared/shared.module';
import { ResetPasswordComponent } from './reset-password.component';
import { AuthenticationService } from '../authentication.service';

import { AuthServiceStub } from '../../testing/service-stubs';

let fixture: ComponentFixture<ResetPasswordComponent>;
let activateRoute: ActivatedRouteStub;
let comp: ResetPasswordComponent;
let page: Page;
let authService: AuthenticationService;

describe('Reset Password Component', ()=>{
    beforeEach(async(()=>{
    activateRoute = new ActivatedRouteStub();
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ResetPasswordComponent, RouterLinkStubDirective],
      providers: [
        {provide: AuthenticationService, useClass: AuthServiceStub},
        {provide: ActivatedRoute, useValue: activateRoute}
      ]
    }).compileComponents();
  })); // end beforeEach async

  describe('Test without token', ()=>{
    beforeEach(fakeAsync(()=>{
      activateRoute.testParams = {token: ''};
      createComponent();
      tick();
      page.addElements();
      addMatchers()
    })); // end beforeEach fakeAsync

    it('should have disabled button', ()=>{
      var isDisabled = page.submitButton.nativeElement.hasAttribute('disabled');
      expect(isDisabled).toBeTruthy();
    }); // end should habe disabled button

    it('should have error message', ()=>{
      expect(page.errorMessage).toBeTruthy();
      let error = page.errorMessage.innerHTML;
      expect(error).toTemplateMatch('No token specified.');
    }); // end should have error message
  }); // end Test without token

  describe('Test with token', ()=>{
    beforeEach(fakeAsync(()=>{
      activateRoute.testParams = {token: 'heres-a-token'};
      createComponent();
      tick();
      page.addElements();
      addMatchers()
    })); // end beforeEach fakeAsync

    it('should not have error message', ()=>{
      expect(page.errorMessage).toBeNull();
    }); // end should not have error message

    describe('Test form validity and warnings', ()=>{
      let password, confirmPassword;
      beforeEach(()=>{
        password = comp.password;
        confirmPassword = comp.confirmPassword;
      }); // end beforeEach

       beforeEach(()=>{
      password = comp.password;
      confirmPassword = comp.confirmPassword;
    }); // end beforeEach

    it('should have too short of password', ()=>{
      password.setValue('abc');
      expect(password.valid).toBeFalsy();
      let errors = password.errors || {};
      expect(errors['minlength']).toBeTruthy();
    }); // end should ahve too short of password

    it('should have acceptable password', ()=>{
      password.setValue('long-acceptable-password');
      expect(password.valid).toBeTruthy();
      let errors = password.errors || {};
      expect(errors['minlength']).toBeFalsy();
    }); // end should have acceptable password

    it('should have invalid confirm password', ()=>{
      password.setValue('abcdefg');
      confirmPassword.setValue('abcd');
      expect(confirmPassword.valid).toBeFalsy();
      let errors = confirmPassword.errors || {};
      expect(errors['mismatch']).toBeTruthy();
    }); // end should have invalid confirm password

    it('should have valid confirm password', ()=>{
      password.setValue('abcdefg');
      confirmPassword.setValue('abcdefg');
      expect(confirmPassword.valid).toBeTruthy();
      let errors = confirmPassword.errors || {};
      expect(errors['mismatch']).toBeFalsy();
    }); // end should have valid confirm password

    it('should have password required warning', fakeAsync(()=>{
      password.setValue('');
      password.markAsTouched();
      fixture.detectChanges();
      page.addElements();
      expect(page.warnings.length).toBe(1);
      let warning = page.warnings[0].nativeElement.innerHTML;
      expect(warning).toTemplateMatch('Password is required.')
    })); // end should have password required warning

    it('should have password length warning', fakeAsync(()=>{
      password.setValue('abc');
      password.markAsTouched();
      fixture.detectChanges();
      page.addElements();
      expect(page.warnings.length).toBe(1);
      let warning = page.warnings[0].nativeElement.innerHTML;
      expect(warning).toTemplateMatch('Password must be at least 6 characters.')
    })); // end should have password length warning

    it('should have confirm password required warning', fakeAsync(()=>{
      confirmPassword.setValue('');
      confirmPassword.markAsTouched();
      fixture.detectChanges();
      page.addElements();
      expect(page.warnings.length).toBe(1);
      let warning = page.warnings[0].nativeElement.innerHTML;
      expect(warning).toTemplateMatch('Confirm password.')
    })); // end should have confirm password required warning

    it('should have confirm password mismatch warning', fakeAsync(()=>{
      password.setValue('abcedfg');
      password.markAsTouched();
      confirmPassword.setValue('abcd');
      confirmPassword.markAsTouched();
      fixture.detectChanges();
      page.addElements();
      expect(page.warnings.length).toBe(1);
      let warning = page.warnings[0].nativeElement.innerHTML;
      expect(warning).toTemplateMatch('Passwords do not match.')
    })); // end should have confirm password required warning

    it('should have no warnings', fakeAsync(()=>{
      password.setValue('abcdefg');
      password.markAsTouched();
      confirmPassword.setValue('abcdefg');
      confirmPassword.markAsTouched();
      fixture.detectChanges();
      page.addElements();
      expect(page.warnings.length).toBe(0);
    })); // end should have no warnings
    }); // end Test form validity and warnings

    describe('Test form submission', ()=>{
      let aService, resetSpy;
      let password, confirmPassword, token;

    beforeEach(fakeAsync(()=>{
      createComponent();
      tick();
      page.addElements();
      aService = fixture.debugElement.injector.get(AuthenticationService);
      resetSpy = spyOn(aService, 'resetPassword').and.callThrough();
      password = comp.password;
      confirmPassword = comp.confirmPassword;
      token = comp.password.parent.controls['token'];
      token.setValue('im-a-token');
    })); // end beforeEach fakeAsync

    it('should have disabled button for empty input', ()=>{
     var isDisabled = page.submitButton.nativeElement.hasAttribute('disabled');
      expect(isDisabled).toBeTruthy();
    }); // end should have disabled button for empty input

    it('should have disabled button for incorrect input', ()=>{
      password.setValue('abc');
      confirmPassword.setValue('defg');
      fixture.detectChanges();
      page.addElements();
      var isDisabled = page.submitButton.nativeElement.hasAttribute('disabled');
      expect(isDisabled).toBeTruthy();
    }); // should have disabled button for incorrect input

    describe('Test valid form', ()=>{
      beforeEach(fakeAsync(()=>{
      password.setValue('abcdefgh');
      confirmPassword.setValue('abcdefgh');
      fixture.detectChanges();
      page.addElements();
      }));

    it('should not have disabled button', fakeAsync(()=>{
      var isDisabled = page.submitButton.nativeElement.hasAttribute('disabled');
      expect(isDisabled).toBeFalsy();
    })); // end should not have disabled button

    it('should submit', fakeAsync(()=>{
      comp.sendReset();
      let didUpdate = resetSpy.calls.any();
      expect(didUpdate).toBe(true);
    })); // end should submit

    it('should have sucess message', fakeAsync(()=>{
        comp.sendReset();
        tick();
        fixture.detectChanges();
      page.addElements();
        let expectedMessage = 'Password has been reset.'
        let text = page.successMessage.innerHTML;
      expect(text).toContain(expectedMessage);
      expect(page.links.length).toBe(1);
      let linkEl = page.links[0];
      expect(linkEl.linkParams[0]).toBe('/authentication/signin');
      })); // end should have sucess message

      it('should have error message for expired token', fakeAsync(()=>{
        token.setValue('expired-token');
        comp.sendReset();
        tick();
        fixture.detectChanges();
        page.addElements();
        let expectedMessage = 'Token has expired.'
        let text = page.errorMessage.innerHTML;
      expect(text).toTemplateMatch(expectedMessage);
      })); // end should have error message for expired token
      }); // end Test valid form
    }); // end Test form submission
  }); // end Test with token
}); // end Reset Password Component

class Page {
  warnings: DebugElement[];
  submitButton: DebugElement;
  links: RouterLinkStubDirective[];
  errorMessage: HTMLElement;
  successMessage: HTMLElement;

  constructor(){}

  addElements(){
    let possibleWarnings = fixture.debugElement.queryAll(By.css('.invalid-feedback'));
    this.warnings = possibleWarnings.map((w)=>{
      return w.query(By.css('div'))
    });
    this.submitButton = fixture.debugElement.query(By.css('button'));
    let linkDes = fixture.debugElement
    .queryAll(By.directive(RouterLinkStubDirective));
    this.links = linkDes
    .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
    let tmp = fixture.debugElement.query(By.css('#errorMessage'));
    this.errorMessage = tmp ? tmp.nativeElement : null;
    tmp = fixture.debugElement.query(By.css('#successMessage'));
    this.successMessage = tmp ? tmp.nativeElement : null;
  }
}

function createComponent(){
  fixture = TestBed.createComponent(ResetPasswordComponent);
  comp = fixture.componentInstance;
  page = new Page();
  fixture.detectChanges(); // trigger ngOnInit
}
