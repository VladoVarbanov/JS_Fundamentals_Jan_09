function negativeOrPositive(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let element = Number(arr[i]);
    if (element < 0) {
      result.unshift(element);
    } else {
      result.push(element);
    }
  }
  return result.join("\n");
}
console.log(negativeOrPositive(["7", "-2", "8", "9"]));
