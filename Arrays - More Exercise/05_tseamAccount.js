function tseamAccount(array) {
  let index = 0;
  let peterAccount = array[index].split(" ");
  index++;
  let command = "";
  let game = "";
  while (array[index] !== "Play!") {
    let commands = array[index].split(" ");
    command = commands[0];
    game = commands[1];
    switch (command) {
      case "Install":
        if (!peterAccount.includes(game)) {
          peterAccount.push(game);
        }
        break;
      case "Uninstall":
        if (peterAccount.includes(game)) {
          let filteredArray = peterAccount.filter((x) => x !== game);
          peterAccount = filteredArray;
        }
        break;
      case "Update":
        if (peterAccount.includes(game)) {
          let filteredArray = peterAccount.filter((x) => x !== game);
          peterAccount = filteredArray;
          peterAccount.push(game);
        }
        break;
      case "Expansion":
        let tempGame = game.split("-");
        if (peterAccount.includes(tempGame[0])) {
          let gameIndex = peterAccount.findIndex((x) => x === tempGame[0]);
          peterAccount.splice(
            gameIndex + 1,
            0,
            tempGame[0] + ":" + tempGame[1]
          );
        }
        break;

      default:
        break;
    }
    index++;
  }
  console.log(peterAccount.join(" "));
}

tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
tseamAccount([
  "CS WoW Diablo",
  "Uninstall XCOM",
  "Update PeshoGame",
  "Update WoW",
  "Expansion Civ-V",
  "Play!",
]);
