function passworValidation(arr) {
  let password = arr.shift();
  for (const line of arr) {
    let commands = line.split(" ");
    let command = commands[0];
    switch (command) {
      case "Replace":
        {
          let char = commands[1];
          let value = Number(commands[2]);
          let sum = char.charCodeAt() + value;
          let newSymbol = String.fromCharCode(sum);
          let newString = password.split("");
          for (let i = 0; i < newString.length; i++) {
            if (newString[i] === char) {
              newString[i] = newSymbol;
            }
          }
          password = newString.join("");
          console.log(password);
        }
        break;
      case "Make":
        {
          let cases = commands[1];
          let index = commands[2];
          let newString = password.split("");
          let symbol = newString[index];
          if (cases === "Upper") {
            for (let i = 0; i < newString.length; i++) {
              if (newString[i] === symbol) {
                newString[i] = newString[i].toUpperCase();
              }
            }
            password = newString.join("");
          } else {
            for (let i = 0; i < newString.length; i++) {
              if (newString[i] === symbol) {
                newString[i] = newString[i].toLowerCase();
              }
            }
            password = newString.join("");
          }
          console.log(password);
        }
        break;

      case "Insert":
        {
          let newString = password.split("");
          let index = Number(commands[1]);
          let symbol = commands[2];
          newString.splice(index, 0, symbol);
          password = newString.join("");
          console.log(password);
        }
        break;
      case "Validation":
        let newString = password.split("");
        let patternDigitsLetter = /^[a-zA-Z0-9_]+$/;
        let patternUpp = /^[^A-Z]*$/;
        let patternLow = /^[^a-z]*$/;
        let patternDigit = /^[^0-9]*$/;
        if (newString.length < 8) {
          console.log("Password must be at least 8 characters long!");
        }
        if (!patternDigitsLetter.test(password)) {
          console.log(`Password must consist only of letters, digits and _!`);
        }
        if (patternUpp.test(password)) {
          console.log(`Password must consist at least one uppercase letter!`);
        }
        if (patternLow.test(password)) {
          console.log(`Password must consist at least one lowercase letter!`);
        }
        if (patternDigit.test(password)) {
          console.log(`Password must consist at least one digit!`);
        }
        break;
    }
  }
}
passworValidation([
  "invalidpassword*",
  "Add 2 p",
  "Replace i -50",
  "Replace * 10",
  "Make Upper 2",
  "Validation",
  "Complete",
]);
console.log("=======================");
passworValidation([
  "123456789",
  "Insert 3 R",
  "Replace 5 15",
  "Validation",
  "Make Lower 3",
  "Complete",
]);
console.log("=======================");
passworValidation([
  "123456789",
  "Insert 3 R",
  "Replace 5 15",
  "Validation",
  "Make Lower 3",
  "Complete",
]);
console.log("=======================");
passworValidation([
  "akshdkAjshdkjahsd",
  // "Insert 3 R",
  // "Replace 5 15",
  "Validation",
  "Make Lower 3",
  "Complete",
]);
