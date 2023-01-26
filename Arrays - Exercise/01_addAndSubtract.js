function addAndSubtract(arr) {
  let totalSumArr = 0;
  let totalSumNewArr = 0;

  for (let i = 0; i < arr.length; i++) {
    totalSumArr += arr[i];
    if (arr[i] % 2 === 0) {
      // TODO
      arr[i] += i;
    } else {
      // TODO
      arr[i] -= i;
    }
    totalSumNewArr += arr[i];
  }
  console.log(arr);
  console.log(totalSumArr);
  console.log(totalSumNewArr);
}
addAndSubtract([5, 15, 23, 56, 35]);
