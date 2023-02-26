function songs(data) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  let songsCount = data.shift();
  let showList = data.pop();

  for (let i = 0; i < songsCount; i++) {
    let songProperty = data[i].split("_");
    let [typeList, name, time] = songProperty;

    let theSong = new Song(typeList, name, time);
    if (theSong.typeList === showList) {
      console.log(theSong.name);
    } else if (showList === "all") {
      console.log(theSong.name);
    }
  }
}
songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
console.log("===========================");
songs([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
console.log("===========================");
songs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
