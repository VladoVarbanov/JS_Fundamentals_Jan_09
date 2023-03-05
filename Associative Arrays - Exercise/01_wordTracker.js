function worldTracer(data) {
  let result = new Map();
  let words = data.shift().split(" ");
  for (const word of words) {
    result.set(word, 0);
  }
  for (const word of data) {
    if (result.has(word)) {
      result.set(word, result.get(word) + 1);
    }
  }
  let sortArr = Array.from(result).sort((a, b) => b[1] - a[1]);
  for (let [key, value] of sortArr) {
    console.log(`${key} - ${value}`);
  }
}
worldTracer([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
worldTracer([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
