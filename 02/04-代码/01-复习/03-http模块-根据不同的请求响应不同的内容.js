var http = require("http");

//创建服务的同时，监听用户的请求
http.createServer(function(req, res){
  console.log(req.url);
  //localhost:9999   localhost:9999/index
  if(req.url === "/" || req.url === "/index") {
    res.end("index");
  }else if(req.url === "/list") {
    res.end("list");
  }else {
    res.end("404");
  }
}).listen(9999, function(){
  console.log("服务器启动成功了");
});