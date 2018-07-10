//1. 导入http模块
var http = require("http");

//2. 创建服务器
var server = http.createServer();


//3. 监听用户的请求
server.on("request", function(req, res) {
  //一定先设置响应头，才能设置响应体
  res.setHeader("content-type", "text/html;charset=utf-8");

  //request对象的常用的属性
  res.write( req.method );
  res.write( req.url );

  res.write("哈哈哈");
  res.end();
});


//4. 启动服务器
server.listen(9999, function(){
  console.log("服务器启动成功了");
});