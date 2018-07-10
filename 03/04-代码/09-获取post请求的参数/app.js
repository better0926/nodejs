var http = require("http");
var server = http.createServer();
var fs = require("fs");
var querystring = require("querystring");
server.on("request", function(req, res) {

  //获取post请求的参数
  if(req.url === "/" || req.url === "/index.html") {
    fs.readFile("index.html", function(err, data){
      res.end(data);
    });
  }
  if(req.url.startsWith("/add")) {
    //如何获取到参数？？？？
    //在nodejs，post请求的参数是无法通过url来解析，url中并没有参数

    //post请求的参数大小是不限，会分为多次发送。
    //chunk:可以获取到一块参数（一部分参数），
    //需要把每次的chunk都拼接起来，最终才能获取到完整的参数
    var temp = "";
    req.on('data', function(chunk){
      //console.log("我触发了一个data事件");
      temp += chunk;
    });

    //如果post请求的参数发送完成了，触发一个end事件
    req.on("end", function(){
      //console.log("此时，post请求的参数就发送完成，可以获取到完整的post参数")
      //对查询字符串进行解析
      var result = querystring.parse(temp);
      console.log(result);
      res.end("ok");
    });

  }

});
server.listen(9999, function(){
  console.log("服务器启动成功");
});