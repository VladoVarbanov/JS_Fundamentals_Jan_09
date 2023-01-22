function reverseString(word) {
  let stringWord = word.toString();
  let arrayWord = [...stringWord];
  console.log(arrayWord.reverse().join(""));
}
reverseString("Hello");
reverseString("SoftUni");
reverseString(1234);
