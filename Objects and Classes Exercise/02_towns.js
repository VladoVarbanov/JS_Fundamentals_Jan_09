function towns(data) {
  for (const line of data) {
    let city = {};
    let [name, lat, long] = line.split(" | ");
    city.town = name;
    city.latitude = Number(lat).toFixed(2);
    city.longitude = Number(long).toFixed(2);
    console.log(city);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
console.log("=======================================");
towns(["Plovdiv | 136.45 | 812.575"]);
