var fs = require("fs");

//读取文件内容
//data.txt是相对路径，读取当前目录下的data.txt
//相对路径相对的是指向node命令的路径
//报错了， 在当前执行node命令的目录下查找data.txt，找不到
console.log(__dirname);
console.log(__filename);
fs.readFile(__dirname + "\\data.txt", "utf8", function(err, data) {
  if(err) {
    console.log("读取文件失败", err);
  }
  console.log(data);
});