function replaceRepeatingChars(text) {
  let result = [];
  let letter = text[0];
  result.push(letter);
  for (const el of text) {
    if (el !== letter) {
      result.push(el);
      letter = el;
    }
  }
  console.log(result.join(""));
}
replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
