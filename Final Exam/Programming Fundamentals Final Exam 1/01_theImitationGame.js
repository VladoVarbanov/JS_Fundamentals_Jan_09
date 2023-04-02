function theImitationGame(arr) {
  let text = arr.shift();
  for (const el of arr) {
    if (el === "Decode") {
      break;
    }
    let commands = el.split("|");
    let command = commands[0];
    switch (command) {
      case "Move":
        {
          let count = commands[1];
          let textArr = text.split("");
          let leftWord = textArr.slice(0, count).join("");
          let rightWord = textArr.slice(count, textArr.length).join("");
          text = rightWord + leftWord;
          debugger;
        }
        break;
      case "Insert":
        {
          let index = commands[1];
          let letter = commands[2];
          let textArr = text.split("");
          textArr.splice(index, 0, letter);
          text = textArr.join("");
          //   debugger;
        }
        break;

      case "ChangeAll":
        {
          let letter = commands[1];
          let replacedLetter = commands[2];
          let textArr = text.split("");
          for (let i = 0; i < textArr.length; i++) {
            if (textArr[i] === letter) {
              textArr[i] = replacedLetter;
            }
          }
          text = textArr.join("");
          //   debugger;
        }
        break;
    }
  }
  console.log(`The decrypted message is: ${text}`);
}
theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
console.log("==============================");
theImitationGame([
  "owyouh",
  "Move|2",
  "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]);
