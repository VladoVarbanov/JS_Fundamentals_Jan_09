function searchForANumber(elements, commands) {
  let takeElements = commands.shift();
  let deleteElements = commands.shift();
  let searchElement = commands.shift();
  let count = 0;

  elements = elements.slice(0, takeElements);
  elements.splice(0, deleteElements);
  for (const el of elements) {
    if (el === searchElement) {
      count++;
    }
  }
  console.log(`Number ${searchElement} occurs ${count} times.`);
}
// searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
// console.log("=============================");
searchForANumber([7, 5, 5, 5, 8, 2, 7], [3, 1, 5]);
