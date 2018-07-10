var http = require("http");
var fs = require("fs");
var path = require("path");
var mime = require("mime");


var server = http.createServer();

server.on("request", function(req, res){

  function render(page) {
    fs.readFile(path.join(__dirname, "views", page), function(err, data){
      if(err) {
        res.statusCode = 404;
        res.setHeader("content-type", "text/html;charset=utf-8");
        res.end("404,你访问的资源不存在");
        return;
      }
      res.setHeader("content-type", "text/html;charset=utf-8");
      res.end(data);
    });
  }

  //路由处理
  var url = req.url;

  if(url === "/" || url === "/index") {
    //渲染index.html
    //获取到这个页面的内容   //获取到对应的数据
    render("index.html");
  }else if(url.startsWith("/details")) {
    //渲染details.html
    render("details.html");
  }else if(url.startsWith("/submit")) {
    //渲染submit.html
    render("submit.html");
  }else if(url.startsWith("/assets")) {
    //渲染静态资源
    fs.readFile(path.join(__dirname, url), function(err, data){
      if(err) {
        res.statusCode = 404;
        res.setHeader("content-type", "text/html;charset=utf-8");
        res.end("404,你访问的资源不存在");
        return;
      }
      res.setHeader("content-type", mime.getType(url));
      res.end(data);
    });
  }else {
    //渲染404
    res.statusCode = 404;
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("404,你访问的资源不存在");
  }

});

server.listen(9999, function(){
  console.log("服务器启动成功了");
});