function partyTime(list) {
  let vipGuests = [];
  let guests = [];
  let count = 0;
  let index = 0;
  while (list[index] !== "PARTY") {
    if (!isNaN(list[index][0])) {
      vipGuests.push(list[index]);
    } else {
      guests.push(list[index]);
    }

    index++;
  }
  index++;
  for (let i = index; i < list.length; i++) {
    let word = list[i];
    if (!isNaN(list[i][0])) {
      vipGuests.splice(vipGuests.indexOf(word), 1);
    } else {
      guests.splice(guests.indexOf(word), 1);
    }
  }
  count = vipGuests.length + guests.length;
  console.log(count);
  for (const key of vipGuests) {
    console.log(key);
  }
  for (const key of guests) {
    console.log(key);
  }
}
partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
console.log("===========================");
partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
