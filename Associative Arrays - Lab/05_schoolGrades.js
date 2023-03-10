function schoolGrades(data) {
  let school = {};
  for (const person of data) {
    let personData = person.split(" ");
    let name = personData.shift();
    if (!school.hasOwnProperty(name)) {
      school[name] = personData;
    } else {
      for (const el of personData) {
        school[name].push(el);
      }
    }
  }
  for (const key of Object.keys(school).sort((a, b) => a.localeCompare(b))) {
    console.log(`${key}: ${averageScore(school[key].map(Number)).toFixed(2)}`);
  }
  function averageScore(arr) {
    let average = arr.reduce((a, b) => a + b, 0) / arr.length;
    return average;
  }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
console.log("===========================");
schoolGrades(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);
