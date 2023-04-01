function extractEmails(text) {
  let pattern =
    /(?<=\s|^)([A-Za-z0-9]+[A-Za-z0-9.\-_]*)@[a-z]+\-?[a-z]+(\.[a-z]+)+/g;

  let email = text.match(pattern);
  for (const line of email) {
    console.log(line.toString());
  }
}
extractEmails("Please contact us at: support@github.com.");
console.log("=========================");
extractEmails(
  "Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information."
);
console.log("=========================");
extractEmails(
  "Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de."
);
