function evenAndOddSubtraction(params) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < params.length; i++) {
    if (params[i] % 2 === 0) {
      even += params[i];
    } else {
      odd += params[i];
    }
  }
  console.log(even - odd);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
evenAndOddSubtraction([2, 4, 6, 8, 10]);
