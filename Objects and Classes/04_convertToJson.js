function convertToJson(firstName, lastName, hairColor) {
  let info = {
    name: firstName,
    lastName: lastName,
    hairColor: hairColor,
  };

  console.log(JSON.stringify(info));
}
convertToJson("George", "Jones", "Brown");
