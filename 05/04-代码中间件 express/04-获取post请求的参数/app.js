var express = require("express");
var bodyParser = require('body-parser');

var app = express();

//使用中间件， 处理的结果会给下一个
//bodyParser是一个对象， 调用urlencode方法，会返回一个中间件
//console.log(bodyParser.urlencoded());
//给req增加了一个属性  req.body: 值就是post请求的参数
//extended:true 会使用qs库   extended:false: 会使用querystring核心库
//生成一个中间件，专门用于处理json属性
//app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended:true}) ); 


app.get("/add", function(req, res){
  //get请求的参数
  console.log("get请求的参数：", req.query);
  res.send("get结束");
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
  步骤1： 获取到post请求的参数   req.body:undefined

  1. 安装body-parser  npm install body-parser
  2. 导入  var bodyParser = requrie("body-parser")
  3. 使用这个中间： app.use( bodyParser.urlencoded({extended:true}) )
  4. 使用了中间件之后， 后续的所有的req中都会多出来一个属性，req.body包含了post请求的数据


*/