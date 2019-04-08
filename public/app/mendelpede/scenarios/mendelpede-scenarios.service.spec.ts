import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpRequest, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MendelpedeScenarioService } from './mendelpede-scenarios.service';
import { MendelpedeScenario, MendelpedeFridge, MendelpedePede, GenotypePhage } from '../../interfaces';
import { listOfMendelScenarios, listOfFridges, listOfMendelpedes, listOfStudents, quiz } from '../../testing/mendelpede-sample-data';

describe('Mendel Scenario Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        MendelpedeScenarioService
      ]
    });
  }); // end beforeEach

  it('should get list of mendelpede scenarios',
    inject(
      [HttpTestingController, MendelpedeScenarioService],
      (
        backend: HttpTestingController,
        service: MendelpedeScenarioService
      ) => {
        service.listScenarios("all").subscribe(
          (res) => {
            expect(res).toBeDefined();
            expect(res.length).toBe(4);
            expect(res[0].shortCode).toBe('test1');
            expect(res[1].shortCode).toBe('test2');
          }
        ); // end subscribe
        const mockReq = backend.expectOne('api/mendelpede');
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(listOfMendelScenarios);
      }) // end inject
  ); // end should get list of scenarios

  describe('Test getScenario', () => {
    it('should get a single mendel scenario',
      inject(
        [HttpTestingController, MendelpedeScenarioService],
        (
          backend: HttpTestingController,
          service: MendelpedeScenarioService
        ) => {
          service.getScenario('test1').subscribe(
            (res) => {
              expect(res).toBeDefined();
              expect(res.shortCode).toBe('test1');
              expect(res.label).toBe('Test Scenario 1')
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/mendelpede/test1');
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush(listOfMendelScenarios[0]);
        }) // end inject
    ); // end should get a single scenario

    it('should not get scenario - does not exist',
      inject(
        [HttpTestingController, MendelpedeScenarioService],
        (
          backend: HttpTestingController,
          service: MendelpedeScenarioService
        ) => {
          service.getScenario('test3').subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Failed to load scenario test3');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/mendelpede/test3');
          const mockError = new ErrorEvent('Not Found', {
            message: "Failed to load scenario test3"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not get scenario - does not exist
  }); // end Test getScenario

  describe('Test Mendelpede createMendelFridge', () => {
    const userId = 15, scenShortCode = 'test1';

    it('should create mendel fridge',
      inject(
        [HttpTestingController, MendelpedeScenarioService],
        (
          backend: HttpTestingController,
          service: MendelpedeScenarioService
        ) => {
          const expFridge = listOfFridges[0];
          service.createMendelFridge(userId, scenShortCode).subscribe(
            (res) => {
              expect(res).toBeDefined();
              // fridge has: scenarioDetails, guesses, strains, accessGranted, userId, scenCode
              expect(res.userId).toBe(userId);
              expect(res.mendelpedeScenCode).toBe(scenShortCode);
              expect(res.pedes.length).toBe(6);
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/mendelpede/' + userId + '/test1/new-fridge');
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush(expFridge);
        }) // end inject
    ); // end should create fridge

    it('should not create mendel fridge - error with pedes',
      inject(
        [HttpTestingController, MendelpedeScenarioService],
        (
          backend: HttpTestingController,
          service: MendelpedeScenarioService
        ) => {
          service.createMendelFridge(userId, scenShortCode).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Unable to create new pedes for scenario');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/mendelpede/' + userId + '/test1/new-fridge');
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "Unable to create new pedes for scenario"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not create fridge - error with phage

    it('should not create mendel fridge - error saving',
      inject(
        [HttpTestingController, MendelpedeScenarioService],
        (
          backend: HttpTestingController,
          service: MendelpedeScenarioService
        ) => {
          service.createMendelFridge(userId, scenShortCode).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Unable to save new fridge');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/mendelpede/' + userId + '/test1/new-fridge');
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "Unable to save new fridge"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not create fridge - error saving
  }); // end Test createFridge

  describe('Test getMendelFridge', () => {
    const userId = 16, scenShortCode = 'test1';

    it('should get mendel fridge',
      inject(
        [HttpTestingController, MendelpedeScenarioService],
        (
          backend: HttpTestingController,
          service: MendelpedeScenarioService
        ) => {
          const expFridge = listOfFridges[1];
          service.getMendelFridge(userId, scenShortCode).subscribe(
            (res) => {
              expect(res).toBeDefined();
              // fridge has: scenarioDetails, guesses, strains, accessGranted, userId, scenCode
              expect(res.userId).toBe(userId);
              expect(res.mendelpedeScenCode).toBe(scenShortCode);
              expect(res.pedes.length).toBe(6);
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/mendelpede/' + userId + '/test1');
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush(expFridge);
        }) // end inject
    ); // end should create fridge

    it('should not get mendel fridge - fridge does not exist',
      inject(
        [HttpTestingController, MendelpedeScenarioService],
        (
          backend: HttpTestingController,
          service: MendelpedeScenarioService
        ) => {
          service.getMendelFridge(userId, scenShortCode).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('No fridge for scenario/user');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/mendelpede/' + userId + '/test1');
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "No fridge for scenario/user"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not create fridge - fridge does not exist
  }); // end Test getFridge

  describe('Test insertPede', () => {
    const userId = 16, scenShortCode = 'test1';
    const fridge = listOfFridges[0];
    const newPede = {id: 0,
      userId: userId,
      bugID: 0,
      scenCode: scenShortCode,
      isFemale: 'F',
      genotype: [ 1, 1, 0 ],
      phenotype: [ "Yellow", "Red", "LightGreen", "2", "1" ]
     };

    it('should add pede',
      inject(
        [HttpTestingController, MendelpedeScenarioService],
        (
          backend: HttpTestingController,
          service: MendelpedeScenarioService
        ) => {
          const expFridge = {
            id: '1',
            userId: 16,
            mendelpedeScenCode: 'test1',
            accessGranted: true,
            pedes: [newPede],
            genoFacts: [ { inherit: 'mendel', trait: 'SegColor', dom: 'Orange', interm: null, rec: 'LightGray' },
            { inherit: 'mendel', trait: 'EyeColor', dom: 'Red', interm: null, rec: 'Cyan' },
            { inherit: 'mendel', trait: 'NumSegments', dom: 2, interm: null, rec: 3 },
            { inherit: 'mendel', trait: 'DotColor', dom: 'Black', interm: null, rec: 'Black' },
            { inherit: 'mendel', trait: 'NumLegs', dom: 1, interm: null, rec: 1 } ]
          };
          service.insertPede(newPede, fridge, scenShortCode).subscribe(
            (res) => {
              expect(res).toBeDefined();
              expect(res.pedes[0].bugID).toBe(newPede.bugID);
              expect(res.mendelpedeScenCode).toBe('test1');
              expect(res.id).toBe('1');
              // strain has:
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/mendelpede/' + scenShortCode + '/add-pede');
          expect(mockReq.request.responseType).toEqual('json');
          // fridgePhage: phageType, comment, strainNum, id
          mockReq.flush(expFridge);
        }) // end inject
    ); // end should add strain

    it('should not add pede - user does not exist',
      inject(
        [HttpTestingController, MendelpedeScenarioService],
        (
          backend: HttpTestingController,
          service: MendelpedeScenarioService
        ) => {
          service.insertPede(newPede, fridge, scenShortCode).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('User not found');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/mendelpede/' + scenShortCode + '/add-pede');
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "User not found"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not add strain - user does not exist

    it('should not add pede - fridge does not exist',
      inject(
        [HttpTestingController, MendelpedeScenarioService],
        (
          backend: HttpTestingController,
          service: MendelpedeScenarioService
        ) => {
          service.insertPede(newPede, fridge, scenShortCode).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('No fridge for scenario/user');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/mendelpede/' + scenShortCode + '/add-pede');
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "No fridge for scenario/user"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not add strain - fridge does not exist
  }); // end Test addStrain

  describe('Test makeChildren', () => {
    const userId = 16, scenShortCode = 'test1';
    const fridge = listOfFridges[0];
    const malePede = listOfMendelpedes[1];
    const femalePede = listOfMendelpedes[0];
    const genoFacts = 'genoFacts';

    it('should make 20 children',
      inject(
        [HttpTestingController, MendelpedeScenarioService],
        (
          backend: HttpTestingController,
          service: MendelpedeScenarioService
        ) => {
          service.makeChildren(malePede, femalePede, genoFacts).subscribe(
            (res) => {
              expect(res).toBeDefined();
              expect(res.length).toBe(20);
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/mendelpede/make-children');
          expect(mockReq.request.responseType).toEqual('json');
          // fridgePhage: phageType, comment, strainNum, id
          mockReq.flush(listOfMendelpedes);
        }) // end inject
    ); // end should make 20 children
    it('should not make 20 children - genofacts corrupted',
      inject(
        [HttpTestingController, MendelpedeScenarioService],
        (
          backend: HttpTestingController,
          service: MendelpedeScenarioService
        ) => {
          service.makeChildren(malePede, femalePede, genoFacts).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('genofacts corrupted');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/mendelpede/make-children');
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "genofacts corrupted"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not make 20 children - genofacts corrupted
  }); // end Test makeChildren

  describe('Test calculateQuizScore', () => {
    const userId = 16, scenShortCode = 'test1';
    const fridge = listOfFridges[0];
    const quizPedes = listOfMendelpedes.slice(0,8);
    const studentAnswers = [ "AA", "Aa", "Aa", "Aa", "AA", "AA", "Aa", "Aa" ];
    const quizFridgeId = 'quiz1';

    it('should calculate quiz score',
      inject(
        [HttpTestingController, MendelpedeScenarioService],
        (
          backend: HttpTestingController,
          service: MendelpedeScenarioService
        ) => {
          service.calculateQuizScore(quizPedes, studentAnswers, quizFridgeId).subscribe(
            (res) => {
              expect(res).toBeDefined();
              expect(res.score).toBe(4);
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/mendelpede/calculate-score');
          expect(mockReq.request.responseType).toEqual('json');
          // fridgePhage: phageType, comment, strainNum, id
          mockReq.flush(quiz);
        }) // end inject
    ); // end should calculate quiz score
    it('should not calculate score - quiz fridge not found',
      inject(
        [HttpTestingController, MendelpedeScenarioService],
        (
          backend: HttpTestingController,
          service: MendelpedeScenarioService
        ) => {
          service.calculateQuizScore(quizPedes, studentAnswers, quizFridgeId).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('quiz fridge not found');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/mendelpede/calculate-score');
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "quiz fridge not found"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not calculate score - quiz fridge not found
  }); // end Test calculateQuizScore

  describe('Test deletePede', ()=>{
    const userId = 15, scenCode = 'test1';
    const originalPede = listOfMendelpedes[3];
    it('should delete pede',
      inject(
        [HttpTestingController, MendelpedeScenarioService],
        (
          backend: HttpTestingController,
          service: MendelpedeScenarioService
        ) => {
          service.deletePede(userId, scenCode, originalPede).subscribe(
            (res) => {
              expect(res).toBeDefined();
              expect(res).toBe('pede deleted')
              // strain has:
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/mendelpede/' + userId + '/'+scenCode+'/'+originalPede.id);
          expect(mockReq.request.responseType).toEqual('json');
          // fridgePhage: phageType, comment, strainNum, id
          mockReq.flush('pede deleted');
        }) // end inject
    ); // end should delete pede

    it('should not delete pede - pede does not exist',
      inject(
        [HttpTestingController, MendelpedeScenarioService],
        (
          backend: HttpTestingController,
          service: MendelpedeScenarioService
        ) => {
          const fakePede: MendelpedePede = listOfMendelpedes[4];
          service.deletePede(userId, scenCode, fakePede).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Pede not found');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/mendelpede/' + userId + '/'+scenCode+'/'+fakePede.id);
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "Pede not found"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not delete strain - strain does not exist

    it('should not delete Pede - error removing from fridge',
      inject(
        [HttpTestingController, MendelpedeScenarioService],
        (
          backend: HttpTestingController,
          service: MendelpedeScenarioService
        ) => {
          service.deletePede(userId, scenCode, originalPede).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Unable to remove strain from fridge');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/mendelpede/' + userId + '/'+scenCode+'/'+originalPede.id);
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "Unable to remove strain from fridge"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not delete strain - error removing from fridge
  }); // end Test delete strain

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  })); // end afterEach
}); // end CricketService
