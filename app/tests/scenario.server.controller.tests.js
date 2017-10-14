// Load the test dependencies
const app = require('../../index.js');
const request = require('supertest');
const should = require('should');
const mongoose = require('mongoose');
const Scenario = mongoose.model('Scenario');
const scenarioList = require('../../config/scenario.data');

// Define global test variables
let scenario;

// Create an 'Scenario' controller test suite
describe('Scenario Controller Unit Tests:', () => {
	// Define a pre-tests function
	beforeEach((done) => {
		// preload the data
    scenarioList.forEach(function (data) {
      var sc = new Scenario(data);
      sc.save((err) => {
        if (err) {
          console.err(err);
        }
      });
    });
    // get code for first scenario
    scenario = scenarioList[0];
    done();
	});

	// Test the 'Scenario' GET methods
	describe('Testing the GET methods', () => {
		it('Should be able to get the list of scenarios', (done) => {
			// Create a SuperTest request
			request(app).get('/api/scenarios/')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.end((err, res) => {
        //console.log(res.body);
					res.body.should.be.an.Array().and.have.lengthOf(scenarioList.length);
					res.body[0].should.have.property('label', scenario.label);

					done();
				});
		});

		it('Should be able to get the specific scenario', (done) => {
			// Create a SuperTest request
			request(app).get('/api/scenarios/' + scenario.scenCode)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.end((err, res) => {
					res.body.should.be.an.Object().and.have.property('label', scenario.label);
					done();
				});
		});
	});

	// Define a post-tests function
	afterEach((done) => {
		// Clean the database
		Scenario.remove(() => {
				done();
		});
	});
});
