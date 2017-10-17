// Load the test dependencies
const app = require('../../index.js');
const should = require('should');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Fridge = mongoose.model('Fridge');
const Scenario = mongoose.model('Scenario');

let user, scen;
// Create an 'Fridge' model test suite
describe('Fridge Model Unit Tests:', () => {
  beforeEach((done)=>{
    user = new User({
        name: 'Name',
        email: 'test@test.com',
        password: 'password',
        course: 'TEST001'
      });
    scen = new Scenario({
        scenCode: 'Scen1',
        label: 'Test scenario'
      });
      user.save(()=>{
        scen.save(()=>{
          done();
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

  describe('Testing the delete method', () => {
    let fridge2;
    // create course to test delete
    beforeEach((done) => {
      fridge2 = new Fridge({
          owner: user,
          scenario: scen
      });
      fridge2.save(() => {
        done();
      });
    });

    it('Should be able to delete directly', () => {
      fridge2.remove((err) => {
        should.not.exist(err);
      });
    });

    it('Should be able to delete via find', () =>{
      Fridge.findOneAndRemove({owner: user.id, scenario: scen.id}, (err, fr)=>{
        should.not.exist(err);
      });
    });
  }); // end test delete

  /*describe('Testing the find method', () => {
    let course3, courseNum3;
    courseNum3 = 'TEST003';
    // create course
    beforeEach((done) => {
      course3 = new Course({
        courseNum: courseNum3,
        instructor: instructor
      });
      course3.save(() => {
        done();
      });
    });

    it('Should be able to find by num', () => {
      Course.findOneByNum({
        courseNum: courseNum3
      }, (err, res) => {
        should.not.exist(err);
        res.should.be.an.Object();
      });
    });
  }); // end test find*/

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
