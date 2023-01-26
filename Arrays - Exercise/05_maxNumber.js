function maxNumber(arr) {
  let biggestNumber = Number.MIN_SAFE_INTEGER;
  let biggestNumberIndex = -1;
  let maxNumber = [];

  while (maxNumber.length !== 3) {
    for (let i = biggestNumberIndex + 1; i < arr.length; i++) {
      if (biggestNumber <= arr[i]) {
        biggestNumber = arr[i];
        biggestNumberIndex = i;
      }
    }
    if (biggestNumber === undefined) {
      break;
    }
    maxNumber.push(biggestNumber);
    biggestNumber = arr[biggestNumberIndex + 1];
  }
  console.log(maxNumber.join(" "));
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);
