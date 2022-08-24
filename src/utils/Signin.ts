export const passwordIsValid = (inputtxt: string) => {
  var passw = /^[A-Za-z]\w{7,14}$/;
  return inputtxt.match(passw);
};
