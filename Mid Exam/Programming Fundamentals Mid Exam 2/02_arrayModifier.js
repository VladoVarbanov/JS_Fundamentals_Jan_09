function arrayModifier(input) {
  let arrayValue = input.shift().split(" ");
  let commands = input.shift().split(" ");
  let command = commands.shift();
  let indexOne = 0;
  let indexTwo = 0;
  let temp = 0;
  while (command !== "end") {
    switch (command) {
      case "swap":
        indexOne = Number(commands.shift());
        indexTwo = Number(commands.shift());
        temp = arrayValue[indexOne];
        arrayValue[indexOne] = arrayValue[indexTwo];
        arrayValue[indexTwo] = temp;
        commands = input.shift().split(" ");
        command = commands.shift();
        break;
      case "multiply":
        indexOne = Number(commands.shift());
        indexTwo = Number(commands.shift());
        temp = arrayValue[indexOne] * arrayValue[indexTwo];
        arrayValue[indexOne] = temp;
        commands = input.shift().split(" ");
        command = commands.shift();
        break;
      case "decrease":
        for (let i = 0; i < arrayValue.length; i++) {
          arrayValue[i] -= 1;
        }
        commands = input.shift().split(" ");
        command = commands.shift();
        break;
    }
  }
  console.log(arrayValue.join(", "));
}
arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
console.log("=======================");
arrayModifier([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
