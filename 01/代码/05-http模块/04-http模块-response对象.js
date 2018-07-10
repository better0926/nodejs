//1. 导入http模块，http模块是node的核心模块，作用是用来创建http服务器的。
var http = require("http");

//2. 创建服务器
var count = 0;
var server = http.createServer();

//3. 服务器处理请求
// 给服务器注册了 request 事件 （网络请求的事件）
// 只要接收到了请求， function就会执行

//function有两个参数，
  // request是请求对象，可以获取到所有的请求信息 
  // response是响应对象，可以给用户响应
server.on("request", function(req, res) {
 
  //res.setHeader("content-type", "text/html;charset=utf-8");
  res.writeHead(200, {
    "content-type":"text/html;charset=utf-8"
  });
  res.write("hello world");
  res.end("1111");

  
});

//4. 启动服务器，监听某个端口
//参数1：端口号  范围0-65535 但是我们不要使用3000以下的端口
// 因为3000以下的端口一般都是给系统使用的。
//参数2：回调函数
server.listen(9999, function(){
  console.log("服务器启动成功了, 请访问： http://localhost:9999");
});