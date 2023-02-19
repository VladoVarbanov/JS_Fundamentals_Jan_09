function theHuntingGames(input) {
  // must have .toFixed(2) in the end.
  let daysOfAdventure = Number(input.shift());
  let playersNum = Number(input.shift());
  let groupEnergy = Number(input.shift());
  let waterPerDayForOne = Number(input.shift());
  let foodPerDayForOne = Number(input.shift());
  let energyLosses = input.map(Number);
  let allWater = waterPerDayForOne * playersNum * daysOfAdventure;
  let allFood = foodPerDayForOne * playersNum * daysOfAdventure;
  let days = 1;

  for (let i = 0; i < energyLosses.length; i++) {
    let foodLoses = allFood / playersNum;
    if (groupEnergy <= 0) {
      break;
    }
    groupEnergy -= energyLosses[i];
    if (days % 2 === 0) {
      if (allWater > 0) {
        groupEnergy = groupEnergy + groupEnergy * 0.05;
        allWater *= 0.7;
      }
    }
    if (days % 3 === 0) {
      if (allFood > 0) {
        groupEnergy = groupEnergy + groupEnergy * 0.1;
        allFood -= foodLoses;
      }
    }
    days++;
  }

  if (groupEnergy > 0) {
    console.log(
      `You are ready for the quest. You will be left with - ${groupEnergy.toFixed(
        2
      )} energy!`
    );
  } else {
    console.log(
      `You will run out of energy. You will be left with ${allFood.toFixed(
        2
      )} food and ${allWater.toFixed(2)} water.`
    );
  }
}
// theHuntingGames([
//   "10",
//   "7",
//   "5035.5",
//   "11.3",
//   "7.2",
//   "942.3",
//   "500.57",
//   "520.68",
//   "540.87",
//   "505.99",
//   "630.3",
//   "784.20",
//   "321.21",
//   "456.8",
//   "330",
// ]);
// console.log("=====================================");
// theHuntingGames([
//   "12",
//   "6",
//   "4430",
//   "9.8",
//   "5.5",
//   "620.3",
//   "840.2",
//   "960.1",
//   "220",
//   "340",
//   "674",
//   "365",
//   "345.5",
//   "212",
//   "412.12",
//   "258",
//   "496",
// ]);
// console.log("=====================================");
theHuntingGames([
  "10",
  "7",
  "5035.5",
  "11.3",
  "7.2",
  "942.3",
  "500.57",
  "520.68",
  "540.87",
  "505.99",
  "630.3",
  "784.20",
  "321.21",
  "456.8",
  "330",
]);
