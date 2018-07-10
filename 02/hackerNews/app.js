var http = require("http");
var fs = require("fs");
var path = require("path");
var mime = require("mime");

var server = http.createServer();



//路由： 根据不同的url，映射到不同的处理的代码
// localhost:9999/index   ====> index.html
// localhost:9999/submit  ====> submit.html
// localhost:9999/details ====> details.html
// localhost:9999/add     ====> 需要把数据给存储起来，跳到index页面
server.on("request", function (req, res) {
  //获取请求url
  var url = req.url;
  res.setHeader("content-type", mime.getType(url));

  if (url === "/" || url === "/index") {
    fs.readFile(path.join(__dirname, "views", "index.html"), function (err, data) {

      if (err) {
        res.writeHead(404, {
          "content-type": "text/html;charset=utf-8"
        });
        return res.end("404,你访问的页面不存在");
      }
      res.setHeader("content-type", "text/html;");//设置响应头，响应头必须写在end前面
      res.end(data);//结束响应状态

    });
  } else if (url === "/submit") {
    fs.readFile(path.join(__dirname, "views", "submit.html"), function (err, data) {
      res.setHeader("content-type", "text/html;charset=utf-8");
      if (err) {
        res.statusCode = 404;
          return res.end("404,你访问的页面不存在");
      }
      res.end(data);
    });

  } else if (url.indexOf("/details") != -1) {
    fs.readFile(path.join(__dirname,"views","details.html"),function(err,data){
      res.setHeader("content-type","text/html;charset=utf-8");
      if(err){
        res.statusCode = 404;
        return res.end("404,你访问的页面不存在");
      }
      res.end(data);
    });

  } else if (url.indexOf("/assets") != -1) {
    //设置响应头
    res.setHeader("content-type", mime.getType(url));
    fs.readFile(path.join(__dirname, url), function (err, data) {
      if (err) {
        res.writeHead(404, {
          "content-type": "text/html;charset=utf-8"
        });
        res.end("404,你访问的页面不存在");
      }
      res.end(data);
    });
  } else {
    //如果碰到没有处理的内容，统一返回404
    res.writeHead(404, {
      "content-type": 'text/html;charset=utf-8'
    });
    res.end("404, 你要访问的页面不存在");
  }
});


server.listen(9999, function () {
  console.log("服务器启动成功了");
});