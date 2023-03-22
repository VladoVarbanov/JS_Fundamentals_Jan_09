function race(data) {
  let participants = {};
  let participantsInputArr = data.shift().split(", ");
  let patternName = /[A-Za-z]/g;
  let patternDistance = /[0-9]/g;

  for (const participant of participantsInputArr) {
    participants[participant] = 0;
  }
  for (const line of data) {
    if (line === "end of race") {
      break;
    }
    let name = line.match(patternName).join("");
    let distance = line.match(patternDistance);
    let tempDistance = 0;
    for (const el of distance) {
      tempDistance += Number(el);
    }
    if (participants.hasOwnProperty(name)) {
      participants[name] += tempDistance;
    }
  }
  let sortArr = Object.entries(participants).sort((a, b) => b[1] - a[1]);
  //   console.table(sortArr);
  console.log(`1st place: ${sortArr[0][0]}`);
  console.log(`2nd place: ${sortArr[1][0]}`);
  console.log(`3rd place: ${sortArr[2][0]}`);
}
race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
