const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  courseNum: {
    type: String,
    trim: true,
    uppercase: true,
    required: 'Course num cannot be blank',
    unique: 'Course num must be unique'
  },
  description: String,
  instructors: [{
    type: Schema.ObjectId,
    ref: 'User'
  }]
});

CourseSchema.set('toJSON',{getters: true});

mongoose.model('Course', CourseSchema);
