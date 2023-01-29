function rotateArray(array) {
  let rotation = Number(array.pop());

  for (let i = 0; i < rotation; i++) {
    let buff = array.pop();
    array.unshift(buff);
  }
  console.log(array.join(" "));
}
rotateArray(["1", "2", "3", "4", "2"]);
rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);
