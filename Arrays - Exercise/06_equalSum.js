function equalSum(array) {
  if (array.length === 1) {
    console.log(0);
    return;
  }
  let isNo = true;

  for (let i = 1; i < array.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < i; j++) {
      leftSum += array[j];
    }
    for (let l = i + 1; l < array.length; l++) {
      rightSum += array[l];
    }
    if (leftSum === rightSum) {
      console.log(i);
      isNo = false;
    }
  }
  if (isNo) {
    console.log("no");
  }
}
equalSum([1, 2, 3, 3]);
equalSum([1, 2]);
equalSum([1]);
equalSum([1, 2, 3]);
equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
