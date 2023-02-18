function theLift(input) {
  let peopleWaiting = Number(input.shift());
  let wagons = input.join().split(" ").map(Number);

  for (let i = 0; i < wagons.length; i++) {
    if (wagons[i] < 4) {
      let boardingPeople = 4 - wagons[i];
      if (peopleWaiting >= 4) {
        wagons[i] += boardingPeople;
        peopleWaiting -= boardingPeople;
      } else {
        wagons[i] += peopleWaiting;
        peopleWaiting = 0;
        break;
      }
    }
  }
  if (peopleWaiting === 0 && wagons[wagons.length - 1] === 4) {
    console.log(`${wagons.join(" ")}`);
    return;
  }
  if (peopleWaiting === 0) {
    console.log(`The lift has empty spots!\n${wagons.join(" ")}`);
  } else {
    console.log(
      `There isn't enough space! ${peopleWaiting} people in a queue!\n${wagons.join(
        " "
      )}`
    );
  }
}
theLift(["15", "0 0 0 0 0"]);
console.log("=======================");
theLift(["20", "0 2 0"]);
console.log("=======================");
theLift(["20", "0 0 0 0 0"]);
console.log("=======================");
theLift(["20", "4 4 4 4 0 0 0"]);
console.log("=======================");
theLift(["0", "4 4 4 4 0 0 0"]);
