function chessBoard(n) {
  let colorIndex = 1;
  let switchColors = n;
  console.log(`<div class="chessboard">`);
  for (let i = 0; i < n; i++) {
    console.log(" ", "<div>");

    for (let j = 0; j < n; j++) {
      if (colorIndex % 2 === 0) {
        console.log(" ".repeat(3), '<span class="white"></span>');
      } else {
        console.log(" ".repeat(3), '<span class="black"></span>');
      }
      colorIndex++;
    }
    if (n % 2 === 0) {
      colorIndex++;
    }
    console.log(" ", "</div>");
  }
  console.log("</div>");
}
chessBoard(3);
