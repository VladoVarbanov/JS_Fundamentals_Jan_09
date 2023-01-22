function distanceBetweenPoints(x1, y1, x2, y2) {
  let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  console.log(distance);
}
distanceBetweenPoints(2, 4, 5, 0);
// x = 9 - 2.449
// y = 16 - 2.828
