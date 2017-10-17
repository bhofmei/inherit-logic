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
  scenarios: [{
    type: Schema.ObjectId,
    ref: "Scenario"
  }]
});

CourseSchema.statics.findOneByNum = function(cNum, callback){
  this.findOne({courseNum: cNum}, callback);
};

CourseSchema.statics.courseExists = function(cNum){
  if(cNum === null){
    return 0;
  }
  this.findOne({courseNum: cNum}, (err, res)=>{
    if(err)
      return 0;
    else if(!res)
      return -1;
    return 1;
  });

};

CourseSchema.set('toJSON',{getters: true});

mongoose.model('Course', CourseSchema);
