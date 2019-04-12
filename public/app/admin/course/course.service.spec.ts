import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpRequest, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CourseService } from './course.service';
import { Scenario, Fridge, FridgePhage, GenotypePhage } from '../../interfaces';
import { listOfScenarios, listOfCourses, userAdmin, sampleInstr, listOfStudents, instructorToAdd } from '../../testing/sample-data';

describe('Course Service', ()=>{
    beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        CourseService
      ]
    });
  }); // end beforeEach

  describe('Test listCourses', ()=>{
    it('Should get list of courses',
      inject(
        [HttpTestingController, CourseService],
        (
          backend: HttpTestingController,
          service: CourseService
        ) => {
          const userId = 1;
          service.listCourses(userId).subscribe(
            (res) => {
              expect(res.length).toBe(2);
              expect(res[0].courseNum).toBe('TEST001');
              expect(res[1].description).toBe('Second test course');
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/courses');
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush(listOfCourses);
        }) // end inject
    ); // end should get list of courses

    it('Should not have list of courses',
      inject(
        [HttpTestingController, CourseService],
        (
          backend: HttpTestingController,
          service: CourseService
        ) => {
          const userId = 15;
          service.listCourses(userId).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('No courses found');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/courses');
          const mockError = new ErrorEvent('Not Found', {
            message: "No courses found"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not have list of courses
  }); // end Test listCourses

  describe('Test createCourse', ()=>{
    const courseToCreate = {
      courseNum: 'TEST003',
      description: 'New course to be created'
    };
    it('Should create course',
      inject(
        [HttpTestingController, CourseService],
        (
          backend: HttpTestingController,
          service: CourseService
        ) => {
          const userId = sampleInstr.userId;
          service.createCourse(userId, courseToCreate).subscribe(
            (res) => {
              expect(res).toBeDefined();
              expect(res.courseNum).toBe(courseToCreate.courseNum);
              expect(res.instructors.length).toBe(1);
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/courses');
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush({courseNum: courseToCreate.courseNum,
                        description: courseToCreate.description,
                        instructors: [sampleInstr]});
        }) // end inject
    ); // end should create course
  }); // end Test createCourse

  describe('Test getCourse', ()=>{
    it('Should get course',
      inject(
        [HttpTestingController, CourseService],
        (
          backend: HttpTestingController,
          service: CourseService
        ) => {
          const userId = sampleInstr.userId;
          const testCourse = listOfCourses[0];
          service.getCourse(userId, testCourse.courseNum).subscribe(
            (res) => {
              expect(res).toBeDefined();
              expect(res.courseNum).toBe(testCourse.courseNum);
              expect(res.instructors.length).toBe(1);
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/courses/'+testCourse.courseNum);
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush(testCourse);
        }) // end inject
    ); // end should get course

    it('Should not get course - course does not exist',
      inject(
        [HttpTestingController, CourseService],
        (
          backend: HttpTestingController,
          service: CourseService
        ) => {
          const userId = sampleInstr.userId;
          service.getCourse(userId, 'TEST004').subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Failed to load course TEST004');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/courses/TEST004');
          const mockError = new ErrorEvent('Not Found', {
            message: "Failed to load course TEST004"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not have list of courses
  }); // end Test getCourse

    describe('Test getStudents', ()=>{
    it('Should get students',
      inject(
        [HttpTestingController, CourseService],
        (
          backend: HttpTestingController,
          service: CourseService
        ) => {
          const userId = sampleInstr.userId;
          const testCourse = listOfCourses[0];
          service.getStudents(userId, testCourse.courseNum).subscribe(
            (res) => {
              expect(res).toBeDefined();
              expect(res.length).toBe(3);
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/courses/'+testCourse.courseNum+'/students');
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush(listOfStudents);
        }) // end inject
    ); // end should get students

    it('Should not get students - course does not exist',
      inject(
        [HttpTestingController, CourseService],
        (
          backend: HttpTestingController,
          service: CourseService
        ) => {
          const userId = sampleInstr.userId;
          service.getStudents(userId, 'TEST004').subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Failed to load course TEST004');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/courses/TEST004/students');
          const mockError = new ErrorEvent('Not Found', {
            message: "Failed to load course TEST004"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not get students - course does not exist
  }); // end Test getStudents

  describe('Test getPossibleInstructors', ()=>{
    it('Should get possible instructors',
      inject(
        [HttpTestingController, CourseService],
        (
          backend: HttpTestingController,
          service: CourseService
        ) => {
          const userId = sampleInstr.userId;
          const testCourse = listOfCourses[0];
          service.getPossibleInstructors(userId, testCourse.courseNum).subscribe(
            (res) => {
              expect(res).toBeDefined();
              expect(res.length).toBe(1);
              expect(res[0].firstName).toBe(instructorToAdd.firstName);
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/courses/'+testCourse.courseNum+'/instructors');
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush([instructorToAdd]);
        }) // end inject
    ); // end should get possible instructors

    it('Should not get possible instructors - course does not exist',
      inject(
        [HttpTestingController, CourseService],
        (
          backend: HttpTestingController,
          service: CourseService
        ) => {
          const userId = sampleInstr.userId;
          service.getPossibleInstructors(userId, 'TEST004').subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Failed to load course TEST004');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/courses/TEST004/instructors');
          const mockError = new ErrorEvent('Not Found', {
            message: "Failed to load course TEST004"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not get possible instructors - course does not exist
  }); // end Test getPossibleInstructors

  describe('Test addInstructor', ()=>{
    it('Should add an instructor',
      inject(
        [HttpTestingController, CourseService],
        (
          backend: HttpTestingController,
          service: CourseService
        ) => {
          const userId = sampleInstr.userId;
          const testCourse = listOfCourses[0];
          service.addInstructor(userId, testCourse.courseNum, instructorToAdd.userId).subscribe(
            (res) => {
              expect(res).toBeDefined();
              expect(res.courseNum).toBe(testCourse.courseNum);
              expect(res.instructors.length).toBe(testCourse.instructors.length + 1);
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/courses/'+testCourse.courseNum+'/instructors/'+instructorToAdd.userId);
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush({
            courseNum: testCourse.courseNum,
            description: testCourse.description,
            instructors: testCourse.instructors.concat(instructorToAdd)
          });
        }) // end inject
    ); // end should add an instructor

    it('Should not get possible instructors - course does not exist',
      inject(
        [HttpTestingController, CourseService],
        (
          backend: HttpTestingController,
          service: CourseService
        ) => {
          const userId = sampleInstr.userId;
          service.addInstructor(userId, 'TEST004', instructorToAdd.userId).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Failed to load course TEST004');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/courses/TEST004/instructors/'+instructorToAdd.userId);
          const mockError = new ErrorEvent('Not Found', {
            message: "Failed to load course TEST004"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not get possible instructors - course does not exist
  }); // end Test addInstructor

  describe('Test editCourse', ()=>{
    const body = {description: "updated course description"};
    const userId = sampleInstr.userId;
    it('Should edit course',
      inject(
        [HttpTestingController, CourseService],
        (
          backend: HttpTestingController,
          service: CourseService
        ) => {
          const testCourse = listOfCourses[0];
          service.editCourse(userId, testCourse.courseNum, body).subscribe(
            (res) => {
              expect(res).toBeDefined();
              expect(res.courseNum).toBe(testCourse.courseNum);
              expect(res.description).toBe(body.description);
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/courses/'+testCourse.courseNum);
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush({courseNum: testCourse.courseNum,
                        description: body.description,
                        instructors: testCourse.instructors});
        }) // end inject
    ); // end should edit course

    it('Should not edit course - course does not exist',
      inject(
        [HttpTestingController, CourseService],
        (
          backend: HttpTestingController,
          service: CourseService
        ) => {
          service.editCourse(userId, 'TEST004', body).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Failed to load course TEST004');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/courses/TEST004');
          const mockError = new ErrorEvent('Not Found', {
            message: "Failed to load course TEST004"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not edit course - course does not exist
  }); // end Test editCourse

  describe('Test deleteCourse', ()=>{
    const userId = sampleInstr.userId;
    it('Should delete course',
      inject(
        [HttpTestingController, CourseService],
        (
          backend: HttpTestingController,
          service: CourseService
        ) => {
          const testCourse = listOfCourses[0];
          service.deleteCourse(userId, testCourse.courseNum).subscribe(
            (res) => {
              expect(res).toBeDefined();
              expect(res.courseNum).toBe(testCourse.courseNum);
              expect(res.description).toBe(testCourse.description);
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/courses/'+testCourse.courseNum);
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush(testCourse);
        }) // end inject
    ); // end should delete course

    it('Should not delete course - course does not exist',
      inject(
        [HttpTestingController, CourseService],
        (
          backend: HttpTestingController,
          service: CourseService
        ) => {
          service.deleteCourse(userId, 'TEST004').subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Failed to load course TEST004');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/courses/TEST004');
          const mockError = new ErrorEvent('Not Found', {
            message: "Failed to load course TEST004"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not delete course - course does not exist
  }); // end Test deleteCourse

  describe('Test deleteStudents', ()=>{
    const userId = sampleInstr.userId;
    it('Should delete students in course',
      inject(
        [HttpTestingController, CourseService],
        (
          backend: HttpTestingController,
          service: CourseService
        ) => {
          const testCourse = listOfCourses[0];
          service.deleteStudents(userId, testCourse.courseNum).subscribe(
            (res) => {
              expect(res).toBeDefined();
              expect(res.length).toBe(listOfStudents.length);

            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/courses/'+testCourse.courseNum+'/students');
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush(listOfStudents);
        }) // end inject
    ); // end should delete students in course

    it('Should not delete students in course - course does not exist',
      inject(
        [HttpTestingController, CourseService],
        (
          backend: HttpTestingController,
          service: CourseService
        ) => {
          service.deleteStudents(userId, 'TEST004').subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Failed to load course TEST004');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/courses/TEST004/students');
          const mockError = new ErrorEvent('Not Found', {
            message: "Failed to load course TEST004"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not delete students course - course does not exist

    it('Should not delete students in course - no students in course',
      inject(
        [HttpTestingController, CourseService],
        (
          backend: HttpTestingController,
          service: CourseService
        ) => {
          service.deleteStudents(userId, 'TEST003').subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('no students found');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/courses/TEST003/students');
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "no students found"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not delete students in course - no students in course
  }); // end Test deleteStudents

  describe('Test getScenarioStatus', ()=>{
    const testCourse = listOfCourses[0];
    const userId = sampleInstr.userId;
    const scenId = 'test1';
    it('Should get scenario status',
      inject(
        [HttpTestingController, CourseService],
        (
          backend: HttpTestingController,
          service: CourseService
        ) => {

          service.getScenarioStatus(userId, testCourse.courseNum, scenId).subscribe(
            (res) => {
              expect(res).toBeDefined();
              expect(res.length).toBe(listOfStudents.length);
              expect(res[0].status).toBeTruthy();
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/courses/'+testCourse.courseNum+'/'+scenId);
          expect(mockReq.request.responseType).toEqual('json');
          let output = listOfStudents.map((el)=>{
            return {firstName: el.firstName, lastName: el.lastName,
                   userId: el.userId, status: true}
          });
          mockReq.flush(output);
        }) // end inject
    ); // end should get scenario status

    it('Should not get scenario status - course does not exist',
      inject(
        [HttpTestingController, CourseService],
        (
          backend: HttpTestingController,
          service: CourseService
        ) => {
          service.getScenarioStatus(userId, 'TEST004', scenId).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Failed to load course TEST004');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/courses/TEST004/'+scenId);
          const mockError = new ErrorEvent('Not Found', {
            message: "Failed to load course TEST004"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end not get scenario status - course does not exist

    it('Should not get scenario status - scenario does not exist',
      inject(
        [HttpTestingController, CourseService],
        (
          backend: HttpTestingController,
          service: CourseService
        ) => {
          service.getScenarioStatus(userId, testCourse.courseNum, 'test3').subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Failed to load scenario test3');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/courses/'+testCourse.courseNum+'/test3');
          const mockError = new ErrorEvent('Not Found', {
            message: "Failed to load scenario test3"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end not get scenario status - scenario does not exist
  }); // end Test getScenarioStatus

  describe('Test getCourseList', ()=>{
    it('Should get list of course numbers',
       inject(
        [HttpTestingController, CourseService],
        (
          backend: HttpTestingController,
          service: CourseService
        ) => {
          service.getCourseList().subscribe(
            (res) => {
              expect(res).toBeDefined();
              expect(res.length).toBe(2);
              expect(res[0].courseNum).toBe('TEST001');
              expect(res[1].id).toBe('course2');
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/courses');
          mockReq.flush([{courseNum: 'TEST001', id: 'course1'},
                        {courseNum: 'TEST002', id: 'course2'}]);
        }) // end inject
      ); // end Should get list of course numbers
  }); // end Test getCouseList

  describe('Test getMendelScenarioStatus', ()=>{
    const testCourse = listOfCourses[0];
    const userId = sampleInstr.userId;
    const scenId = 'test1';
    it('Should get mendel scenario status',
      inject(
        [HttpTestingController, CourseService],
        (
          backend: HttpTestingController,
          service: CourseService
        ) => {

          service.getMendelScenarioStatus(userId, testCourse.courseNum, scenId).subscribe(
            (res) => {
              expect(res).toBeDefined();
              expect(res.length).toBe(listOfStudents.length);
              expect(res[0].status).toBeTruthy();
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/mendel-courses/'+testCourse.courseNum+'/'+scenId);
          expect(mockReq.request.responseType).toEqual('json');
          let output = listOfStudents.map((el)=>{
            return {firstName: el.firstName, lastName: el.lastName,
                   userId: el.userId, status: true}
          });
          mockReq.flush(output);
        }) // end inject
    ); // end should get scenario status

    it('Should not get mendel scenario status - course does not exist',
      inject(
        [HttpTestingController, CourseService],
        (
          backend: HttpTestingController,
          service: CourseService
        ) => {
          service.getMendelScenarioStatus(userId, 'TEST004', scenId).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Failed to load course TEST004');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/mendel-courses/TEST004/'+scenId);
          const mockError = new ErrorEvent('Not Found', {
            message: "Failed to load course TEST004"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end not get scenario status - course does not exist

    it('Should not get mendel scenario status - scenario does not exist',
      inject(
        [HttpTestingController, CourseService],
        (
          backend: HttpTestingController,
          service: CourseService
        ) => {
          service.getMendelScenarioStatus(userId, testCourse.courseNum, 'test3').subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Failed to load scenario test3');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/admin/' + userId + '/mendel-courses/'+testCourse.courseNum+'/test3');
          const mockError = new ErrorEvent('Not Found', {
            message: "Failed to load scenario test3"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end not get scenario status - scenario does not exist
  }); // end Test getScenarioStatus

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  })); // end afterEach
}); // end Course Service
