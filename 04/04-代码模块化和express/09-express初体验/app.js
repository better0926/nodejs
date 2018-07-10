//1. 导入express模块
var express = require("express");

//2. 创建一个express的应用  相当于创建一个服务器
// http.createServer()
var app = express();

//3. 监听用户的请求
//即便没有处理用户的请求，也会提示
//参数1：url
//参数2：监听url要做什么
app.get("/index", function(req, res){
  //res.end("哈哈");
  //express提供的一个方法，给浏览器发送响应
  //会自动帮我们设置content-type以及编码
  res.send("哈哈");
});

app.get("/details", function(req, res) {
  res.send("这是详情页");
});

app.post("/add", function(req, res) {
  res.send("这是post方式的请求");
})

//4. 监听一个端口，启动服务器
app.listen(9999, function(){
  console.log("express的服务器启动了");
});