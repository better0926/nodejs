var fs = require("fs");


console.log(1111);
fs.readFile("data.txt", "utf8",function(err, data){
  if(err) {
    return console.log("读取文件失败了,错误信息是",err);
  }
  console.log(data);
});

console.log(222);