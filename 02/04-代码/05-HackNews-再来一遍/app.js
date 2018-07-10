/* 
    //路由规则
      localhost:9999/  localhost:9999/index    index.html
      localhost:9999/details?1111              details.html
      localhost:9999/submit                    submit.html
      localhost:9999/assets/xxxx  静态          请求了啥，响应啥
      其他url                                  404
*/
var http = require("http");
var fs = require('fs');
var path = require("path");
var mime = require("mime");

var server = http.createServer();

server.on("request", function(req, res){

  function render(page) {
   
    fs.readFile(path.join(__dirname, "views", page), function(err, data){
      if(err) {
        //渲染404页面
        res.statusCode = 404;
        res.setHeader("content-type", "text/html;charset=utf-8");
        res.end("404, 你请求的页面不存在");
        return;
      }
      res.setHeader("content-type", "text/html;charset=utf-8");
      res.end(data);
    });
  }

  var url = req.url;
  console.log(url);
  if(url === "/" || url === "/index") {
     //渲染index.html
    render("index.html");
  }else if(url.startsWith("/details")){
    //渲染details.html
    render("details.html");
  }else if(url.startsWith("/submit")) {
    //渲染submit.html
    render("submit.html");
  }else if(url.startsWith("/assets")) {
    //渲染静态资源
    fs.readFile(path.join(__dirname, url), function(err, data){
      if(err) {
        //渲染404页面
        res.statusCode = 404;
        res.setHeader("content-type", "text/html;charset=utf-8");
        res.end("404, 你请求的页面不存在");
        return;
      }
      res.setHeader("content-type", mime.getType(url));
      res.end(data);
    });
  }else {
    //渲染404页面
    res.statusCode = 404;
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("404, 你请求的页面不存在");
  }

});


server.listen(9999, function(){
  console.log("启动服务器成功");
});