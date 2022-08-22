export const passwordIsValid = (inputtxt: string) => {
  var passw = /^[A-Za-z]\w{7,14}$/;
  return inputtxt.match(passw);
};

export const EMAIL_REGEX =
  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
