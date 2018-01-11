
export const readErrorMessage = function(error: any) {
  console.log(error);
  let errorMessage = error.error.message || error.message ||  'Unknown error'
  console.error(errorMessage);
  return errorMessage;
}
