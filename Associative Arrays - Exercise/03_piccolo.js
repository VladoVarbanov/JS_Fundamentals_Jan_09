function piccolo(data) {
  let parking = new Set();
  for (let carData of data) {
    let [direction, carNumber] = carData.split(", ");
    if (direction === "IN") {
      parking.add(carNumber);
    } else {
      parking.delete(carNumber);
    }
  }
  let sort = Array.from(parking).sort((a, b) => a.localeCompare(b));
  if (parking.size === 0) {
    console.log("Parking Lot is Empty");
  }
  for (let carNumber of sort) {
    console.log(carNumber);
  }
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
console.log("===================================");
piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
