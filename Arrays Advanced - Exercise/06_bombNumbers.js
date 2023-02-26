function bombNumbers(targetArr, bomb) {
  let sum = 0;
  let bombNumber = bomb.shift();
  let bombPower = bomb.shift();
  let targetIndex = [];
  let newArray = [];
  findIndex(targetArr, bombNumber);
  for (let j = 0; j < targetIndex.length; j++) {
    for (let i = targetIndex[j] - bombPower - 1; i >= 0; i--) {
      newArray.push(targetArr[i]);
    }
    for (let i = targetIndex[j] + bombPower + 1; i < targetArr.length; i++) {
      newArray.push(targetArr[i]);
    }
  }

  for (let i = 0; i < newArray.length; i++) {
    sum += newArray[i];
  }
  function findIndex(array, index) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === index) {
        targetIndex.push(i);
      }
    }
  }
  console.log(sum);
}
// bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// console.log("==============================");
// bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
// console.log("==============================");
// bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
// console.log("==============================");
// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);

function detonate(sequence, bomb) {
  let specialBombNumber = bomb[0];
  let power = bomb[1];
  let result = 0;
  while (sequence.includes(specialBombNumber)) {
    const index = sequence.indexOf(specialBombNumber);
    const start = Math.max(index - power, 0);
    const end = Math.min(index + power, sequence.length - 1);
    sequence.splice(start, end - start + 1);
  }
  result = sequence.reduce((acc, curr) => acc + curr, 0);
  console.log(result);
}
// detonate([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// console.log("==============================");
// detonate([1, 4, 4, 2, 8, 9, 1], [9, 3]);
// console.log("==============================");
// detonate([1, 7, 7, 1, 2, 3], [7, 1]);
// console.log("==============================");
detonate([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
