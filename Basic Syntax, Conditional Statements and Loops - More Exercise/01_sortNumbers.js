function sortNumbers(a, b, c) {
  let number = [a, b, c];
  number.sort((a, b) => b - a);
  for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
  }
}
sortNumbers(2, 1, 3);
sortNumbers(0, 0, 0);
