function spiceMustFlow(startingYield) {
  let yield = startingYield - 26;
  let days = 0;
  while (startingYield >= 100) {
    startingYield -= 10;
    if (startingYield >= 100) {
      yield += startingYield - 26;
    } else {
      days++;
      break;
    }
    days++;
  }
  yield -= 26;
  console.log(days);
  console.log(yield);
}
spiceMustFlow(450);
