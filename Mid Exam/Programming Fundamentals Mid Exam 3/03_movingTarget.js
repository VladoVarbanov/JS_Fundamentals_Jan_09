function movingTarget(params) {
  let targets = params
    .shift()
    .split(" ")
    .map((x) => Number(x));

  let commands = params.shift().split(" ");
  let command = commands[0];
  let index = Number(commands[1]);
  let power = Number(commands[2]);

  while (command !== "End") {
    switch (command) {
      case "Shoot":
        if (index >= 0 && index < targets.length) {
          targets[index] -= power;
          if (targets[index] <= 0) {
            targets.splice(index, 1);
          }
        }
        break;
      case "Add":
        if (index >= 0 && index < targets.length) {
          targets.splice(index, 0, power);
        } else {
          console.log("Invalid placement!");
        }
        break;
      case "Strike":
        if (index + power < targets.length && index - power >= 0) {
          targets.fill(-1, index - power, index + power + 1);
          targets = targets.filter((x) => x > 0);
        } else {
          console.log("Strike missed!");
        }
        break;
    }
    commands = params.shift().split(" ");
    command = commands[0];
    index = Number(commands[1]);
    power = Number(commands[2]);
  }

  console.log(targets.join("|"));
}
// movingTarget([
//   "52 74 23 44 96 110",
//   "Shoot 5 10",
//   "Shoot 1 80",
//   "Strike 2 1",
//   "Add 0 3",
//   "Shoot 1 10",
//   "End",
// ]);
// console.log("===============================");
movingTarget(["1 2 3 4 5", "Strike 2 1", "End"]);
console.log("===============================");
movingTarget([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 4 3",
  "End",
]);
