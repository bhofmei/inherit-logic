import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpRequest, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CricketService } from './cricket.service';
import { Scenario, Fridge, FridgePhage, GenotypePhage } from '../interfaces';
import { listOfScenarios, guesses, listOfFridges, listOfPhage } from '../testing/sample-data';

describe('Scenario Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        CricketService
      ]
    });
  }); // end beforeEach

  it('should get list of scenarios',
    inject(
      [HttpTestingController, CricketService],
      (
        backend: HttpTestingController,
        service: CricketService
      ) => {
        service.listScenarios().subscribe(
          (res) => {
            expect(res).toBeDefined();
            expect(res.length).toBe(2);
            expect(res[0].scenCode).toBe('test1');
            expect(res[1].scenCode).toBe('test2');
          }
        ); // end subscribe
        const mockReq = backend.expectOne('api/cricket');
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(listOfScenarios);
      }) // end inject
  ); // end should get list of scenarios

  describe('Test getScenario', () => {
    it('should get a single scenario',
      inject(
        [HttpTestingController, CricketService],
        (
          backend: HttpTestingController,
          service: CricketService
        ) => {
          service.getScenario('test1').subscribe(
            (res) => {
              expect(res).toBeDefined();
              expect(res.scenCode).toBe('test1');
              expect(res.label).toBe('Test Scenario 1')
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/cricket/test1');
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush(listOfScenarios[0]);
        }) // end inject
    ); // end should get a single scenario

    it('should not get scenario - does not exist',
      inject(
        [HttpTestingController, CricketService],
        (
          backend: HttpTestingController,
          service: CricketService
        ) => {
          service.getScenario('test3').subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Failed to load scenario test3');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/cricket/test3');
          const mockError = new ErrorEvent('Not Found', {
            message: "Failed to load scenario test3"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not get scenario - does not exist
  }); // end Test getScenario

  describe('Test saveDeletions', () => {
    const dels = guesses['test1'];
    const userId = 0;
    it('should save deletions',
      inject(
        [HttpTestingController, CricketService],
        (
          backend: HttpTestingController,
          service: CricketService
        ) => {

          service.saveDeletions(dels, userId, 'test1').subscribe(
            (res) => {
              expect(res).toBeDefined();
              expect(typeof res).toBe('string');
              let guesses = JSON.parse(res);
              expect(guesses["0"]).toEqual(dels["0"]);
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/cricket/0/test1/deletions');
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush(JSON.stringify(dels));
        }) // end inject
    ); // end should save deletions

    it('should not save - fridge does not exist',
      inject(
        [HttpTestingController, CricketService],
        (
          backend: HttpTestingController,
          service: CricketService
        ) => {
          service.saveDeletions(dels, userId, 'test3').subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Failed to find fridge');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/cricket/0/test3/deletions');
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "Failed to find fridge"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not save - fridge does not exist

    it('should not save - database error',
      inject(
        [HttpTestingController, CricketService],
        (
          backend: HttpTestingController,
          service: CricketService
        ) => {
          service.saveDeletions(dels, userId, 'test1').subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Could not save new guesses');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/cricket/0/test1/deletions');
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "Could not save new guesses"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not save - database error
  }); // end Test saveDeletions

  describe('Test createFridge', () => {
    const userId = 15, scenCode = 'test1';

    it('should create fridge',
      inject(
        [HttpTestingController, CricketService],
        (
          backend: HttpTestingController,
          service: CricketService
        ) => {
          const expFridge = listOfFridges[0];
          service.createFridge(userId, scenCode).subscribe(
            (res) => {
              expect(res).toBeDefined();
              // fridge has: scenarioDetails, guesses, strains, accessGranted, userId, scenCode
              expect(res.userId).toBe(userId);
              expect(res.scenCode).toBe(scenCode);
              expect(res.guesses).toEqual('{"2":[false, true, false]}');
              expect(res.strains.length).toBe(4);
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/cricket/' + userId + '/test1/new-fridge');
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush(expFridge);
        }) // end inject
    ); // end should create fridge

    it('should not create fridge - error with phage',
      inject(
        [HttpTestingController, CricketService],
        (
          backend: HttpTestingController,
          service: CricketService
        ) => {
          service.createFridge(userId, scenCode).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Unable to create new phage for scenario');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/cricket/' + userId + '/test1/new-fridge');
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "Unable to create new phage for scenario"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not create fridge - error with phage

    it('should not create fridge - error saving',
      inject(
        [HttpTestingController, CricketService],
        (
          backend: HttpTestingController,
          service: CricketService
        ) => {
          service.createFridge(userId, scenCode).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Unable to save new fridge');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/cricket/' + userId + '/test1/new-fridge');
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "Unable to save new fridge"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not create fridge - error saving
  }); // end Test createFridge

  describe('Test getFridge', () => {
    const userId = 16, scenCode = 'test1';

    it('should get fridge',
      inject(
        [HttpTestingController, CricketService],
        (
          backend: HttpTestingController,
          service: CricketService
        ) => {
          const expFridge = listOfFridges[1];
          service.getFridge(userId, scenCode).subscribe(
            (res) => {
              expect(res).toBeDefined();
              // fridge has: scenarioDetails, guesses, strains, accessGranted, userId, scenCode
              expect(res.userId).toBe(userId);
              expect(res.scenCode).toBe(scenCode);
              expect(res.guesses).toEqual('{}');
              expect(res.strains.length).toBe(1);
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/cricket/' + userId + '/test1');
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush(expFridge);
        }) // end inject
    ); // end should create fridge

    it('should not get fridge - fridge does not exist',
      inject(
        [HttpTestingController, CricketService],
        (
          backend: HttpTestingController,
          service: CricketService
        ) => {
          service.getFridge(userId, scenCode).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('No fridge for scenario/user');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/cricket/' + userId + '/test1');
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "No fridge for scenario/user"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not create fridge - fridge does not exist
  }); // end Test getFridge

  describe('Test addStrain', () => {
    const userId = 16, scenCode = 'test1';
    const newStrain = { strainNum: 23, mutationList: [-5], deletion: [] };

    it('should add strain',
      inject(
        [HttpTestingController, CricketService],
        (
          backend: HttpTestingController,
          service: CricketService
        ) => {
          const expStrain = { id: 'phage-id', strainNum: newStrain.strainNum, phageType: 'user', comment: '' };
          service.addStrain(userId, scenCode, newStrain).subscribe(
            (res) => {
              expect(res).toBeDefined();
              expect(res.strainNum).toBe(newStrain.strainNum);
              expect(res.comment).toBe('');
              expect(res.phageType).toBe('user');
              expect(res.id).toBe('phage-id');
              // strain has:
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/cricket/' + userId + '/test1/fridge-phage');
          expect(mockReq.request.responseType).toEqual('json');
          // fridgePhage: phageType, comment, strainNum, id
          mockReq.flush(expStrain);
        }) // end inject
    ); // end should add strain

    it('should not add strain - user does not exist',
      inject(
        [HttpTestingController, CricketService],
        (
          backend: HttpTestingController,
          service: CricketService
        ) => {
          service.addStrain(80, scenCode, newStrain).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('User not found');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/cricket/' + 80 + '/test1/fridge-phage');
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "User not found"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not add strain - user does not exist

    it('should not add strain - scenario does not exist',
      inject(
        [HttpTestingController, CricketService],
        (
          backend: HttpTestingController,
          service: CricketService
        ) => {
          service.addStrain(userId, 'test3', newStrain).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Failed to load scenario test3');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/cricket/' + userId + '/test3/fridge-phage');
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "Failed to load scenario test3"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not add strain - scenario does not exist

    it('should not add strain - fridge does not exist',
      inject(
        [HttpTestingController, CricketService],
        (
          backend: HttpTestingController,
          service: CricketService
        ) => {
          service.addStrain(userId, 'test2', newStrain).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('No fridge for scenario/user');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/cricket/' + userId + '/test2/fridge-phage');
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "No fridge for scenario/user"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not add strain - fridge does not exist
  }); // end Test addStrain

  describe('Test update strain', ()=>{
    const userId = 15, scenCode = 'test1';
    const originalPhage = listOfPhage[3];
    it('should update strain',
      inject(
        [HttpTestingController, CricketService],
        (
          backend: HttpTestingController,
          service: CricketService
        ) => {
          const updatedPhage: FridgePhage = {id: originalPhage.id,
                         strainNum: originalPhage.strainNum,
                         comment: 'New comment',
                         phageType: originalPhage.phageType,
                         submitted: true}
          service.updateStrain(userId, scenCode, updatedPhage).subscribe(
            (res) => {
              expect(res).toBeDefined();
              expect(res.strainNum).toBe(originalPhage.strainNum);
              expect(res.comment).toBe(updatedPhage.comment);
              expect(res.phageType).toBe('user');
              expect(res.submitted).toBeTruthy();
              expect(res.id).toBe(originalPhage.id);
              // strain has:
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/cricket/' + userId + '/'+scenCode+'/'+updatedPhage.id);
          expect(mockReq.request.responseType).toEqual('json');
          // fridgePhage: phageType, comment, strainNum, id
          mockReq.flush(updatedPhage);
        }) // end inject
    ); // end should update strain

      it('should not update strain - strain does not exist',
      inject(
        [HttpTestingController, CricketService],
        (
          backend: HttpTestingController,
          service: CricketService
        ) => {
          const fakeStrain: FridgePhage = {id: 'bad-phage',
                         strainNum: originalPhage.strainNum,
                         comment: 'New comment',
                         phageType: originalPhage.phageType,
                         submitted: false}
          service.updateStrain(userId, scenCode, fakeStrain).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Phage not found');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/cricket/' + userId + '/'+scenCode+'/'+fakeStrain.id);
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "Phage not found"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not add strain - strain does not exist
  }); // end Test update strain

  describe('Test delete strain', ()=>{
    const userId = 15, scenCode = 'test1';
    const originalPhage = listOfPhage[3];
    it('should delete strain',
      inject(
        [HttpTestingController, CricketService],
        (
          backend: HttpTestingController,
          service: CricketService
        ) => {
          service.deleteStrain(userId, scenCode, originalPhage).subscribe(
            (res) => {
              expect(res).toBeDefined();
              expect(res.strainNum).toBe(originalPhage.strainNum);
              expect(res.phageType).toBe('user');
              expect(res.id).toBe(originalPhage.id);
              // strain has:
            }, (err) => {
              fail('There should not be an error');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/cricket/' + userId + '/'+scenCode+'/'+originalPhage.id);
          expect(mockReq.request.responseType).toEqual('json');
          // fridgePhage: phageType, comment, strainNum, id
          mockReq.flush(originalPhage);
        }) // end inject
    ); // end should delete strain

    it('should not delete strain - strain does not exist',
      inject(
        [HttpTestingController, CricketService],
        (
          backend: HttpTestingController,
          service: CricketService
        ) => {
          const fakeStrain: FridgePhage = {id: 'bad-phage',
                         strainNum: originalPhage.strainNum,
                         comment: 'New comment',
                         phageType: originalPhage.phageType,
                         submitted: false}
          service.deleteStrain(userId, scenCode, fakeStrain).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Phage not found');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/cricket/' + userId + '/'+scenCode+'/'+fakeStrain.id);
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "Phage not found"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not delete strain - strain does not exist

    it('should not delete strain - fridge does not exist',
      inject(
        [HttpTestingController, CricketService],
        (
          backend: HttpTestingController,
          service: CricketService
        ) => {
          const fakeStrain: FridgePhage = {id: 'b1',
                         strainNum: originalPhage.strainNum,
                         comment: 'New comment2',
                         phageType: originalPhage.phageType,
                         submitted: false}
          service.deleteStrain(78, 'test3', fakeStrain).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Failed to find fridge');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/cricket/' + 78 + '/'+'test3'+'/'+fakeStrain.id);
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "Failed to find fridge"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not delete strain - fridge does not exist

    it('should not delete strain - error removing from fridge',
      inject(
        [HttpTestingController, CricketService],
        (
          backend: HttpTestingController,
          service: CricketService
        ) => {
          service.deleteStrain(userId, scenCode, originalPhage).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Unable to remove strain from fridge');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('api/cricket/' + userId + '/'+scenCode+'/'+originalPhage.id);
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
