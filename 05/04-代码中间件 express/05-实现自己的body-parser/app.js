var express = require("express");
var app = express();
var querystring = require("querystring");



app.use(function(req, res, next){
  //给req增加body属性
  var result = "";
  req.on("data", function(chunk){
    result += chunk;
  });

  req.on("end", function(){
    //对参数进行处理，给req.body设置
    req.body = querystring.parse(result);
    next();
  })
 
});


app.post("/add", function(req, res){
  //通过req.body就能够获取到post请求的参数
  console.log(req.body);
  res.send("你访问了首页");
});




app.listen(9999, function(){
  console.log("ok");
});


/* 
  在express中如何获取get请求的参数： req.query


  //需要先使用 body-parser的中间件，，，，，会给req增加一个body属性
  在express中如何获取post请求的参数： req.body

*/