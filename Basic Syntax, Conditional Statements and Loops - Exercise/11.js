function bitcoinMining(goldPerShifts) {
  let earnMoney = 0;
  let bitcoins = 0;
  let bitcoinDay = 0;
  let day = 1;
  for (let i = 0; i < goldPerShifts.length; i++) {
    if (day % 3 === 0) {
      goldPerShifts[i] = goldPerShifts[i] * 0.7;
    }
    earnMoney += goldPerShifts[i] * 67.51;
    for (let j = earnMoney; j >= 11949.16; j -= 11949.16) {
      earnMoney -= 11949.16;
      bitcoins++;
      if (bitcoinDay === 0) {
        bitcoinDay = day;
      }
    }
    day++;
  }
  console.log(`Bought bitcoins: ${bitcoins}`);
  if (bitcoins > 0) {
    console.log(`Day of the first purchased bitcoin: ${bitcoinDay}`);
  }
  console.log(`Left money: ${earnMoney.toFixed(2)} lv.`);
}
// bitcoinMining([100, 200, 300]);
// console.log("========================");
// bitcoinMining([50, 100]);
// console.log("========================");
bitcoinMining([3124.15, 504.212, 2511.124]);
