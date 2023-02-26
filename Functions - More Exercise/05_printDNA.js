function printDNA(dnaLength) {
  let isUp = false;
  let countLines = 2;
  let starCount = 2;
  let lineCount = 0;
  let dna = "ATCGTTAGGG";
  let dnaIndex = 0;
  let dnaLineOutput = [];
  let dnaStructure = [];

  for (let i = 0; i < dnaLength; i++) {
    createDnaLine(starCount, lineCount);
    if (isUp) {
      lineCount -= 2;
      starCount++;
    } else {
      lineCount += 2;
      starCount--;
    }
    if (!isUp) {
      countLines--;
      if (countLines === 0) {
        isUp = true;
      }
    } else {
      countLines++;
      if (countLines === 2) {
        isUp = false;
      }
    }
  }

  function createDnaLine(starCount, lineCount) {
    starSymbol(starCount);
    dnaChromosome(dnaIndex, 1);
    dnaIndex++;
    lineSymbol(lineCount);
    dnaChromosome(dnaIndex, 1);
    dnaIndex++;
    starSymbol(starCount);
    let tempArr = [];
    tempArr = [...dnaLineOutput];
    dnaStructure.push(tempArr);
    dnaLineOutput = [];
    if (dnaIndex === dna.length) {
      dnaIndex = 0;
    }
  }

  function starSymbol(count) {
    for (let i = 0; i < count; i++) {
      dnaLineOutput.push("*");
    }
  }
  function dnaChromosome(dnaIndex, count) {
    for (let i = 0; i < count; i++) {
      dnaLineOutput.push(dna[dnaIndex]);
      dnaIndex++;
    }
  }
  function lineSymbol(count) {
    for (let i = 0; i < count; i++) {
      dnaLineOutput.push("-");
    }
  }

  // Output the result.
  for (let i = 0; i < dnaStructure.length; i++) {
    console.log(dnaStructure[i].join(""));
  }
}
// printDNA(6);
// console.log("========================");
printDNA(20);
