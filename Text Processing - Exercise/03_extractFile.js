function extractFile(path) {
  let file = path.substring(path.lastIndexOf("\\") + 1);
  let lastFile = file.substring(0, file.lastIndexOf("."));
  let fileExtension = file.substring(file.lastIndexOf(".") + 1);
  console.log(`File name: ${lastFile}`);
  console.log(`File extension: ${fileExtension}`);
}
extractFile("C:\\Internal\\training-internal\\Template.pptx");
