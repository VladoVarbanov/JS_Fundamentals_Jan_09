function integerAndFloats(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  console.log(`${sum} - ${sum % 1 === 0 ? "Integer" : "Float"}`);
}
integerAndFloats(9, 100, 1.1);
integerAndFloats(100, 200, 303);
