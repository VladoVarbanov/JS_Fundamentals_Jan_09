function thePyramid(base, increment) {
  let stone = 0;
  let marble = 0;
  let lapisLazuli = 0;
  let gold = 0;
  let layer = 1;

  for (let i = base; i > 0; i -= 2) {
    let tempstone = i * i - (i - 1) * 4;
    // Checking for Stone or Gold.
    if (i > 1 && i !== 2) {
      stone += tempstone * increment;
    } else {
      gold = i * i * increment;
      break;
    }
    // Checking for Lapis Lazuli or Marble.
    if (layer % 5 === 0) {
      lapisLazuli += (i - 1) * 4 * increment;
    } else {
      marble += (i - 1) * 4 * increment;
    }
    layer++;
  }

  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(layer * increment)}`);
}
thePyramid(12, 1);
