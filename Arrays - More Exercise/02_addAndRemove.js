function addAndRemove(array) {
  let modifyArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "add") {
      modifyArray.push(i + 1);
    } else {
      modifyArray.pop();
    }
  }
  if (modifyArray.length > 0) {
    console.log(modifyArray.join(" "));
  } else {
    console.log("Empty");
  }
}
addAndRemove(["add", "add", "add", "add"]);
console.log("===================");
addAndRemove(["add", "add", "remove", "add", "add"]);
console.log("===================");
addAndRemove(["remove", "remove", "remove"]);
