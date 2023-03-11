function stringSubstring(givenWord, text) {
  let strArr = text.split(" ");
  let arr = [];
  for (const word of strArr) {
    if (word.toLowerCase() === givenWord.toLowerCase()) {
      arr.push(word);
      break;
    }
  }
  if (arr.length > 0) {
    console.log(givenWord);
  } else {
    console.log(`${givenWord} not found!`);
  }
}
stringSubstring("javascript", "JavaScript is the best programming language");
console.log("========================================");
stringSubstring("python", "JavaScript is the best programming language");
