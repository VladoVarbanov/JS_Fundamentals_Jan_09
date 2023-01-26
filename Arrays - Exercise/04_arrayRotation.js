function arrayRotation(array, numRotation) {
  for (let i = 0; i < numRotation; i++) {
    // let arrBuff = array.shift();
    // array.push(arrBuff);
    for (let j = 0; j < array.length - 1; j++) {
      let arrBuff = array[j];
      array[j] = array[j + 1];
      array[j + 1] = arrBuff;
    }
  }
  console.log(array.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);
