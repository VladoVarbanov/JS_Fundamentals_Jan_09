function signCheck(numOne, numTwo, numThree) {
  let resultOne = 0;
  let resultTwo = 0;
  for (let i = 0; i < numTwo; i++) {
    resultOne += numThree;
  }
  for (let i = 0; i < numOne; i++) {
    resultTwo += resultOne;
  }

  if (numOne * numTwo * numThree > 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}
signCheck(3, 4, 5);
signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);
