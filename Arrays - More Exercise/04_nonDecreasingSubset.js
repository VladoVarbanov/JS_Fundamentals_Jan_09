function nonDecreasingSubset(array) {
  let newArray = [];
  newArray.push(array[0]);
  let maxNumber = array[0];
  for (let i = 0; i < array.length; i++) {
    if (maxNumber <= array[i + 1]) {
      newArray.push(array[i + 1]);
      maxNumber = array[i + 1];
    }
  }
  console.log(newArray.join(" "));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([1, 2, 3, 4]);
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);
nonDecreasingSubset([0, 20, 3, 2, 15, 6, 1, 20]);
