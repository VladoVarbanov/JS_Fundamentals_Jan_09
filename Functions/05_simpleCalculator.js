function simpleCalculator(numOne, numTwo, operator) {
  let multiply = (numOne, numTwo) => numOne * numTwo;
  let divide = (numOne, numTwo) => numOne / numTwo;
  let add = (numOne, numTwo) => numOne + numTwo;
  let subtract = (numOne, numTwo) => numOne - numTwo;
  let result = eval(`${operator}(${numOne}, ${numTwo})`);
  console.log(result);
  return result;
}
simpleCalculator(5, 5, "multiply");
simpleCalculator(40, 8, "divide");
simpleCalculator(12, 19, "add");
simpleCalculator(50, 13, "subtract");
