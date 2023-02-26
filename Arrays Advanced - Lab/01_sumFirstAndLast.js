function sumFirstAndLast(arr) {
  let firstElement = arr.shift();
  let lastElement = arr.pop();

  console.log(Number(firstElement) + Number(lastElement));
}
sumFirstAndLast(["20", "30", "40"]);
