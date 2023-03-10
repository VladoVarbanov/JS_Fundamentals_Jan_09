function wordOccurrences(data) {
  let words = {};
  for (const word of data) {
    if (!words.hasOwnProperty(word)) {
      words[word] = 1;
    } else {
      words[word] += 1;
    }
  }
  let sortedWords = Object.entries(words).sort((a, b) => b[1] - a[1]);
  for (const [word, count] of sortedWords) {
    console.log(`${word} -> ${count} times`);
  }
}
wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
console.log("========================================");
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);
