
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
  //console.error(errorMessage);
  return errorMessage;
}
