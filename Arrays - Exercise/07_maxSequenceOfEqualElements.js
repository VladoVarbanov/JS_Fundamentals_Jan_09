function maxSequenceOfEqualElements(arr) {
  let currentSize = 0;
  let currentNum = 0;
  let longestSize = 0;
  let longestNum = 0;
  let outputArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === currentNum) {
      currentSize++;
    } else {
      if (currentSize > longestSize) {
        longestSize = currentSize;
        longestNum = currentNum;
      }
      currentSize = 1;
      currentNum = arr[i];
    }
  }
  if (longestSize === 0) {
    longestSize = currentSize;
    longestNum = currentNum;
  }
  for (let i = 0; i < longestSize; i++) {
    outputArr.push(longestNum);
  }
  console.log(outputArr.join(" "));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
console.log("====================");
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
console.log("====================");
maxSequenceOfEqualElements([4, 4, 4, 4]);
console.log("====================");
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
