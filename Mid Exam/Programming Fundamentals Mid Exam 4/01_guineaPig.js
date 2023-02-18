function guineaPig(input) {
  let food = Number(input.shift()) * 1000;
  let hay = Number(input.shift()) * 1000;
  let cover = Number(input.shift()) * 1000;
  let weight = Number(input.shift()) * 1000;
  let hasToGoToStore = false;

  for (let i = 1; i <= 30; i++) {
    food = food - 300;
    if (i % 2 === 0) {
      hay -= food * 0.05;
    }
    if (i % 3 === 0) {
      cover -= weight / 3;
    }
    if (food <= 0 || hay <= 0 || cover <= 0) {
      hasToGoToStore = true;
      break;
    }
  }
  return hasToGoToStore
    ? "Merry must go to the pet store!"
    : `Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(
        2
      )}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(
        2
      )}.`;
}
console.log(guineaPig(["10", "5", "5.2", "1"]));
console.log("===================================");
console.log(guineaPig(["1", "1.5", "3", "1.5"]));
console.log("===================================");
console.log(guineaPig(["9", "5", "5.2", "1"]));
