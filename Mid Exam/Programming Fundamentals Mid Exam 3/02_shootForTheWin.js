function shootForTheWin(input) {
  let targets = input.shift().split(" ").map(Number);
  let index = 0;
  let currentTarget = 0;
  let count = 0;
  while (input[index] !== "End") {
    let shoot = Number(input[index]);
    if (shoot >= 0 && shoot < targets.length) {
      currentTarget = targets[shoot];
      targets[shoot] = -1;
      count++;
      for (let i = 0; i < targets.length; i++) {
        let target = targets[i];
        if (target > -1) {
          if (target > currentTarget) {
            targets[i] -= currentTarget;
          } else {
            targets[i] += currentTarget;
          }
        }
      }
    }
    index++;
  }
  console.log(`Shot targets: ${count} -> ${targets.join(" ")}`);
}
// shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
// console.log("==============================");
shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
