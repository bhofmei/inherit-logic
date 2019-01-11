import { TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpRequest, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthenticationService } from './authentication.service';
import { User } from '../interfaces';
import { userAdmin, userInstr, userStudent, listOfStudents } from '../testing/sample-data';

let authService: AuthenticationService;

describe('Authentication Service', ()=>{
  beforeEach(()=>{
      const spy = jasmine.createSpyObj('AuthenticationService', ['setUser', 'getUser'])
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
          AuthenticationService
        //{provide: AuthenticationService, useValue: spy}
      ]
    });
      authService = TestBed.get(AuthenticationService);
  }); // end beforeEach

  describe('Test setUser', ()=>{
        it('Should set user to admin', fakeAsync(()=>{
            authService.setUser(userAdmin);
            tick();
            authService.getUser$.subscribe( val =>{
                expect(val).toBeDefined();
                expect(val.firstName).toBe(userAdmin.firstName);
                expect(val.id).toBe(userAdmin.id);
            });
        })); // end Should set user to admin

      it('Should set user to null', fakeAsync(()=>{
            authService.setUser(null);
            tick();
            authService.getUser$.subscribe( val =>{
                expect(val).toBeNull()
            });
        })); // end Should set user to null
  }); // end Test setUser

  describe('Test getUser', ()=>{
    it('Should get null user', fakeAsync(()=>{
       let val = authService.getUser();
        expect(val).toBeNull();
    })); // end Should get null user

      it('Should get admin user', fakeAsync(()=>{
            authService.setUser(userAdmin);
            tick();
            let val = authService.getUser();
          expect(val).not.toBeNull();
          expect(val.firstName).toBe(userAdmin.firstName);
        })); // end Should get admin user
  }); // end Test getUser

  describe('Test isLoggedIn', ()=>{
    it('Should be true for admin user', fakeAsync(()=>{
        authService.setUser(userAdmin);
            tick();
          expect(authService.isLoggedIn()).toBeTruthy();
    })); // end Should be true for admin user

       it('Should be false for null user', ()=>{
        expect(authService.isLoggedIn()).toBeFalsy();
    }); // end Should be false for null user
  }); // end Test isLoggedIn

  describe('Test canAccessAdmin', ()=>{
    it('Should be true for admin user', fakeAsync(()=>{
        authService.setUser(userAdmin);
            tick();
          expect(authService.canAccessAdmin()).toBeTruthy();
    })); // end Should be true for admin user

    it('Should be true for instr user', fakeAsync(()=>{
        authService.setUser(userInstr);
            tick();
          expect(authService.canAccessAdmin()).toBeTruthy();
    })); // end Should be true for instr user

    it('Should be false for student user', fakeAsync(()=>{
        authService.setUser(userStudent);
            tick();
          expect(authService.canAccessAdmin()).toBeFalsy();
    })); // end Should be false for student user

       it('Should be false for null user', ()=>{
          expect(authService.canAccessAdmin()).toBeFalsy();
    }); // end Should be false for null user
  }); // end Test canAccessAdmin

  describe('Test signin', ()=>{
    it('Should sign-in admin user',
      inject(
        [HttpTestingController, AuthenticationService],
        (
          backend: HttpTestingController,
          service: AuthenticationService
        ) => {
        let cred = {username: userAdmin.email, password: 'testpassword'};
          service.signin(cred).subscribe(
            (res) => {
              expect(res).toBeDefined();
              expect(res.firstName).toBe(userAdmin.firstName);
              expect(res.id).toBe(userAdmin.id)
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/auth/signin');
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush(userAdmin);
        }) // end inject
    ); // end Should sign-in admin user

     it('should not sign in - no user for email',
      inject(
        [HttpTestingController, AuthenticationService],
        (
          backend: HttpTestingController,
          service: AuthenticationService
        ) => {
            let cred = {username: 'invalid@email.com', password: 'irrelevant'}
          service.signin(cred).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('User not found');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/auth/signin');
          const mockError = new ErrorEvent('Not Found', {
            message: "User not found"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not sign in - no user for email

      it('should not sign in - wrong password',
      inject(
        [HttpTestingController, AuthenticationService],
        (
          backend: HttpTestingController,
          service: AuthenticationService
        ) => {
            let cred = {username: 'email@email.com', password: 'bad.password'}
          service.signin(cred).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Invalid password');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/auth/signin');
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "Invalid password"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not sign in - no user for email
  }); // end Test signin

  describe('Test signup', ()=>{
    it('Should sign-up new user',
      inject(
        [HttpTestingController, AuthenticationService],
        (
          backend: HttpTestingController,
          service: AuthenticationService
        ) => {
            let student = listOfStudents[0];
        let cred = {firstName: student.firstName, lastName: student.lastName, username: student.email, password: 'testpassword', course: 'course-id'};
          service.signup(cred).subscribe(
            (res) => {
              expect(res).toBeDefined();
              expect(res.firstName).toBe(student.firstName);
              expect(res.id).toBe(19);
                expect(res.role).toBe(0);
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
            let expected: User = {firstName: student.firstName, lastName: student.lastName, id: 19, email: student.email, role: 0};
          const mockReq = backend.expectOne('/api/auth/signup');
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush(expected);
        }) // end inject
    ); // end Should sign-up new user

    it('should not sign up - password too short',
      inject(
        [HttpTestingController, AuthenticationService],
        (
          backend: HttpTestingController,
          service: AuthenticationService
        ) => {
            let student = listOfStudents[0];
            let cred = {firstName: student.firstName, lastName: student.lastName, username: student.email, password: 'short', course: 'course-id'};
          service.signup(cred).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Password should be longer');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/auth/signup');
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "Password should be longer"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not sign up - password too short

    it('should not sign up - email required',
      inject(
        [HttpTestingController, AuthenticationService],
        (
          backend: HttpTestingController,
          service: AuthenticationService
        ) => {
            let student = listOfStudents[0];
            let cred = {firstName: student.firstName, lastName: student.lastName, username: '', password: 'my-password', course: 'course-id'};
          service.signup(cred).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Email is required');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/auth/signup');
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "Email is required"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not sign up - email required
  }); // end Test signup

  describe('Test signout', ()=>{
    it('Should signout',
      inject(
        [HttpTestingController, AuthenticationService],
        (
          backend: HttpTestingController,
          service: AuthenticationService
        ) => {
          service.signout().subscribe(
            (res) => {
              expect(res.message).toBeTruthy()
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe

          const mockReq = backend.expectOne('/api/auth/signout');
          mockReq.flush({message: true});
        }) // end inject
       ); // end Should signout
  }); // end Test signout

  describe('Test forgetPassword', ()=>{
     it('Should send reset email',
      inject(
        [HttpTestingController, AuthenticationService],
        (
          backend: HttpTestingController,
          service: AuthenticationService
        ) => {
            let student = listOfStudents[0];
        let cred = {email: student.email};
          service.forgetPassword(cred).subscribe(
            (res) => {
              expect(res.message).toBeDefined();
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
            let message = 'An email has been sent to ' + student.email + ' with further instructions.';
          const mockReq = backend.expectOne('/api/auth/forget-password');
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush({message: message});
        }) // end inject
    ); // end Should send reset email

        it('Should not send reset email - email service error',
      inject(
        [HttpTestingController, AuthenticationService],
        (
          backend: HttpTestingController,
          service: AuthenticationService
        ) => {
            let student = listOfStudents[0];
            let cred = {email: student.email};
          service.forgetPassword(cred).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Error with server email service.');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/auth/forget-password');
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "Error with server email service."
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not send reset email - email service error

    it('Should not send reset email - email not existing user',
      inject(
        [HttpTestingController, AuthenticationService],
        (
          backend: HttpTestingController,
          service: AuthenticationService
        ) => {
            let cred = {email: 'bad-user@email.com'};
          service.forgetPassword(cred).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('No account with that email.');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/auth/forget-password');
          const mockError = new ErrorEvent('Not Found', {
            message: "No account with that email."
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not send reset email - email service error
  }); // end Test forgetPassword

  describe('Test resetPassword', ()=>{
         it('Should send reset password',
      inject(
        [HttpTestingController, AuthenticationService],
        (
          backend: HttpTestingController,
          service: AuthenticationService
        ) => {
        let cred = {password: 'new-pass', confirmPassword: 'new-pass', token: 'my-token-testing'};
          service.resetPassword(cred).subscribe(
            (res) => {
              expect(res.message).toBeDefined();
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
            let message = 'Passwords has been reset';
          const mockReq = backend.expectOne('/api/auth/reset-password');
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush({message: message});
        }) // end inject
    ); // end Should reset password

        it('Should not reset password - token expired',
      inject(
        [HttpTestingController, AuthenticationService],
        (
          backend: HttpTestingController,
          service: AuthenticationService
        ) => {
            let cred = {password: 'new-pass', confirmPassword: 'new-pass', token: 'bad-token-testing'};
          service.resetPassword(cred).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Token has expired');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/auth/reset-password');
          const mockError = new ErrorEvent('Forbidden', {
            message: "Token has expired"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not reset password - token expired

            it('Should not reset password - token does not exist',
      inject(
        [HttpTestingController, AuthenticationService],
        (
          backend: HttpTestingController,
          service: AuthenticationService
        ) => {
            let cred = {password: 'new-pass', confirmPassword: 'new-pass', token: 'nonexisting-token-testing'};
          service.resetPassword(cred).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Invalid token');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/auth/reset-password');
          const mockError = new ErrorEvent('Not Found', {
            message: "Invalid token"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not reset password - token does not exist

    it('Should not reset password - confirm password does not match',
      inject(
        [HttpTestingController, AuthenticationService],
        (
          backend: HttpTestingController,
          service: AuthenticationService
        ) => {
            let cred = {password: 'new-pass', confirmPassword: 'other-pass', token: 'my-token-testing'};
          service.resetPassword(cred).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Confirm password does not match.');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/auth/reset-password');
          const mockError = new ErrorEvent('Bad Request', {
            message: "Confirm password does not match."
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not reset password - token expired
  }); // end Test resetPassword
}); // end Authentication Service
