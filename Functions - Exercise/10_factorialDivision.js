function factorialDivision(factor, divisor) {
  let num1 = 1;
  let num2 = 1;
  for (let i = 1; i <= factor; i++) {
    num1 *= i;
  }
  for (let i = 1; i <= divisor; i++) {
    num2 *= i;
  }
  //   console.log(num);
  console.log((num1 / num2).toFixed(2));
}
factorialDivision(5, 2);
console.log("=====================");
factorialDivision(6, 2);
console.log("=====================");
factorialDivision(100, 2);
