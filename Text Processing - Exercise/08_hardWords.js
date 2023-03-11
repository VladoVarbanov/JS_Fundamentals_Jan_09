function hardWords(arrays) {
  let text = arrays.shift().split(" ");
  let searchingWords = arrays.shift();

  for (let i = 0; i < searchingWords.length; i++) {
    for (let j = 0; j < text.length; j++) {
      if (text[j].startsWith("_") && text[j].endsWith("_")) {
        if (text[j].length === searchingWords[i].length) {
          text[j] = searchingWords[i];
          break;
        }
      } else if (text[j].startsWith("_") && !text[j].endsWith("_")) {
        if (text[j].length - 1 === searchingWords[i].length) {
          text[j] = searchingWords[i] + text[j].slice(-1);
          break;
        }
      }
    }
  }
  console.log(text.join(" "));
}
hardWords([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
