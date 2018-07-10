var fs = require("fs");

// console.log(111);
// fs.readFile("2.txt", "utf8", function(err, data){
//   if(err) {
//     return console.log("读取文件失败", err);
//   }
//   console.log(data);
// });
// console.log("222");

//同步：
var result = fs.readFileSync("2.txt", "utf-8");
fs.writeFileSync("2.txt", result + "需要追加的内容");
console.log("写入成功了");