function softUniBarIncome(data) {
  let pattern =
    /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+.?\d*)\$/;
  let total = 0;

  for (let line of data) {
    let match = [];
    if (line === "end of shift") {
      break;
    }
    if (pattern.test(line)) {
      match = line.match(pattern);
      let sum = Number(match.groups["count"]) * Number(match.groups["price"]);
      //   debugger;
      console.log(
        `${match.groups.name}: ${match.groups.product} - ${sum.toFixed(2)}`
      );
      total += sum;
    }
  }
  console.log(`Total income: ${total.toFixed(2)}`);
}
softUniBarIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);

console.log("===========================");
softUniBarIncome([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Valid>valid|10|valid20$",
  "end of shift",
]);
