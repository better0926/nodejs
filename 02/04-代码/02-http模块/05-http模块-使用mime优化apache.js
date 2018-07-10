/* 
  apache的功能：  
    localhost:9999/index.html  寻找index.html页面，如果有，就会返回，如果没有404
    localhost:9999/list.html  寻找index.html页面，如果有，就会返回，如果没有404
    localhost:9999/login.html  寻找index.html页面，如果有，就会返回，如果没有404
    localhost:9999/register.html  寻找index.html页面，如果有，就会返回，如果没有404

*/
var http =require("http");
var fs = require("fs");
var path = require("path");
var server = http.createServer();
var mime = require("mime");

server.on("request", function(req, res){
  //用户访问的url地址，读取pages下对应的文件即可
  var url = req.url;
  console.log(url);
  //如果css  text/css

  res.setHeader("content-type", mime.getType(url));// /index.html
  fs.readFile( path.join(__dirname, "pages", url),function(err, data){
    if(err) {
      //文件没找到
      res.writeHead(404, {
        "content-type": "text/html;charset=utf-8"
      });

      res.end("404, 你访问的页面不存在");
      return;
    }

    res.end(data);
  });

});

server.listen(9999, function(){
  console.log("ok");
})