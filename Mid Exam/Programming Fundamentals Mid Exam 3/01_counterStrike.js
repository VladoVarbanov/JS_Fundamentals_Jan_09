function counterStrike(input) {
  let energy = Number(input.shift());
  let wonBattles = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "End of battle") {
      return `Won battles: ${wonBattles}. Energy left: ${energy}`;
    } else if (energy <= 0) {
      return `Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`;
    }
    if (energy >= Number(input[i])) {
      energy -= Number(input[i]);
      wonBattles++;
      if (wonBattles % 3 === 0) {
        energy += wonBattles;
      }
    } else {
      return `Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`;
    }
  }
}
// counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
// console.log("================================");
// counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
// console.log("================================");
console.log(counterStrike(["200", "54", "14", "28", "13", "90", "5"]));
