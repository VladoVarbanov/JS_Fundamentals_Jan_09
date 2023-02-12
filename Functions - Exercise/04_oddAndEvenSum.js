function oddAndEvenSum(num) {
  let oddSum = 0;
  let evenSum = 0;

  let numString = num.toString();
  let numArray = [];
  for (const el of numString) {
    numArray.push(Number(el));
  }
  oddSum = summingOddNumbers(numArray);
  evenSum = summingEvenNumbers(numArray);

  function summingOddNumbers(numbers) {
    let sum = 0;
    for (const el of numbers) {
      if (el % 2 !== 0) {
        sum += el;
      }
    }
    return sum;
  }

  function summingEvenNumbers(numbers) {
    let sum = 0;
    for (const el of numbers) {
      if (el % 2 === 0) {
        sum += el;
      }
    }
    return sum;
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
console.log("==============");
oddAndEvenSum(3495892137259234);
