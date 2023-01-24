/*
function reversArrayOfNumber(n, arr) {
  let newArr = [];
  for (let i = n - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  let strArr = "";
  for (let i = 0; i < newArr.length; i++) {
    strArr += newArr[i] + " ";
  }

  console.log(strArr);
}
 */

function reversArrayOfNumber(n, arr) {
  let newArr = [];
  for (let i = n - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  console.log(newArr.join(" "));
}
reversArrayOfNumber(3, [10, 20, 30, 40, 50]);
reversArrayOfNumber(4, [-1, 20, 99, 5]);
reversArrayOfNumber(2, [66, 43, 75, 89, 47]);
