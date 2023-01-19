function sortNumbers(params) {
  let a = [];

  if (params[0] > params[1] && params[0] > params[2]) {
    a[0] = params[0];
  } else if (
    (params[0] > params[1] && params[0] < params[2]) ||
    (params[0] > params[2] && params[0] < params[1])
  ) {
    a[1] = params[0];
  } else if (params[0] < params[1] && params[0] < params[2]) {
    a[2] = params[0];
  }

  if (params[1] > params[2] && params[1] > params[0]) {
    a[0] = params[1];
  } else if (
    (params[1] > params[2] && params[1] < params[0]) ||
    (params[1] > params[0] && params[1] < params[2])
  ) {
    a[1] = params[1];
  } else if (params[1] < params[0] && params[1] < params[2]) {
    a[2] = params[1];
  }

  if (params[2] > params[0] && params[2] > params[1]) {
    a[0] = params[2];
  } else if (
    (params[2] > params[1] && params[2] < params[0]) ||
    (params[2] > params[0] && params[2] < params[1])
  ) {
    a[1] = params[2];
  } else if (params[2] < params[0] && params[2] < params[1]) {
    a[2] = params[2];
  }
  let b = a;

  console.log(b[0]);
  console.log(b[1]);
  console.log(b[2]);
}
sortNumbers([2, 1, 3]);
sortNumbers([-2, 1, 3]);
