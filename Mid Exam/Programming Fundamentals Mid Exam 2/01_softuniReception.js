function softuniReception(input) {
  let firstEmp = Number(input.shift());
  let secondEmp = Number(input.shift());
  let thirdEmp = Number(input.shift());
  let allTime = Number(input.shift());
  let timeNeeded = 0;
  while (allTime > 0) {
    allTime -= firstEmp + secondEmp + thirdEmp;
    timeNeeded++;
    if (timeNeeded % 4 === 0) {
      timeNeeded++;
    }
  }
  console.log(`Time needed: ${timeNeeded}h.`);
}
softuniReception(["5", "6", "4", "20"]);
console.log("======================");
softuniReception(["1", "2", "3", "45"]);
console.log("======================");
softuniReception(["3", "2", "5", "40"]);
