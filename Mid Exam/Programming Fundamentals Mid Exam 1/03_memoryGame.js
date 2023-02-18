function memoryGame(input) {
  let sequence = input.shift().split(" ");
  let index = 0;
  let moves = 0;
  while (input[index] !== "end") {
    let elements = input[index].split(" ");
    let elementOne = Number(elements[0]);
    let elementTwo = Number(elements[1]);
    let middleIndex = Math.ceil(sequence.length / 2);
    if (
      elementOne === elementTwo ||
      elementOne < 0 ||
      elementOne > sequence.length - 1 ||
      elementTwo < 0 ||
      elementTwo > sequence.length - 1
    ) {
      moves++;
      sequence.splice(middleIndex, 0, `-${moves}a`, `-${moves}a`);
      console.log("Invalid input! Adding additional elements to the board");
    } else {
      moves++;
      if (sequence[elementOne] === sequence[elementTwo]) {
        console.log(
          `Congrats! You have found matching elements - ${sequence[elementOne]}!`
        );
        if (elementOne > elementTwo) {
          sequence.splice(elementOne, 1);
          sequence.splice(elementTwo, 1);
        } else {
          sequence.splice(elementTwo, 1);
          sequence.splice(elementOne, 1);
        }
      } else {
        console.log("Try again!");
      }
    }
    if (sequence.length === 0) {
      console.log(`You have won in ${moves} turns!`);
      break;
    }
    index++;
  }
  if (sequence.length > 0) {
    console.log("Sorry you lose :(");
    console.log(sequence.join(" "));
  }
}
// memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
// console.log("===================================");
// memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
// console.log("======================");
// memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
// console.log("======================");
memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "1 0", "0 0", "1 0", "1 0", "end"]);
