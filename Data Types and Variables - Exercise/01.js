function sumDigits(num) {
  let numToStrings = num.toString();
  let sum = 0;

  for (let i = 0; i < numToStrings.length; i++) {
    sum += Number(numToStrings[i]);
  }
  console.log(sum);
}
sumDigits(97561);
