/*
function specialNumbers(number) {
  for (let i = 1; i <= number; i++) {
    let sum = i.toString();
    let totalSum = 0;
    for (let j = 0; j < sum.length; j++) {
      totalSum += Number(sum[j]);
    }
    if (totalSum === 5 || totalSum === 7 || totalSum === 11) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}
*/

function checkSpecial(number) {
  for (let i = 1; i <= number; i++) {
    let sum = 0;
    let num = i;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    if (sum === 5 || sum === 7 || sum === 11) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}

// specialNumbers(60);
checkSpecial(60);
