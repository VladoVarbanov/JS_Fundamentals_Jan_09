function formatGrade(grade) {
  let gradeText = "";
  if (grade < 3) {
    gradeText = "Fail";
  } else if (grade < 3.5) {
    gradeText = "Poor";
  } else if (grade < 4.5) {
    gradeText = "Good";
  } else if (grade < 5.5) {
    gradeText = "Very good";
  } else if (grade < 6) {
    gradeText = "Excellent";
  }

  let gradeValueText = grade < 3 ? "2" : grade.toFixed(2);
  console.log(`${gradeText} (${gradeValueText})`);
}
formatGrade(3.33);
formatGrade(4.5);
formatGrade(2.99);
