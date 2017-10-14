// Load the test dependencies
const app = require('../../index.js');
const should = require('should');
const mongoose = require('mongoose');
const Scenario = mongoose.model('Scenario');

// Define global test variables
let scenario, scenarioList;

// Create an 'Article' model test suite
describe('Scenario Model Unit Tests:', () => {
  // Define a pre-tests function
  beforeEach((done) => {
    scenarioList = require('../../config/scenario.data');
    scenario = new Scenario(scenarioList[0]);
    done();
  });

  // Test the 'Article' model save method
  describe('Testing the save method', () => {
    it('Should be able to save one scenario without problems', () => {

      scenario.save((err) => {
        should.not.exist(err);
      });
    });

    it('Should be able to save all scenarios', () => {
      scenarioList.forEach(function (data) {
        var sc = new Scenario(data);
        sc.save((err) => {
          should.not.exist(err);
        });
      });
      Scenario.count({}, (err, res) => {
        res.should.be.equal(scenarioList.length);
      })
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
