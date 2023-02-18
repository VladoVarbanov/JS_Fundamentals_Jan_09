function manOWar(input) {
  let pirateShip = input.shift().split(">").map(Number);
  let warShip = input.shift().split(">").map(Number);
  let maxHealth = Number(input.shift());

  for (let i = 0; i < input.length; i++) {
    let tokens = input[i].split(" ");
    let command = tokens[0];
    let value = tokens.slice(1).map((x) => Number(x));
    switch (command) {
      case "Fire":
        break;
      case "Defend":
        break;
      case "Repair":
        break;
      case "Status":
        break;
      case "Retire":
        break;

      default:
        break;
    }
  }

  function fire(warship, index, damage) {
    if (index >= 0 && index < warship.length) {
      warship[index] -= damage;
    }
  }

  function defend(warship, startIndex, endIndex, damage) {}

  console.log(pirateShip);
}
manOWar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);
