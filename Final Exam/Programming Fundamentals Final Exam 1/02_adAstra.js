function adAstra(text) {
  let pattern =
    /(?:#|\|)(?<name>[a-zA-Z\s]+)(?:#|\|)(?<date>\d{2}\/\d{2}\/\d{2})(?:#|\|)(?<calories>\d{1,5})(?:#|\|)/g;
  let match;
  let totalCal = 0;
  while ((match = pattern.exec(text)) !== null) {
    const itemName = match.groups.name;
    const expirationDate = match.groups.date;
    const calories = Number(match.groups.calories);
    debugger;
  }
}
adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
