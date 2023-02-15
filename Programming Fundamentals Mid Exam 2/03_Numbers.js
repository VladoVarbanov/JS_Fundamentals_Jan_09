function numbers(input) {
  let arr = input.split(" ").map(Number);
  let sum = 0;

  for (const el of arr) {
    sum += el;
  }
  let avr = sum / arr.length;
  arr.sort((a, b) => b - a);
  let biggestNum = [];
  for (const el of arr) {
    if (el > avr) {
      biggestNum.push(el);
    }
    if (biggestNum.length > 4) {
      break;
    }
  }
  if (biggestNum.length === 0) {
    return console.log("No");
  } else {
    console.log(biggestNum.join(" "));
  }
}
numbers("10 20 30 40 50");
console.log("============================");
numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");
console.log("============================");
numbers("1");
console.log("============================");
numbers("-1 -2 -3 -4 -5 -6");
console.log("============================");
numbers("");
console.log("============================");
