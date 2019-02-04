// Load the test dependencies
const app = require('../../../index');
const request = require('supertest');
const should = require('should');
const mongoose = require('mongoose');
const MendelScenario = mongoose.model('MendelScenario');
const scenarioList = require('../../../config/mendelpede/scenario.data');

// Define global test variables
let mscenario;

// Create an 'Scenario' controller test suite
describe('Scenario Controller Unit Tests:', () => {
	// Define a pre-tests function
	beforeEach((done) => {
		// preload the data
    scenarioList.forEach(function (data) {
      var sc = new MendelScenario(data);
      sc.save((err) => {
        if (err) {
          console.err(err);
        }
      });
    });
    // get code for first scenario
    mscenario = scenarioList[0];
    done();
	});

	// Test the 'Scenario' GET methods
	describe('Testing the GET methods for Mendelpede', () => {
		it('Should be able to get the list of scenarios for mendelpede', (done) => {
			request(app).post('/api/mendelpede')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.end((err, res) => {
					res.body.should.be.an.Array().and.have.lengthOf(scenarioList.length);
					res.body[0].should.have.property('label', mscenario.label);

					done();
				});
		});

		it('Should be able to get the specific scenario', (done) => {
			request(app).get('/api/mendelpede/' + mscenario.shortCode)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.end((err, res) => {
					res.body.should.be.an.Object().and.have.property('label', mscenario.label);
					done();
				});
		});
	});

	// Define a post-tests function
	afterEach((done) => {
		MendelScenario.remove(() => {
				done();
		});
	});
});
