function spiceMustFlow(startingYield) {
  // let yield = 0;
  // let smallYield = startingYield;
  // let days = 0;

  // while (startingYield >= 100) {
  //   yield += startingYield - 26;
  //   startingYield -= 10;
  //   days++;
  // }
  // if (smallYield < 26) {
  //   yield = 0;
  // } else {
  //   if (yield > 0) {
  //     yield = yield - 26;
  //   } else {
  //     yield = smallYield - 26;
  //     days++;
  //   }
  // }
  // console.log(days);
  // console.log(yield);

  let totalSpice = 0;
  let days = 0;
  let yieldPerDay = startingYield;
  while (yieldPerDay >= 100) {
    days++;
    totalSpice += yieldPerDay;
    yieldPerDay -= 10;
    totalSpice -= 26;
  }
  totalSpice -= 26;
  if (totalSpice < 0) {
    totalSpice = 0;
  }
  console.log(days);
  console.log(totalSpice);
}
spiceMustFlow(111);
