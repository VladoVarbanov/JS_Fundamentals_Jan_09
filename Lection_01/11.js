function sumOfOddNumber(params) {
  let totalScore = 0;
  let count = 0;
  let number = 1;

  while (count < params) {
    if (number % 2 !== 0) {
      console.log(number);
      count++;
      totalScore += number;
    }
    number++;
  }
  console.log(`Sum: ${totalScore}`);
}
sumOfOddNumber(3);
