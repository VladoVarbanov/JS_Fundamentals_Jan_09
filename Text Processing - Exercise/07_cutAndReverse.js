function cutAndReverse(text) {
  let firstHalf = text.substring(0, text.length / 2).split("");
  let secondHalf = text.substring(text.length / 2, text.length).split("");
  console.log(firstHalf.reverse().join(""));
  console.log(secondHalf.reverse().join(""));
}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
