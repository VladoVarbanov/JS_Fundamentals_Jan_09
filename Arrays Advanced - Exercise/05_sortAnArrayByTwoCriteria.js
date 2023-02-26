function sortAnArrayByTwoCriteria(params) {
  for (let i = 0; i < params.length - 1; i++) {
    // let a = params[i].length;
    // let b = params[i + 1].length;
    params.sort(comparison);
  }

  function comparison(a, b) {
    if (a.length !== b.length) {
      return a.length - b.length;
    }
    return a.localeCompare(b, "en", { sensitivity: "base" });
  }
  console.log(params.join("\n"));
}
sortAnArrayByTwoCriteria(["alpha", "beta", "gamma"]);
console.log("==============================");
sortAnArrayByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
console.log("==============================");
sortAnArrayByTwoCriteria(["test", "Deny", "omen", "Default"]);
