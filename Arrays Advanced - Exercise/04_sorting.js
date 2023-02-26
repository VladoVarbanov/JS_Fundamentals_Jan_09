function sorting(input) {
  let sortedNum = [...input];
  let output = [];
  let isFirst = false;
  sortedNum.sort((a, b) => b - a);
  for (let i = 0; i < input.length; i++) {
    if (!isFirst) {
      output.push(sortedNum.shift());
      isFirst = true;
    } else {
      output.push(sortedNum.pop());
      isFirst = false;
    }
  }

  console.log(output.join(" "));
}
// sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
// console.log("============================");
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47, 7]);
