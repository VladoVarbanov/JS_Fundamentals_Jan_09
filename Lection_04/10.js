function spiceMustFlow(startingYield) {
  let yield = 0;
  let smallYield = startingYield;
  let days = 0;

  while (startingYield >= 100) {
    yield += startingYield - 26;
    startingYield -= 10;
    days++;
  }
  if (smallYield < 26) {
    yield = 0;
  } else {
    if (yield > 0) {
      yield = yield - 26;
    } else {
      yield = smallYield - 26;
      days++;
    }
  }
  console.log(days);
  console.log(yield);
}
spiceMustFlow(25);
