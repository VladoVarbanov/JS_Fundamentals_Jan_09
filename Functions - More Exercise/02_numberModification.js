function numberModification(num) {
  let numArr = num.toString().split("").map(Number);
  let average = 0;
  let sum = 0;
  while (average < 5) {
    sum = 0;
    for (let i = 0; i < numArr.length; i++) {
      sum += numArr[i];
    }
    average = sum / numArr.length;
    if (average < 5) {
      numArr.push(9);
    } else {
      break;
    }
  }

  console.log(numArr.join(""));
}
numberModification(101);
numberModification(5835);
