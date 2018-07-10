var fs = require("fs");
var path = require("path");
var http = require("http");
var mime = require("mime");
var server = http.createServer();

server.on("request", function (req, res) {

  //html 
  function renderHtml(page) {
    fs.readFile(path.join(__dirname, "views", page), function (err, data) {
      res.setHeader("content-type", "text/html;charset=utf-8");
      if (err) {
        res.statusCode = 404;
        return res.end("404,你访问的页面不存在！");
      }
      res.end(data);
    });
  };

  function renderStyle(url){
    //css+img
    res.setHeader("content-type", mime.getType(url));
    fs.readFile(path.join(__dirname, url), function (err, data) {
      if (err) {
        res.writeHead(404, {
          "content-type": "text/html;charset=utf-8"
        });
        return res.end("404,你访问的页面不存在！");
      }
      res.end(data);
    });
  };

  var url = req.url;
  console.log(url);

  //根据不同的请求url 映射不同的页面
  if (url === "/" || url === "/index") {
    renderHtml("index.html");

  } else if (url.startsWith("/submit")) {
    renderHtml("submit.html");

  } else if (url.startsWith("/details")) {
    renderHtml("details.html");

  } else if (url.startsWith("/assets")) {
    renderStyle(url);

  } else {
    res.writeHead(404, {
      "content-type": "text/html;charset=utf-8"
    });
    res.end("404,你访问的页面不存在");
  }
});

server.listen(9999, function () {
  console.log("服务器启动了");

});