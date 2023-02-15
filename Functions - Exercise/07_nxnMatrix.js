function nxnMatrix(number) {
  let arr = [];

  for (let i = 0; i < number; i++) {
    arr.push(number);
  }
  for (let i = 0; i < number; i++) {
    console.log(arr.join(" "));
  }
}
nxnMatrix(3);
nxnMatrix(7);
nxnMatrix(2);
