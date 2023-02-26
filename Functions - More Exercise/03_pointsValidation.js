function pointsValidation(input) {
  let x1 = input.shift();
  let y1 = input.shift();
  let x2 = input.shift();
  let y2 = input.shift();
  let distance = Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2));
  printResult(distance, x1, y1, 0, 0);
  distance = Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2));
  printResult(distance, x2, y2, 0, 0);
  distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  printResult(distance, x1, y1, x2, y2);

  function printResult(distance, x1, y1, x2, y2) {
    if (distance % 1 === 0) {
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
  }
}
pointsValidation([3, 0, 0, 4]);
console.log("=====================");
pointsValidation([2, 1, 1, 1]);
