import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Directive, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { RouterLinkStubDirective, getAllRouterLinks, RouterStub, Router , click, addMatchers} from '../../testing';

import { SharedModule } from '../../shared/shared.module';
import { SignupComponent } from './signup.component';
import { AuthenticationService } from '../authentication.service';
import { CourseService } from '../../admin/course/course.service';

import { userAdmin, userInstr, listOfUsers } from '../../testing/sample-data';
import { User } from '../../interfaces';
import { AuthServiceStub, CourseServiceStub } from '../../testing/service-stubs';

let fixture: ComponentFixture<SignupComponent>;
let comp: SignupComponent;
let page: Page;
let authService: AuthenticationService;
let courseService: CourseService;
let route: RouterStub

describe('Signup Component', ()=>{
  beforeEach(async(()=>{
    route = new RouterStub();
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [SignupComponent, RouterLinkStubDirective],
      providers: [
        {provide: AuthenticationService, useClass: AuthServiceStub},
        {provide: CourseService, useClass: CourseServiceStub},
        {provide: Router, useValue: route}
      ]
    }).compileComponents();
  })); // end beforeEach async

  describe('Test course order', ()=>{
    beforeEach(fakeAsync(()=>{
      createComponent();
      tick();
      page.addElements();
    })); // end beforeEach fakeAsync

    it('should have courses in correct order', ()=>{
      let course = page.courseNames;
     console.log(course);
      expect(course.length).toBe(3);
      expect(course[0]).toBe('Select course');
      expect(course[1]).toBe('TEST001');
      expect(course[2]).toBe('TEST002');
    }); // should have courses in correct order
  }); // end Test course order

  describe('Test form validity and warnings', ()=>{
    beforeEach(fakeAsync(()=>{
      createComponent();
      tick();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync

    it('should be invalid when empty', ()=>{
      expect(comp.user.valid).toBeFalsy();
    }); // end should be invalid when empty

     it('should have no warnings', ()=>{
      expect(page.warnings.length).toBe(0);
    }); // end should have no warnings

    describe('Test first and last name', ()=>{
      let firstName, lastName;

      beforeEach(()=>{
        firstName = comp.user.controls['firstName'];
        lastName = comp.user.controls['lastName'];
      }); // end beforeEach

      it('should have invalid first and last names', ()=>{
      expect(firstName.valid).toBeFalsy();
      let firstError = firstName.errors || {};
      expect(firstError['required']).toBeTruthy();

        expect(lastName.valid).toBeFalsy();
      let lastError = lastName.errors || {};
      expect(lastError['required']).toBeTruthy();
      });  // end should have invalid first and last names

      it('should have first name required warning', fakeAsync(()=>{
        firstName.setValue('');
        firstName.markAsTouched();
        fixture.detectChanges();
        page.addElements();
        expect(page.warnings.length).toBe(1);
        let warning = page.warnings[0].nativeElement.innerHTML;
        expect(warning).toTemplateMatch('First name is required.');
      })); // end should have first name required warning

      it('should have last name required warning', fakeAsync(()=>{
        lastName.setValue('');
        lastName.markAsTouched();
        fixture.detectChanges();
        page.addElements();
        expect(page.warnings.length).toBe(1);
        let warning = page.warnings[0].nativeElement.innerHTML;
        expect(warning).toTemplateMatch('Last name is required.');
      })); // end should have last name required warning

      it('should have valid first and last names', ()=>{
      firstName.setValue('Person');
      expect(firstName.valid).toBeTruthy();
      let firstError = firstName.errors || {};
      expect(firstError['required']).toBeFalsy();

      lastName.setValue('Tester')
      expect(lastName.valid).toBeTruthy();
      let lastError = lastName.errors || {};
      expect(lastError['required']).toBeFalsy();
      }); // end should have valid first and last names

      it('should not have first and last name warnings', fakeAsync(()=>{
        firstName.setValue('Person');
        firstName.markAsTouched();
        lastName.setValue('Tester');
        lastName.markAsTouched();
        fixture.detectChanges();
        page.addElements();
        expect(page.warnings.length).toBe(0);
      })); // end should not have first and last name warnings
    }); // end Test first and last name

    describe('Test email', ()=>{
      let email;

      beforeEach(()=>{
        email = comp.user.controls['username'];
      }); // end beforeEach

    it('should have invalid email', ()=>{
      email.setValue('invaidemail');
      expect(email.valid).toBeFalsy();
      let errors = email.errors || {};
      expect(errors['email']).toBeTruthy();
    }); // end should have invalid email

      it('should have valid email', ()=>{
      email.setValue(userAdmin.email);
      expect(email.valid).toBeTruthy();
      let errors = email.errors || {};
      expect(errors['email']).toBeFalsy();
    }); // end should have valid email

      it('should have email required warning', fakeAsync(()=>{
      email.setValue('');
      email.markAsTouched();
      fixture.detectChanges();
      page.addElements();
      expect(page.warnings.length).toBe(1);
      let warning = page.warnings[0].nativeElement.innerHTML;
      expect(warning).toTemplateMatch('Email is required.')
      })); // end should have email required warning

    it('should have email invalid warning', fakeAsync(()=>{
      email.setValue('invalid-email');
      email.markAsTouched();
      fixture.detectChanges();
      page.addElements();
      expect(page.warnings.length).toBe(1);
      let warning = page.warnings[0].nativeElement.innerHTML;
      expect(warning).toTemplateMatch('Email is invalid.')
    })); // end should have email invalid warning

    it('should not have email warnings', fakeAsync(()=>{
      email.setValue(userAdmin.email);
      email.markAsTouched();
      fixture.detectChanges();
      page.addElements();
      expect(page.warnings.length).toBe(0);
    })); // emd should not have email warnings
    }); // end Test email

    describe('Test course', ()=>{
      let course;
      beforeEach(()=>{
        course = comp.user.controls['course'];
      }); // beforeEach

      it('should have invalid course', ()=>{
      expect(course.valid).toBeFalsy();
      let errors = course.errors || {};
      expect(errors['required']).toBeTruthy();
      });  // end should have invalid course

      it('should have course required warning', fakeAsync(()=>{
        course.setValue('');
        course.markAsTouched();
        fixture.detectChanges();
        page.addElements();
        expect(page.warnings.length).toBe(1);
        let warning = page.warnings[0].nativeElement.innerHTML;
        expect(warning).toTemplateMatch('Course is required.');
      })); // endshould have course required warning

      it('should have valid course', ()=>{
      course.setValue('TEST01');
      expect(course.valid).toBeTruthy();
      let errors = course.errors || {};
      expect(errors['required']).toBeFalsy();
      }); // end should have valid course

      it('should not have course warning', fakeAsync(()=>{
        course.setValue('TEST01');
        course.markAsTouched();
        fixture.detectChanges();
        page.addElements();
        expect(page.warnings.length).toBe(0);
      })); // end should not have course warning
    }); // end Test course

  describe('Test for password', ()=>{
    let password, confirmPassword;

    beforeEach(()=>{
      password = comp.user.controls['password'];
      confirmPassword = comp.user.controls['confirmPassword'];
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
  }); // end Test for password

  }); // end Test for validity

  describe('Test form submission', ()=>{
    let aService, signupSpy;
    let testEmail = userAdmin.email;
    let firstName, lastName, email, course, password, confirmPassword;
    beforeEach(fakeAsync(()=>{
      createComponent();
      tick();
      page.addElements();
      aService = fixture.debugElement.injector.get(AuthenticationService);
      signupSpy = spyOn(aService, 'signup').and.callThrough();
      firstName = comp.user.controls['firstName'];
      lastName = comp.user.controls['lastName'];
      email = comp.user.controls['username'];
      course = comp.user.controls['course'];
      password = comp.user.controls['password'];
      confirmPassword = comp.user.controls['confirmPassword'];
    })); // end beforeEach fakeAsync

    it('should have disabled button for empty input', ()=>{
     var isDisabled = page.submitButton.nativeElement.hasAttribute('disabled');
      expect(isDisabled).toBeTruthy();
    }); // end should have disabled button for empty input

    it('should have disabled button for incorrect input', ()=>{
      email.setValue('inavlid');
      password.setValue('abc');
      confirmPassword.setValue('defg');
      fixture.detectChanges();
      page.addElements();
      var isDisabled = page.submitButton.nativeElement.hasAttribute('disabled');
      expect(isDisabled).toBeTruthy();
    }); // should have disabled button for incorrect input

    describe('Test valid form', ()=>{
      beforeEach(fakeAsync(()=>{
      firstName.setValue('Person');
      lastName.setValue('Tester');
      course.setValue('TEST004');
      email.setValue(testEmail);
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
      comp.signup();
      let didUpdate = signupSpy.calls.any();
      expect(didUpdate).toBe(true);
    })); // end should submit

    it('should navigate home on submit', fakeAsync(()=>{
        comp.signup();
        tick();
        fixture.detectChanges();
        let pathNav = route.path;
        expect(pathNav).toBe('/');
      })); // end should navigate home on submit
      }); // end Test valid form

  }); // end Test for submission
}); // end Signup Component

class Page {
  warnings: DebugElement[];
  submitButton: DebugElement;
  courseNames: string[];

  constructor(){}

  addElements(){
    let possibleWarnings = fixture.debugElement.queryAll(By.css('.invalid-feedback'));
    this.warnings = possibleWarnings.map((w)=>{
      return w.query(By.css('div'))
    });
    this.submitButton = fixture.debugElement.query(By.css('button'));
    let courses = fixture.debugElement.queryAll(By.css('option'));
    this.courseNames = courses.map((el)=> {return el.nativeElement.innerHTML});
  }
}

function createComponent(){
  fixture = TestBed.createComponent(SignupComponent);
  comp = fixture.componentInstance;
  page = new Page();
  fixture.detectChanges(); // trigger ngOnInit
}
