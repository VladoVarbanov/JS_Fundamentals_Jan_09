function arrayOfManipulation(array) {
  let newArray = array
    .shift()
    .split(" ")
    .map((el) => Number(el));
  for (let i = 0; i < array.length; i++) {
    let commands = array[i].split(" ");

    switch (commands[0]) {
      case "Add":
        add(commands[1]);
        break;
      case "Remove":
        remove(commands[1]);
        break;
      case "RemoveAt":
        removeAt(commands[1]);
        break;
      case "Insert":
        insert(commands[1], commands[2]);
        break;

      default:
        break;
    }
  }
  return newArray.join(" ");

  function add(num) {
    newArray.push(Number(num));
  }

  function remove(num) {
    let number = Number(num);
    newArray = newArray.filter((el) => el !== number);
  }

  function removeAt(index) {
    newArray.splice(index, 1);
  }

  function insert(num, index) {
    newArray.splice(index, 0, num);
  }
}
console.log(
  arrayOfManipulation([
    "4 19 2 53 6 43",
    "Add 3",
    "Remove 2",
    "RemoveAt 1",
    "Insert 8 3",
  ])
);
console.log("4 53 6 8 43 3");
console.log("=====================");
console.log(
  arrayOfManipulation([
    "6 12 2 65 6 42",
    "Add 8",
    "Remove 12",
    "RemoveAt 3",
    "Insert 6 2",
  ])
);
console.log("6 2 6 65 42 8");
