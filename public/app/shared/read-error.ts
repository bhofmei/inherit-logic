
export const readErrorMessage = function(error: any) {
  console.log(error);
  let errorMessage = 'Unknown error';
  if(error.error && error.error.message){
    errorMessage = error.error.message
  } else if (error && error.message){
   errorMessage = error.message;
  } else if(error)
  console.error(errorMessage);
  return errorMessage;
}
