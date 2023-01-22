function calculator(a, op, b) {
  let result = 0;

  switch (op) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;

    default:
      break;
  }
  console.log(result.toFixed(2));
}
