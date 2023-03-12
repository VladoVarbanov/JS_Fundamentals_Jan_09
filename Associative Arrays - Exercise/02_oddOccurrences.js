function oddOccurrences(text) {
  let words = text.split(" ");
  let collection = {};
  let result = [];
  collection[words[0].toLowerCase()] = 1;
  for (let i = 1; i < words.length; i++) {
    if (collection.hasOwnProperty(words[i].toLowerCase())) {
      collection[words[i].toLowerCase()] += 1;
    } else {
      collection[words[i].toLowerCase()] = 1;
    }
  }
  for (const key in collection) {
    if (!(collection[key] % 2 === 0)) {
      result.push(key);
    }
  }
  console.log(result.join(" "));
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
oddOccurrences("Cake IS SWEET is Soft CAKE sweet Food");
