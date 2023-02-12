function passwordValidation(password) {
  let isLongEnoch = false;
  let isNotLetterOrDigit;
  //   let isLetter = false;
  //   let isDigits = false;
  let isWithTwoDigits = false;
  let isValid = true;

  if (password.length >= 6 && password.length <= 10) {
    isLongEnoch = true;
  }
  checkingForLetterAndDigits(password);
  printResult(isLongEnoch, isNotLetterOrDigit, isWithTwoDigits);

  function printResult(length, letterOrDigit, digitLength) {
    if (!length) {
      console.log("Password must be between 6 and 10 characters");
      isValid = false;
    }
    if (isNotLetterOrDigit) {
      console.log("Password must consist only of letters and digits");
      isValid = false;
    }
    if (!digitLength) {
      console.log("Password must have at least 2 digits");
      isValid = false;
    }
    if (isValid) {
      console.log("Password is valid");
    }
  }

  function checkingForLetterAndDigits(word) {
    let digits = 0;
    for (const el of word) {
      let symbol = el.charCodeAt(0);
      if (symbol >= 48 && symbol <= 57) {
        isNotLetterOrDigit = false;
        digits++;
      } else {
        if ((symbol >= 65 && symbol <= 90) || (symbol >= 97 && symbol <= 122)) {
          isNotLetterOrDigit = false;
        } else {
          isNotLetterOrDigit = true;
          break;
        }
      }
    }
    if (digits >= 2) {
      isWithTwoDigits = true;
    }
  }
}
passwordValidation("logIn");
console.log("=============================");
passwordValidation("MyPass123");
console.log("=============================");
passwordValidation("Pa$s$s");
console.log("=============================");
