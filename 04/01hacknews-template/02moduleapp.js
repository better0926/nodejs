var http = require("http");
var router = require("./router");
var extend = require("./extend");
var server = http.createServer();


server.on("request", function (req, res) {

  extend(req, res);

  router(req,res);
});

server.listen(9999, function () {
  console.log("服务器启动了");
});


