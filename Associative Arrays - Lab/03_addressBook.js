function addressBook(data) {
  let addressBook = {};
  for (const line of data) {
    let [name, address] = line.split(":");
    addressBook[name] = address;
  }
  //.sort((a, b) => a[0].localeCompare(b[0]));
  let sort = Object.entries(addressBook).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  for (const key of sort) {
    console.log(`${key[0]} -> ${key[1]}`);
  }
}
addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
console.log("==============================");
addressBook([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",
  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);
