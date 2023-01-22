function rounding(params1, params2) {
  if (params2 <= 15) {
    console.log(parseFloat(params1.toFixed(params2)));
  } else {
    console.log(parseFloat(params1.toFixed(15)));
  }
}
rounding(3.1415926535897932384626433832795, 5);
rounding(10.5, 3);
rounding(10.5, 16);
