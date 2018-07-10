// 访问什么文件，响应什么文件
var express = require("express");
var path = require("path");

var app = express();

//模拟apache服务器
app.use("/", function(req, res){
  //获取请求的地址
  //req.path:获取的请求的路径（不包含参数）
  //根据req.path去获取对应的内容即可。
  //直接给浏览器返回一个文件
  res.sendFile(path.join(__dirname, req.path));
});

app.listen(9999, function(){
  console.log("ok");
});