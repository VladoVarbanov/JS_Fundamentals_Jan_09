function magicSum(array, num) {
  let sum = 0;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      sum = array[i] + array[j];
      if (sum === num) {
        console.log(array[i] + " " + array[j]);
      }
    }
  }
}
// magicSum([1, 7, 6, 2, 19, 23], 8);
// magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);
