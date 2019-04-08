import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpRequest, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StudentService } from './student.service';
import { Scenario, Fridge, StudentFridge } from '../../interfaces';
import { listOfScenarios, userAdmin, sampleInstr, listOfStudents,  listOfStudentFridges} from '../../testing/sample-data';
import { listOfMendelScenarios,  listOfStudentMendelFridges} from '../../testing/mendelpede-sample-data';
import * as _ from 'lodash';

describe('Student Service', ()=>{
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        StudentService
      ]
    });
  }); // end beforeEach

  describe('Test listStudents', ()=>{
    it('Should get a list of students for admin',
       inject(
      [HttpTestingController, StudentService],
      (
        backend: HttpTestingController,
        service: StudentService
    )=>{
        const userId = 1;
          service.listStudents(userId).subscribe(
            (res) => {
              expect(res.length).toBe(3);
              expect(res[0].firstName).toBe('Student1');
              expect(res[1].email).toBe('student2@test.com');
              expect(res[2].userId).toBe(17);
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/students');
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush(listOfStudents);
    }) // end inject
    ); // end Should get a list of students for admin

    it('Should get a list of students for instr',
       inject(
      [HttpTestingController, StudentService],
      (
        backend: HttpTestingController,
        service: StudentService
    )=>{
        const userId = 2;
          service.listStudents(userId).subscribe(
            (res) => {
              expect(res.length).toBe(1);
              expect(res[0].firstName).toBe('Student3');
              expect(res[0].lastName).toBe('ZTester');
              expect(res[0].email).toBe('student3@test.com');
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/students');
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush(listOfStudents.slice(2,3));
    }) // end inject
    ); // end Should get a list of students for instr

    it('Should get empty list of students',
       inject(
      [HttpTestingController, StudentService],
      (
        backend: HttpTestingController,
        service: StudentService
    )=>{
        const userId = 2;
          service.listStudents(userId).subscribe(
            (res) => {
              expect(res.length).toBe(0);
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/students');
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush([]);
    }) // end inject
    ); // end Should get empty list of students
  }); // end Test listStudents

  describe('Test getStudent', ()=>{
    it('Should get student',
       inject(
      [HttpTestingController, StudentService],
      (
        backend: HttpTestingController,
        service: StudentService
    )=>{
        const userId = 2;
        const studentId = 16;
        const expectedStudent = listOfStudents[1];
          service.getStudent(userId, studentId).subscribe(
            (res) => {
              expect(res.firstName).toBe(expectedStudent.firstName);
              expect(res.lastName).toBe(expectedStudent.lastName);
              expect(res.email).toBe(expectedStudent.email);
              expect(res.role).toBe('student');
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/students/'+studentId);
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush(listOfStudents[1]);
    }) // end inject
    ); // end Should get student

    it('Should not get non-existant student',
       inject(
      [HttpTestingController, StudentService],
      (
        backend: HttpTestingController,
        service: StudentService
    )=>{
        const userId = 2;
        const studentId = 34;
          service.getStudent(userId, studentId).subscribe(
            (res) => {
             fail('Should not have result');
            }, (err) => {
               expect(err.error.message).toBe('User not found');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/students/'+studentId);
          const mockError = new ErrorEvent('Not Found', {
            message: "User not found"
          });
          mockReq.error(mockError);
    }) // end inject
    ); // end Should not get non-existant student
  }); // end Test getStudent

  describe('Test setStudentRole', ()=>{
    it('Should make student an instr',
       inject(
      [HttpTestingController, StudentService],
      (
        backend: HttpTestingController,
        service: StudentService
    )=>{
        const userId = 2;
        const studentId = 16;
        const newRole = 'instr';
        const expectedStudent = listOfStudents[1];
          service.setStudentRole(userId, studentId, newRole).subscribe(
            (res) => {
              expect(res.firstName).toBe(expectedStudent.firstName);
              expect(res.lastName).toBe(expectedStudent.lastName);
              expect(res.email).toBe(expectedStudent.email);
              expect(res.role).toBe('instr');
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/students/'+studentId);
          expect(mockReq.request.responseType).toEqual('json');
        let updatedUser = _.cloneDeep(expectedStudent);
        updatedUser.role = 'instr';
          mockReq.flush(updatedUser);
    }) // end inject
    ); // end Should make student an instr

    it('Should have error for invalid role',
       inject(
      [HttpTestingController, StudentService],
      (
        backend: HttpTestingController,
        service: StudentService
    )=>{
        const userId = 2;
        const studentId = 16;
        const newRole = 'custom';
        const expectedStudent = listOfStudents[1];
          service.setStudentRole(userId, studentId, newRole).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Value "custom" is not a valid role');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/students/'+studentId);
          const mockError = new ErrorEvent('Internal Server Error', {
            message: 'Value "custom" is not a valid role'
          });
          mockReq.error(mockError);
    }) // end inject
    ); // end Should have error for invalid role
  }); // end Test setStudentRole

  describe('Test deleteStudent', ()=>{
    it('Should delete student',
       inject(
      [HttpTestingController, StudentService],
      (
        backend: HttpTestingController,
        service: StudentService
    )=>{
        const userId = 2;
        const studentId = 15;
        const expectedStudent = listOfStudents[0];
          service.deleteStudent(userId, studentId).subscribe(
            (res) => {
              expect(res.firstName).toBe(expectedStudent.firstName);
              expect(res.lastName).toBe(expectedStudent.lastName);
              expect(res.email).toBe(expectedStudent.email);
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/students/'+studentId);
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush(listOfStudents[0]);
    }) // end inject
    ); // end Should delete student

    it('Should not delete non-existant student',
       inject(
      [HttpTestingController, StudentService],
      (
        backend: HttpTestingController,
        service: StudentService
    )=>{
        const userId = 2;
        const studentId = 34;
          service.deleteStudent(userId, studentId).subscribe(
            (res) => {
             fail('Should not have result');
            }, (err) => {
               expect(err.error.message).toBe('User not found');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/students/'+studentId);
          const mockError = new ErrorEvent('Not Found', {
            message: "User not found"
          });
          mockReq.error(mockError);
    }) // end inject
    ); // end Should not delete non-existant student
  }); // end Test deleteStudent

  describe('Test getMendelFridge', ()=>{
    it('Should get student mendel fridge',
       inject(
      [HttpTestingController, StudentService],
      (
        backend: HttpTestingController,
        service: StudentService
    )=>{
        const userId = 2;
        const studentId = 15;
        const scenCode = listOfMendelScenarios[0].shortCode
        const expectedFridge = listOfStudentMendelFridges[0];
          service.getMendelFridge(userId, studentId, scenCode).subscribe(
            (res) => {
              expect(res.owner.firstName).toBe(listOfStudents[0].firstName);
              expect(res.scenario.label).toBe(listOfMendelScenarios[0].label);
              expect(res.accessGranted).toBeTruthy();
              expect(res.pedes.length).toBe(6);
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/mendel-students/'+studentId+'/'+scenCode);
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush(listOfStudentMendelFridges[0]);
    }) // end inject
    ); // end Should getMendelFridge
  }); // end test getMendelFridge

  describe('Test deleteStudentMendelFridge', ()=>{
    it('Should delete student mendel fridge',
       inject(
      [HttpTestingController, StudentService],
      (
        backend: HttpTestingController,
        service: StudentService
    )=>{
        const userId = 2;
        const studentId = 15;
        const scenCode = listOfMendelScenarios[0].shortCode
        const expectedFridge = listOfStudentMendelFridges[0];
          service.deleteStudentMendelFridge(userId, studentId, scenCode).subscribe(
            (res) => {
              expect(res).toBe('mendelfridge deleted');
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/delete-mendel-fridge/'+studentId+'/'+scenCode);
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush('mendelfridge deleted');
    }) // end inject
    ); // end Should delete student mendel fridge
  }); // end test deleteStudentMendelFridge

  describe('Test deleteQuizScore', ()=>{
    it('Should delete student mendel fridge',
       inject(
      [HttpTestingController, StudentService],
      (
        backend: HttpTestingController,
        service: StudentService
    )=>{
        const userId = 2;
        const studentId = 15;
        const scenCode = listOfMendelScenarios[0].shortCode
        const expectedFridge = listOfStudentMendelFridges[0];
          service.deleteQuizScore(userId, studentId, scenCode).subscribe(
            (res) => {
              expect(res).toBe('quiz deleted');
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/delete-quiz-score/'+studentId+'/'+scenCode);
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush('quiz deleted');
    }) // end inject
    ); // end Should delete student mendel fridge
  }); // end test deleteStudentMendelFridge

  describe('Test getFridge', ()=>{
    it('Should get student fridge',
       inject(
      [HttpTestingController, StudentService],
      (
        backend: HttpTestingController,
        service: StudentService
    )=>{
        const userId = 2;
        const studentId = 15;
        const scenCode = listOfScenarios[0].scenCode
        const expectedFridge = listOfStudentFridges[0];
          service.getFridge(userId, studentId, scenCode).subscribe(
            (res) => {
              expect(res.owner.firstName).toBe(listOfStudents[0].firstName);
              expect(res.scenario.label).toBe(listOfScenarios[0].label);
              expect(res.accessGranted).toBeTruthy();
              expect(res.strains.length).toBe(4);
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/students/'+studentId+'/'+scenCode);
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush(listOfStudentFridges[0]);
    }) // end inject
    ); // end Should get student fridge

    it('Should get empty student fridge',
       inject(
      [HttpTestingController, StudentService],
      (
        backend: HttpTestingController,
        service: StudentService
    )=>{
        const userId = 2;
        const studentId = 15;
        const scenCode = listOfScenarios[1].scenCode
          service.getFridge(userId, studentId, scenCode).subscribe(
            (res) => {
              expect(res.owner.firstName).toBe(listOfStudents[0].firstName);
              expect(res.scenario.label).toBe(listOfScenarios[1].label);
              expect(res.accessGranted).toBeUndefined();
              expect(res.strains).toBeUndefined();
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/students/'+studentId+'/'+scenCode);
          expect(mockReq.request.responseType).toEqual('json');
        const sendFridge: StudentFridge = {
          owner: listOfStudents[0],
          scenario: listOfScenarios[1]
        }
          mockReq.flush(sendFridge);
    }) // end inject
    ); // end Should get empty student fridge

    it('Should not get fridge for non-existant student',
       inject(
      [HttpTestingController, StudentService],
      (
        backend: HttpTestingController,
        service: StudentService
    )=>{
        const userId = 2;
        const studentId = 34;
        const scenCode = listOfScenarios[1].scenCode
          service.getFridge(userId, studentId, scenCode).subscribe(
            (res) => {
             fail('Should not have result');
            }, (err) => {
               expect(err.error.message).toBe('User not found');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/students/'+studentId+'/'+scenCode);
          const mockError = new ErrorEvent('Not Found', {
            message: "User not found"
          });
          mockReq.error(mockError);
    }) // end inject
    ); // end Should not get fridge for non-existant student

    it('Should not get fridge for non-existant scenario',
       inject(
      [HttpTestingController, StudentService],
      (
        backend: HttpTestingController,
        service: StudentService
    )=>{
        const userId = 2;
        const studentId = 15;
        const scenCode = 'TEST004'
          service.getFridge(userId, studentId, scenCode).subscribe(
            (res) => {
             fail('Should not have result');
            }, (err) => {
               expect(err.error.message).toBe('Failed to load scenario TEST004');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/students/'+studentId+'/'+scenCode);
          const mockError = new ErrorEvent('Not Found', {
            message: "Failed to load scenario "+scenCode
          });
          mockReq.error(mockError);
    }) // end inject
    ); // end Should not get fridge for non-existant scenario
  }); // end Test getFridge

  describe('Test grantScenAccess', ()=>{
    it('Should grant access to student',
       inject(
      [HttpTestingController, StudentService],
      (
        backend: HttpTestingController,
        service: StudentService
    )=>{
        const userId = 2;
        const studentId = 15;
        const scenCode = listOfScenarios[1].scenCode
        const expectedStudent = listOfStudents[0];
          service.grantScenAccess(userId, studentId, scenCode, true).subscribe(
            (res) => {
              expect(res.firstName).toBe(expectedStudent.firstName);
              expect(res.lastName).toBe(expectedStudent.lastName);
              expect(res.email).toBe(expectedStudent.email);
              expect(res.accessGranted[scenCode]).toBeTruthy();
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/students/'+studentId+'/'+scenCode);
          expect(mockReq.request.responseType).toEqual('json');
        let student = _.cloneDeep(listOfStudents[0]);
        student.accessGranted[scenCode] = true;
          mockReq.flush(student);
    }) // end inject
    ); // end Should grant access to student

  it('Should not grant access for non-existant student',
       inject(
      [HttpTestingController, StudentService],
      (
        backend: HttpTestingController,
        service: StudentService
    )=>{
        const userId = 2;
        const studentId = 34;
        const scenCode = listOfScenarios[1].scenCode
          service.grantScenAccess(userId, studentId, scenCode, true).subscribe(
            (res) => {
             fail('Should not have result');
            }, (err) => {
               expect(err.error.message).toBe('User not found');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/students/'+studentId+'/'+scenCode);
          const mockError = new ErrorEvent('Not Found', {
            message: "User not found"
          });
          mockReq.error(mockError);
    }) // end inject
    ); // end Should not grant access for non-existant student

    it('Should not grant access for non-existant scenario',
       inject(
      [HttpTestingController, StudentService],
      (
        backend: HttpTestingController,
        service: StudentService
    )=>{
        const userId = 2;
        const studentId = 15;
        const scenCode = 'TEST004'
          service.grantScenAccess(userId, studentId, scenCode, true).subscribe(
            (res) => {
             fail('Should not have result');
            }, (err) => {
               expect(err.error.message).toBe('Failed to load scenario TEST004');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/students/'+studentId+'/'+scenCode);
          const mockError = new ErrorEvent('Not Found', {
            message: "Failed to load scenario "+scenCode
          });
          mockReq.error(mockError);
    }) // end inject
    ); // end Should not grant access for non-existant scenario
  }); // end Test grantScenAccess
}); // end Student Service
