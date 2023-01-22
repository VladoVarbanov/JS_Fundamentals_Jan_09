function sove(params1, params2) {
  switch (params1) {
    case "Weekday":
      if (0 <= params2 && params2 <= 18) {
        console.log("12$");
      } else if (18 < params2 && params2 <= 64) {
        console.log("18$");
      } else if (64 < params2 && params2 <= 122) {
        console.log("12$");
      } else {
        console.log("Error!");
      }
      break;
    case "Weekend":
      if (0 <= params2 && params2 <= 18) {
        console.log("15$");
      } else if (18 < params2 && params2 <= 64) {
        console.log("20$");
      } else if (64 < params2 && params2 <= 122) {
        console.log("15$");
      } else {
        console.log("Error!");
      }
      break;
    case "Holiday":
      if (0 <= params2 && params2 <= 18) {
        console.log("5$");
      } else if (18 < params2 && params2 <= 64) {
        console.log("12$");
      } else if (64 < params2 && params2 <= 122) {
        console.log("10$");
      } else {
        console.log("Error!");
      }
      break;

    default:
      console.log("Error!");
      break;
  }
}
sove("Weekday", 55);
