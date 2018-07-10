/* 
  path也是node中的一个核心模块，使用前需要先导入

*/
var path = require("path");

//var result = path.join("abc", "def", "gg", "a.html");
//console.log(result);
var path = require("path");
var temp = "abc\\def\\gg\\a.html";
console.log(path.basename(temp));//a.html
console.log(path.dirname(temp));//abc\def\gg
console.log(path.extname(temp));//.html
