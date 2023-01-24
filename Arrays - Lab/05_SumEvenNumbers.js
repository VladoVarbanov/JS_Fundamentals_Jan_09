function sumEvenNumbers(params) {
  let sum = 0;
  for (let i = 0; i < params.length; i++) {
    if (Number(params[i]) % 2 === 0) {
      sum += Number(params[i]);
    }
  }
  console.log(sum);
}
sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
sumEvenNumbers(["3", "5", "7", "9"]);
sumEvenNumbers(["2", "4", "6", "8", "10"]);
