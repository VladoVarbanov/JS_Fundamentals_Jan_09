function pascalCaseSplitter(text) {
  let res = [];
  let startIndex = 0;
  for (let i = 1; i < text.length; i++) {
    let ch = text[i];
    if (ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90) {
      res.push(text.substring(startIndex, i));
      startIndex = i;
    }
  }
  res.push(text.substring(startIndex));
  console.log(res.join(", "));
}
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
