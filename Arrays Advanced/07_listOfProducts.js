function listOfProducts(list) {
  let newList = list.sort();
  for (let i = 0; i < newList.length; i++) {
    newList[i] = i + 1 + "." + newList[i];
  }
  return newList.join("\n");
}
console.log(listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]));
console.log("1.Apples\n2.Onions\n3.Potatoes\n4.Tomatoes");
console.log("===================");
console.log(listOfProducts(["Watermelon", "Banana", "Apples"]));
console.log("1.Apples\n2.Banana\n3.Watermelon");
