function requiredReading(numOfPages, pageReadePerHour, days) {
  let hours = numOfPages / pageReadePerHour / days;
  console.log(hours);
}
requiredReading(212, 20, 2);
requiredReading(432, 15, 4);
