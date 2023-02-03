function addAndSubtract(numOne, numTwo, numThree) {
  function sumTwoNumbers(a, b) {
    return a + b;
  }

  function subtractTwoNumbers(a, b) {
    return a - b;
  }

  let sum = sumTwoNumbers(numOne, numTwo);
  let subtract = subtractTwoNumbers(sum, numThree);

  return subtract;
}
