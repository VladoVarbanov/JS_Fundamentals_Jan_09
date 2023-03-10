function createObjects(params) {
  let createdObject = {};
  for (const element of params) {
    createdObject[element.name] = element;
  }
  return createdObject;
}

let cars = [
  { name: "Cucamber", price: 1.5, quantity: 15 },
  { name: "Tomato", price: 0.9, quantity: 25 },
  { name: "Bread1", price: 1.1, quantity: 8 },
  { name: "Bread2", price: 1.1, quantity: 8 },
  { name: "Bread3", price: 1.1, quantity: 8 },
  { name: "Bread4", price: 1.1, quantity: 8 },
  { name: "Bread5", price: 1.1, quantity: 8 },
  { name: "Bread6", price: 1.1, quantity: 8 },
];
// createObjects(cars);
let newCar = createObjects(cars);
cars[0].name = "baba";
console.log("=============cars==============");
console.table(cars);
console.log("=============new cars==============");
console.table(newCar);
newCar = createObjects(cars);
console.log("===========================");
console.table(newCar);

// function createObjects(params) {
//   let createdObject = {};
//   for (const element of params) {
//     createdObject[element.name] = element;
//   }
//   console.table(createdObject);
// }

// let cars = [
//   { name: "Cucamber", price: 1.5, quantity: 15 },
//   { name: "Tomato", price: 0.9, quantity: 25 },
//   { name: "Bread", price: 1.1, quantity: 8 },
// ];
// createObjects(cars);
