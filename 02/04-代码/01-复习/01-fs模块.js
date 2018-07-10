//1. 导入fs模块
var fs = require("fs");
var path = require("path");


//2. 读取文件
fs.readFile( path.join(__dirname, "1.txt"), "utf8", function(err, data){
  if(err) {
    return console.log("读取文件失败了", err);
  }
  console.log(data);
});


fs.writeFile( path.join(__dirname, "1.txt"), "地上霜" ,function(err){
  if(err) {
    console.log("写文件失败了", err);
  }else {
    console.log("写文件成功了");
  }
});