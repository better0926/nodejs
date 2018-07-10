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
  
  fs.readFile(path.join(__dirname, "pages", req.url), function(err, data) {
    if(err) {
      res.statusCode = 404;
      res.end("not Found");
      return;
    }

    res.end(data);
  });

});


server.listen(9999, function () {
  console.log("服务器启动成功，请访问：http://localhost:9999");
});
