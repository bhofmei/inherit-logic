// Load the test dependencies
const app = require('../../../index');
const request = require('supertest');
const should = require('should');
const clone = require('clone');
const mongoose = require('mongoose');
const MendelPede = mongoose.model('MendelPede');
const mendExp = require('../../genetics/mendelpede/mendel.experiment');
const MendelFridge = mongoose.model('MendelFridge');
const MendelQuiz = mongoose.model('MendelQuiz');
const mendScen = require('../../genetics/mendelpede/mendel.scenario');
const cryptr = require('../../../config/client.cryptr');

//const phageScen = require('../cricket/genetics/phage.scenario.tests');
const mpedeExp = require('../mendelpede/genetics/mendel.experiment.tests');

// Define global test variables
let mscenario, mscenDat, mscenario2, mscenDat2;
let malePede
let femalePede

describe('Genetics Controller Unit Tests for Mendelpede:', () => {
  // Define a pre-tests function
  before((done) => {
    // create male pedes
    malepede = {
      genotype : cryptr.encrypt(JSON.stringify([ 4, 0, 3 ])),
      phenotype : [ "Black", "Cyan", "SkyBlue", "1", "3" ],
      isFemale: false,
      scenario: mscenario,
      bugID: 4
    };
    // create female pedes
    femalepede = {
      genotype : cryptr.encrypt(JSON.stringify([ 4, 3, 3 ])),
      phenotype : [ "Black", "LightGray", "SkyBlue", "1", "3" ],
      isFemale: true,
      scenario: mscenario,
      bugID: 5
    };
    done();
  });

  describe('Testing make-children method', () => {

    before((done) => {
        done();
      });
    });
    describe('Test make children', () => {
      var genoFacts = [ { inherit: 'mendel', trait: 'SegColor', dom: 'Orange', interm: null, rec: 'LightGray' },
    { inherit: 'mendel', trait: 'EyeColor', dom: 'Red', interm: null, rec: 'Cyan' },
    { inherit: 'mendel', trait: 'NumSegments', dom: 2, interm: null, rec: 3 },
    { inherit: 'mendel', trait: 'DotColor', dom: 'Black', interm: null, rec: 'Black' },
    { inherit: 'mendel', trait: 'NumLegs', dom: 1, interm: null, rec: 1 } ];
      it('Should create 20 children', (done) => {
        let req = {
          'genoFacts': cryptr.encrypt(JSON.stringify(genoFacts)),
          'malePede': malepede,
          'femalePede': femalepede
        };
        request(app)
          .post('/api/mendelpede/make-children')
          .send(req)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let results = res.body;
            results.should.be.an.Array()
            .and.have.lengthOf(20);
            done();
          });
      }); // Should create 20 children
    }); // Testing make-children method

});
