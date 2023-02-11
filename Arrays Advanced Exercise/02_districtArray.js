function districtArray(arr) {
  let uniqArr = [];
  for (const el of arr) {
    if (uniqArr.indexOf(el) === -1) {
      uniqArr.push(el);
    }
  }
  return uniqArr.join(" ");
}

console.log(districtArray([7, 8, 9, 7, 2, 3, 4, 1, 2]));
