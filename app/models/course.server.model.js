const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Database schema for course
 * @module course.server.model
 * @name Course Model
 * @type Model
 */

/**
 * @external USER
 * @see {@link user-model.html}
 */

 /**
  * List of course level and error message
  * @enum {string}
  */
 const courseEnum = {
   /** acceptable values **/
   values: ['all', 'graduate', 'undergraduate'],
   /** error message on unacceptable value */
   message: 'Value "{VALUE}" is not a valid course level'
 };

const CourseSchema = new Schema({
  /**
   * @member {string} courseNum - uniquely identifable course ID
   * @required
   * @unqiue
   */
  courseNum: {
    type: String,
    trim: true,
    uppercase: true,
    required: 'Course num cannot be blank',
    unique: 'Course num must be unique'
  },
  /**
   * @member {string} description - basic text description of the course
   */
  description: String,
  /**
   * @member {external:USER[]} - list of instructors for the course
   */
  instructors: [{
    type: Schema.ObjectId,
    ref: 'User'
  }],
  /**
   * @member {string} level - Indicate course level
   */
   level: {
     type: String,
     enum: courseEnum,
     default: 'all'
   },
});

CourseSchema.set('toJSON',{getters: true});

mongoose.model('Course', CourseSchema);
