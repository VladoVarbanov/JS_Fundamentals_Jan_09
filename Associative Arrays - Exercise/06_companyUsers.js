function companyUsers(list) {
  let companies = {};
  for (const company of list) {
    let companyList = company.split(" -> ");
    let companyName = companyList[0];
    let employee = companyList[1];
    if (companies.hasOwnProperty(companyName)) {
      if (companies[companyName].indexOf(employee)) {
        companies[companyName].push(employee);
      }
    } else {
      companies[companyName] = [];
      companies[companyName].push(employee);
    }
  }
  let companiesArr = Object.entries(companies);
  companiesArr.sort((a, b) => a[0].localeCompare(b[0]));

  for (let i = 0; i < companiesArr.length; i++) {
    console.log(companiesArr[i][0]);
    let names = companiesArr[i];
    for (let j = 0; j < companiesArr[i][1].length; j++) {
      console.log(`-- ${names[1][j]}`);
    }
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
