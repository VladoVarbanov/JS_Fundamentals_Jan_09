function degustationParty(arr) {
  class Customer {
    constructor(name) {
      this.name = name;
      this.product = [];
    }
  }

  let dislikes = 0;
  let guests = [];
  let likes = {};
  for (const line of arr) {
    let commands = line.split("-");
    if (commands[0] === "Stop") {
      break;
    }
    let listType = commands[0];
    let name = commands[1];
    let product = commands[2];
    //LIKE
    if (listType === "Like") {
      if (checkName(guests, name)) {
        for (const el of guests) {
          if (el.name === name) {
            el.product.push(" " + product);
          }
        }
      } else {
        guests.push(new Customer(name));
        for (const el of guests) {
          if (el.name === name) {
            el.product.push(product);
          }
        }
      }
      // DISLIKE
    } else {
      if (!checkName(guests, name)) {
        console.log(`${name} is not at the party.`);
      } else if (!checkProduct(guests, product)) {
        console.log(
          `${name} doesn't have the ${product} in his/her collection.`
        );
      } else {
        console.log(`${name} doesn't like the ${product}.`);
        let index = checkForIndex(guests, name);
        let productIndex = guests[index].product.indexOf(product);
        guests[index].product.splice(productIndex, 1);
        dislikes++;
      }
    }
  }
  for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i].name}: ${guests[i].product}`);
  }
  console.log(`Unliked meals: ${dislikes}`);

  function checkName(array, name) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].name === name) {
        return true;
      } else {
        return false;
      }
    }
  }
  function checkForIndex(array, name) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].name === name) {
        return i;
      }
    }
  }
  function checkProduct(array, name) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].product.length > 1) {
        for (let j = 0; j < array[i].product.length; j++) {
          let test = array[i].product[j];
          if (array[i].product[j].includes(name)) {
            return true;
          }
        }
      } else {
        if (array[i].product.includes(name)) {
          return true;
        } else {
          return false;
        }
      }
    }
    return false;
  }
}
// degustationParty([
//   "Like-Krisi-shrimps",
//   "Like-Krisi-soup",
//   "Like-Penelope-dessert",
//   "Like-Misho-salad",
//   "Stop",
// ]);
// console.log("==========================");
// degustationParty([
//   "Like-Krisi-shrimps",
//   "Dislike-Vili-carp",
//   "Dislike-Krisi-salad",
//   "Stop",
// ]);
// console.log("==========================");
degustationParty([
  "Like-Katy-shrimps",
  "Like-Katy-fish",
  "Dislike-Katy-fish",
  "Stop",
]);
