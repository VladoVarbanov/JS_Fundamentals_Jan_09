function lettersChangeNumbers(text) {
  let textArr = text.split(" ");
  let firstLetter = 0;
  let lastLetter = 0;
  let number = 0;
  let result = 0;
  let output = [];
  let alphabet = [
    1,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  for (let i = 0; i < textArr.length; i++) {
    if (textArr[i] === "") {
      continue;
    }
    firstLetter = textArr[i][0];
    lastLetter = textArr[i][textArr[i].length - 1];
    number = Number(
      textArr[i].substring(
        textArr[i].startsWith(firstLetter),
        textArr[i].length - 1
      )
    );
    if (firstLetter.charCodeAt() >= 65 && firstLetter.charCodeAt() <= 90) {
      result = number / alphabet.indexOf(firstLetter);
    } else if (
      firstLetter.charCodeAt() >= 97 &&
      firstLetter.charCodeAt() <= 122
    ) {
      result = number * alphabet.indexOf(firstLetter.toUpperCase());
    }
    if (lastLetter.charCodeAt() >= 65 && lastLetter.charCodeAt() <= 90) {
      result -= alphabet.indexOf(lastLetter);
    } else if (
      lastLetter.charCodeAt() >= 97 &&
      lastLetter.charCodeAt() <= 122
    ) {
      result += alphabet.indexOf(lastLetter.toUpperCase());
    }
    output.push(result);
    result = 0;
  }
  let final = output.reduce((a, b) => a + b);
  console.log(final.toFixed(2));
}
lettersChangeNumbers("A12b s17G");
lettersChangeNumbers("P34562Z q2576f   H456z");
lettersChangeNumbers("a1A");
