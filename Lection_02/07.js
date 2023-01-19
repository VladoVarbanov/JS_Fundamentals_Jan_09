function triangleOfNumbers(n) {
  for (let row = 1; row <= n; row++) {
    let buff = "";
    for (let col = 0; col < row; col++) {
      buff += row + " ";
    }
    console.log(buff);
  }
}
triangleOfNumbers(3);
console.log("---------------------");
triangleOfNumbers(5);
console.log("---------------------");
triangleOfNumbers(8);
console.log("---------------------");
