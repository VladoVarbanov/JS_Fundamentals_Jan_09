function secretChat(arr) {
  let secretMassage = arr.shift();
  for (let i = 0; i < arr.length; i++) {
    let token = arr[i].split(":|:");
    let command = token[0];
    let value = token.slice(1);
    let substring = "";

    switch (command) {
      case "ChangeAll":
        substring = value[0];
        let replacement = value[1];
        while (secretMassage.includes(substring)) {
          secretMassage = secretMassage.replace(substring, replacement);
        }
        console.log(secretMassage);
        break;
      case "Reverse":
        substring = value[0];
        if (secretMassage.includes(substring)) {
          secretMassage = secretMassage.replace(substring, "");
          let reversed = reverseString(substring);
          secretMassage += reversed;
          console.log(secretMassage);
        } else {
          console.log("error");
        }
        break;
      case "InsertSpace":
        let index = Number(value[0]);
        let leftSide = secretMassage.substring(0, index);
        let rightSide = secretMassage.substring(index);
        secretMassage = leftSide + " " + rightSide;
        console.log(secretMassage);
        break;
      case "Reveal":
        console.log(`You have a new text message: ${secretMassage}`);
        return;
    }
  }

  function reverseString(text) {
    return text.split("").reverse().join("");
  }
}
secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
