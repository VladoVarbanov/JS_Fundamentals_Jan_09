function primeNumberChecker(num) {
  let checker = 0;
  if (num < 2) {
    checker = false;
    console.log(checker);
    return;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      checker = false;
      console.log(checker);
      return;
    }
  }
  checker = true;
  console.log(checker);
}
primeNumberChecker(21);
