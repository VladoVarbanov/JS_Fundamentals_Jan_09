function dayOfWeek(num) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (num >= 0 && num <= 6) {
    console.log(days[num - 1]);
  } else {
    console.log("Invalid day!");
  }
}
dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);
