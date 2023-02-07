function characterInRange(charA, charB) {
  let numFromCharA = convertFromCharToNumber(charA);
  let numFromCharB = convertFromCharToNumber(charB);

  let startIndex = smallestОfTwoNumbers(numFromCharA, numFromCharB);
  let endIndex = biggestОfTwoNumbers(numFromCharA, numFromCharB);
  let buff = "";
  for (let i = startIndex + 1; i < endIndex; i++) {
    buff = concatenationString(buff, convertFromNumberToChar(i));
  }
  return buff;

  function concatenationString(buff, string) {
    buff += string + " ";
    return buff;
  }

  function convertFromNumberToChar(num) {
    return String.fromCharCode(num);
  }

  function convertFromCharToNumber(char) {
    return char.charCodeAt(0);
  }

  function smallestОfTwoNumbers(a, b) {
    return Math.min(a, b);
  }

  function biggestОfTwoNumbers(a, b) {
    return Math.max(a, b);
  }
}
characterInRange("a", "d");
characterInRange("#", ":");
characterInRange("C", "#");
