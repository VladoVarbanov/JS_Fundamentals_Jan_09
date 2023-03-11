function revealWords(words, text) {
  let wordsArr = words.split(", ");
  let textArr = text.split(" ");

  for (const word of wordsArr) {
    for (let i = 0; i < textArr.length; i++) {
      if (textArr[i].includes("*") && textArr[i].length === word.length) {
        textArr[i] = word;
      }
    }
  }
  console.log(textArr.join(" "));
}
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
