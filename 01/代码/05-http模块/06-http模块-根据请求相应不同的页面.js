var http = require("http");
var fs = require("fs");
var path = require("path");

var server = http.createServer();

/* 
  如果用户访问的是 /index, 响应： 你正在访问的首页
  如果用户访问的是 /details， 响应：你正在访问详情页
  如果用户访问的是 /list, 响应你正在访问的是列表页
*/
server.on("request", function (req, res) {
  if (req.url === "/index" || req.url === "/") {
    //读取pages下的index.html页面
    fs.readFile( path.join(__dirname, "pages", "index.html"), function(err, data){
      if(err) {
        return console.log("读取文件失败", err);
      }
      //响应数据
      res.end(data);
    });
  }else if(req.url === "/details") {
    fs.readFile( path.join(__dirname, "pages", "details.html"), function(err, data){
      if(err) {
        return console.log("读取文件失败", err);
      }
      //响应数据
      res.end(data);
    });
  } else if(req.url === "/list") {
    fs.readFile( path.join(__dirname, "pages", "list.html"), function(err, data){
      if(err) {
        return console.log("读取文件失败", err);
      }
      //响应数据
      res.end(data);
    });
  } else {
    res.writeHead(404, {
      "content-type":"text/html;charset=utf-8"
    });
    res.end("你的页面被狗叼走了");
  }
});


server.listen(9999, function () {
  console.log("服务器启动成功，请访问：http://localhost:9999");
});
