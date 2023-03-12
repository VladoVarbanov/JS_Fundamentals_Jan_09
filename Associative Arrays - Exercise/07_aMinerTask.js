function aMinerTask(arr) {
  let ores = {};
  for (let i = 0; i < arr.length; i += 2) {
    if (!ores.hasOwnProperty(arr[i])) {
      ores[arr[i]] = Number(arr[i + 1]);
    } else {
      ores[arr[i]] += Number(arr[i + 1]);
    }
  }
  for (const key in ores) {
    console.log(`${key} -> ${ores[key]}`);
  }
}
aMinerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
