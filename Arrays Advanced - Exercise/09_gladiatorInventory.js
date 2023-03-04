function gladiatorInventory(data) {
  let inventory = data.shift().split(" ");

  for (let i = 0; i < data.length; i++) {
    let listOfCommands = data[i].split(" ");
    let command = listOfCommands[0];
    let item = listOfCommands[1];
    if (command === "Buy") {
      buy(item);
    } else if (command === "Trash") {
      trash(item);
    } else if (command === "Repair") {
      repair(item);
    } else if (command === "Upgrade") {
      let equipment = item.split("-");
      upgrade(equipment[0], equipment[1]);
    }
  }
  function buy(item) {
    let index = inventory.indexOf(item);
    if (index === -1) {
      inventory.push(item);
    }
  }
  function trash(item) {
    let index = inventory.indexOf(item);
    if (index !== -1) {
      inventory.splice(index, 1);
    }
  }
  function repair(item) {
    let index = inventory.indexOf(item);
    if (index !== -1) {
      let buffItem = inventory[index];
      inventory.splice(index, 1);
      inventory.push(buffItem);
    }
  }
  function upgrade(item, upgrade) {
    let index = inventory.indexOf(item);
    if (index !== -1) {
      inventory.splice(index + 1, 0, `${item}:${upgrade}`);
    }
  }
  console.log(inventory.join(" "));
}
gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
console.log("======================================");
gladiatorInventory([
  "SWORD Shield Spear",
  "Trash Bow",
  "Repair Shield",
  "Upgrade Helmet-V",
]);
