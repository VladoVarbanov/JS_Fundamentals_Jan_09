/*
Volume of a cone:
V = (1/3)πr2h
Slant height of a cone:
s = √(r2 + h2)
Lateral surface area of a cone:
L = πrs = πr√(r2 + h2)
Base surface area of a cone (a circle):
B = πr2
Total surface area of a cone:
A = L + B = πrs + πr2 = πr(s + r) = πr(r + √(r2 + h2))
*/
function cone(radius, height) {
  let volume = (1 / 3) * Math.PI * radius * radius * height;
  let area =
    Math.PI * radius * (radius + Math.sqrt(radius * radius + height * height));
  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${area.toFixed(4)}`);
}
cone(3, 5);
