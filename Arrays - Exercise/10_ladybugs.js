function ladybugs(input) {
  let fieldSize = input[0];
  let initialPosition = input[1].split(" ");
  // new Array(fieldSize) - create new array with length (fieldSize)
  //.fill(0) - filling the entire length of the array with 0.
  let field = new Array(fieldSize).fill(0);
  // Taking and placing the ladybugs in the field.
  for (let i = 0; i < initialPosition.length; i++) {
    let index = Number(initialPosition[i]);
    // Checking if the ladybugs are not outside of the field.
    if (index >= 0 && index < fieldSize) {
      field[index] = 1;
    }
  }
  // Moving the ladybugs.
  for (let i = 2; i < input.length; i++) {
    // Splitting input array to take see witch ladybug must go where.
    let movesInArray = input[i].split(" ");
    let startPosition = Number(movesInArray[0]);
    let direction = movesInArray[1];
    let stepToMove = Number(movesInArray[2]);
    // Taking the ladybug from her place.
    if (field[startPosition] === 1) {
      field[startPosition] = 0;
      let currentPosition = startPosition;
      // Checking if the new position on the ladybug is in the field.
      while (currentPosition >= 0 && currentPosition < fieldSize) {
        // Making a decision on what direction to take(left or right).
        currentPosition += direction === "right" ? stepToMove : -stepToMove;
        // Placing the ladybug on the field.
        if (field[currentPosition] === 0) {
          field[currentPosition] = 1;
          break;
        }
      }
    }
  }
  console.log(field.join(" "));
}
ladybugs([3, "0 1", "0 right 1", "2 right 1"]);
console.log("===========================");
ladybugs([3, "0 1 2", "0 right 1", "1 right 1", "2 right 1"]);
console.log("===========================");
ladybugs([5, "3", "3 left 2", "1 left -2"]);
/*
function ladybugs(input) {
  let fieldSize = input[0];
  let initialPosition = input[1].split(" ");
  let field = [];
  for (let i = 0; i < fieldSize; i++) {
    for (let j = 0; j < initialPosition.length; j++) {
      if (Number(initialPosition[j]) === i) {
        field[i] = 1;
        break;
      } else {
        field[i] = 0;
      }
    }
  }
  for (let i = 2; i < input.length; i++) {
    let movesInArray = input[i].split(" ");
    let startPosition = Number(movesInArray[0]);
    let direction = movesInArray[1];
    let stepToMove = Number(movesInArray[2]);
    let stepAmount = 0;
    if (direction === "right") {
      stepAmount = startPosition + stepToMove;
    } else if (direction === "left") {
      stepAmount = startPosition - stepToMove;
    }
    if (field[startPosition] === 1) {
      field[startPosition] = 0;
      for (let j = stepAmount; j < fieldSize && j >= 0; j += stepToMove) {
        if (field[j] === 0) {
          field[j] = 1;
          break;
        }
      }
    }
  }

  console.log(field.join(" "));
}
*/
