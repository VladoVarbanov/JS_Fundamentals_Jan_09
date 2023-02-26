function lastKeyNumbersSequence(numLength, numCountSum) {
  let array = [1];
  while (array.length < numLength) {
    let arrayIndex = array.length - numCountSum;
    if (arrayIndex < 0) {
      arrayIndex = 0;
    }
    let sumNum = 0;
    for (let i = 0; i < numCountSum; i++) {
      if (array[i + arrayIndex] === undefined) {
        break;
      }
      sumNum += array[i + arrayIndex];
    }
    if (sumNum === 0) {
      sumNum = 1;
    }
    array.push(sumNum);
  }
  console.log(array.join(" "));
}
lastKeyNumbersSequence(6, 3);
console.log("1 1 2 4 7 13");
console.log("=======================");
lastKeyNumbersSequence(8, 2);
console.log("1 1 2 3 5 8 13 21");

function lastKeyNumbersSequence2(numLength, numCountSum) {
  let array = [1];
  while (array.length < numLength) {
    let arrayIndex = Math.max(0, array.length - numCountSum);
    let sumNum = 0;
    for (let i = 0; i < numCountSum && arrayIndex + i < array.length; i++) {
      if (array[i + arrayIndex] === undefined) {
        break;
      }
      sumNum += array[i + arrayIndex];
    }
    if (sumNum === 0) {
      sumNum = 1;
    }
    array.push(sumNum);
    arrayIndex++;
  }
  console.log(array.join(" "));
}
