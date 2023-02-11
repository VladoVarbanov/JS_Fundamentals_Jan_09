function houseParty(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    let commands = array[i].split(" ");
    if (commands[2] === "going!") {
      if (output.includes(commands[0])) {
        output.unshift(`${commands[0]} is already in the list!`);
      } else {
        output[i] = commands[0];
      }
    } else {
      if (output.includes(commands[0])) {
        output = output.filter((el) => el !== commands[0]);
      } else {
        output.unshift(`${commands[0]} is not in the list!`);
      }
    }
  }
  return output.join("\n");
}
console.log(
  houseParty([
    "Allie is going!",
    "George is going!",
    "John is not going!",
    "George is not going!",
  ])
);
console.log("John is not in the list!\nAllie");
console.log("==================================");
console.log(
  houseParty([
    "Tom is going!",
    "Annie is going!",
    "Tom is going!",
    "Garry is going!",
    "Jerry is going!",
  ])
);
console.log("Tom is already in the list!\nTom\nAnnie\nGarry\nJerry");
