function arrayManipulator(numbers, commands) {
  for (const el of commands) {
    const token = el.split(" ");
    let command = token[0];
    let index = Number(token[1]);
    if (command === "add") {
      add(numbers, index, token[2]);
    } else if (command === "addMany") {
      numbers = addMany(numbers, index, token);
    } else if (command === "contains") {
      contains(numbers, index);
    } else if (command === "remove") {
      remove(numbers, index);
    } else if (command === "shift") {
      shift(numbers, index);
    } else if (command === "sumPairs") {
      numbers = sumPairs(numbers);
    } else if (command === "print") {
      console.log(`[ ${numbers.join(", ")} ]`);
      break;
    }
  }
  function add(array, index, element) {
    return array.splice(index, 0, Number(element));
  }
  function addMany(array, index, element) {
    element.splice(0, 2);
    for (let i = 0; i < element.length; i++) {
      array.splice(index + i, 0, Number(element[i]));
    }
    return array;
  }
  function contains(array, index) {
    return console.log(array.indexOf(index));
  }
  function remove(array, index) {
    return array.splice(index, 1);
  }
  function shift(array, count) {
    for (let i = 0; i < count; i++) {
      let buff;
      buff = array.shift();
      array.push(buff);
    }
    return array;
  }
  function sumPairs(array) {
    let newArray = [];
    while (array.length > 0) {
      if (array.length > 1) {
        let numOne = array.shift();
        let numTwo = array.shift();
        newArray.push(numOne + numTwo);
      } else {
        let numOne = array.shift();
        newArray.push(numOne + 0);
      }
    }
    return newArray;
  }
}
// arrayManipulator(
//   [1, 2, 4, 5, 6, 7],
//   ["add 1 8", "contains 1", "contains 3", "print"]
// );
// console.log("==========================================");
// arrayManipulator(
//   [1, 2, 3, 4, 5],
//   ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
// );
// console.log("==========================================");
arrayManipulator([2, 2, 4, 2, 4, 5], ["add 1 4", "sumPairs", "print"]);
