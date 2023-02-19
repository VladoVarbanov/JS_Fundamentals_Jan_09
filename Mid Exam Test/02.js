function friendListMaintenance(input) {
  let userNames = input.shift().split(", ");
  let commands = input.shift().split(" ");
  let command = commands[0];
  let indexCommand = commands[1];
  let Blacklisted = [];
  let lostListed = [];
  let changeListed = [];
  while (command !== "Report") {
    switch (command) {
      case "Blacklist":
        if (checkList(userNames, indexCommand) === indexCommand) {
          Blacklisted.push(checkList(userNames, indexCommand));
          userNames[userNames.indexOf(indexCommand)] = "Blacklisted";
          console.log(`${Blacklisted.join(" ")} was blacklisted.`);
        } else {
          console.log(`${indexCommand} was not found.`);
        }

        break;

      case "Error":
        if (indexCommand >= 0 && indexCommand < userNames.length) {
          if (
            userNames[Number(indexCommand)] !== "Blacklisted" &&
            userNames[Number(indexCommand)] !== "Lost"
          ) {
            lostListed.push(userNames[Number(indexCommand)]);
            userNames[Number(indexCommand)] = "Lost";
            console.log(`${lostListed.join(" ")} was lost due to an error.`);
          }
        }
        break;

      case "Change":
        if (
          Number(indexCommand) >= 0 &&
          Number(indexCommand) < userNames.length
        ) {
          console.log(
            `${userNames[Number(indexCommand)]} changed his username to ${
              commands[2]
            }.`
          );
          userNames[Number(indexCommand)] = commands[2];
        }
        break;
    }
    commands = input.shift().split(" ");
    command = commands[0];
    indexCommand = commands[1];
  }

  function checkList(names, matchName) {
    for (let i = 0; i < names.length; i++) {
      if (names[i] === matchName) {
        return names[i];
      }
    }
  }

  console.log(`Blacklisted names: ${Blacklisted.length} `);
  console.log(`Lost names: ${lostListed.length}`);
  console.log(userNames.join(" "));
}
friendListMaintenance([
  "Mike, John, Eddie",
  "Blacklist Mike",
  "Error 0",
  "Report",
]);
console.log("===========================");
// friendListMaintenance([
//   "Mike, John, Eddie, William",
//   "Error 3",
//   "Error 3",
//   "Change 0 Mike123",
//   "Report",
// ]);
// console.log("===============================");
friendListMaintenance([
  "Mike, John, Eddie, William",
  "Blacklist Maya",
  "Error 1",
  "Change 4 George",
  "Report",
]);
