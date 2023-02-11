function smallestTwoNumbers(arr) {
  let numAscending = arr.sort((a, b) => a - b);
  return numAscending.slice(0, 2).join(" ");
}
console.log(smallestTwoNumbers([30, 15, 50, 5]));
console.log("5 15");
console.log("=======================");
console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]));
console.log("0 3");
