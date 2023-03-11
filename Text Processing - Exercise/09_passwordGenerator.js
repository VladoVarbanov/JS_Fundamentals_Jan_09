function passwordGenerator(array) {
  let text = (array[0] + array[1]).split("");
  let password = array[2];
  let index = 0;
  //   let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        if (index > password.length - 1) {
          index = 0;
        }
        text[i] = password[index].toUpperCase();
        index++;
        break;
    }
  }
  console.log(`Your generated password is ${text.reverse().join("")}`);
}
passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);
