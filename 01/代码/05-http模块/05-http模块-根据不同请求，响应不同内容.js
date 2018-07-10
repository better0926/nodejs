var http = require("http");

var server = http.createServer();

/* 
  如果用户访问的是 /index, 响应： 你正在访问的首页
  如果用户访问的是 /details， 响应：你正在访问详情页
  如果用户访问的是 /list, 响应你正在访问的是列表页
*/
server.on("request", function(req, res) {
  res.setHeader("content-type", "text/html;charset=utf-8");
  if(req.url === "/index"){
    res.end("你现在访问的是首页");
  }else if(req.url === "/details") {
    res.end("你现在访问的是详情页");
  }else if(req.url === "/list") {
    res.end("你现在访问的列表页");
  }else {
    //提示404
    res.statusCode = 404;
    res.end("你访问的页面不存在");
  }
});


server.listen(9999, function() {
  console.log("服务器启动成功，请访问：http://localhost:9999");
});
