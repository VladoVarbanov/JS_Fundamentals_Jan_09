function lowerOrUpper(char) {
  if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    console.log("upper-case");
  } else {
    console.log("lower-case");
  }
}
lowerOrUpper("a");
