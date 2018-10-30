import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpRequest, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ExperimentService } from './experiment.service';
import { PlateInput, PlateResults, PlexerInput } from '../../interfaces';
import { singleInputPlates, doubleInputPlates, plexerResult } from '../../testing/sample-data';

describe('Experiment Service', ()=>{
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        ExperimentService
      ]
    });
  }); // end beforeEach

  describe('Test createPlate', ()=>{
    it('should generate B-singple phage plate',
      inject(
      [HttpTestingController, ExperimentService],
      (
        backend: HttpTestingController,
        service: ExperimentService
      ) => {
        let diltube: PlateInput = {
          lawnType: 'B',
          specials: {},
          location: 'lab',
          scenarioData: 'details',
          capacity: 1500,
          phage1: {id: 'a0', strainNum: 0, numPhage: 1300},
          phage2: null
        }
        service.createPlate(diltube).subscribe(
          (res) => {
            expect(res).toBeDefined();
            expect(res.smallPlaque.length).toBe(1300);
            expect(res.genotypes.length).toBe(1);
            expect(res.largePlaque.length).toBe(0);
            expect(res.full).toBeFalsy();
          }, (err) =>{
            fail('There should not be an error')
          }
        ); // end subscribe
        const mockReq = backend.expectOne('/api/cricket/plate');
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(singleInputPlates['B'][0]);
      }) // end inject
      ); // end should generate B-single phage plate

    it('should generate K-double phage plate',
      inject(
      [HttpTestingController, ExperimentService],
      (
        backend: HttpTestingController,
        service: ExperimentService
      ) => {
        let diltube: PlateInput = {
          lawnType: 'K',
          specials: {},
          location: 'lab',
          scenarioData: 'details',
          capacity: 1500,
          phage1: {id: 'a1', strainNum: 0, numPhage: 1500},
          phage2: {id: 'a4', strainNum: 7, numPhage: 1400}
        }
        service.createPlate(diltube).subscribe(
          (res) => {
            expect(res).toBeDefined();
            expect(res.smallPlaque.length).toBe(8);
            expect(res.genotypes.length).toBe(8);
            expect(res.largePlaque.length).toBe(0);
            expect(res.full).toBeFalsy();
          }, (err) =>{
            fail('There should not be an error')
          }
        ); // end subscribe
        const mockReq = backend.expectOne('/api/cricket/plate');
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(doubleInputPlates['K'][0]);
      }) // end inject
      ); // end should generate K-double phage plate

      it('should not get plate - phage num error',
      inject(
        [HttpTestingController, ExperimentService],
        (
          backend: HttpTestingController,
          service: ExperimentService
        ) => {
          let input: PlateInput = {
            lawnType: 'K',
          specials: {},
          location: 'lab',
          scenarioData: 'details',
          capacity: 1500,
          phage1: {id: 'a0', strainNum: 0, numPhage: null},
          phage2: null
          }
          service.createPlate(input).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('numPhage not set');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/cricket/plate');
          const mockError = new ErrorEvent('Bad Request', {
            message: "numPhage not set"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not get plate - phage num error

    it('should not get plate - cannot find phage',
      inject(
        [HttpTestingController, ExperimentService],
        (
          backend: HttpTestingController,
          service: ExperimentService
        ) => {
          let input: PlateInput = {
            lawnType: 'K',
          specials: {},
          location: 'lab',
          scenarioData: 'invalid',
          capacity: 1500,
          phage1: {id: 'p7', strainNum: 11, numPhage: 1400},
          phage2: {id: 'a0', strainNum: 0, numPhage: 1400}
          }
          service.createPlate(input).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Error finding the specified phage1');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/cricket/plate');
          const mockError = new ErrorEvent('Not Found', {
            message: "Error finding the specified phage1"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not get plate - cannot find phage
  }); // end Test createPlate

  describe('Test performPlexer', ()=>{
    it('should perform B plexer',
    inject(
      [HttpTestingController, ExperimentService],
      (
        backend: HttpTestingController,
        service: ExperimentService
      ) => {
        let input: PlexerInput = {
          lawnType: 'B',
          specials: {},
          location: 'plexer',
          scenarioData: 'details',
          capacity: 200,
          rowPhage: [{id: 'a1', strainNum: 1, numPhage: 100}, {id: 'a0', strainNum: 0, numPhage: 100}, {id: 'b3', strainNum: 5, numPhage: 100}],
          colPhage: [{id: 'a4', strainNum: 7, numPhage: 100}, {id: 'b3', strainNum: 5, numPhage: 100}]
        }
        service.performPlexer(input).subscribe(
          (res) => {
            expect(res).toBeDefined();
            expect(res["0"].length).toBe(2);
            expect(res["1"][0]).toEqual({smallPlaque: 38, largePlaque: 76, full: false});
            expect(res["2"][1]).toEqual({smallPlaque: 0, largePlaque: 0, full: true});
          }, (err) =>{
            fail('There should not be an error')
          }
        ); // end subscribe
        const mockReq = backend.expectOne('/api/cricket/plexer');
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(plexerResult['B']);
      }) // end inject
      ); // end should perform B plexer

    it('should perform K plexer',
    inject(
      [HttpTestingController, ExperimentService],
      (
        backend: HttpTestingController,
        service: ExperimentService
      ) => {
        let input: PlexerInput = {
          lawnType: 'K',
          specials: {},
          location: 'plexer',
          scenarioData: 'details',
          capacity: 200,
          rowPhage: [{id: 'a0', strainNum: 0, numPhage: 100}, {id: 'a1', strainNum: 1, numPhage: 100}],
          colPhage: [{id: 'b2', strainNum: 5, numPhage: 100},{id: 'a4', strainNum: 7, numPhage: 100}, {id: 'b3', strainNum: 5, numPhage: 100}]
        }
        service.performPlexer(input).subscribe(
          (res) => {
            expect(res).toBeDefined();
            expect(res["0"].length).toBe(3);
            expect(res["0"][0]).toEqual({smallPlaque: 99, largePlaque: 0, full: false});
            expect(res["1"][1]).toEqual({smallPlaque: 4, largePlaque: 0, full: false});
          }, (err) =>{
            fail('There should not be an error')
          }
        ); // end subscribe
        const mockReq = backend.expectOne('/api/cricket/plexer');
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(plexerResult['K']);
      }) // end inject
      ); // end should perform K plexer

    it('should not get plexer - cannot find phage',
      inject(
        [HttpTestingController, ExperimentService],
        (
          backend: HttpTestingController,
          service: ExperimentService
        ) => {
          let input: PlexerInput = {
          lawnType: 'K',
          specials: {},
          location: 'plexer',
          scenarioData: 'details',
          capacity: 200,
          rowPhage: [{id: 'a0', strainNum: 0, numPhage: 100}, {id: 'a1', strainNum: 1, numPhage: 100}],
          colPhage: [{id: 'p2', strainNum: 105, numPhage: 100},{id: 'a4', strainNum: 7, numPhage: 100}, {id: 'b3', strainNum: 5, numPhage: 100}]
        }
          service.performPlexer(input).subscribe(
            (res) => {
              fail('Should not have result');
            }, (err) => {
              expect(err.error.message).toBe('Error finding phage');
            }
          ); // end subscribe
          const mockReq = backend.expectOne('/api/cricket/plexer');
          const mockError = new ErrorEvent('Internal Server Error', {
            message: "Error finding phage"
          });
          mockReq.error(mockError);
        }) // end inject
    ); // end should not get plexer - cannot find phage
  }); // end Test performPlexer
}); // end Experiment Service
