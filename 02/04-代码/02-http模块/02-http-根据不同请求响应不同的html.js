/* 
  localhost:9999   localhost:9999/index       响应首页
  localhost:9999/login  响应登录页
  localhost:9999/list   响应列表页

  其他url     响应404
*/

var http = require("http");
var fs = require("fs");
var path = require("path");

var server = http.createServer();




//对于服务器来说，url仅仅是一个标识
server.on("request", function (req, res) {

  //获取到请求的地址
  var url = req.url;
  if (url === "/" || url === "/index.do") {
    //读取index.html进行响应
    fs.readFile(path.join(__dirname, "pages", "index.html"), function (err, data) {
      if (err) {
        return console.log("读取文件失败了");
      }
      res.end(data);
    });
  } else if (url === "/list") {
    //读取index.html进行响应
    fs.readFile(path.join(__dirname, "pages", "list.html"), function (err, data) {
      if (err) {
        return console.log("读取文件失败了");
      }
      res.end(data);
    });
  } else if (url === "/login") {
    //读取index.html进行响应
    fs.readFile(path.join(__dirname, "pages", "login.html"), function (err, data) {
      if (err) {
        return console.log("读取文件失败了");
      }
      res.end(data);
    });
  } else {
    res.statusCode = 404;
    res.end("404");
  }

});

server.listen(9999, function () {
  console.log("ok");
});