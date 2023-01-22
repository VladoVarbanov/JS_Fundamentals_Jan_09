function sortNumbers(a, b, c) {
  b;
  let num = [];
  if (a > b && a > c) {
    num[0] = a;
  } else if ((a > b && a < c) || (a > c && a < b)) {
    num[1] = a;
  } else if (a < b && a < c) {
    num[2] = a;
  }

  if (b > c && b > a) {
    num[0] = b;
  } else if ((b > c && b < a) || (b > a && b < c)) {
    num[1] = b;
  } else if (b < a && b < c) {
    num[2] = b;
  }

  if (c > a && c > b) {
    num[0] = c;
  } else if ((c > b && c < a) || (c > a && c < b)) {
    num[1] = c;
  } else if (c < a && c < b) {
    num[2] = c;
  }

  console.log(num[0]);
  console.log(num[1]);
  console.log(num[2]);
}
sortNumbers(2, 1, 3);
sortNumbers(-2, 1, 3);
