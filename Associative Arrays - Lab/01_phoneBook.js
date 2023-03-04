function phoneBook(input) {
  let dict = {};
  input.forEach((el) => {
    let token = el.split(" ");
    let name = token[0];
    let phone = token[1];
    dict[name] = phone;
  });

  for (const key in dict) {
    console.log(`${key} -> ${dict[key]}`);
  }
}
phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
