function biggestOfThreeNumbers(n1, n2, n3) {
  let nums = [n1, n2, n3];
  nums.toString();
  nums.sort((a, b) => b - a);
  console.log(nums[0]);
}
biggestOfThreeNumbers(-2, 7, 3);
