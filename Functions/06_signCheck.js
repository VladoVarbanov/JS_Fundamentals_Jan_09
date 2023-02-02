function signCheck(numOne, numTwo, numThree) {
  let result = 0;
  for (let i = 0; i < numOne; i++) {
    result += numOne;
    for (let j = 0; j < numTwo; j++) {
      result += numTwo;
      for (let k = 0; k < numThree; k++) {
        result += numThree;
      }
    }
  }
  console.log(numOne * numTwo * numThree);
  console.log(result);
}
signCheck(5, 12, -15);
