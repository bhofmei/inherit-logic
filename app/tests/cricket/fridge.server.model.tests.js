// Load the test dependencies
const app = require('../../../index.js');
const should = require('should');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Fridge = mongoose.model('CricketFridge');
const Scenario = mongoose.model('CricketScenario');

let user, user2, scen;
// Create an 'Fridge' model test suite
describe('Fridge Model Unit Tests:', () => {
  beforeEach((done)=>{
    user = new User({
        firstName: 'Name',
        email: 'test@test.com',
        password: 'password'
      });
    user2 = new User({
      firstName: 'First',
      email: 'test2@test.com',
      password: 'password2'
    });
    scen = new Scenario({
        scenCode: 'Scen1',
        label: 'Test scenario'
      });
      user.save(()=>{
        user2.save(()=>{
        scen.save(()=>{
          done();
          });
        });
      });
  });

  // Test the 'Course' model save method
  describe('Testing the save method', () => {
    let fridge;
    beforeEach((done)=>{
      fridge = new Fridge({
          owner: user,
          scenario: scen
      });
      done();
    });

    it('Should be able to save without problems', () => {
      fridge.save((err) => {
        should.not.exist(err);
      });
    });
  }); // end describe save method

  describe('Testing the find method', ()=>{
    let fridge2;
    // create course to test delete
    beforeEach((done) => {
      fridge2 = new Fridge({
          owner: user2,
          scenario: scen
      });
      fridge2.save(() => {
        done();
      });
    });

    it('Should be able to find fridge', ()=>{
      Fridge.findOne({
        owner: user2._id,
        scenario: scen._id
      }, (err, res)=>{
        should.not.exist(err);
        res.should.have.property('id', fridge2.id);
      })
    }); // end Should be able to find fridge

    it('Should not be able to find non-existent fridge', ()=>{
      Fridge.findOne({
        owner: user._id,
        scenario: scen._id
      }, (err, res)=>{
        should.not.exist(err);
        should.not.exist(res);
      })
    }); // end Should not be able to find non-existent fridge

  }); // end Testing the find method

  describe('Testing the delete method', () => {
    let fridge3;
    // create course to test delete
    beforeEach((done) => {
      fridge3 = new Fridge({
          owner: user,
          scenario: scen
      });
      fridge3.save(() => {
        done();
      });
    });

    it('Should be able to delete directly', () => {
      fridge3.remove((err) => {
        should.not.exist(err);
      });
    });

    it('Should be able to delete via find', () =>{
      Fridge.findOneAndRemove({owner: user.id, scenario: scen.id}, (err, fr)=>{
        should.not.exist(err);
      });
    });
  }); // end test delete

  // Define a post-tests function
  afterEach((done) => {
    // Clean the databases
    Fridge.remove(() => {
      User.remove(() => {
        Scenario.remove(()=>{
          done();
        });
      });
    });
  });
});
