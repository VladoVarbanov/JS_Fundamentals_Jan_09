function houseParty(array) {
  let outputGuests = [];
  let outputErrors = [];
  for (let i = 0; i < array.length; i++) {
    let commands = array[i].split(" ");
    let name = commands.shift();
    commands = commands.join(" ");
    if (commands === "is going!") {
      if (outputGuests.includes(name)) {
        if (outputErrors.includes(`${name} is already in the list!`)) {
          continue;
        } else {
          outputErrors.push(`${name} is already in the list!`);
        }
      } else {
        outputGuests.push(name);
      }
    } else {
      if (outputGuests.includes(name)) {
        outputGuests = outputGuests.filter((el) => el !== name);
      } else {
        if (outputErrors.includes(`${name} is not in the list!`)) {
          continue;
        } else {
          outputErrors.push(`${name} is not in the list!`);
        }
      }
    }
  }
  console.log(outputErrors.join("\n"), "\n", outputGuests.join("\n"));
}
// console.log(
//   houseParty([
//     "Allie is going!",
//     "George is going!",
//     "John is not going!",
//     "George is not going!",
//   ])
// );

// console.log("==================================");

houseParty([
  "Allie is going!",
  "George is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
  "John is not going!",
  "George is not going!",
]);

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

console.log("==================================");
console.log(
  houseParty([
    "Tom is going!",
    "Annie is going!",
    "Tom is going!",
    "Garry is going!",
    "Tom is going!",
    "Jerry is going!",
  ])
);
