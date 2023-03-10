class Storage {
  constructor(capacity) {
    this.capacity = capacity;
    this.storage = {};
    this.totalCost = 0;
  }

  addProduct(product) {
    if (this.capacity >= product.quantity) {
      if (!this.storage[product.name]) {
        this.storage[product.name] = product;
      } else {
        this.storage[product.name].quantity += product.quantity;
        this.storage[product.name].price += product.price;
      }
      this.capacity -= product.quantity;
      this.totalCost +=
        this.storage[product.name].price * this.storage[product.name].quantity;
    }
  }

  getProducts() {
    const productsArray = Object.values(this.storage);
    const productsJSON = productsArray
      .map((product) => JSON.stringify(product))
      .join("\n");
    return productsJSON;
  }
}

let productOne = { name: "Cucamber", price: 1.5, quantity: 15 }; // 15 , 56.8
let productTwo = { name: "Tomato", price: 0.9, quantity: 25 };
let productThree = { name: "Bread", price: 1.1, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log("====================");
productOne.name = "baba"; // 15 , 56.8
console.log(productOne);
console.log("====================");
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);

// let productOne = { name: "Tomato", price: 0.9, quantity: 19 };
// let productTwo = { name: "Potato", price: 1.1, quantity: 10 };
// let storage = new Storage(30);
// storage.addProduct(productOne);
// storage.addProduct(productTwo);
// console.log(storage.totalCost);
