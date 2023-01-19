function ages(params) {
  if (params >= 0 && params <= 2) {
    console.log("baby");
  } else if (params >= 3 && params <= 13) {
    console.log("child");
  } else if (params >= 14 && params <= 19) {
    console.log("teenager");
  } else if (params >= 20 && params <= 65) {
    console.log("adult");
  } else if (params >= 66) {
    console.log("elder");
  } else {
    console.log("out of bounds");
  }
}
ages(20);
ages(1);
ages(100);
ages(-1);
