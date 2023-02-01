function repeatString(text, count) {
  let textForPrint = "";
  for (let i = 0; i < count; i++) {
    textForPrint += text;
  }
  return textForPrint;
}
repeatString("abc", 3);
repeatString("String", 2);
