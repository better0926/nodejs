var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var router = require("./router");
app.use( bodyParser.urlencoded({extended:true}) );

//中间件,我整个服务器的接口全部允许跨域
app.use( function(req, res, next){
  res.set("Access-Control-Allow-Origin", "*");
  next();
});


app.use(router);


app.listen(9999, function(){
  console.log("你的hackerNews4.0的服务端已经上线了,请访问：http://localhost:9999");
})