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

  describe('Testing the save method', () => {

    it('Should be able to save scenario', () => {
      scenario.save((err) => {
        should.not.exist(err);
      });
    }); // end Should be able to save scenario

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
    }); // end Should be able to save all scenarios
  });

  describe('Testing the find method', () => {
    before((done) => {
      scenario.save(() => {
        done();
      });
    }); // end before

    it('Should be able to find scenario', () => {
      Scenario.findOne({
          scenCode: scenario.scenCode
        },
        (err, scen) => {
          should.not.exist(err);
          scen.should.have.property('label', scenario.label);
        }
      );
    }); // end Should be able to find scenario

    it('Should not be able to find non-existant scenario', () => {
      Scenario.findOne({
          scenCode: 'FAKECODE'
        },
        (err, scen) => {
          should.not.exist(err);
          should.not.exist(scen);
        }
      );
    }); // end Should be able to find scenario

  }); // end Testing the find method

  afterEach((done) => {
    Scenario.remove(() => {
      done();
    });
  }); // end afterEach
}); // end Scenario Model Unit Tests
