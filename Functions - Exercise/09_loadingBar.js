function loadingBar(input) {
  let percent = input / 10;
  let percentForLoading = 10 - percent;
  let bar = [];
  for (let i = 0; i < percent; i++) {
    bar.push("%");
  }
  for (let i = 0; i < percentForLoading; i++) {
    bar.push(".");
  }
  if (input !== 100) {
    console.log(`${input}% [${bar.join("")}]`);
    console.log("Still loading...");
  } else {
    console.log("100% Complete!");
    console.log(bar.join(""));
  }
}
loadingBar(30);
console.log("=========================");
loadingBar(50);
console.log("=========================");
loadingBar(100);
