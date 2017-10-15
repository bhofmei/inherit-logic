const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  courseNum: {
    type: String,
    trim: true,
    required: 'Course num cannot be blank',
    unique: 'Course num must be unique'
  },
  instructor: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  students: [{
    type: Schema.ObjectId,
    ref: 'User'
  }],
  scenarios: [{
    type: Schema.ObjectId,
    ref: "Scenario"
  }]
});

CourseSchema.statics.findOneByNum = function(cNum, callback){
  this.findOne({courseNum: cNum}, callback);
};

CourseSchema.set('toJSON',{getters: true});

mongoose.model('Course', CourseSchema);
