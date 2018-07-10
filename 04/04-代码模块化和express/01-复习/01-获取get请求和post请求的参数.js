var http = require("http");

var server = http.createServer();
var url = require("url");
var querystring = require("querystring");


/* 

  处理get请求的思路
    //1. 通过url可以可以获取到参数列表（拼接在url的后面）
    //2. 通过url模块去解析请求的地址req.url ，传一个true，通过query属性直接就获取到对象（参数）

  //处理post请求的思路
    //1. 注册data事件和end事件
    //2. 可以在end事件中获取到所有的post的参数，是一个字符串
    //3. 通过querystring模块进行解析，得到一个对象。
*/
server.on("request", function(req, res){

  if(req.url.startsWith("/add") && req.method === "GET") {
    var result = url.parse(req.url, true);
    console.log(result);
    res.end("ok");
  }

  if(req.url.startsWith("/add") && req.method === "POST") {
    //如何处理？
    //1. 通过url模块不行了，因为参数不在url中
    //2 西药注册两个时间
    var result = "";
    req.on("data", function(chunk) {
      result += chunk;
    });

    req.on("end", function(){
      console.log(result);
      //处理result，变成一个对象
      var temp = querystring.parse(result);
      console.log(temp);
      res.end("ok");
    })
  }

});

server.listen(9999, function(){
  console.log("服务器启动成功");
})