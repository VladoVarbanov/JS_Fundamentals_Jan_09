function modernTimes(text) {
  let result = [];
  let words = text.split(" ").filter((x) => x.startsWith("#") && x.length > 1);

  for (let el of words) {
    let isSpecial = true;
    el = el.substring(1);
    for (let ch of el) {
      ch = ch.toLowerCase();
      if (ch.charCodeAt(0) < 97 || ch.charCodeAt(0) > 122) {
        isSpecial = false;
        break;
      }
    }
    if (isSpecial) {
      result.push(el);
    }
  }

  console.log(result.join("\n"));
}
modernTimes(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
