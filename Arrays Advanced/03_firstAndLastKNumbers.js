function firstAndLastKNumbers(array) {
  let countNumbers = array.shift();
  let firstArray = array.slice(0, countNumbers);
  let lastArray = array.slice(array.length - countNumbers);

  console.log(firstArray.join(" "));
  console.log(lastArray.join(" "));
}
firstAndLastKNumbers([2, 7, 8, 9]);
console.log("======================");
firstAndLastKNumbers([3, 6, 7, 8, 9]);
console.log("======================");
firstAndLastKNumbers([3, 6, 7, 8, 9, 32, 105, -1]);
