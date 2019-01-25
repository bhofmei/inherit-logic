/** Helper functions */

exports.getErrorMessage = function (err) {
  if (err.errors) {
    for (var errName in err.errors) {
      if (err.errors[errName].message) return err.errors[errName].message;
    }
  } else if(process.env.NODE_ENV === 'development'){
    return JSON.stringify(err);
  } else {
    return 'Unknown server error: ';
  }
};
