const mongoose = require('mongoose');
const User = require('mongoose').model('User');
const Course = mongoose.model('Course');
const ObjectId = mongoose.Types.ObjectId;

const getErrorMessage = function (err) {
  if (err.errors) {
    for (const errName in err.errors) {
      if (err.errors[errName].message) return err.errors[errName].message;
    }
  } else {
    return 'Unknown server error';
  }
};

/**
 *  list all users in the system
 */
exports.listUsers = function(req, res){
  User.find((err, users)=>{
    if(err){
      return res.status(500).send({message: getErrorMessage(err)});
    } else if(!users){
      return res.status(404).send({message: 'No users found'});
    } else {
      res.json(users);
    }
  });
};

exports.getUser = function(req, res){
  let user = req.student;
  delete user.password;
  res.json(user);
}

exports.deleteUser = function(req, res){
  let student = req.student; // student to be deleted
  student.remove((err, s)=>{
    if(err){
      res.status(500).send({message: getErrorMessage(err)});
    } else {
      res.json(student);
    }
  });
};

exports.setAdminAccess = function(req, res){
  let body = req.body;
  // admin is user, user to grant access is student
  let user = req.student;
  if(user.admin !== body.admin){
    user.admin = body.admin;
  user.save((err)=>{
    if(err){
      return res.status(500).send({message: getErrorMessage(err)});
    }
    else {
      res.json(user);
    }
  });
  } else {
    res.json(user);
  }
};

exports.deleteCourseStudents = function(req, res){
  let courseId = new ObjectId(req.course._id);
  User.remove({course: courseId}, (err, students)=>{
    if(err){
      return res.status(500).send({message: getErrorMessage(err)})
    } else {
      res.json(students);
    }
  });
}


// Ensure that user has admin access
exports.hasAuthorization = function(req, res, next) {
    // If the current user does not have admin access, send error message
    if (!req.user.admin) {
        return res.status(403).send({
            message: 'Not authorized'
        });
    }
    // Call the next middleware
    next();
};
