export const passwordIsValid = (inputtxt: string) => {
  var passw = /^[A-Za-z]\w{7,14}$/;
  return inputtxt.match(passw);
};

export const EMAIL_REGEX = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

export const USERNAME_REGEX = /[a-zA-Z\d_]/;

export const NUMBER_REGEX = /[\d]/;
