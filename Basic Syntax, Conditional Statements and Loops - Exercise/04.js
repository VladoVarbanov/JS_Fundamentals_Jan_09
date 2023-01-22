function vacation(people, type, day) {
  let totalPrice = 0;
  switch (day) {
    case "Friday":
      switch (type) {
        case "Students":
          if (people >= 30) {
            totalPrice = people * 8.45 * 0.85;
          } else {
            totalPrice = people * 8.45;
          }
          break;
        case "Business":
          if (people >= 100) {
            people -= 10;
            totalPrice = people * 10.9;
          } else {
            totalPrice = people * 10.9;
          }
          break;
        case "Regular":
          if (people >= 10 && people <= 20) {
            totalPrice = people * 15 * 0.95;
          } else {
            totalPrice = people * 15;
          }
          break;

        default:
          break;
      }
      break;
    case "Saturday":
      switch (type) {
        case "Students":
          if (people >= 30) {
            totalPrice = people * 9.8 * 0.85;
          } else {
            totalPrice = people * 9.8;
          }
          break;
        case "Business":
          if (people >= 100) {
            people -= 10;
            totalPrice = people * 15.6;
          } else {
            totalPrice = people * 15.6;
          }
          break;
        case "Regular":
          if (people >= 10 && people <= 20) {
            totalPrice = people * 20 * 0.95;
          } else {
            totalPrice = people * 20;
          }
          break;

        default:
          break;
      }
      break;
    case "Sunday":
      switch (type) {
        case "Students":
          if (people >= 30) {
            totalPrice = people * 10.46 * 0.85;
          } else {
            totalPrice = people * 10.46;
          }
          break;
        case "Business":
          if (people >= 100) {
            people -= 10;
            totalPrice = people * 16;
          } else {
            totalPrice = people * 16;
          }
          break;
        case "Regular":
          if (people >= 10 && people <= 20) {
            totalPrice = people * 22.5 * 0.95;
          } else {
            totalPrice = people * 22.5;
          }
          break;

        default:
          break;
      }
      break;

    default:
      break;
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
