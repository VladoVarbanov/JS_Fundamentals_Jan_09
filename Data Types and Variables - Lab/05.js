function amazingNumber(params) {
  let num = params.toString();
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }

  console.log(
    `${params} Amazing? ${sum.toString().includes("9") ? "True" : "False"}`
  );
}
amazingNumber(1233);
amazingNumber(999);
