function dungeonestDark(input) {
  let rooms = input[0].split("|");
  let health = 100;
  let isOver = false;
  let roomCounter = 0;
  let coins = 0;

  for (const room of rooms) {
    roomCounter++;
    let commands = room.split(" ");
    let command = commands[0];
    let value = Number(commands[1]);
    switch (command) {
      case "potion":
        if (value + health > 100) {
          value = value - (value + health - 100);
        }
        health += value;
        console.log(`You healed for ${value} hp.`);
        console.log(`Current health: ${health} hp.`);
        break;
      case "chest":
        coins += value;
        console.log(`You found ${value} coins.`);
        break;

      default:
        health -= value;
        if (health > 0) {
          console.log(`You slayed ${command}.`);
        } else {
          console.log(`You died! Killed by ${command}.`);
          console.log(`Best room: ${roomCounter}`);
          isOver = true;
        }
        break;
    }
    if (isOver) {
      break;
    }
  }
  if (!isOver) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
console.log("===================================");
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
