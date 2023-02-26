function storeProvision(store, orderStore) {
  let myStore = {};
  for (let i = 0; i < store.length; i += 2) {
    let name = store[i];
    let quantity = store[i + 1];
    myStore[name] = Number(quantity);
  }

  for (let i = 0; i < orderStore.length; i += 2) {
    let name = orderStore[i];
    let quantity = Number(orderStore[i + 1]);
    if (myStore.hasOwnProperty(name)) {
      myStore[name] += quantity;
    } else {
      myStore[name] = quantity;
    }
  }

  for (const product of Object.keys(myStore)) {
    console.log(`${product} -> ${myStore[product]}`);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
