function meeting(data) {
  let schedule = {};
  for (const line of data) {
    let [day, name] = line.split(" ");
    if (!schedule.hasOwnProperty(day)) {
      schedule[day] = name;
      console.log(`Scheduled for ${day}`);
    } else {
      console.log(`Conflict on ${day}!`);
    }
  }
  for (const el of Object.keys(schedule)) {
    console.log(`${el} -> ${schedule[el]}`);
  }
}
meeting(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
console.log("==========================================");
meeting([
  "Friday Bob",
  "Saturday Ted",
  "Monday Bill",
  "Monday John",
  "Wednesday George",
]);
