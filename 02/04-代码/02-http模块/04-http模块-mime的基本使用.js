var mime = require("mime");

console.log(mime.getType("aa/bb/1.txt"));
console.log(mime.getType("html"));
console.log(mime.getType("css"));
console.log(mime.getType("js"));
console.log(mime.getType("png"));
console.log(mime.getType("jpg"));

console.log(mime.getExtension("text/html"));