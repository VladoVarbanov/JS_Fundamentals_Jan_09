function studentInformation(params1, params2, params3) {
  let name = params1;
  let age = params2;
  let grade = params3;

  console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}
studentInformation("John", 15, 5.54678);
