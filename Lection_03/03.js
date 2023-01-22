function rightPlace(string1, char, string2) {
  let fixedString = string1.replace("_", char);
  let output = fixedString === string2 ? "Matched" : "Not Matched";
  console.log(output);
}
rightPlace("Str_ng", "I", "Strong");
rightPlace("Str_ng", "i", "String");
