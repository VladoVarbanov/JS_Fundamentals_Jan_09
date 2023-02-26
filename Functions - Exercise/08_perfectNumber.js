function perfectNumber(number) {
  let perfectDev = [];
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      perfectDev.push(i);
    } else {
      continue;
    }
    for (let j = 0; j < perfectDev.length; j++) {
      sum += perfectDev[j];

      if (sum === number) {
        return "We have a perfect number!";
      }
    }
    sum = 0;
  }
  console.log("It's not so perfect.");
}
perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);
