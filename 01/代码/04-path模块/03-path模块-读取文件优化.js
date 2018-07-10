var fs = require("fs");
var path = require("path");

//data.txt是一个相对路径，需要使用绝对路径

fs.readFile(path.join(__dirname, "data.txt"), "utf-8", function(err, data){
  if(err) {
    return console.log("读取文件失败", err);
  }
  console.log(data);
})