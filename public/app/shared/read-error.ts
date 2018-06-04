/**
 * This function takes an error object and looks for
 * the error message; it checks several properties because
 * errors are not always uniform
 *
 * @param {any} error - error object to find error message from
 *
 * @returns {string} the error message within the object or
 * `"Unknown error"` if the error message can't be found
 */
export const readErrorMessage = function(error: any): string {
  console.log(JSON.stringify(error));
  let errorMessage = 'Unknown error';
  if(error.error && error.error.message){
   return error.error.message
  } else if(error.error && error.error.text){
   return error.error.text
  } else if (error && error.message){
   return error.message;
  } else if(error){
    return error;
  }
  return errorMessage;
}
