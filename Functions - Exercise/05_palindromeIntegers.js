function palindromeIntegers(array) {
  // for (let i = 0; i < array.length; i++) {
  //   let numAsString = String(array[0]);
  //   let buff = "";

  //   for (let j = 0; j < array.length; j++) {
  //     const element = array[j];
  //   }
  // }

  let newArray = array.join(",").split(",");

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < newArray[i].length; j++) {
      let firstNum = newArray[i][j];
      let secondNum = newArray[i][newArray[i].length - 1];
      if (firstNum === secondNum) {
        console.log(true);
        break;
      } else {
        console.log(false);
        break;
      }
    }
  }
}

console.log(palindromeIntegers([123, 323, 421, 121]));
console.log("==============================");
console.log(palindromeIntegers([32, 2, 232, 1010]));
