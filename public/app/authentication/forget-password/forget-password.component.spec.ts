import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Directive, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';

import { SharedModule } from '../../shared/shared.module';
import { ForgetPasswordComponent } from './forget-password.component';
import { AuthenticationService } from '../authentication.service';

import { userAdmin } from '../../testing/sample-data';
import { User } from '../../interfaces';
import { AuthServiceStub } from '../../testing/service-stubs';

let fixture: ComponentFixture<ForgetPasswordComponent>;
let comp: ForgetPasswordComponent;
let page: Page;
let authService: AuthenticationService;

describe('Forget Password Component', ()=>{
    beforeEach(async(()=>{
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ForgetPasswordComponent],
      providers: [
        {provide: AuthenticationService, useClass: AuthServiceStub}
      ]
    }).compileComponents();
  })); // end beforeEach async

  describe('Test form validity', ()=>{
    beforeEach(fakeAsync(()=>{
      createComponent();
      tick();
    })); // end beforeEach fakeAsync

    it('should be invalid on empty', ()=>{
      expect(comp.email.invalid).toBeTruthy();
    }); // should be invalid on empty

    it('should have invalid email', ()=>{
      let email = comp.email;
      email.setValue('invaidemail');
      expect(email.valid).toBeFalsy();
      let errors = email.errors || {};
      expect(errors['email']).toBeTruthy();
    }); // end should have invalid email

    it('should have valid email', ()=>{
      let email = comp.email;
      email.setValue(userAdmin.email);
      expect(email.valid).toBeTruthy();
      let errors = email.errors || {};
      expect(errors['email']).toBeFalsy();
    }); // end should have valid email
  }); // end Test form validity

  describe('Test form warnings', ()=>{
     beforeEach(fakeAsync(()=>{
      createComponent();
      tick();
      page.addElements();
    })); // end beforeEach fakeAsync

    it('should have no warnings', ()=>{
      expect(page.emailWarning).toBeNull();
    }); // end should have no warnings

   it('should have email required warning', fakeAsync(()=>{
      let email = comp.email;
      email.setValue('');
      email.markAsTouched();
      fixture.detectChanges();
      page.addElements();
      expect(page.emailWarning).not.toBeNull();
      let warning = page.emailWarning.nativeElement.innerHTML;
      expect(warning).toBe('Email is required.')
    })); // end should have email required warning

    it('should have email invalid warning', fakeAsync(()=>{
      let email = comp.email;
      email.setValue('invalid-email');
      email.markAsTouched();
      fixture.detectChanges();
      page.addElements();
      expect(page.emailWarning).not.toBeNull();
      let warning = page.emailWarning.nativeElement.innerHTML;
      expect(warning).toBe('Email is invalid.')
    })); // end should have email invalid warning

    it('should have no warnings with valid input', fakeAsync(()=>{
      let email = comp.email;
      email.setValue(userAdmin.email);
      email.markAsTouched();
      fixture.detectChanges();
      page.addElements();
      expect(page.emailWarning).toBeNull();
    })); // end should have no warnings with valid input
  }); // end Test form warnings

  describe('Test form submission', ()=>{
       let aService, aSpy;
    let testEmail = userAdmin.email;
    beforeEach(fakeAsync(()=>{
      createComponent();
      tick();
      page.addElements();
      aService = fixture.debugElement.injector.get(AuthenticationService);
      aSpy = spyOn(aService, 'forgetPassword').and.callThrough();
    })); // end beforeEach fakeAsync

     it('should have disabled button', ()=>{
     var isDisabled = page.submitButton.nativeElement.hasAttribute('disabled');
      expect(isDisabled).toBeTruthy();
    }); // end should have disabled button

     it('should submit', fakeAsync(()=>{
      let email = comp.email;
      email.setValue(testEmail);
      fixture.detectChanges();
      comp.sendForget();
      let didUpdate = aSpy.calls.any();
      expect(didUpdate).toBe(true);
    })); // end should submit

    it('should have error message email not found', fakeAsync(()=>{
      let email = comp.email;
      email.setValue('invalid@email.com');
      fixture.detectChanges();
      comp.sendForget();
      tick();
      fixture.detectChanges();
      page.addElements();

      expect(page.errorMessage.innerHTML).toMatch('No account with that email.')
    })); // end should have error message email not found

    it('should have error message server error', fakeAsync(()=>{
      let email = comp.email;
      email.setValue('error@test.com');
      fixture.detectChanges();
      comp.sendForget();
      tick();
      fixture.detectChanges();
      page.addElements();

      expect(page.errorMessage.innerHTML).toMatch('Error with server email service.')
    })); // end should have error message server error

    it('should have success message', fakeAsync(()=>{
      let email = comp.email;
      email.setValue(testEmail);
      fixture.detectChanges();
      comp.sendForget();
      tick();
      fixture.detectChanges();
      page.addElements();

      expect(page.successMessage.innerHTML).toMatch('An email has been sent to '+testEmail+' with further instructions');
    })); // end should have success message
  }); // end Test form submission
}); // end Forget Password Component
class Page {
  errorMessage: HTMLElement;
  successMessage: HTMLElement;
  emailWarning: DebugElement;
  submitButton: DebugElement;

  constructor(){}

  addElements(){
    let tmp = fixture.debugElement.query(By.css('.invalid-feedback'));
    this.emailWarning = tmp ? tmp.query(By.css('div')) : null;
    tmp = fixture.debugElement.query(By.css('#error-message'));
    this.errorMessage = tmp ? tmp.nativeElement : null;
    tmp = fixture.debugElement.query(By.css('#success-message'));
    this.successMessage = tmp ? tmp.nativeElement : null;
    this.submitButton = fixture.debugElement.query(By.css('button'));
  }
}

function createComponent(){
  fixture = TestBed.createComponent(ForgetPasswordComponent);
  comp = fixture.componentInstance;
  page = new Page();
  fixture.detectChanges(); // trigger ngOnInit
}
