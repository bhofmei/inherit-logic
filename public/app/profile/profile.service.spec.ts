import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpRequest, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProfileService } from './profile.service';
import { User } from '../interfaces';
import { userInstr } from '../testing/sample-data';

describe('Profile Service', ()=>{
    beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        ProfileService
      ]
    });
  }); // end beforeEach

  describe('Test editProfile', ()=>{
    const userDetails = {
      firstName: 'First',
      lastName: 'Last',
      email: 'updated@test.com'
    };

    it('should edit profile',
      inject(
        [HttpTestingController, ProfileService],
        (
          backend: HttpTestingController,
          service: ProfileService
        ) => {
          service.editProfile(userInstr.id, userDetails).subscribe(
            (res) => {
              expect(res).toBeDefined();
              expect(res.firstName).toEqual(userDetails.firstName);
              expect(res.lastName).toEqual(userDetails.lastName);
              expect(res.id).toEqual(userInstr.id);
              expect(res.email).toEqual(userDetails.email);
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/\api/users/' + userInstr.id);
          expect(mockReq.request.responseType).toEqual('json');
          const result: User = {
            id: userInstr.id,
            firstName: userDetails.firstName,
            lastName: userDetails.lastName,
            email: userDetails.email,
            role: userInstr.role
          };
          mockReq.flush(result);
        }) // end inject
    ); // end should edit profile

    it('should not edit profile - user does not exist',
      inject(
        [HttpTestingController, ProfileService],
        (
          backend: HttpTestingController,
          service: ProfileService
        ) => {
          service.editProfile(43, userDetails).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('User does not exist');
            }
          ); // end subscribe

          const mockReq = backend.expectOne('/api/users/43');
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "User does not exist"
          });

          mockReq.error(mockError);
        }) // end inject
    ); // end should not edit profile - user does not exist
  }); // end Test editProfile

  describe('Test updatePassword', ()=>{
    const credentials = {
      password: 'old-password',
      newPassword: 'new-password'
    };

    it('should update password',
      inject(
        [HttpTestingController, ProfileService],
        (
          backend: HttpTestingController,
          service: ProfileService
        ) => {
          service.updatePassword(userInstr.id, credentials).subscribe(
            (res) => {
              expect(res).toBeDefined();
              expect(res.firstName).toEqual(userInstr.firstName);
              expect(res.lastName).toEqual(userInstr.lastName);
              expect(res.id).toEqual(userInstr.id);
              expect(res.email).toEqual(userInstr.email);
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/users/' + userInstr.id+'/update-password');
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush(userInstr);
        }) // end inject
    ); // end should edit profile

    it('should not update password - user does not exist',
      inject(
        [HttpTestingController, ProfileService],
        (
          backend: HttpTestingController,
          service: ProfileService
        ) => {
          service.updatePassword(43, credentials).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('User does not exist');
            }
          ); // end subscribe

          const mockReq = backend.expectOne('/api/users/43/update-password');
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "User does not exist"
          });

          mockReq.error(mockError);
        }) // end inject
    ); // end should not update password - user does not exist

    it('should not update password - wrong password',
      inject(
        [HttpTestingController, ProfileService],
        (
          backend: HttpTestingController,
          service: ProfileService
        ) => {
          let creds = {password: 'abedfg', newPassword: credentials.newPassword};
          service.updatePassword(userInstr.id, creds).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Incorrect password');
            }
          ); // end subscribe

          const mockReq = backend.expectOne('/api/users/'+userInstr.id+'/update-password');
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "Incorrect password"
          });

          mockReq.error(mockError);
        }) // end inject
    ); // end should not update password - user does not exist
  }); // end Test updatePassword

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  })); // end afterEach

}); // end Profile Service
