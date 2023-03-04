function buildAWall(walls) {
  // 1 feet of the wall = 195 cubic yard concrete.
  // 1 cubic yard concrete = 1900 pesos.
  // Max wall height is 30.

  let daysOfWork = [];
  while (walls.length !== 0) {
    let cycles = 0;
    for (let i = 0; i < walls.length; i++) {
      if (walls[i] < 30) {
        walls[i]++;
        cycles++;
      } else {
        walls.splice(i, 1);
        i--;
      }
    }
    if (walls.length !== 0) {
      daysOfWork.push(cycles * 195);
    }
  }
  //   let sum = cycles * 195 * 1900;
  console.log(daysOfWork.join(", "));
  console.log(`${daysOfWork.reduce((a, b) => a + b, 0) * 1900} pesos`);
}
buildAWall([17, 22, 17, 19, 17]);
