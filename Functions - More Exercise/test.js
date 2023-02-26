function crystalOperations(input) {
  let targetThickness = input[0];
  let initialThickness = input[1];
  let operations = [];

  while (initialThickness > targetThickness) {
    let diff = initialThickness - targetThickness;

    if (diff >= 4) {
      initialThickness = cut(initialThickness);
      operations.push("cut");
    } else if (diff >= initialThickness * 0.2) {
      initialThickness = lap(initialThickness);
      operations.push("lap");
    } else if (diff >= 20) {
      initialThickness = grind(initialThickness);
      operations.push("grind");
    } else if (diff >= 2) {
      initialThickness = etch(initialThickness);
      operations.push("etch");
    } else {
      break;
    }
  }

  if (initialThickness < targetThickness) {
    initialThickness = xRay(initialThickness);
    operations.push("x-ray");
  }

  console.log(`Processing chunk ${input[1]} microns`);
  for (const op of operations) {
    console.log(
      `${op.charAt(0).toUpperCase()}${op.slice(1)} x${countOperations(
        operations,
        op
      )}`
    );
    console.log("Transporting and washing");
    initialThickness = transportAndWash(initialThickness);
  }
  console.log(`Finished crystal ${initialThickness} microns`);
  function cut(thickness) {
    return thickness / 4;
  }

  function lap(thickness) {
    return thickness * 0.8;
  }

  function grind(thickness) {
    return thickness - 20;
  }

  function etch(thickness) {
    return thickness - 2;
  }

  function xRay(thickness) {
    return thickness + 1;
  }

  function transportAndWash(thickness) {
    return Math.floor(thickness);
  }

  function countOperations(operations, op) {
    return operations.filter((o) => o === op).length;
  }
}
crystalOperations([1375, 50000]);
