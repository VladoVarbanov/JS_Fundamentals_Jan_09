function employees(data) {
  let obj = {};
  for (const name of data) {
    obj[name] = name.length;
  }

  for (const key of Object.keys(obj)) {
    console.log(`Name: ${key} -- Personal Number: ${obj[key]}`);
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
console.log("===========================");
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
