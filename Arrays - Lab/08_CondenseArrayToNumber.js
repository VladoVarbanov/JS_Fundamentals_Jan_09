function condenseArrayToNumber(params) {
  if (params.length === 1) {
    console.log(Number(params));
    return;
  }
  while (params.length - 1 > 0) {
    let condense = [];
    for (let i = 0; i < params.length - 1; i++) {
      condense[i] = params[i] + params[i + 1];
    }
    params = condense;
  }

  console.log(Number(params));
}
condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1]);
