function orders(product, count) {
  let coffee = 1.5;
  let water = 1.0;
  let coke = 1.4;
  let snacks = 2.0;
  let result = 0;
  switch (product) {
    case "coffee":
      result = coffee * count;
      break;
    case "water":
      result = water * count;
      break;
    case "coke":
      result = coke * count;
      break;
    case "snacks":
      result = snacks * count;
      break;

    default:
      break;
  }
  return result.toFixed(2);
}
console.log(orders("water", 5));
console.log(orders("coffee", 2));
