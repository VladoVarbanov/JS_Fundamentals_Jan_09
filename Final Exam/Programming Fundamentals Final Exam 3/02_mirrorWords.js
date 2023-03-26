function mirrorWords(arr) {
  let regex = /([@#])(?<word1>[a-zA-Z]{3,})\1\1(?<word2>[a-zA-Z]{3,})\1/gm;
  let count = 0;
  let results = [];
  for (const text of arr) {
    let matches = text.matchAll(regex);
    for (const match of matches) {
      count++;
      let leftWord = match.groups["word1"];
      let rightWord = match.groups["word2"];
      let reversedRightWord = reverseStr(rightWord);
      if (leftWord === reversedRightWord) {
        results.push(`${leftWord} <=> ${rightWord}`);
      }
    }
  }
  if (count != 0) {
    console.log(`${count} word pairs found!`);
  } else {
    console.log("No word pairs found!");
  }
  if (results.length != 0) {
    console.log("The mirror words are:");
    console.log(results.join(", "));
  } else {
    console.log("No mirror words!");
  }
  function reverseStr(text) {
    let reversed = "";
    for (let i = text.length - 1; i >= 0; i--) {
      reversed += text[i];
    }
    return reversed;
  }
}
mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
